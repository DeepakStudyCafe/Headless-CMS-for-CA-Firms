import { PrismaClient } from '@prisma/client'
import {
  HERO_SLIDES,
  STATS,
  SERVICES,
  WHY_CHOOSE_US,
  TESTIMONIALS,
  TEAM_MEMBERS,
  COMPANY_TIMELINE,
  CORE_VALUES,
  CERTIFICATIONS,
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  OPEN_POSITIONS,
  CAREER_BENEFITS,
  CONTACT_INFO,
  FAQ_GENERAL,
  PROCESS_STEPS,
  INDUSTRIES,
  SERVICE_DETAILS
} from './template1-data'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding MonikaS (Monika S & Co.) website data...')

  const website = await prisma.website.upsert({
    where: { slug: 'MonikaS' },
    update: {
      name: 'Monika S & Co.',
      domain: 'https://MonikaS.in',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 123 456 7890',
      email: 't.sharma1991@mail.ca.in',
      address: 'WZ-5E, Dayal Sar Road, Uttam Nagar, New Delhi-110059',
      workingHours: '10.00 AM to 07.00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#1a2744',
        secondaryColor: '#c8a55a',
        fontFamily: 'Inter',
        theme: 'light',
        services: SERVICES.map(s => ({ title: s.title, href: s.href })),
        contactContent: {
          heroTitle: "Let's Connect",
          heroSubtitle: "Ready to discuss how we can help your business? We'd love to hear from you.",
          mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
          description: "Trusted financial advisors delivering excellence in accounting, taxation, and business advisory services since 1995.",
          copyright: "© 2026 Monika S Chartered Accountants. All rights reserved.",
          facebook: "",
          twitter: "",
          linkedin: "",
          instagram: "",
          youtube: "",
        }
      },
    },
    create: {
      name: 'Monika S & Co.',
      slug: 'MonikaS',
      domain: 'https://MonikaS.in',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 123 456 7890',
      email: 't.sharma1991@mail.ca.in',
      address: 'WZ-5E, Dayal Sar Road, Uttam Nagar, New Delhi-110059',
      workingHours: '10.00 AM to 07.00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#1a2744',
        secondaryColor: '#c8a55a',
        fontFamily: 'Inter',
        theme: 'light',
        services: SERVICES.map(s => ({ title: s.title, href: s.href })),
        contactContent: {
          heroTitle: "Let's Connect",
          heroSubtitle: "Ready to discuss how we can help your business? We'd love to hear from you.",
          mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
          description: "Trusted financial advisors delivering excellence in accounting, taxation, and business advisory services since 1995.",
          copyright: "© 2026 Monika S Chartered Accountants. All rights reserved.",
          facebook: "",
          twitter: "",
          linkedin: "",
          instagram: "",
          youtube: "",
        }
      },
    },
  })
  console.log('✅ Monika S (MonikaS) website created')

  await prisma.section.deleteMany({
    where: { page: { websiteId: website.id } }
  })
  await prisma.page.deleteMany({
    where: { websiteId: website.id }
  })

  // Home Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'home',
      title: 'Home - Monika S & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: HERO_SLIDES[0].img,
            textContent: {
              slides: HERO_SLIDES,
              heading: 'Nearly Three Decades of Financial Excellence',
              subheading: 'Monika S — trusted by 2,500+ businesses for taxation, compliance, and strategic financial advisory since 1995.',
              cta: 'Get Started Today',
              secondaryCta: 'Ask a Question',
            },
          },
          {
            type: 'services',
            order: 2,
            textContent: {
              heading: 'Our Services',
              subheading: 'Comprehensive financial solutions tailored to your business needs.',
              items: SERVICES.slice(0, 6),
            },
          },
          {
            type: 'stats',
            order: 3,
            textContent: {
              heading: 'Nearly Three Decades of Financial Excellence',
              description: 'Founded in 1995, Monika S has grown from a small practice to one of India\'s most respected chartered accountancy firms. We combine deep expertise with innovative solutions to help businesses navigate complex financial landscapes.',
              stats: STATS,
            },
          },
          {
            type: 'industries',
            order: 4,
            textContent: {
              heading: 'Industries We Serve',
              subheading: 'Deep domain knowledge across India\'s key economic sectors.',
              items: INDUSTRIES,
            },
          },
          {
            type: 'testimonials',
            order: 5,
            textContent: {
              heading: 'What Our Clients Say',
              items: TESTIMONIALS.concat([
                {
                  name: 'Rohit Sharma',
                  designation: 'Founder, Sharma Traders',
                  review: 'Monika S ne hamare GST aur tax filings ko simplify kar diya — professional, time-bound aur bahut supportive team.',
                  rating: 5,
                  image: ''
                },
                {
                  name: 'Priya Menon',
                  designation: 'CFO, BrightTech Solutions',
                  review: 'Their advisory helped us reduce compliance overhead and improve cashflows. Highly recommended for growing businesses.',
                  rating: 5,
                  image: ''
                },
                {
                  name: 'Sanjay Kapoor',
                  designation: 'Owner, Kapoor Enterprises',
                  review: 'Responsive, knowledgeable and practical — the partners at Monika S provided clear, actionable guidance.',
                  rating: 5,
                  image: ''
                },
              ]),
            },
          },
          {
            type: 'cta',
            order: 6,
            textContent: {
              heading: 'Ready to Transform Your Finances?',
              subheading: 'Let our experts craft a tailored strategy for your business growth.',
              cta: 'Get Started Today',
              secondaryCta: 'Ask a Question',
            },
          },
        ]
      }
    }
  })

  // About Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'about',
      title: 'About Us - Monika S & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'About Monika S',
              subheading: 'Building financial excellence since 1995.',
            },
          },
          {
            type: 'features',
            order: 2,
            textContent: {
              heading: 'Mission & Vision',
              items: [
                { icon: 'Target', title: 'Our Mission', description: 'To empower businesses with precise financial insights, proactive compliance, and strategic advisory that drives sustainable growth and long-term value creation.' },
                { icon: 'Eye', title: 'Our Vision', description: 'To be the most trusted chartered accountancy firm in India, known for integrity, innovation, and an unwavering commitment to client success.' },
              ]
            },
          },
          {
            type: 'text-image',
            order: 3,
            textContent: {
              heading: 'Core Values',
              items: CORE_VALUES,
            },
          },
          {
            type: 'timeline',
            order: 4,
            textContent: {
              heading: 'Our Journey',
              items: COMPANY_TIMELINE,
            },
          },
          {
            type: 'features',
            order: 5,
            textContent: {
              heading: 'Why Choose Us',
              items: WHY_CHOOSE_US,
            },
          },
          {
            type: 'cta',
            order: 6,
            textContent: {
              heading: 'Ready to Work Together?',
              subheading: 'Let our team of experts handle your financial needs with precision and care.',
              cta: 'Get in Touch',
            },
          },
        ]
      }
    }
  })

  // Services Main Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'services',
      title: 'Services - Monika S & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Comprehensive Services',
              subheading: 'Full-spectrum financial services tailored for businesses of every scale.',
            },
          },
          {
            type: 'services',
            order: 2,
            textContent: {
              items: SERVICES,
            },
          },
          {
            type: 'process',
            order: 3,
            textContent: {
              heading: 'Our Approach',
              items: PROCESS_STEPS,
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Ready to get started?',
              subheading: 'Let us help you with the right financial service for your business needs.',
              cta: 'Get in Touch',
            },
          },
        ]
      }
    }
  })

  // Individual Service Pages
  const svcList = [
    { slug: 'bookkeeping', title: 'Bookkeeping' },
    { slug: 'gst-filing', title: 'GST Filing' },
    { slug: 'payroll', title: 'Payroll' },
    { slug: 'tax-planning', title: 'Tax Planning' },
    { slug: 'company-formation', title: 'Company Formation' },
    { slug: 'compliance', title: 'Compliance' },
    { slug: 'audit-services', title: 'Audit Services' },
    { slug: 'financial-advisory', title: 'Financial Advisory' },
  ]
  for (const svc of svcList) {
    const details = SERVICE_DETAILS[svc.slug] || {
      title: svc.title,
      tagline: `Professional ${svc.title} services for your business`,
      heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
      description: '',
      features: [],
      processSteps: [],
      pricingTiers: [],
      faqs: []
    };

    await prisma.page.create({
      data: {
        websiteId: website.id,
        slug: svc.slug,
        title: `${svc.title} - Monika S & Co.`,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: {
          create: [
            {
              type: 'hero',
              order: 1,
              imageUrl: details.heroImage,
              textContent: {
                heading: details.title,
                subheading: details.tagline,
              },
            },
            {
              type: 'text-image',
              order: 2,
              textContent: {
                heading: 'What We Offer',
                description: details.description,
                features: details.features,
              },
            },
            {
              type: 'process',
              order: 3,
              textContent: {
                heading: 'Our Process',
                items: details.processSteps,
              },
            },
            {
              type: 'pricing',
              order: 4,
              textContent: {
                heading: 'Transparent Pricing',
                items: details.pricingTiers,
              },
            },
            {
              type: 'faqs',
              order: 5,
              textContent: {
                heading: 'Frequently Asked Questions',
                items: details.faqs,
              },
            },
          ],
        },
      },
    })
  }

  // Team Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'team',
      title: 'Our Team - Monika S & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600',
            textContent: {
              heading: 'Meet Our Experts',
              subheading: 'A team of seasoned professionals dedicated to your financial success.',
            },
          },
          {
            type: 'team',
            order: 2,
            textContent: {
              heading: 'Our Team',
              items: TEAM_MEMBERS,
            },
          },
          {
            type: 'certifications',
            order: 3,
            textContent: {
              heading: 'Certifications & Recognitions',
              items: CERTIFICATIONS,
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Work With a Partner-Led Team',
              subheading: 'Discuss your goals with specialists who combine strategic thinking with execution excellence.',
              cta: 'Book a Consultation',
            },
          },
        ]
      }
    }
  })

  // Gallery Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'gallery',
      title: 'Gallery - Monika S & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'Our Gallery',
              subheading: 'A glimpse into our professional environment and firm culture.',
            },
          },
          {
            type: 'gallery',
            order: 2,
            textContent: {
              heading: 'Inside Monika S',
              categories: GALLERY_CATEGORIES,
              items: GALLERY_IMAGES,
            },
          },
        ]
      }
    }
  })

  // Contact Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'contact',
      title: 'Contact Us - Monika S & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: "Let's Connect",
              subheading: "Ready to discuss how we can help your business? We'd love to hear from you.",
            },
          },
          {
            type: 'contact',
            order: 2,
            textContent: {
              heading: 'Send Us a Message',
              info: CONTACT_INFO,
              faqs: FAQ_GENERAL,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              heading: 'Prefer to Talk?',
              subheading: 'Schedule a free 30-minute consultation with our experts.',
              cta: 'Call Us Now',
            },
          },
        ]
      }
    }
  })

  // Career Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'career',
      title: 'Careers - Monika S & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600',
            textContent: {
              heading: 'Grow With Monika S',
              subheading: 'Join a team of exceptional professionals and build a rewarding career in finance and accounting.',
            },
          },
          {
            type: 'career',
            order: 2,
            textContent: {
              benefitsHeading: 'Why Work With Us?',
              positionsHeading: 'Open Positions',
              formHeading: 'Apply Now',
              benefits: CAREER_BENEFITS,
              positions: OPEN_POSITIONS,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              heading: 'Build a Meaningful Career',
              subheading: 'Join a high-performance team where mentorship, ownership, and growth are part of everyday work.',
              cta: 'Apply Today',
            },
          },
        ]
      }
    }
  })

  // Query Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'query',
      title: 'Submit a Query - Monika S & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Submit a Query',
              subheading: 'We are here to help. Reach out with any questions about our services.',
            },
          },
          {
            type: 'query-form',
            order: 2,
            textContent: {
              formHeading: 'Send Us a Query',
              formSubheading: 'Fill in the details below and our specialists will get back to you.',
              queryTypes: [
                { value: 'general', label: 'General Inquiry' },
                { value: 'pricing', label: 'Pricing & Packages' },
                { value: 'compliance', label: 'Compliance Issue' },
                { value: 'tax', label: 'Tax Planning' },
                { value: 'audit', label: 'Audit Services' },
                { value: 'other', label: 'Other' },
              ],
            },
          },
          {
            type: 'faqs',
            order: 3,
            textContent: {
              heading: 'Frequently Asked Questions',
              items: FAQ_GENERAL,
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Need Urgent Help?',
              subheading: 'Our response team typically replies within one business day.',
              cta: 'Call Us Now',
            },
          },
        ]
      }
    }
  })

  console.log('  ✅ MonikaS: Pages created')

  // ─── Seed SiteAdmin credentials for /admin route ─────────────────────────────
  const bcrypt = await import('bcryptjs')
  const siteAdminEmail = 'admin@MonikaS.in'
  const siteAdminPassword = 'Admin@123'
  const passwordHash = await bcrypt.hash(siteAdminPassword, 12)

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: website.id },
    update: { email: siteAdminEmail, passwordHash, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: website.id, email: siteAdminEmail, passwordHash },
  })
  console.log(`  ✅ MonikaS: SiteAdmin credentials set — ${siteAdminEmail} / ${siteAdminPassword}`)

  console.log('\n🎉 Database seed for MonikaS completed successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding MonikaS data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
