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
  return process.env[envKey] || '';
};

// Get all websites
export const getAllWebsites = async (req: Request, res: Response) => {
  try {
    console.log('🔍 Fetching all websites...');
    
    // Test database connection first
    await prisma.$connect();
    
    const websites = await prisma.website.findMany({
      include: {
        _count: {
          select: { pages: true }
        }
      },
      orderBy: { createdAt: 'asc' }
    });

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
        domain: getWebsiteUrl(website.slug) || website.domain,
        bannerImage,
      };
    }));

    console.log(`✅ Found ${websites.length} websites`);

    res.json({
      success: true,
      data: { websites: enrichedWebsites }
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
    const { name, slug, domain, logo, themeConfig, phone, email, address, workingHours } = req.body;

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
        ...(workingHours !== undefined && { workingHours })
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
