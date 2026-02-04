import express from 'express';
import multer from 'multer';
import path from 'path';
import { submitContactForm, submitQueryForm, submitCareerForm } from '../controllers/form.controller';

const router = express.Router();

// Configure multer for file uploads (for resume uploads in career form)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'resume-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req: any, file: any, cb: any) => {
  const allowedTypes = /pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only PDF, DOC, and DOCX files are allowed!'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 2 // 2MB limit
  }
});

// Create uploads directory if it doesn't exist
import fs from 'fs';
const uploadsDir = 'uploads/resumes';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Routes
router.post('/contact', submitContactForm);
router.post('/query', submitQueryForm);
router.post('/career', upload.single('resume'), submitCareerForm);

export default router;