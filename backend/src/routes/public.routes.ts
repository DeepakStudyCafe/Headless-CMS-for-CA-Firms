import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();


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


// ─── StudyCafe "What's New" – WordPress proxy ─────────────────────────────
const WP_BASE = 'https://studycafe.in/wp-json/wp/v2'
const WP_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; HeadlessCMS/1.0; +https://digitechai.in)',
  'Accept': 'application/json',
}


function normalisePost(p: any) {
  
  const mediaArr = p._embedded?.['wp:featuredmedia']
  const media = Array.isArray(mediaArr) && mediaArr.length > 0 && typeof mediaArr[0]?.source_url === 'string'
    ? mediaArr[0]
    : null
  const featuredImage =
    media?.source_url ||
    p.yoast_head_json?.og_image?.[0]?.url ||
    p.featured_media_src_url ||
    ''

  const author = p._embedded?.['author']?.[0]
  return {
    id: p.id,
    date: p.date,
    slug: p.slug,
    title: p.title?.rendered ?? '',
    excerpt: p.excerpt?.rendered ?? '',
    content: p.content?.rendered ?? '',
    link: p.link ?? '',
    authorName: author?.name ?? '',
    featuredImage,
  }
}

// GET /public/whats-new/posts?per_page=20
router.get('/whats-new/posts', async (req, res) => {
  try {
    const perPage = Math.min(Number(req.query.per_page) || 20, 50)
    const url = `${WP_BASE}/posts?per_page=${perPage}&orderby=date&order=desc&_embed=1`
    const wpRes = await fetch(url, { headers: WP_HEADERS })
    if (!wpRes.ok) {
      return res.status(wpRes.status).json({ success: false, error: 'WP API error' })
    }
    const posts = (await wpRes.json())
      .map(normalisePost)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    res.json({ success: true, data: { posts } })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET /public/whats-new/post/by-id/:id
router.get('/whats-new/post/by-id/:id', async (req, res) => {
  try {
    const url = `${WP_BASE}/posts/${req.params.id}?_embed=1`
    const wpRes = await fetch(url, { headers: WP_HEADERS })
    if (!wpRes.ok) return res.status(404).json({ success: false, error: 'Post not found' })
    const post = normalisePost(await wpRes.json())
    res.json({ success: true, data: { post } })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET /public/whats-new/post/:slug   (must be AFTER /by-id route)
router.get('/whats-new/post/:slug', async (req, res) => {
  try {
    const url = `${WP_BASE}/posts?slug=${encodeURIComponent(req.params.slug)}&_embed=1`
    const wpRes = await fetch(url, { headers: WP_HEADERS })
    if (!wpRes.ok) return res.status(404).json({ success: false, error: 'Post not found' })
    const arr = await wpRes.json()
    if (!Array.isArray(arr) || arr.length === 0) {
      return res.status(404).json({ success: false, error: 'Post not found' })
    }
    res.json({ success: true, data: { post: normalisePost(arr[0]) } })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET /public/whats-new/search?q=keyword&per_page=10
router.get('/whats-new/search', async (req, res) => {
  try {
    const q = String(req.query.q || '').trim()
    if (!q) return res.json({ success: true, data: { posts: [] } })
    const perPage = Math.min(Number(req.query.per_page) || 10, 20)
    const url = `${WP_BASE}/posts?search=${encodeURIComponent(q)}&per_page=${perPage}&orderby=date&order=desc&_embed=1`
    const wpRes = await fetch(url, { headers: WP_HEADERS })
    if (!wpRes.ok) return res.status(wpRes.status).json({ success: false, error: 'WP API error' })
    const posts = (await wpRes.json())
      .map(normalisePost)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    res.json({ success: true, data: { posts } })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router;

