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
} from './template9-data'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Template 9 (Sharma & Co.) website data...')

  const template6 = await prisma.website.upsert({
    where: { slug: 'template-9' },
    update: {
      name: 'Sharma & Co.',
      domain: 'https://template9.local',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'hello@template9.local',
      address: 'Connaught Place, New Delhi 110001, India',
      workingHours: 'Mon - Fri: 9:30 AM - 6:30 PM, Sat: 10:00 AM - 2:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0D0D0D',
        secondaryColor: '#E08C2E',
        fontFamily: 'Outfit',
        theme: 'dark',
        services: SERVICES.map(s => ({ title: s.title, href: s.href })),
        contactContent: {
           heroTitle: "Get In Touch",
           heroSubtitle: "We are here to help you navigate your financial matters with precision and confidence.",
           mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
           description: "Precision-driven chartered accountancy for the modern enterprise.",
           copyright: "© 2026 Sharma & Co.. All rights reserved.",
           facebook: "",
           twitter: "",
           linkedin: "",
           instagram: "",
           youtube: "",
        }
      },
    },
    create: {
      name: 'Sharma & Co.',
      slug: 'template-9',
      domain: 'https://template9.local',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'hello@template9.local',
      address: 'Connaught Place, New Delhi 110001, India',
      workingHours: 'Mon - Fri: 9:30 AM - 6:30 PM, Sat: 10:00 AM - 2:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0D0D0D',
        secondaryColor: '#E08C2E',
        fontFamily: 'Outfit',
        theme: 'dark',
        services: SERVICES.map(s => ({ title: s.title, href: s.href })),
        contactContent: {
           heroTitle: "Get In Touch",
           heroSubtitle: "We are here to help you navigate your financial matters with precision and confidence.",
           mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
           description: "Precision-driven chartered accountancy for the modern enterprise.",
           copyright: "© 2026 Sharma & Co.. All rights reserved.",
           facebook: "",
           twitter: "",
           linkedin: "",
           instagram: "",
           youtube: "",
        }
      },
    },
  })
  console.log('✅ Sharma & Co. (Template 9) website created')

  await prisma.section.deleteMany({
    where: { page: { websiteId: template6.id } }
  })
  await prisma.page.deleteMany({
    where: { websiteId: template6.id }
  })

  // Home Page
  await prisma.page.create({
    data: {
      websiteId: template6.id,
      slug: 'home',
      title: 'Home - Sharma & Co.',
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
              heading: 'Precision-Driven Accountancy,',
              subHeadingLine2: 'Expert Guidance.',
              subheading: 'Sharma & Co. — trusted by 500+ businesses for taxation, compliance, and strategic financial advisory.',
              label: 'CHARTERED ACCOUNTANTS · EST. 2005',
              tickerItems: ["TAX PLANNING", "GST COMPLIANCE", "AUDIT & ASSURANCE", "COMPANY REGISTRATION", "WEALTH ADVISORY", "FINANCIAL PLANNING"],
              customCards: [
                { label: "CLIENTS", value: "500+", type: "bar" },
                { label: "EXPERIENCE", value: "18 Yrs", type: "dot" },
                { label: "RETAINED", value: "98%", type: "arc" },
              ],
              cta: 'Explore Services',
              secondaryCta: 'Contact Us',
            },
          },
          {
            type: 'stats',
            order: 2,
            textContent: {
              label: 'OUR_NUMBERS',
              heading: 'A Track Record That Speaks',
              footnote: 'LIVE DATA · UPDATED FY 2023–24',
              stats: STATS.map(s => ({ ...s, subtitle: 'Verified & Growing' })),
            },
          },
          {
            type: 'services',
            order: 3,
            textContent: {
              label: 'PRACTICE_AREAS',
              heading: 'What We Excel At',
              subheading: 'Comprehensive financial solutions for your business from Bookkeeping to Financial Advisory.',
              items: SERVICES,
            },
          },
          {
            type: 'text-image',
            order: 4,
            imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900',
            textContent: {
              label: 'WHY_DIGITECHCA',
              heading: 'Excellence Built on Trust',
              subheading: "We don't just file returns — we build financial futures.",
              badge: '18+ Years of Excellence',
              features: [
                { num: "01", title: "18+ Years of Expertise", desc: "Nearly two decades of navigating India's complex regulatory landscape with precision." },
                { num: "02", title: "Personalized Solutions", desc: "Every strategy is custom-built for your unique financial situation and goals." },
                { num: "03", title: "Pan-India Network", desc: "From metro hubs to tier-2 cities, our network spans the entire nation." },
                { num: "04", title: "Zero Compliance Risk", desc: "Zero penalties, zero missed deadlines, complete peace of mind." },
              ],
            },
          },
          {
            type: 'testimonials',
            order: 5,
            textContent: {
              label: 'CLIENT_STORIES',
              heading: 'Trusted By Industry Leaders',
              items: TESTIMONIALS,
            },
          },
          {
            type: 'cta',
            order: 6,
            textContent: {
              label: 'NEXT_STEP',
              bgText: 'CONSULT',
              heading: 'Ready to Transform Your Finances?',
              subheading: 'Partner with us for precision-driven accounting and strategic growth.',
              cta: 'Schedule a Consultation',
              secondaryCta: 'Call Us Now',
              footnote: 'Response within 24 hours · No obligation',
            },
          },
        ]
      }
    }
  })

  // About Page
  await prisma.page.create({
    data: {
      websiteId: template6.id,
      slug: 'about',
      title: 'About Us - Sharma & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              label: 'Our Story',
              heading: 'About Sharma & Co.',
              subheading: 'Building financial excellence since 2006.',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            textContent: {
              label: 'Who We Are',
              heading: 'Our Story',
              paragraphs: [
                'Sharma & Co. was founded in 2006 with a clear mission: to provide transparent, reliable, and world-class financial services to businesses across India. What started as a small practice has grown into a full-service chartered accountancy firm trusted by over 500 clients.',
                'Our team of 45+ professionals brings together deep expertise across audit, taxation, compliance, and financial advisory. We combine traditional accounting excellence with modern technology to deliver efficient, accurate, and insightful financial solutions.',
                'Today, we serve clients ranging from ambitious startups to established enterprises across manufacturing, IT, healthcare, real estate, and professional services sectors.'
              ],
            },
          },
          {
            type: 'features',
            order: 3,
            textContent: {
              label: 'Our Purpose',
              heading: 'Mission & Vision',
              items: [
                { icon: 'Target', title: 'Our Mission', description: 'To empower businesses with precise financial insights, proactive compliance, and strategic advisory that drives sustainable growth and long-term value creation.' },
                { icon: 'Eye', title: 'Our Vision', description: 'To be the most trusted chartered accountancy firm in India, known for integrity, innovation, and an unwavering commitment to client success.' },
              ]
            },
          },
          {
            type: 'text-image',
            order: 4,
            textContent: {
              label: 'Our Foundation',
              heading: 'Core Values',
              items: CORE_VALUES,
            },
          },
          {
            type: 'timeline',
            order: 5,
            textContent: {
              label: 'Our Journey',
              heading: 'Milestones',
              items: COMPANY_TIMELINE,
            },
          },
          {
            type: 'certifications',
            order: 6,
            textContent: {
              label: 'Recognition',
              heading: 'Awards & Certifications',
              items: CERTIFICATIONS,
            },
          },
          {
            type: 'features',
            order: 7,
            textContent: {
              label: 'Our Edge',
              heading: 'Why Choose Us',
              items: [
                'Over 18 years of professional excellence in finance and accounting',
                'Team of 45+ qualified chartered accountants and financial experts',
                '98% client satisfaction rate with personalized service',
                'Comprehensive solutions from audit to advisory under one roof',
                'Proactive compliance management with zero-penalty track record',
                'Technology-driven approach with cloud-based tools and real-time reporting',
              ]
            },
          },
          {
            type: 'cta',
            order: 8,
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
      websiteId: template6.id,
      slug: 'services',
      title: 'Services - Sharma & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              label: 'What We Do',
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
              label: 'How We Work',
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
          {
            type: 'cta',
            order: 5,
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
  const t6services = [
    { slug: 'bookkeeping', title: 'Bookkeeping' },
    { slug: 'gst-filing', title: 'GST Filing' },
    { slug: 'payroll', title: 'Payroll' },
    { slug: 'tax-planning', title: 'Tax Planning' },
    { slug: 'company-formation', title: 'Company Formation' },
    { slug: 'compliance', title: 'Compliance' },
    { slug: 'audit-services', title: 'Audit Services' },
    { slug: 'financial-advisory', title: 'Financial Advisory' },
  ]
  for (const svc of t6services) {
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
        websiteId: template6.id,
        slug: svc.slug,
        title: `${svc.title} - Sharma & Co.`,
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
                featureHeading: 'Key Features',
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
      websiteId: template6.id,
      slug: 'team',
      title: 'Meet Our Experts - Sharma & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              label: 'Our People',
              heading: 'Meet Our Experts',
              subheading: 'A team of seasoned professionals dedicated to your financial success and business growth.',
            },
          },
          {
            type: 'team',
            order: 2,
            textContent: {
              heading: 'Senior Partners',
              subheading: 'Our Team',
              items: TEAM_MEMBERS,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              heading: 'Work With a Partner-Led Team',
              subheading: 'Discuss your goals with specialists who combine strategic thinking with execution excellence.',
              cta: 'Book a Strategy Call',
            },
          },
        ]
      }
    }
  })

  // Gallery Page
  await prisma.page.create({
    data: {
      websiteId: template6.id,
      slug: 'gallery',
      title: 'Our Gallery - Sharma & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              label: 'Our World',
              heading: 'Our Gallery',
              subheading: 'A glimpse into our professional environment and firm culture.',
            },
          },
          {
            type: 'gallery',
            order: 2,
            textContent: {
              heading: 'Inside Our Professional Ecosystem',
              categories: GALLERY_CATEGORIES,
              items: GALLERY_IMAGES,
            },
          },
          {
            type: 'testimonials',
            order: 3,
            textContent: {
              heading: 'What Clients Experience',
              items: TESTIMONIALS,
            },
          },
        ]
      }
    }
  })

  // Contact Page
  await prisma.page.create({
    data: {
      websiteId: template6.id,
      slug: 'contact',
      title: 'Contact Us - Sharma & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              label: 'Reach Out',
              heading: 'Contact Us',
              subheading: 'We would love to hear from you. Let us start a conversation about your financial future.',
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
            type: 'process',
            order: 3,
            textContent: {
              heading: 'What Happens Next',
              items: [
                { title: 'Initial Discussion', description: 'We understand your requirement, business context, and urgency in a 20-minute call.' },
                { title: 'Scope & Strategy', description: 'Our experts map the exact service plan, deliverables, and timeline.' },
                { title: 'Execution Kickoff', description: 'A dedicated advisor and execution team begin implementation immediately.' },
              ],
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Prefer a Direct Consultation?',
              subheading: 'Call us to speak with a senior advisor and get instant direction for your compliance and growth goals.',
              cta: 'Call Our Advisory Desk',
            },
          },
        ]
      }
    }
  })

  // Career Page
  await prisma.page.create({
    data: {
      websiteId: template6.id,
      slug: 'career',
      title: 'Join Our Team - Sharma & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              label: 'Careers',
              heading: 'Join Our Team',
              subheading: 'Build a rewarding career with a leading financial services firm.',
            },
          },
          {
            type: 'career',
            order: 2,
            textContent: {
              benefitsLabel: 'Why Join Us',
              benefitsHeading: 'Benefits & Perks',
              positionsLabel: 'Opportunities',
              positionsHeading: 'Open Positions',
              formLabel: 'Apply Now',
              formHeading: 'Start Your Journey',
              benefits: CAREER_BENEFITS,
              positions: OPEN_POSITIONS,
            },
          },
          {
            type: 'stats',
            order: 3,
            textContent: {
              heading: 'Career Growth in Numbers',
              stats: [
                { label: 'Open Positions', value: 12, suffix: '+' },
                { label: 'Internal Promotions', value: 68, suffix: '%' },
                { label: 'Learning Hours/Year', value: 120, suffix: '+' },
                { label: 'Employee Retention', value: 93, suffix: '%' },
              ],
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Build a Meaningful Finance Career',
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
      websiteId: template6.id,
      slug: 'query',
      title: 'Submit a Query - Sharma & Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              label: 'Ask Us',
              heading: 'Submit a Query',
              subheading: 'Have a specific requirement? Let our experts guide you.',
            },
          },
          {
            type: 'query-form',
            order: 2,
            textContent: {
              formHeading: 'Submit Your Query',
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
              heading: 'Common Query Topics',
              items: FAQ_GENERAL,
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Need Urgent Guidance?',
              subheading: 'Share your requirement now. Our response team typically replies within one business day.',
              cta: 'Submit Priority Query',
            },
          },
        ]
      }
    }
  })

  console.log('  ✅ Template 9: Pages created')

  // ─── Seed SiteAdmin credentials for /admin route ─────────────────────────────
  const bcrypt = await import('bcryptjs')
  const siteAdminEmail = 'admin@template9.local'
  const siteAdminPassword = 'Admin@123'
  const passwordHash = await bcrypt.hash(siteAdminPassword, 12)

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: template6.id },
    update: { email: siteAdminEmail, passwordHash, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: template6.id, email: siteAdminEmail, passwordHash },
  })
  console.log(`  ✅ Template 9: SiteAdmin credentials set — ${siteAdminEmail} / ${siteAdminPassword}`)

  console.log('\n🎉 Database seed for Template 9 completed successfully!')

}

main()
  .catch((e) => {
    console.error('Error seeding Template 9 data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

