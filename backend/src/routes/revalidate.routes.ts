import { Router } from 'express';
import { revalidateWebsite, revalidatePage } from '../controllers/revalidate.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('/:websiteId', authenticate, revalidateWebsite);
router.post('/page/:pageId', authenticate, revalidatePage);

export default router;
