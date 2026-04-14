import { Router } from 'express';
import { getBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog } from '../controllers/blog.controller';
import { authenticate } from '../middleware/auth';
import { siteAdminAuth } from '../middleware/siteAdminAuth';

const router = Router();

router.get('/', getBlogs);
router.get('/:id', getBlogBySlug);
// Allow site-admins to manage blogs (siteAdminAuth) — public GETs remain unchanged
router.post('/', siteAdminAuth, createBlog);
router.put('/:id', siteAdminAuth, updateBlog);
router.delete('/:id', siteAdminAuth, deleteBlog);

export default router;
