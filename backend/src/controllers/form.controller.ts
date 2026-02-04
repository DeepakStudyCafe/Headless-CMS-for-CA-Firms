import { Request, Response } from 'express';
import { sendEmail, createContactEmailTemplate, createQueryEmailTemplate, createCareerEmailTemplate } from '../config/email';

// Contact Form Handler
export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, company, message, website } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
      return;
    }

    // Send email
    await sendEmail(
      website,
      `New Contact Form Submission - ${name}`,
      createContactEmailTemplate({
        name,
        email,
        phone,
        message
      })
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
      subjectOfQuery, 
      query,
      website 
    } = req.body;

    // Validate required fields
    if (!name || !email || !query) {
      res.status(400).json({
        success: false,
        message: 'Please provide name, email, and query details'
      });
      return;
    }

    // Send email
    await sendEmail(
      website,
      `New Query Form Submission - ${name}`,
      createQueryEmailTemplate({
        name,
        company,
        city,
        email,
        phone: telephone || mobile,
        serviceType: subjectOfQuery,
        query
      })
    );

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

    // Validate required fields
    if (!firstName || !email || !mobile) {
      res.status(400).json({
        success: false,
        message: 'Please provide first name, email, and mobile number'
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
      `New Career Application - ${firstName} ${lastName}`,
      createCareerEmailTemplate({
        fullName: `${firstName} ${lastName}`,
        email,
        phone: mobile,
        address: `${dateOfBirth || ''} - ${gender || ''}`.trim(),
        position,
        education: qualification,
        yearsOfExperience,
        monthsOfExperience,
        comments,
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