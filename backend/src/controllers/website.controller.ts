import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';

const prisma = new PrismaClient();

// Get all websites
export const getAllWebsites = async (req: Request, res: Response) => {
  try {
    const websites = await prisma.website.findMany({
      include: {
        _count: {
          select: { pages: true }
        }
      },
      orderBy: { createdAt: 'asc' }
    });

    res.json({
      success: true,
      data: { websites }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
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
