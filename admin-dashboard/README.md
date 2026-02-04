# Headless CMS - Admin Dashboard

Modern, beautiful admin dashboard for managing multiple CA firm websites.

## ✨ Features

- **Website Management**: Select and manage 3+ CA firm websites
- **Content Editor**: Inline editing for text and images
- **Real-time Updates**: Changes reflect immediately on websites via ISR
- **Beautiful UI**: TailwindCSS + ShadCN UI + Framer Motion
- **Authentication**: JWT-based secure login
- **Image Upload**: Drag-and-drop image management
- **Responsive**: Works on desktop and tablet

## 🚀 Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

3. Run development server:
```bash
npm run dev
```

Access at: `http://localhost:3000`

## 📋 Usage

### Login
- Email: `admin@cafirm.com`
- Password: `Admin@123`

### Managing Content
1. Select a website from the dashboard
2. Click on any page to edit
3. Update text content and upload images
4. Save as draft or publish immediately
5. Changes auto-update on the live website

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS + ShadCN UI
- **Animations**: Framer Motion
- **State**: Zustand
- **HTTP Client**: Axios
- **TypeScript**: Full type safety

## 📁 Project Structure

```
admin-dashboard/
├── src/
│   ├── app/
│   │   ├── dashboard/          # Dashboard pages
│   │   │   ├── websites/[id]   # Website detail
│   │   │   └── pages/[id]      # Page editor
│   │   ├── login/              # Login page
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                 # ShadCN components
│   │   └── dashboard/          # Dashboard components
│   ├── lib/
│   │   ├── api.ts              # API client
│   │   └── utils.ts            # Utilities
│   └── store/
│       └── authStore.ts        # Auth state management
├── public/
└── package.json
```

## 🔐 Security

- JWT authentication
- Protected routes
- Role-based access control
- Secure API communication

## 🌐 Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

Set environment variables in Vercel dashboard.

---

Built with ❤️ for CA Firms
