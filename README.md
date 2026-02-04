# 🚀 Headless CMS for CA Firms - Complete System

A production-ready, full-stack Headless CMS system for managing 3 CA firm websites with real-time content updates.

## 📦 Project Structure

```
Headless CMS/
├── backend/                    # Node.js + Express + PostgreSQL API
├── admin-dashboard/            # Next.js Admin Dashboard
└── websites/
    ├── firm1-sharma/          # Sharma & Associates (Professional Blue Theme)
    ├── firm2-verma/           # Verma Accounting (Modern Clean Theme)
    ├── firm3-gupta/           # Gupta Tax Advisors (Creative Purple Theme)
    ├── firm4-kapoor/          # Kapoor & Co. (Elegant Indigo Theme)
    ├── firm5-singh/           # Singh Consultants (Dynamic Green Theme)
    └── firm6-patel/           # Patel Financials (Vibrant Orange Theme)
```

## 🎯 Features

### Backend API
- ✅ Multi-site content management
- ✅ JWT authentication with role-based access
- ✅ RESTful APIs for websites, pages, sections
- ✅ Image upload with validation
- ✅ Revision history & audit logging
- ✅ Analytics tracking
- ✅ ISR revalidation webhooks
- ✅ Rate limiting & security (Helmet, CORS)

### Admin Dashboard
- ✅ Beautiful UI with TailwindCSS + ShadCN + Framer Motion
- ✅ Website selection panel
- ✅ Dynamic page list for each website
- ✅ Inline content editor (text + images)
- ✅ Real-time preview
- ✅ Save draft & publish workflow
- ✅ Image upload with drag-and-drop
- ✅ Loading states & smooth animations

### 6 CA Firm Websites
- ✅ **Sharma & Associates**: Professional corporate theme (blue/gray)
- ✅ **Verma Accounting**: Modern minimal theme (clean white)
- ✅ **Gupta Tax Advisors**: Creative theme (purple/pink gradients)
- ✅ **Kapoor & Co.**: Elegant indigo theme
- ✅ **Singh Consultants**: Dynamic green theme
- ✅ **Patel Financials**: Vibrant orange theme
- ✅ All pages: Home, About, Team, Gallery, Service (with 3 subpages)
- ✅ ISR (Incremental Static Regeneration) for instant updates
- ✅ Framer Motion animations
- ✅ Fully responsive

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### 1. Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Update .env with your database credentials:
# DATABASE_URL="postgresql://user:password@localhost:5432/headless_cms"
# JWT_SECRET="your-secret-key"

# Run migrations
npm run prisma:migrate

# Generate Prisma client
npm run prisma:generate

# Seed database with initial data
npm run seed

# Start server
npm run dev
```

Backend runs on: **http://localhost:5000**

### 2. Admin Dashboard Setup

```bash
cd admin-dashboard
npm install

# Start dashboard
npm run dev
```

Admin Dashboard runs on: **http://localhost:3000**



### 3. CA Firm Websites Setup

**Firm 1 - Sharma & Associates:**
```bash
cd websites/firm1-sharma
npm install
npm run dev
```
Runs on: **http://localhost:3001**

**Firm 2 - Verma Accounting:**
```bash
cd websites/firm2-verma
npm install
npm run dev
```
Runs on: **http://localhost:3002**

**Firm 3 - Gupta Tax Advisors:**
```bash
cd websites/firm3-gupta
npm install
npm run dev
```
Runs on: **http://localhost:3003**

**Firm 4 - Kapoor & Co.:**
```bash
cd websites/firm4-kapoor
npm install
npm run dev
```
Runs on: **http://localhost:3004**

**Firm 5 - Singh Consultants:**
```bash
cd websites/firm5-singh
npm install
npm run dev
```
Runs on: **http://localhost:3005**

**Firm 6 - Patel Financials:**
```bash
cd websites/firm6-patel
npm install
npm run dev
```
Runs on: **http://localhost:3006**

## 🎨 Usage Workflow

1. **Start Backend API**: `cd backend && npm run dev`
2. **Start Admin Dashboard**: `cd admin-dashboard && npm run dev`
3. **Start All 3 Websites**: Run each firm's dev server
4. **Login to Admin**: Go to http://localhost:3000 and login
5. **Select Website**: Choose any of the 3 CA firms
6. **Edit Content**: Click on any page → Edit sections → Upload images → Update text
7. **Publish**: Click "Publish" button
8. **See Live**: Changes reflect on the website instantly (ISR revalidation)

## 🔐 Security Features

- JWT authentication with httpOnly cookies
- Role-based access control (SUPER_ADMIN, ADMIN, EDITOR)
- Password hashing with bcrypt
- Rate limiting (100 req/15min)
- Helmet for secure HTTP headers
- CORS protection
- XSS prevention
- File upload validation

## 📊 Database Schema

### Tables:
- **users**: Admin users with roles
- **websites**: CA firm websites (6 firms)
- **pages**: Website pages (Home, About, Team, Gallery, Service, Service 1-3)
- **sections**: Page content sections (hero, text-image, gallery, team)
- **revisions**: Version control for all changes
- **audit_logs**: Complete audit trail
- **analytics**: Visit tracking per page

## 🚀 Deployment

### Backend (Hostinger VPS / Railway / Render)
```bash
cd backend
npm run build
npm start
```

### Admin Dashboard (Vercel)
```bash
cd admin-dashboard
npm run build
vercel deploy
```

### Websites (Vercel)
```bash
cd websites/firm1-sharma
npm run build
vercel deploy
```

Set environment variables on each platform.

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register user
- `GET /api/auth/profile` - Get profile
- `POST /api/auth/logout` - Logout

### Websites
- `GET /api/websites` - Get all websites
- `GET /api/websites/:id` - Get website by ID
- `POST /api/websites` - Create website
- `PUT /api/websites/:id` - Update website
- `DELETE /api/websites/:id` - Delete website

### Pages
- `GET /api/pages/website/:websiteId` - Get pages
- `GET /api/pages/:id` - Get page by ID
- `POST /api/pages` - Create page
- `PUT /api/pages/:id` - Update page
- `DELETE /api/pages/:id` - Delete page
- `POST /api/pages/:id/publish` - Publish page

### Sections
- `GET /api/sections/page/:pageId` - Get sections
- `POST /api/sections` - Create section
- `PUT /api/sections/:id` - Update section
- `DELETE /api/sections/:id` - Delete section

### Media
- `POST /api/media/upload` - Upload image
- `DELETE /api/media/:filename` - Delete image

### Revalidation
- `POST /api/revalidate/:websiteId` - Revalidate website
- `POST /api/revalidate/page/:pageId` - Revalidate page

### Analytics
- `GET /api/analytics/:websiteId` - Get analytics
- `POST /api/analytics/track` - Track visit

## 🎁 Bonus Features Included

✅ **Analytics Dashboard**: Track visits per website  
✅ **Revision History**: Undo/redo functionality  
✅ **Draft Preview**: Preview before publishing  
✅ **Theme Config**: Customizable colors per website  
✅ **Audit Logging**: Complete action tracking  
✅ **Image Management**: Upload, preview, delete  
✅ **Real-time Updates**: ISR revalidation on publish  
✅ **Responsive Design**: Works on all devices  
✅ **Loading States**: Skeleton loaders  
✅ **Error Handling**: Toast notifications  
✅ **Animations**: Framer Motion transitions  

## 🏗️ Tech Stack

### Backend
- Node.js + Express
- PostgreSQL + Prisma ORM
- JWT + bcrypt
- Multer (file upload)
- Helmet, CORS, Rate Limiting

### Admin Dashboard
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS + ShadCN UI
- Framer Motion
- Zustand (state)
- Axios

### Websites
- Next.js 14 (ISR)
- TypeScript
- TailwindCSS
- Framer Motion
- Server Components

## 📖 Documentation

Each subfolder contains its own README with detailed instructions:
- [Backend README](./backend/README.md)
- [Admin Dashboard README](./admin-dashboard/README.md)
- [Firm 1 README](./websites/firm1-sharma/README.md)
- [Firm 2 README](./websites/firm2-verma/README.md)
- [Firm 3 README](./websites/firm3-gupta/README.md)
- [Firm 4 README](./websites/firm4-kapoor/README.md)
- [Firm 5 README](./websites/firm5-singh/README.md)
- [Firm 6 README](./websites/firm6-patel/README.md)

## 🤝 Support

For issues or questions:
- Email: admin@cafirm.com
- GitHub Issues: [Create Issue]

## 📝 License

MIT License - Feel free to use for your projects!

---

**🎉 You now have a complete, production-ready Headless CMS system!**

Built with ❤️ for CA Firms worldwide.
