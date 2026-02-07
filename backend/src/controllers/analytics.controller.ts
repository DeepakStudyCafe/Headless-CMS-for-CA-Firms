import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get analytics for a website
export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const { websiteId } = req.params;
    const { startDate, endDate } = req.query;

    const analytics = await prisma.analytics.findMany({
      where: {
        websiteId,
        ...(startDate && endDate && {
          date: {
            gte: new Date(startDate as string),
            lte: new Date(endDate as string)
          }
        })
      },
      orderBy: { date: 'desc' }
    });

    // Aggregate data
    const totalVisits = analytics.reduce((sum: number, a: any) => sum + a.visits, 0);
    const pageVisits = analytics.reduce((acc: Record<string, number>, a: any) => {
      acc[a.pageSlug] = (acc[a.pageSlug] || 0) + a.visits;
      return acc;
    }, {} as Record<string, number>);

    res.json({
      success: true,
      data: {
        analytics,
        summary: {
          totalVisits,
          pageVisits
        }
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Track a visit (public endpoint)
export const trackVisit = async (req: Request, res: Response) => {
  try {
    const { websiteId, pageSlug } = req.body;

    if (!websiteId || !pageSlug) {
      return res.status(400).json({
        success: false,
        error: 'Website ID and page slug are required'
      });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Upsert analytics record
    await prisma.analytics.upsert({
      where: {
        websiteId_pageSlug_date: {
          websiteId,
          pageSlug,
          date: today
        }
      },
      update: {
        visits: {
          increment: 1
        }
      },
      create: {
        websiteId,
        pageSlug,
        visits: 1,
        date: today
      }
    });

    res.json({
      success: true,
      message: 'Visit tracked'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
