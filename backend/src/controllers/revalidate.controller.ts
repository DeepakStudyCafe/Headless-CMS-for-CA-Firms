import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';

const prisma = new PrismaClient();

// Revalidate entire website
export const revalidateWebsite = async (req: AuthRequest, res: Response) => {
  try {
    const { websiteId } = req.params;

    const website = await prisma.website.findUnique({
      where: { id: websiteId },
      include: {
        pages: {
          where: { status: 'PUBLISHED' }
        }
      }
    });

    if (!website) {
      return res.status(404).json({
        success: false,
        error: 'Website not found'
      });
    }

    // In production, this would trigger ISR revalidation
    // For now, we'll just log the action
    await prisma.auditLog.create({
      data: {
        websiteId: website.id,
        userId: req.user!.id,
        action: 'website_revalidated',
        details: { 
          websiteName: website.name,
          pagesRevalidated: website.pages.length 
        }
      }
    });

    res.json({
      success: true,
      message: 'Website revalidation triggered',
      data: {
        website: website.name,
        pagesRevalidated: website.pages.length
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Revalidate specific page
export const revalidatePage = async (req: AuthRequest, res: Response) => {
  try {
    const { pageId } = req.params;

    const page = await prisma.page.findUnique({
      where: { id: pageId },
      include: {
        website: true
      }
    });

    if (!page) {
      return res.status(404).json({
        success: false,
        error: 'Page not found'
      });
    }

    // In production, this would trigger ISR revalidation for specific page
    await prisma.auditLog.create({
      data: {
        websiteId: page.websiteId,
        userId: req.user!.id,
        action: 'page_revalidated',
        details: { 
          pageTitle: page.title,
          pageSlug: page.slug 
        }
      }
    });

    res.json({
      success: true,
      message: 'Page revalidation triggered',
      data: {
        page: page.title,
        slug: page.slug,
        website: page.website.name
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
