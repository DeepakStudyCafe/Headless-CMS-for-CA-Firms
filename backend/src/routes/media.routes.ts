import { Router } from 'express';
import { uploadImage, deleteImage } from '../controllers/media.controller';
import { authenticate } from '../middleware/auth';
import { upload } from '../config/multer';

const router = Router();

router.post('/upload', authenticate, upload.single('image'), uploadImage);
router.delete('/:filename', authenticate, deleteImage);

export default router;
