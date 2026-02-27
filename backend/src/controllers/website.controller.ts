import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
});

// Helper function to get website URL from environment variables
const getWebsiteUrl = (slug: string): string => {
  const envKey = `WEBSITE_URL_${slug}`;  
  const envUrl = process.env[envKey];
  console.log(`🔗 Looking for env var ${envKey}:`, envUrl);
  return envUrl || '';
};

// Helper function to get all domain mappings for search
const getAllDomainMappings = (): { [slug: string]: string } => {
  const mappings: { [slug: string]: string } = {};
  // Get all environment variables that start with WEBSITE_URL_
  Object.keys(process.env).forEach(key => {
    if (key.startsWith('WEBSITE_URL_')) {
      const slug = key.replace('WEBSITE_URL_', '');
      mappings[slug] = process.env[key] || '';
    }
  });
  return mappings;
};

// Get all websites
export const getAllWebsites = async (req: Request, res: Response) => {
  try {
    console.log('🔍 Fetching all websites...');
    
    // Extract query parameters
    const { search, page = 1, limit = 50 } = req.query;
    const searchTerm = search as string;
    const pageNumber = parseInt(page as string);
    const limitNumber = parseInt(limit as string);
    
    // Test database connection first
    await prisma.$connect();
    
    // Build where clause for search
    const whereClause: any = {};
    if (searchTerm) {
     
      const cleanSearchTerm = searchTerm
        .replace(/^https?:\/\//, '') 
        .replace(/^www\./, '') 
        .replace(/\/$/, '') 
        .trim();
      
      // Get all domain mappings from environment variables
      const domainMappings = getAllDomainMappings();
      console.log('🌍 Domain mappings:', domainMappings);
      
      // Find slugs that match the search term in their mapped domains
      const matchingSlugs: string[] = [];
      Object.entries(domainMappings).forEach(([slug, domain]) => {
        const cleanDomain = domain
          .replace(/^https?:\/\//, '')
          .replace(/^www\./, '')
          .replace(/\/$/, '')
          .toLowerCase();
        
        if (cleanDomain.includes(searchTerm.toLowerCase()) || 
            cleanDomain.includes(cleanSearchTerm.toLowerCase()) ||
            searchTerm.toLowerCase().includes(cleanDomain) ||
            cleanSearchTerm.toLowerCase().includes(cleanDomain)) {
          matchingSlugs.push(slug);
          console.log(`✅ Found matching slug '${slug}' for domain '${domain}'`);
        }
      });
      
      const searchConditions: any[] = [
        { name: { contains: searchTerm, mode: 'insensitive' } },
        { name: { contains: cleanSearchTerm, mode: 'insensitive' } },
        { slug: { contains: searchTerm, mode: 'insensitive' } },
        { slug: { contains: cleanSearchTerm, mode: 'insensitive' } },
        { domain: { contains: searchTerm, mode: 'insensitive' } },
        { domain: { contains: cleanSearchTerm, mode: 'insensitive' } },
        // Also search for partial matches
        { domain: { contains: searchTerm.split('.')[0], mode: 'insensitive' } }
      ];
      
      // Add slug-based search for websites with matching domain mappings
      if (matchingSlugs.length > 0) {
        searchConditions.push({ slug: { in: matchingSlugs } });
      }
      
      whereClause.OR = searchConditions;
      
      
    }

    // First, let's see what data we have in the database
    const allWebsites = await prisma.website.findMany({
      select: { id: true, name: true, slug: true, domain: true }
    });
    

    
    const totalCount = await prisma.website.count({ where: whereClause });

    // Calculate pagination
    const totalPages = Math.ceil(totalCount / limitNumber);
    const skip = (pageNumber - 1) * limitNumber;
    
    console.log('🔢 Total count found:', totalCount);
    
    const websites = await prisma.website.findMany({
      where: whereClause,
      include: {
        _count: {
          select: { pages: true }
        }
      },
      orderBy: { createdAt: 'asc' },
      skip,
      take: limitNumber
    });
    
    
    if (websites.length > 0) {
      console.log('📄 First result:', JSON.stringify(websites[0], null, 2));
    }

    // Fetch home page hero image for each website
    const enrichedWebsites = await Promise.all(websites.map(async website => {
      let bannerImage = null;
      const homePage = await prisma.page.findFirst({
        where: {
          websiteId: website.id,
          slug: 'home',
          status: 'PUBLISHED'
        },
        include: {
          sections: {
            orderBy: { order: 'asc' }
          }
        }
      });
      if (homePage && homePage.sections && homePage.sections.length > 0) {
        const heroSection = homePage.sections.find(
          section => section.type === 'hero' && section.imageUrl
        );
        if (heroSection) bannerImage = heroSection.imageUrl;
      }
      return {
        ...website,
        domain: getWebsiteUrl(website.slug) || website.domain || `${website.slug}.digitechai.in`,
        bannerImage,
      };
    }));

    console.log(`✅ Found ${websites.length} websites (${totalCount} total, page ${pageNumber}/${totalPages})`);

    res.json({
      success: true,
      data: { 
        websites: enrichedWebsites,
        pagination: {
          currentPage: pageNumber,
          totalPages,
          totalCount,
          limit: limitNumber,
          hasNextPage: pageNumber < totalPages,
          hasPrevPage: pageNumber > 1
        }
      }
    });
  } catch (error: any) {
    console.error('❌ Error fetching websites:', error);
    
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch websites',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// Get website by ID
export const getWebsiteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const website = await prisma.website.findUnique({
      where: { id },
      include: {
        pages: {
          include: {
            sections: {
              orderBy: { order: 'asc' }
            }
          }
        }
      }
    });

    if (!website) {
      return res.status(404).json({
        success: false,
        error: 'Website not found'
      });
    }

    // Enrich website with actual URL from environment variables
    const enrichedWebsite = {
      ...website,
      domain: getWebsiteUrl(website.slug) || website.domain
    };

    res.json({
      success: true,
      data: { website: enrichedWebsite }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create website
export const createWebsite = async (req: AuthRequest, res: Response) => {
  try {
    const { name, slug, domain, logo, themeConfig } = req.body;

    if (!name || !slug) {
      return res.status(400).json({
        success: false,
        error: 'Name and slug are required'
      });
    }

    const website = await prisma.website.create({
      data: {
        name,
        slug,
        domain,
        logo,
        themeConfig
      }
    });

    // Log the action
    await prisma.auditLog.create({
      data: {
        websiteId: website.id,
        userId: req.user!.id,
        action: 'website_created',
        details: { websiteName: name }
      }
    });

    res.status(201).json({
      success: true,
      data: { website }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update website
export const updateWebsite = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { name, slug, domain, logo, themeConfig, phone, email, address, workingHours, isActive, isAdminEnabled } = req.body;

    const website = await prisma.website.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(slug && { slug }),
        ...(domain !== undefined && { domain }),
        ...(logo !== undefined && { logo }),
        ...(themeConfig !== undefined && { themeConfig }),
        ...(phone !== undefined && { phone }),
        ...(email !== undefined && { email }),
        ...(address !== undefined && { address }),
        ...(workingHours !== undefined && { workingHours }),
        ...(isActive !== undefined && { isActive }),
        ...(isAdminEnabled !== undefined && { isAdminEnabled }),
      }
    });

    // Log the action
    await prisma.auditLog.create({
      data: {
        websiteId: website.id,
        userId: req.user!.id,
        action: 'website_updated',
        details: { websiteName: website.name }
      }
    });

    res.json({
      success: true,
      data: { website }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Delete website
export const deleteWebsite = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const website = await prisma.website.delete({
      where: { id }
    });

    // Log the action
    await prisma.auditLog.create({
      data: {
        userId: req.user!.id,
        action: 'website_deleted',
        details: { websiteName: website.name }
      }
    });

    res.json({
      success: true,
      message: 'Website deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
