import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';

// Import routes
import authRoutes from './routes/auth.routes';
import websiteRoutes from './routes/website.routes';
import pageRoutes from './routes/page.routes';
import sectionRoutes from './routes/section.routes';
import mediaRoutes from './routes/media.routes';
import revalidateRoutes from './routes/revalidate.routes';
import analyticsRoutes from './routes/analytics.routes';
import publicRoutes from './routes/public.routes';
import formRoutes from './routes/form.routes';

// Import middleware
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

dotenv.config();

const app: Express = express();
const PORT = Number(process.env.PORT) || 5000;

// Security middleware (helmet enabled, but CSP and crossOriginResourcePolicy disabled for static file compatibility)
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
  'http://localhost:3000',
  'http://localhost:3001', 
  'http://localhost:3002',
  'http://localhost:3003',
  'http://localhost:3004',
  'http://localhost:3005',
  'http://localhost:3006'
];



app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if the origin is allowed
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn('❌ Blocked CORS request from origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Very important for cookies
  optionsSuccessStatus: 200 // For legacy browser support
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Static files for uploads (serve from backend/uploads) with CORS
const rootUploadsPath = path.resolve(__dirname, '../uploads');
app.use('/uploads', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Cache-Control', 'no-store');
  res.header('Vary', 'Origin');
  next();
});
app.use('/uploads', express.static(rootUploadsPath));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Database health check
app.get('/health/db', async (req, res) => {
  try {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    
    // Test database connection
    await prisma.$connect();
    await prisma.user.count(); // Simple query to test
    await prisma.$disconnect();
    
    res.json({ 
      status: 'ok', 
      database: 'connected',
      timestamp: new Date().toISOString() 
    });
  } catch (error: any) {
    console.error('❌ Database health check failed:', error);
    res.status(500).json({ 
      status: 'error', 
      database: 'disconnected',
      error: error.message,
      timestamp: new Date().toISOString() 
    });
  }
});

// API Routes
app.use('/api/public', publicRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/websites', websiteRoutes);
app.use('/api/pages', pageRoutes);
app.use('/api/sections', sectionRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/revalidate', revalidateRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/forms', formRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
const initializeDatabase = async () => {
  try {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    
    console.log('🔗 Connecting to database...');
    await prisma.$connect();
    console.log('✅ Database connected successfully');
    
    // Test basic operations
    const userCount = await prisma.user.count();
    const websiteCount = await prisma.website.count();
    
    console.log(`📊 Database stats: ${userCount} users, ${websiteCount} websites`);
    
    await prisma.$disconnect();
    return true;
  } catch (error: any) {
    console.error('❌ Database initialization failed:', error.message);
    console.error('💡 Please ensure:');
    console.error('   1. PostgreSQL is running');
    console.error('   2. Database exists');
    console.error('   3. Migrations are applied: npx prisma migrate deploy');
    console.error('   4. DATABASE_URL is correct');
    return false;
  }
};

app.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  
  // Initialize database connection
  const dbInitialized = await initializeDatabase();
  if (!dbInitialized) {
    console.error('⚠️  Server started but database connection failed');
    console.error('🔧 API endpoints may not work properly until database is fixed');
  } else {
    console.log('🎉 Server and database are ready!');
  }
});

export default app;
