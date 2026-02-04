import { Router } from 'express';
import { getAnalytics, trackVisit } from '../controllers/analytics.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/:websiteId', authenticate, getAnalytics);
router.post('/track', trackVisit);

export default router;
