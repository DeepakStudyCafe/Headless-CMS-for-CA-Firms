# Headless CMS Backend

Production-ready Node.js backend API for managing multiple CA firm websites.

## 🚀 Features

- **Multi-site Management**: Manage 3+ CA firm websites from one API
- **Secure Authentication**: JWT-based auth with role-based access control
- **Content Management**: Pages, sections, and media management
- **Analytics**: Track website visits and page performance
- **Version Control**: Revision history for all changes
- **Audit Logging**: Complete audit trail of all actions
- **Rate Limiting**: Protection against abuse
- **Image Upload**: Secure image upload with validation

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your database credentials:
```
DATABASE_URL="postgresql://user:password@localhost:5432/headless_cms"
JWT_SECRET="your-secret-key"
```

4. Run Prisma migrations:
```bash
npm run prisma:migrate
```

5. Generate Prisma client:
```bash
npm run prisma:generate
```

6. Seed the database:
```bash
npm run seed
```

## 🏃 Running the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm run build
npm start
```

Server runs on `http://localhost:5000`

## 📚 API Documentation

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register new user
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/logout` - Logout

### Websites
- `GET /api/websites` - Get all websites
- `GET /api/websites/:id` - Get website by ID
- `POST /api/websites` - Create website (Admin only)
- `PUT /api/websites/:id` - Update website (Admin only)
- `DELETE /api/websites/:id` - Delete website (Super Admin only)

### Pages
- `GET /api/pages/website/:websiteId` - Get pages by website
- `GET /api/pages/:id` - Get page by ID
- `POST /api/pages` - Create page
- `PUT /api/pages/:id` - Update page
- `DELETE /api/pages/:id` - Delete page (Admin only)
- `POST /api/pages/:id/publish` - Publish page

### Sections
- `GET /api/sections/page/:pageId` - Get sections by page
- `GET /api/sections/:id` - Get section by ID
- `POST /api/sections` - Create section
- `PUT /api/sections/:id` - Update section
- `DELETE /api/sections/:id` - Delete section
- `POST /api/sections/reorder` - Reorder sections

### Media
- `POST /api/media/upload` - Upload image
- `DELETE /api/media/:filename` - Delete image

### Revalidation
- `POST /api/revalidate/:websiteId` - Revalidate entire website
- `POST /api/revalidate/page/:pageId` - Revalidate specific page

### Analytics
- `GET /api/analytics/:websiteId` - Get website analytics
- `POST /api/analytics/track` - Track page visit

## 🔐 Default Credentials

```
Email: admin@cafirm.com
Password: Admin@123
```

**⚠️ Change these in production!**

## 🏗️ Project Structure

```
backend/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── config/
│   │   └── multer.ts          # File upload config
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Auth & error handling
│   ├── routes/                # API routes
│   ├── utils/
│   │   └── seed.ts            # Database seeder
│   └── server.ts              # App entry point
├── uploads/                   # Uploaded images
├── .env                       # Environment variables
├── package.json
└── tsconfig.json
```

## 🔒 Security Features

- JWT authentication with httpOnly cookies
- Password hashing with bcrypt
- Role-based access control (SUPER_ADMIN, ADMIN, EDITOR)
- Rate limiting (100 requests per 15 minutes)
- Helmet for secure HTTP headers
- CORS protection
- File upload validation
- XSS protection

## 🚀 Deployment

### Hostinger VPS / Railway / Render

1. Build the project:
```bash
npm run build
```

2. Set environment variables on hosting platform

3. Run migrations:
```bash
npm run prisma:migrate
```

4. Start server:
```bash
npm start
```

## 📊 Database Schema

- **users**: Admin users with role-based access
- **websites**: CA firm websites
- **pages**: Website pages
- **sections**: Page content sections
- **revisions**: Version control history
- **audit_logs**: Action tracking
- **analytics**: Visit tracking

## 🤝 Support

For issues or questions, contact: admin@cafirm.com

---

Built with ❤️ for CA Firms
