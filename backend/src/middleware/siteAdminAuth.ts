import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extends Express Request with siteAdmin payload
export interface SiteAdminRequest extends Request {
  siteAdmin?: {
    id: string;
    websiteId: string;
    websiteSlug: string;
  };
}

export const siteAdminAuth = (
  req: SiteAdminRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Accept token from HTTP-only cookie OR Authorization header
    let token: string | undefined = req.cookies?.site_admin_token;
    if (!token && req.headers.authorization?.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, error: 'Site admin authentication required' });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ success: false, error: 'Server configuration error' });
    }

    const decoded = jwt.verify(token, jwtSecret) as any;

    // Ensure this is a site_admin token, not a central-admin token
    if (decoded.type !== 'site_admin') {
      return res.status(401).json({ success: false, error: 'Invalid token type' });
    }

    req.siteAdmin = {
      id: decoded.siteAdminId,
      websiteId: decoded.websiteId,
      websiteSlug: decoded.websiteSlug,
    };

    next();
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, error: 'Token expired. Please log in again.' });
    }
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }
};
