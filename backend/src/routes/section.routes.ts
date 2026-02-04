import { Router } from 'express';
import {
  getSectionsByPage,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
  reorderSections
} from '../controllers/section.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/page/:pageId', getSectionsByPage);
router.get('/:id', getSectionById);
router.post('/', authenticate, createSection);
router.put('/:id', authenticate, updateSection);
router.delete('/:id', authenticate, deleteSection);
router.post('/reorder', authenticate, reorderSections);

export default router;
