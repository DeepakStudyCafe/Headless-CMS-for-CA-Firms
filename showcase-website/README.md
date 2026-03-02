# Webtel Showcase Website

A professional showcase website for CA firm website templates. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern design with animations using Framer Motion
- 📱 Fully responsive across all devices
- 🚀 Fast and optimized with Next.js App Router
- 💎 6 Premium CA firm templates showcase
- 📝 Multiple pages: Home, Templates, About, Services, Pricing, Contact, Payment
- 📅 Schedule call functionality
- 💳 Payment form with plans selection
- 🎭 Professional animations and transitions
- 🔍 SEO-friendly structure

## Pages

1. **Home** - Hero, Features, About, Templates Preview, Stats, Testimonials, CTA
2. **Templates** - Detailed showcase of all 6 CA firm templates
3. **About** - Company story, mission, vision, team
4. **Services** - 8 comprehensive services offered
5. **Pricing** - 3 pricing plans with add-ons and FAQ
6. **Contact** - Contact form and information
7. **Schedule Call** - Book a consultation
8. **Payment** - Payment form with plan selection

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Installation

```bash
cd showcase-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
showcase-website/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── payment/         # Payment page
│   │   ├── pricing/         # Pricing page
│   │   ├── schedule-call/   # Schedule call page
│   │   ├── services/        # Services page
│   │   ├── templates/       # Templates page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/          # React components
│       ├── sections/        # Page sections
│       ├── Navbar.tsx       # Navigation bar
│       └── Footer.tsx       # Footer component
├── public/                  # Static files
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Design Features

### Color Scheme
- Primary: Blue (#2563eb)
- Secondary: White
- Accent colors for different sections

### Animations
- Fade in/out effects
- Slide animations
- Hover effects on cards and buttons
- Smooth transitions throughout

### Components
- Responsive navbar with mobile menu
- Animated hero section
- Feature cards with hover effects
- Template preview cards
- Pricing comparison tables
- Contact forms with validation
- Call-to-action sections

## Templates Showcased

1. **Sharma & Associates** - Professional Blue Theme
2. **Verma Accounting Services** - Modern Minimal Theme
3. **Gupta Tax Advisors** - Creative Purple Theme
4. **Kapoor Financial Services** - Emerald Green Theme
5. **Singh & Co. Advisors** - Vibrant Orange Theme
6. **Patel Consulting** - Teal Blue Theme

## Key Features

### Home Page
- Hero section with animations
- 4 statistics showcasing company metrics
- Feature highlights (6 features)
- About section with benefits
- Templates preview with Templates
- Stats counter section
- Client testimonials (3 testimonials)
- Call-to-action section

### CTAs
The website includes **3 "Schedule a Call" buttons** and **3 "View Templates" buttons** strategically placed across different sections:
- Schedule Call: Navbar, Hero, About section, Multiple pages
- View Templates: Hero, Templates Preview section

### Forms
- Contact form with subject selection
- Schedule call form with date/time picker
- Payment form with plan selection

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Content
All content is in the component files and can be easily modified.

### Templates Data
Template information is stored in the component files and can be updated as needed.

## Performance

- Optimized images
- Code splitting
- Fast page loads
- SEO-friendly URLs
- Meta tags for all pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the Webtel Headless CMS system.

## Support

For support, email info@webtel.in or call +91 98765 43210.
