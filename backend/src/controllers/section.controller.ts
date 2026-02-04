import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';

const prisma = new PrismaClient();

// Get sections by page
export const getSectionsByPage = async (req: Request, res: Response) => {
  try {
    const { pageId } = req.params;

    const sections = await prisma.section.findMany({
      where: { pageId },
      orderBy: { order: 'asc' }
    });

    res.json({
      success: true,
      data: { sections }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get section by ID
export const getSectionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const section = await prisma.section.findUnique({
      where: { id },
      include: {
        page: {
          include: {
            website: true
          }
        }
      }
    });

    if (!section) {
      return res.status(404).json({
        success: false,
        error: 'Section not found'
      });
    }

    res.json({
      success: true,
      data: { section }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create section
export const createSection = async (req: AuthRequest, res: Response) => {
  try {
    const { pageId, type, imageUrl, textContent, order } = req.body;

    if (!pageId || !type) {
      return res.status(400).json({
        success: false,
        error: 'Page ID and type are required'
      });
    }

    // Get the max order for this page
    const maxOrderSection = await prisma.section.findFirst({
      where: { pageId },
      orderBy: { order: 'desc' }
    });

    const section = await prisma.section.create({
      data: {
        pageId,
        type,
        imageUrl,
        textContent,
        order: order !== undefined ? order : (maxOrderSection?.order || 0) + 1
      }
    });

    res.status(201).json({
      success: true,
      data: { section }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update section
export const updateSection = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { type, imageUrl, textContent, order } = req.body;

    const section = await prisma.section.update({
      where: { id },
      data: {
        ...(type && { type }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(textContent !== undefined && { textContent }),
        ...(order !== undefined && { order })
      }
    });

    res.json({
      success: true,
      data: { section }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Delete section
export const deleteSection = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.section.delete({
      where: { id }
    });

    res.json({
      success: true,
      message: 'Section deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Reorder sections
export const reorderSections = async (req: AuthRequest, res: Response) => {
  try {
    const { sections } = req.body; // Array of { id, order }

    if (!Array.isArray(sections)) {
      return res.status(400).json({
        success: false,
        error: 'Sections array is required'
      });
    }

    // Update all sections
    await Promise.all(
      sections.map(({ id, order }) =>
        prisma.section.update({
          where: { id },
          data: { order }
        })
      )
    );

    res.json({
      success: true,
      message: 'Sections reordered successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
