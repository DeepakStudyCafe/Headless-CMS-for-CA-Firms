import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import {
  siteAdminLogin,
  siteAdminLogout,
  changePassword,
  getSiteAdminInfo,
  upsertSiteAdmin,
  getMyWebsite,
  updateMyWebsite,
  getMyPages,
  getMyPage,
  updateMySection,
  publishMyPage,
  uploadMyImage,
} from '../controllers/siteAdmin.controller';
import { siteAdminAuth } from '../middleware/siteAdminAuth';
import { authenticate, authorize } from '../middleware/auth';
import { upload } from '../config/multer';

// Tighter rate-limit specifically for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { success: false, error: 'Too many login attempts. Try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const router = Router();

// ─── Auth (Public) ─────────────────────────────────────────────────────────────
router.post('/login', loginLimiter, siteAdminLogin);
router.post('/logout', siteAdminLogout);

// ─── Auth (Site admin protected) ───────────────────────────────────────────────
router.post('/change-password', siteAdminAuth, changePassword);

// ─── Credential management (Central admin only) ────────────────────────────────
router.get('/credentials/:websiteId', authenticate, getSiteAdminInfo);
router.put(
  '/credentials/:websiteId',
  authenticate,
  authorize('SUPER_ADMIN', 'ADMIN'),
  upsertSiteAdmin
);

// ─── Website info (Site admin, scoped to token websiteId) ────────────────────────
router.get('/website', siteAdminAuth, getMyWebsite);
router.put('/website', siteAdminAuth, updateMyWebsite);

// ─── Content management (Site admin, scoped to token websiteId) ────────────────
router.get('/content/pages', siteAdminAuth, getMyPages);
router.get('/content/pages/:pageId', siteAdminAuth, getMyPage);
router.put('/content/sections/:sectionId', siteAdminAuth, updateMySection);
router.post('/content/pages/:pageId/publish', siteAdminAuth, publishMyPage);
router.post('/content/upload', siteAdminAuth, upload.single('image'), uploadMyImage);

export default router;
