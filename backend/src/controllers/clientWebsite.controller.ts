import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
});

// Get all client websites
export const getAllClientWebsites = async (req: Request, res: Response) => {
  try {
    const { search, page = 1, limit = 50 } = req.query;
    const searchTerm = search as string;
    const pageNumber = parseInt(page as string);
    const limitNumber = parseInt(limit as string);

    const whereClause: any = {};
    if (searchTerm) {
      whereClause.OR = [
        { name: { contains: searchTerm, mode: 'insensitive' } },
        { companyName: { contains: searchTerm, mode: 'insensitive' } },
        { email: { contains: searchTerm, mode: 'insensitive' } },
        { slug: { contains: searchTerm, mode: 'insensitive' } }
      ];
    }

    const totalCount = await (prisma as any).clientWebsite.count({ where: whereClause });
    const totalPages = Math.ceil(totalCount / limitNumber);
    const skip = (pageNumber - 1) * limitNumber;

    const websites = await (prisma as any).clientWebsite.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limitNumber
    });

    res.json({
      success: true,
      data: {
        websites,
        pagination: {
          currentPage: pageNumber,
          totalPages,
          totalCount,
          limit: limitNumber
        }
      }
    });

  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create client website
export const createClientWebsite = async (req: AuthRequest, res: Response) => {
  try {
    const { 
      name, slug, companyName, email, phone, 
      startDate, websiteExpiryDate, domainOwnership, domainStartDate, domainExpiryDate,
      paymentAmount, paymentDate, paymentDetails, domainPaymentAmount, templateSerialNo, remarks
    } = req.body;

    if (!name || !slug) {
      return res.status(400).json({ success: false, error: 'Name and slug are required' });
    }

    const website = await (prisma as any).clientWebsite.create({
      data: {
        name,
        slug,
        companyName,
        email,
        phone,
        startDate: startDate ? new Date(startDate) : null,
        websiteExpiryDate: websiteExpiryDate ? new Date(websiteExpiryDate) : null,
        domainOwnership,
        domainStartDate: domainStartDate ? new Date(domainStartDate) : null,
        domainExpiryDate: domainExpiryDate ? new Date(domainExpiryDate) : null,
        paymentAmount,
        paymentDate: paymentDate ? new Date(paymentDate) : null,
        paymentDetails,
        domainPaymentAmount,
        templateSerialNo,
        remarks
      }
    });

    res.status(201).json({ success: true, data: { website } });
  } catch (error: any) {
    if (error.code === 'P2002' && error.meta?.target?.includes('slug')) {
      return res.status(400).json({ success: false, error: 'A website with this URL slug already exists. Please choose a different slug.' });
    }
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update client website
export const updateClientWebsite = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { 
      name, slug, companyName, email, phone, 
      startDate, websiteExpiryDate, domainOwnership, domainStartDate, domainExpiryDate,
      paymentAmount, paymentDate, paymentDetails, domainPaymentAmount, templateSerialNo, remarks
    } = req.body;

    const website = await (prisma as any).clientWebsite.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(slug && { slug }),
        ...(companyName !== undefined && { companyName }),
        ...(email !== undefined && { email }),
        ...(phone !== undefined && { phone }),
        ...(startDate !== undefined && { startDate: startDate ? new Date(startDate) : null }),
        ...(websiteExpiryDate !== undefined && { websiteExpiryDate: websiteExpiryDate ? new Date(websiteExpiryDate) : null }),
        ...(domainOwnership !== undefined && { domainOwnership }),
        ...(domainStartDate !== undefined && { domainStartDate: domainStartDate ? new Date(domainStartDate) : null }),
        ...(domainExpiryDate !== undefined && { domainExpiryDate: domainExpiryDate ? new Date(domainExpiryDate) : null }),
        ...(paymentAmount !== undefined && { paymentAmount }),
        ...(paymentDate !== undefined && { paymentDate: paymentDate ? new Date(paymentDate) : null }),
        ...(paymentDetails !== undefined && { paymentDetails }),
        ...(domainPaymentAmount !== undefined && { domainPaymentAmount }),
        ...(templateSerialNo !== undefined && { templateSerialNo }),
        ...(remarks !== undefined && { remarks })
      }
    });

    res.json({ success: true, data: { website } });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete client website
export const deleteClientWebsite = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    await (prisma as any).clientWebsite.delete({ where: { id } });
    res.json({ success: true, data: {} });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};