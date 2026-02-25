import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';
import { SiteAdminRequest } from '../middleware/siteAdminAuth';

const prisma = new PrismaClient({ log: ['warn', 'error'], errorFormat: 'pretty' });

const MAX_FAILED_ATTEMPTS = 5;
const LOCK_DURATION_MS = 15 * 60 * 1000; 


export const siteAdminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password, websiteSlug } = req.body;

    if (!email || !password || !websiteSlug) {
      return res.status(400).json({
        success: false,
        error: 'email, password and websiteSlug are required',
      });
    }

    // Resolve website by slug
    const website = await prisma.website.findUnique({ where: { slug: websiteSlug } });
    if (!website) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const admin = await (prisma as any).siteAdmin.findUnique({ where: { websiteId: website.id } });
    if (!admin || admin.email !== email.toLowerCase().trim()) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    // Check lock
    if (admin.lockedUntil && admin.lockedUntil > new Date()) {
      const mins = Math.ceil((admin.lockedUntil.getTime() - Date.now()) / 60000);
      return res.status(429).json({
        success: false,
        error: `Account locked due to too many failed attempts. Try again in ${mins} minute(s).`,
      });
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) {
      const failed = admin.failedAttempts + 1;
      await (prisma as any).siteAdmin.update({
        where: { id: admin.id },
        data: {
          failedAttempts: failed,
          ...(failed >= MAX_FAILED_ATTEMPTS
            ? { lockedUntil: new Date(Date.now() + LOCK_DURATION_MS) }
            : {}),
        },
      });
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    // Reset counters on success
    await (prisma as any).siteAdmin.update({
      where: { id: admin.id },
      data: { failedAttempts: 0, lockedUntil: null },
    });

    const jwtSecret = process.env.JWT_SECRET!;
    const jwtExpiry = String(process.env.JWT_EXPIRES_IN || '7d');
    const token = (jwt as any).sign(
      {
        siteAdminId: admin.id,
        websiteId: website.id,
        websiteSlug: website.slug,
        type: 'site_admin',
      },
      jwtSecret,
      { expiresIn: jwtExpiry }
    );

    const isProd = process.env.NODE_ENV === 'production';
    res.cookie('site_admin_token', token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/',
      ...(isProd && process.env.COOKIE_DOMAIN ? { domain: process.env.COOKIE_DOMAIN } : {}),
    });

    res.json({
      success: true,
      data: {
        token,
        websiteId: website.id,
        websiteSlug: website.slug,
        websiteName: website.name,
        email: admin.email,
      },
    });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

/** POST /api/site-admin/logout */
export const siteAdminLogout = (_req: Request, res: Response) => {
  res.clearCookie('site_admin_token', { path: '/' });
  res.json({ success: true, message: 'Logged out successfully' });
};

/** POST /api/site-admin/change-password  — requires siteAdminAuth */
export const changePassword = async (req: SiteAdminRequest, res: Response) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        error: 'currentPassword and newPassword are required',
      });
    }
    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        error: 'New password must be at least 8 characters',
      });
    }

    const admin = await (prisma as any).siteAdmin.findUnique({ where: { id: req.siteAdmin!.id } });
    if (!admin) return res.status(404).json({ success: false, error: 'Not found' });

    const isValid = await bcrypt.compare(currentPassword, admin.passwordHash);
    if (!isValid) {
      return res.status(401).json({ success: false, error: 'Current password is incorrect' });
    }

    const hash = await bcrypt.hash(newPassword, 12);
    await (prisma as any).siteAdmin.update({
      where: { id: admin.id },
      data: { passwordHash: hash, failedAttempts: 0, lockedUntil: null },
    });

    // Invalidate cookie after password change
    res.clearCookie('site_admin_token', { path: '/' });
    res.json({ success: true, message: 'Password changed successfully. Please log in again.' });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

// ─── Central-admin credential management ─────────────────────────────────────

/** GET /api/site-admin/credentials/:websiteId  — central admin only */
export const getSiteAdminInfo = async (req: AuthRequest, res: Response) => {
  try {
    const { websiteId } = req.params;
    const admin = await (prisma as any).siteAdmin.findUnique({
      where: { websiteId },
      select: { id: true, email: true, websiteId: true, createdAt: true, updatedAt: true },
    });
    if (!admin) {
      return res.status(404).json({ success: false, error: 'No site admin configured yet' });
    }
    res.json({ success: true, data: { siteAdmin: admin } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

/** PUT /api/site-admin/credentials/:websiteId  — central admin only */
export const upsertSiteAdmin = async (req: AuthRequest, res: Response) => {
  try {
    const { websiteId } = req.params;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'email and password are required' });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        error: 'Password must be at least 8 characters',
      });
    }

    const website = await prisma.website.findUnique({ where: { id: websiteId } });
    if (!website) return res.status(404).json({ success: false, error: 'Website not found' });

    const hash = await bcrypt.hash(password, 12);
    const admin = await (prisma as any).siteAdmin.upsert({
      where: { websiteId },
      create: { websiteId, email: email.toLowerCase().trim(), passwordHash: hash },
      update: {
        email: email.toLowerCase().trim(),
        passwordHash: hash,
        failedAttempts: 0,
        lockedUntil: null,
      },
    });

    res.json({
      success: true,
      data: { id: admin.id, email: admin.email, websiteId: admin.websiteId },
    });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

// ─── Website info (scoped to token's websiteId) ────────────────────────────────

/** GET /api/site-admin/website  — get this website's info (for footer editing etc.) */
export const getMyWebsite = async (req: SiteAdminRequest, res: Response) => {
  try {
    const website = await prisma.website.findUnique({
      where: { id: req.siteAdmin!.websiteId },
      select: { id: true, name: true, slug: true, phone: true, email: true, address: true, workingHours: true, themeConfig: true },
    });
    if (!website) return res.status(404).json({ success: false, error: 'Website not found' });
    res.json({ success: true, data: { website } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

/** PUT /api/site-admin/website  — update limited website fields (footer, contact) */
export const updateMyWebsite = async (req: SiteAdminRequest, res: Response) => {
  try {
    const { phone, email, address, workingHours, footerContent, contactContent } = req.body;

    const current = await prisma.website.findUnique({ where: { id: req.siteAdmin!.websiteId } });
    if (!current) return res.status(404).json({ success: false, error: 'Website not found' });

    const currentTheme = (current.themeConfig as any) || {};
    const hasThemeUpdate = footerContent !== undefined || contactContent !== undefined;
    const newThemeConfig = {
      ...currentTheme,
      ...(footerContent !== undefined ? { footerContent } : {}),
      ...(contactContent !== undefined ? { contactContent } : {}),
    };

    const website = await prisma.website.update({
      where: { id: req.siteAdmin!.websiteId },
      data: {
        ...(phone !== undefined ? { phone } : {}),
        ...(email !== undefined ? { email } : {}),
        ...(address !== undefined ? { address } : {}),
        ...(workingHours !== undefined ? { workingHours } : {}),
        ...(hasThemeUpdate ? { themeConfig: newThemeConfig } : {}),
      },
    });
    res.json({ success: true, data: { website } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

// ─── Content management (scoped to token's websiteId) ─────────────────────────

/** GET /api/site-admin/content/pages  — list all pages of this website */
export const getMyPages = async (req: SiteAdminRequest, res: Response) => {
  try {
    const pages = await prisma.page.findMany({
      where: { websiteId: req.siteAdmin!.websiteId },
      include: { _count: { select: { sections: true } } },
      orderBy: { createdAt: 'asc' },
    });
    res.json({ success: true, data: { pages } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

/** GET /api/site-admin/content/pages/:pageId  — get page + sections */
export const getMyPage = async (req: SiteAdminRequest, res: Response) => {
  try {
    const { pageId } = req.params;
    const page = await prisma.page.findUnique({
      where: { id: pageId },
      include: { sections: { orderBy: { order: 'asc' } } },
    });
    // Ownership check: page must belong to the token's websiteId
    if (!page || page.websiteId !== req.siteAdmin!.websiteId) {
      return res.status(404).json({ success: false, error: 'Page not found' });
    }
    res.json({ success: true, data: { page } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

/** PUT /api/site-admin/content/sections/:sectionId  — update section content/image */
export const updateMySection = async (req: SiteAdminRequest, res: Response) => {
  try {
    const { sectionId } = req.params;
    const { imageUrl, textContent } = req.body;

    // Load section and verify it belongs to this website via its page
    const section = await prisma.section.findUnique({
      where: { id: sectionId },
      include: { page: true },
    });
    if (!section || section.page.websiteId !== req.siteAdmin!.websiteId) {
      return res.status(404).json({ success: false, error: 'Section not found' });
    }

    const updated = await prisma.section.update({
      where: { id: sectionId },
      data: {
        ...(imageUrl !== undefined ? { imageUrl } : {}),
        ...(textContent !== undefined ? { textContent } : {}),
      },
    });
    res.json({ success: true, data: { section: updated } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

/** POST /api/site-admin/content/pages/:pageId/publish */
export const publishMyPage = async (req: SiteAdminRequest, res: Response) => {
  try {
    const { pageId } = req.params;
    const page = await prisma.page.findUnique({ where: { id: pageId } });
    if (!page || page.websiteId !== req.siteAdmin!.websiteId) {
      return res.status(404).json({ success: false, error: 'Page not found' });
    }
    const updated = await prisma.page.update({
      where: { id: pageId },
      data: { status: 'PUBLISHED', publishedAt: new Date() },
    });
    res.json({ success: true, data: { page: updated } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};

/** POST /api/site-admin/content/upload  — image upload for site admin */
export const uploadMyImage = async (req: SiteAdminRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ success: true, data: { imageUrl } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
};
