import { Router } from 'express';
import {
  getAllWebsites,
  getWebsiteById,
  createWebsite,
  updateWebsite,
  deleteWebsite
} from '../controllers/website.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, getAllWebsites);
router.get('/:id', authenticate, getWebsiteById);
router.post('/', authenticate, authorize('SUPER_ADMIN', 'ADMIN'), createWebsite);
router.put('/:id', authenticate, authorize('SUPER_ADMIN', 'ADMIN'), updateWebsite);
router.delete('/:id', authenticate, authorize('SUPER_ADMIN'), deleteWebsite);

export default router;
