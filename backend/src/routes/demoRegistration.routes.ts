import { Router } from 'express';
import { 
  registerDemoUser, 
  getDemoRegistrations, 
  updateDemoRegistrationStatus 
} from '../controllers/demoRegistration.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

// Public route for form submission
router.post('/register', registerDemoUser);

// Protected admin routes
router.get('/', authenticate, getDemoRegistrations);
router.put('/:id', authenticate, updateDemoRegistrationStatus);

export default router;
