import { Request, Response } from 'express';
import { sendEmail, createContactEmailTemplate, createQueryEmailTemplate, createCareerEmailTemplate, createQueryEmailTemplateTemplate4, createShowcaseContactEmailTemplate, createShowcaseScheduleEmailTemplate } from '../config/email';

// Contact Form Handler
export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, company, message, website, subject } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
      return;
    }

    // Normalize subject value to a human-friendly label for emails
    const SUBJECT_LABELS: Record<string, string> = {
      general: 'General Inquiry',
      template: 'Template Questions',
      pricing: 'Pricing & Plans',
      technical: 'Technical Support',
      custom: 'Custom Development'
    };

    const subjectLabel = SUBJECT_LABELS[(subject as string) || ''] || (subject as string) || 'Not specified';

    // Send email
    const html = website === 'showcase-website'
      ? createShowcaseContactEmailTemplate({ name, email, phone, company, subject: subjectLabel, message })
      : createContactEmailTemplate(req.body);
    
    // Send email
    await sendEmail(
      website || 'showcase-website',
      `New Contact Form Submission - ${name}`,
      html
    );

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you shortly.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request'
    });
  }
};

// Query Form Handler
export const submitQueryForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      company,
      city,
      email,
      telephone,
      mobile,
      otherUpdates,
      service,
      serviceType,
      subjectOfQuery,
      query,
      message,
      website
    } = req.body;

    const actualQuery = query || message;

    // Validate required fields
    if (!name || !email || !actualQuery) {
      res.status(400).json({
        success: false,
        message: 'Please provide name, email, and query details'
      });
      return;
    }

    const serviceTypeValue = (serviceType as string) || service || otherUpdates || '';
    // Map known service keys to human-friendly labels
    const SERVICE_LABELS: Record<string, string> = {
      bookkeeping: 'Bookkeeping',
      gst: 'GST Filing',
      payroll: 'Payroll',
      'tax-planning': 'Tax Planning',
      'company-formation': 'Company Formation',
      compliance: 'Compliance',
      audit: 'Audit & Assurance',
      'financial-advisory': 'Financial Advisory',
      taxation: 'Taxation & Compliance',
      advisory: 'Business Advisory',
      other: 'Other Queries'
    };

    const serviceLabel = SERVICE_LABELS[serviceTypeValue] || serviceTypeValue || 'Not specified';

    // Send email (use Template-4 specialized template when website is 'template-4')
    const html = website === 'template-4'
      ? createQueryEmailTemplateTemplate4(req.body)
      : createQueryEmailTemplate(req.body);

    await sendEmail(website, `New Query Form Submission - ${name}`, html);

    res.status(200).json({
      success: true,
      message: 'Thank you for your query! Our expert team will respond within 24-48 hours.'
    });
  } catch (error) {
    console.error('Query form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your query'
    });
  }
};

// Career Form Handler
export const submitCareerForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      gender,
      dateOfBirth,
      position,
      qualification,
      portfolioWebsite,
      lastCompany,
      yearsOfExperience,
      monthsOfExperience,
      comments,
      website
    } = req.body;

    const actualFirstName = firstName || req.body.name;
    const actualMobile = mobile || req.body.phone;

    // Validate required fields
    if (!actualFirstName || !email || !actualMobile) {
      res.status(400).json({
        success: false,
        message: 'Please provide first name (or name), email, and mobile number'
      });
      return;
    }

    // Prepare attachments
    const attachments = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        path: req.file.path
      });
    }

    // Send email
    await sendEmail(
      website,
      `New Career Application - ${firstName || req.body.name} ${lastName || ''}`.trim(),
      createCareerEmailTemplate({
        ...req.body,
        resume: req.file ? req.file.filename : null
      }),
      attachments
    );

    res.status(200).json({
      success: true,
      message: 'Thank you for your application! We will review it and get back to you soon.'
    });
  } catch (error) {
    console.error('Career form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your application'
    });
  }
};
// Schedule Call Form Handler (Showcase)
export const submitScheduleForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, company, date, time, callType, message, website } = req.body;

    if (!name || !email || !date || !time) {
      res.status(400).json({
        success: false,
        message: 'Please provide name, email, date, and time'
      });
      return;
    }

    const html = createShowcaseScheduleEmailTemplate({
      name, email, phone, company, date, time, callType, message
    });

    // Send email
    await sendEmail(website || 'showcase-website', `New Scheduled Call Request - ${name}`, html);

    res.status(200).json({
      success: true,
      message: 'Call scheduled successfully!'
    });
  } catch (error) {
    console.error('Schedule form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request'
    });
  }
};


