import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Get website by slug (public)
router.get('/websites/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const website = await prisma.website.findUnique({
      where: { slug },
      include: {
        pages: {
          where: { status: 'PUBLISHED' },
          include: {
            sections: {
              orderBy: { order: 'asc' }
            }
          },
          orderBy: { createdAt: 'asc' }
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
});

// Lightweight status check — used by firm website middleware (no auth required)
router.get('/website-status/:slug', async (req, res) => {
  try {
    const { slug } = req.params
    const website = await prisma.website.findUnique({
      where: { slug },
      select: { isActive: true, isAdminEnabled: true }
    })
    if (!website) {
      return res.status(404).json({ success: false, error: 'Website not found' })
    }
    res.json({ success: true, data: { isActive: website.isActive, isAdminEnabled: website.isAdminEnabled } })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
});

router.get('/websites', async (req, res) => {
  try {
    const websites = await prisma.website.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        logo: true,
        createdAt: true
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
});

// Get page by website slug and page slug (public)
router.get('/pages/:websiteSlug/:pageSlug', async (req, res) => {
  try {
    const { websiteSlug, pageSlug } = req.params;

    const website = await prisma.website.findUnique({
      where: { slug: websiteSlug }
    });

    if (!website) {
      return res.status(404).json({
        success: false,
        error: 'Website not found'
      });
    }

    const page = await prisma.page.findFirst({
      where: {
        websiteId: website.id,
        slug: pageSlug,
        status: 'PUBLISHED'
      },
      include: {
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
});

// Get website info only (for header/footer data)
router.get('/website/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const website = await prisma.website.findUnique({
      where: { slug },
      select: {
        id: true,
        name: true,
        slug: true,
        domain: true,
        logo: true,
        themeConfig: true,
        phone: true,
        email: true,
        address: true,
        workingHours: true
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
});

export default router;
