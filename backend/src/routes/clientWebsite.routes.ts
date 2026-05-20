import { Router } from 'express';
import {
  getAllClientWebsites,
  createClientWebsite,
  updateClientWebsite,
  deleteClientWebsite
} from '../controllers/clientWebsite.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

// Routes for ClientWebsites (the add website admin panel)
router.get('/', authenticate, getAllClientWebsites);
router.post('/', authenticate, createClientWebsite);
router.put('/:id', authenticate, updateClientWebsite);
router.delete('/:id', authenticate, authorize('SUPER_ADMIN'), deleteClientWebsite);

export default router;