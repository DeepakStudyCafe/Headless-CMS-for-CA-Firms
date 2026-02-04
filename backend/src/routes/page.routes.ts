import { Router } from 'express';
import {
  getPagesByWebsite,
  getPageById,
  createPage,
  updatePage,
  deletePage,
  publishPage
} from '../controllers/page.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.get('/website/:websiteId', getPagesByWebsite);
router.get('/:id', getPageById);
router.post('/', authenticate, createPage);
router.put('/:id', authenticate, updatePage);
router.delete('/:id', authenticate, authorize('SUPER_ADMIN', 'ADMIN'), deletePage);
router.post('/:id/publish', authenticate, publishPage);

export default router;
