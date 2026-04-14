import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all blogs
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const isDraft = req.query.isDraft === 'true';
    const blogs = await prisma.blog.findMany({
      where: isDraft ? {} : { isDraft: false },
      orderBy: { createdAt: 'desc' }
    });
    
    // Convert tags string to array for easier frontend parsing
    const formattedBlogs = blogs.map(blog => ({
      ...blog,
      tags: blog.tags ? blog.tags.split(',').map(tag => tag.trim()) : []
    }));

    res.json({ success: true, data: formattedBlogs });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single blog by ID or Slug
export const getBlogBySlug = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    let blog = await prisma.blog.findUnique({
      where: { id }
    });
    
    if (!blog) {
      blog = await prisma.blog.findUnique({
        where: { slug: id }
      });
    }

    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog not found' });
    }

    const formattedBlog = {
      ...blog,
      tags: blog.tags ? blog.tags.split(',').map(tag => tag.trim()) : []
    };

    res.json({ success: true, data: formattedBlog });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new blog
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { 
      title, slug, category, readTime, excerpt, content, 
      coverImageUrl, imageAltText, tags, seoTitle, seoDescription, isDraft, author
    } = req.body;

    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
        category: category || 'General',
        readTime: readTime || '5 min read',
        excerpt,
        content,
        coverImageUrl,
        imageAltText,
        tags: Array.isArray(tags) ? tags.join(', ') : (tags || ''),
        seoTitle,
        seoDescription,
        isDraft: isDraft === true,
        author: author || 'Kirtika Prajapati'
      }
    });

    const formattedBlog = {
      ...newBlog,
      tags: newBlog.tags ? newBlog.tags.split(',').map(tag => tag.trim()) : []
    };

    res.status(201).json({ success: true, data: formattedBlog });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ success: false, error: 'A blog with this slug already exists' });
    }
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update blog
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    
    if (Array.isArray(body.tags)) {
      body.tags = body.tags.join(', ');
    }

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: body
    });

    const formattedBlog = {
      ...updatedBlog,
      tags: updatedBlog.tags ? updatedBlog.tags.split(',').map(tag => tag.trim()) : []
    };

    res.json({ success: true, data: formattedBlog });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete blog
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.blog.delete({
      where: { id }
    });

    res.json({ success: true, data: { id } });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
