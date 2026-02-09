import { Router } from 'express';
import { login, register, getProfile, logout, verifyToken } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile', authenticate, getProfile);
router.get('/verify', authenticate, verifyToken);
router.post('/logout', logout);

export default router;
