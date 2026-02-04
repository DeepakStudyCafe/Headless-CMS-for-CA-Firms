import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';

const prisma = new PrismaClient();

// Get pages by website
export const getPagesByWebsite = async (req: Request, res: Response) => {
  try {
    const { websiteId } = req.params;
    const { status } = req.query;

    const pages = await prisma.page.findMany({
      where: {
        websiteId,
        ...(status && { status: status as any })
      },
      include: {
        sections: {
          orderBy: { order: 'asc' }
        },
        _count: {
          select: { sections: true }
        }
      },
      orderBy: { createdAt: 'asc' }
    });

    res.json({
      success: true,
      data: { pages }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get page by ID
export const getPageById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const page = await prisma.page.findUnique({
      where: { id },
      include: {
        website: true,
        sections: {
          orderBy: { order: 'asc' }
        }
      }
    });

    if (!page) {
      return res.status(404).json({
        success: false,
        error: 'Page not found'
      });
    }

    res.json({
      success: true,
      data: { page }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create page
export const createPage = async (req: AuthRequest, res: Response) => {
  try {
    const { websiteId, slug, title, status } = req.body;

    if (!websiteId || !slug || !title) {
      return res.status(400).json({
        success: false,
        error: 'Website ID, slug, and title are required'
      });
    }

    const page = await prisma.page.create({
      data: {
        websiteId,
        slug,
        title,
        status: status || 'DRAFT'
      },
      include: {
        sections: true
      }
    });

    // Create revision
    await prisma.revision.create({
      data: {
        pageId: page.id,
        userId: req.user!.id,
        action: 'created',
        data: { title, slug }
      }
    });

    res.status(201).json({
      success: true,
      data: { page }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update page
export const updatePage = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, slug, status } = req.body;

    const page = await prisma.page.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(status && { status })
      },
      include: {
        sections: {
          orderBy: { order: 'asc' }
        }
      }
    });

    // Create revision
    await prisma.revision.create({
      data: {
        pageId: page.id,
        userId: req.user!.id,
        action: 'updated',
        data: { title, slug, status }
      }
    });

    res.json({
      success: true,
      data: { page }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Delete page
export const deletePage = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.page.delete({
      where: { id }
    });

    res.json({
      success: true,
      message: 'Page deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Publish page
export const publishPage = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const page = await prisma.page.update({
      where: { id },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date()
      },
      include: {
        website: true,
        sections: true
      }
    });

    // Create revision
    await prisma.revision.create({
      data: {
        pageId: page.id,
        userId: req.user!.id,
        action: 'published',
        data: { publishedAt: new Date() }
      }
    });

    // Log the action
    await prisma.auditLog.create({
      data: {
        websiteId: page.websiteId,
        userId: req.user!.id,
        action: 'page_published',
        details: { pageTitle: page.title, pageSlug: page.slug }
      }
    });

    res.json({
      success: true,
      data: { page },
      message: 'Page published successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
