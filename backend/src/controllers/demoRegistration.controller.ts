import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create new registration
export const registerDemoUser = async (req: Request, res: Response) => {
  try {
    const { name, email, mobile, state } = req.body;

    if (!name || !email || !mobile || !state) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const registration = await (prisma as any).demoRegistration.create({
      data: {
        name,
        email,
        mobile,
        state,
        status: 'PENDING'
      }
    });

    res.status(201).json({ success: true, data: registration });
  } catch (error: any) {
    console.error('Error registering demo user:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Get all registrations
export const getDemoRegistrations = async (req: Request, res: Response) => {
  try {
    const registrations = await (prisma as any).demoRegistration.findMany({
      orderBy: { createdAt: 'desc' }
    });

    res.status(200).json({ success: true, data: registrations });
  } catch (error: any) {
    console.error('Error fetching demo registrations:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Update status
export const updateDemoRegistrationStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['PENDING', 'ACCEPTED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status' });
    }

    const updated = await (prisma as any).demoRegistration.update({
      where: { id },
      data: { status }
    });

    res.status(200).json({ success: true, data: updated });
  } catch (error: any) {
    console.error('Error updating demo registration status:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
