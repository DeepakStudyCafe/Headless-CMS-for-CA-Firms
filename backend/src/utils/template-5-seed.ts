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
} from './template5-data'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Template 5 (Vanguard & Co.) website data...')

  const template5 = await prisma.website.upsert({
    where: { slug: 'template-5' },
    update: {
      name: 'Vanguard & Co.',
      domain: 'https://vanguardca.in',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 99999 99999',
      email: 'info@vanguardca.in',
      address: '1204, Tower A, Peninsula Business Park, Senapati Bapat Marg, Lower Parel, Mumbai - 400013, India',
      workingHours: 'Mon - Fri: 9:30 AM - 6:30 PM, Sat: 10:00 AM - 2:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0f172a',
        secondaryColor: '#334155',
        fontFamily: 'Inter',
        theme: 'modern',
        contactContent: {
           heroTitle: "Contact Our Team",
           heroSubtitle: "We are here to help you navigate your financial matters.",
           mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
           description: "Vanguard & Co. provides comprehensive financial and advisory services to help businesses grow securely.",
           copyright: "© 2026 Vanguard & Co. All rights reserved.",
        }
      },
    },
    create: {
      name: 'Vanguard & Co.',
      slug: 'template-5',
      domain: 'https://vanguardca.in',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 99999 99999',
      email: 'info@vanguardca.in',
      address: '1204, Tower A, Peninsula Business Park, Senapati Bapat Marg, Lower Parel, Mumbai - 400013, India',
      workingHours: 'Mon - Fri: 9:30 AM - 6:30 PM, Sat: 10:00 AM - 2:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0f172a',
        secondaryColor: '#334155',
        fontFamily: 'Inter',
        theme: 'modern',
        contactContent: {
           heroTitle: "Contact Our Team",
           heroSubtitle: "We are here to help you navigate your financial matters.",
           mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
           description: "Vanguard & Co. provides comprehensive financial and advisory services to help businesses grow securely.",
           copyright: "© 2026 Vanguard & Co. All rights reserved.",
        }
      },
    },
  })
  console.log('✅ Vanguard & Co. (Template 5) website created')

  await prisma.section.deleteMany({
    where: { page: { websiteId: template5.id } }
  })
  await prisma.page.deleteMany({
    where: { websiteId: template5.id }
  })

  // Home Page
  await prisma.page.create({
    data: {
      websiteId: template5.id,
      slug: 'home',
      title: 'Home - Vanguard & Co.',
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
              heading: 'Precision in Audit',
              subheading: 'Global standards, local expertise.',
              cta: 'Discover Our Services',
            },
          },
          {
            type: 'stats',
            order: 2,
            textContent: {
              heading: 'Our Impact',
              stats: STATS,
            },
          },
          {
            type: 'services',
            order: 3,
            textContent: {
              heading: 'Our Services',
              subheading: 'Comprehensive financial solutions for your business from Bookkeeping to Financial Advisory.',
              items: SERVICES,
            },
          },
          {
            type: 'text-image',
            order: 4,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
            textContent: {
              heading: 'Why Choose Us',
              description: 'We bring over 18 years of professional excellence in finance and accounting, providing personalized services through our team of qualified chartered accountants.',
              features: WHY_CHOOSE_US,
            },
          },
          {
            type: 'testimonials',
            order: 5,
            textContent: {
              heading: 'What Our Clients Say',
              items: TESTIMONIALS,
            },
          },
        ]
      }
    }
  })

  // About Page
  await prisma.page.create({
    data: {
      websiteId: template5.id,
      slug: 'about',
      title: 'About Us - Vanguard & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'About Vanguard & Co.',
              subheading: 'Building financial excellence since 2005.',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            textContent: {
              heading: 'Our Values',
              description: 'We pursue excellence in every deliverable, staying current with evolving regulations and adopting best-in-class methodologies.',
              items: CORE_VALUES, // Using items to map the structured objects
            },
          },
          {
            type: 'timeline',
            order: 3,
            textContent: {
              heading: 'Our Journey',
              items: COMPANY_TIMELINE,
            },
          },
          {
            type: 'certifications',
            order: 4,
            textContent: {
              heading: 'Awards & Certifications',
              items: CERTIFICATIONS,
            },
          },
        ]
      }
    }
  })
  
  // Services Main Page
  await prisma.page.create({
    data: {
      websiteId: template5.id,
      slug: 'services',
      title: 'Services - Vanguard & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Our Services',
              subheading: 'End-to-end financial and corporate services tailored to your needs.',
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
            type: 'industries',
            order: 4,
            textContent: {
              heading: 'Industries We Serve',
              items: INDUSTRIES,
            },
          },
        ]
      }
    }
  })

  // Individual Service Pages
  const t5services = [
    { slug: 'bookkeeping', title: 'Bookkeeping' },
    { slug: 'gst-filing', title: 'GST Filing' },
    { slug: 'payroll', title: 'Payroll' },
    { slug: 'tax-planning', title: 'Tax Planning' },
    { slug: 'company-formation', title: 'Company Formation' },
    { slug: 'compliance', title: 'Compliance' },
    { slug: 'audit-services', title: 'Audit Services' },
    { slug: 'financial-advisory', title: 'Financial Advisory' },
  ]
  for (const svc of t5services) {
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
        websiteId: template5.id,
        slug: svc.slug,
        title: `${svc.title} - Vanguard & Co.`,
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
                description: details.description,
                features: details.features,
              },
            },
            {
              type: 'process',
              order: 3,
              textContent: {
                heading: 'How It Works',
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
      websiteId: template5.id,
      slug: 'team',
      title: 'Meet Our Experts - Vanguard & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Meet Our Experts',
              subheading: 'A team of seasoned professionals dedicated to your financial success and business growth.',
            },
          },
          {
            type: 'team',
            order: 2,
            textContent: {
              items: TEAM_MEMBERS,
            },
          },
        ]
      }
    }
  })

  // Gallery Page
  await prisma.page.create({
    data: {
      websiteId: template5.id,
      slug: 'gallery',
      title: 'Our Gallery - Vanguard & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Our Gallery',
              subheading: 'A glimpse into our professional environment and firm culture.',
            },
          },
          {
            type: 'gallery',
            order: 2,
            textContent: {
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
      websiteId: template5.id,
      slug: 'contact',
      title: 'Contact Us - Vanguard & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Contact Us',
              subheading: 'We would love to hear from you. Let us start a conversation about your financial future.',
            },
          },
          {
            type: 'contact',
            order: 2,
            textContent: {
              info: CONTACT_INFO,
              faqs: FAQ_GENERAL,
            },
          },
        ]
      }
    }
  })

  // Career Page
  await prisma.page.create({
    data: {
      websiteId: template5.id,
      slug: 'career',
      title: 'Join Our Team - Vanguard & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Join Our Team',
              subheading: 'Build a rewarding career with a leading financial services firm.',
            },
          },
          {
            type: 'career',
            order: 2,
            textContent: {
              benefits: CAREER_BENEFITS,
              positions: OPEN_POSITIONS,
            },
          },
        ]
      }
    }
  })

  // Query Page
  await prisma.page.create({
    data: {
      websiteId: template5.id,
      slug: 'query',
      title: 'Submit a Query - Vanguard & Co.',
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
              subheading: 'Have a specific requirement? Let our experts guide you.',
            },
          },
        ]
      }
    }
  })

  console.log('  ✅ Template 5: Pages created')

  // ─── Seed SiteAdmin credentials for /admin route ─────────────────────────────
  const bcrypt = await import('bcryptjs')
  const siteAdminEmail = 'admin@vanguardca.in'
  const siteAdminPassword = 'Admin@123'
  const passwordHash = await bcrypt.hash(siteAdminPassword, 12)

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: template5.id },
    update: { email: siteAdminEmail, passwordHash, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: template5.id, email: siteAdminEmail, passwordHash },
  })
  console.log(`  ✅ Template 5: SiteAdmin credentials set — ${siteAdminEmail} / ${siteAdminPassword}`)

  console.log('\n🎉 Database seed for Template 5 completed successfully!')

}

main()
  .catch((e) => {
    console.error('Error seeding template 5 data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
