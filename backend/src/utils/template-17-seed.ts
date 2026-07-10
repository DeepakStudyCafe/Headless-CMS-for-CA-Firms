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
} from './template-17-data'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Template-17 website data...')

  const website = await prisma.website.upsert({
    where: { slug: 'template-17' },
    update: {
      name: 'ABC & Associates',
      domain: 'https://template-17.example.com/',
      logo: 'https://api.digitechai.in/uploads/logo.png', // Or fallback if empty
      phone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      address: CONTACT_INFO.address,
      workingHours: 'Monday - Saturday: 09:00 AM - 7:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0f172a',
        secondaryColor: '#334155',
        fontFamily: 'Inter',
        theme: 'modern',
        contactContent: {
           heroTitle: "Contact Us",
           heroSubtitle: "We would love to hear from you. Let us start a conversation about your financial future.",
           mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
           description: "ABC & Associates partners with businesses and individuals to deliver clear, compliant and growth-focused financial services — from audit and taxation to advisory and business compliance.",
           copyright: "© 2026 ABC & Associates. All rights reserved.",
        }
      },
    },
    create: {
      name: 'ABC & Associates',
      slug: 'template-17',
      domain: 'https://template-17.example.com/',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      address: CONTACT_INFO.address,
      workingHours: 'Monday - Saturday: 09:00 AM - 7:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0f172a',
        secondaryColor: '#334155',
        fontFamily: 'Inter',
        theme: 'modern',
        contactContent: {
           heroTitle: "Contact Us",
           heroSubtitle: "We would love to hear from you. Let us start a conversation about your financial future.",
           mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
           description: "ABC & Associates partners with businesses and individuals to deliver clear, compliant and growth-focused financial services — from audit and taxation to advisory and business compliance.",
           copyright: "© 2026 ABC & Associates. All rights reserved.",
        }
      },
    },
  })
  console.log('✅ Template-17 website created')

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
      title: 'Home - ABC & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: HERO_SLIDES[0].img,
            textContent: {
              heading: HERO_SLIDES[0].title,
              subheading: HERO_SLIDES[0].subtitle,
              cta: HERO_SLIDES[0].cta,
            },
          },
          {
            type: 'stats',
            order: 2,
            textContent: {
              stats: STATS,
            },
          },
          {
            type: 'services',
            order: 3,
            textContent: {
              heading: 'Services built around your business',
              subheading: 'From compliance to strategic advisory, we deliver an end-to-end suite of services tailored to your industry and stage of growth.',
              items: SERVICES,
            },
          },
          {
            type: 'text-image',
            order: 4,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80',
            textContent: {
              heading: 'Two decades of trusted financial expertise',
              description: 'ABC & Associates is a full-service Chartered Accountancy firm based in India, serving private companies, startups, public enterprises and individuals. Our partners bring deep technical expertise across audit, tax and advisory — combined with a personal commitment to every client we serve.',
              features: WHY_CHOOSE_US,
            },
          },
          {
            type: 'testimonials',
            order: 5,
            textContent: {
              heading: 'What our clients say about us',
              subheading: 'We take pride in building long-lasting relationships with our clients through exceptional service.',
              items: TESTIMONIALS,
            },
          },
          {
            type: 'cta',
            order: 6,
            textContent: {
              heading: 'Ready to simplify your finances?',
              subheading: 'Talk to a partner today — no obligation, just clear advice.',
              cta: 'Get a Free Quote'
            }
          }
        ]
      }
    }
  })

  // About Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'about',
      title: 'About Us - ABC & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'About ABC & Associates',
              subheading: 'Building financial excellence since 2005.',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            textContent: {
              heading: 'Our Vision & Values',
              description: 'We believe that accounting is more than just numbers — it\'s about providing clarity, direction, and strategic foresight. Our vision is to be the most trusted financial advisory firm in India, known for our uncompromising integrity and technical excellence.\n\nOver the past two decades, we have built a culture that prioritizes client success above all else. Our team of experienced Chartered Accountants stays ahead of the curve, constantly adapting to new tax laws, economic shifts, and industry trends to ensure your business remains compliant and competitive.',
              items: CORE_VALUES, 
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
      websiteId: website.id,
      slug: 'services',
      title: 'Services - ABC & Associates',
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
        websiteId: website.id,
        slug: svc.slug,
        title: `${svc.title} - ABC & Associates`,
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
              type: 'overview',
              order: 2,
              imageUrl: details.heroImage,
              textContent: {
                heading: 'Overview',
                eyebrow: 'Overview',
                description: details.description,
              },
            },
            {
              type: 'features',
              order: 3,
              textContent: {
                heading: 'Key Features',
                eyebrow: 'What We Do',
                items: details.features,
              },
            },
            {
              type: 'benefits',
              order: 4,
              textContent: {
                heading: 'The Advantage',
                eyebrow: 'Benefits',
                items: details.benefits || [],
              },
            },
            {
              type: 'process',
              order: 5,
              textContent: {
                heading: 'How It Works',
                eyebrow: 'Our Process',
                items: details.processSteps,
              },
            },
            {
              type: 'why-choose-us',
              order: 6,
              textContent: {
                heading: 'Why Choose Us',
                eyebrow: 'Expertise',
                items: details.whyChooseUs || [],
              },
            },
            {
              type: 'faq',
              order: 7,
              textContent: {
                heading: 'Frequently Asked',
                eyebrow: 'Questions',
                items: details.faqs,
              },
            },
            {
              type: 'cta',
              order: 8,
              textContent: {
                heading: details.cta?.heading || 'Get Started',
                subheading: details.cta?.subheading || 'Contact us today.',
                cta: details.cta?.button || 'Contact Us'
              }
            },
            {
              type: 'related-services',
              order: 9,
              textContent: {
                heading: 'Related Services',
                eyebrow: 'Explore',
                items: details.relatedServices || SERVICES.slice(0, 3),
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
      title: 'Our Professionals - ABC & Associates',
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
            type: 'team-grid',
            order: 2,
            textContent: {
              leadershipHeading: 'Our Senior Partners',
              leadershipEyebrow: 'Leadership',
              teamHeading: 'Our Professionals',
              teamEyebrow: 'The Team',
              items: TEAM_MEMBERS,
            },
          },
          {
            type: 'stats',
            order: 3,
            textContent: {
              stats: STATS,
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Ready to join us?',
              subheading: 'We are always looking for talented professionals to join our growing team.',
              cta: 'View Openings'
            }
          }
        ]
      }
    }
  })

  // Gallery Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'gallery',
      title: 'Our Gallery - ABC & Associates',
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
            type: 'gallery-grid',
            order: 2,
            textContent: {
              heading: 'Our Gallery',
              subheading: 'Visual Stories',
              categories: GALLERY_CATEGORIES,
              items: GALLERY_IMAGES,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              heading: 'Let’s Work Together',
              subheading: 'Get in touch with us to discuss your financial requirements.',
              cta: 'Contact Us'
            }
          }
        ]
      }
    }
  })

  // Contact Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'contact',
      title: 'Contact Us - ABC & Associates',
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
      websiteId: website.id,
      slug: 'career',
      title: 'Join Our Team - ABC & Associates',
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
            type: 'text-image',
            order: 2,
            textContent: {
              heading: 'Company Culture',
              description: 'We believe that our people are our greatest asset. Our culture is built on continuous learning, integrity, and collaboration.',
            },
          },
          {
            type: 'features',
            order: 3,
            textContent: {
              heading: 'Benefits & Perks',
              items: CAREER_BENEFITS,
            },
          },
          {
            type: 'job-openings',
            order: 4,
            textContent: {
              heading: 'Current Opportunities',
              items: OPEN_POSITIONS,
            },
          },
          {
            type: 'form',
            order: 5,
            textContent: {
              heading: 'Start Your Journey',
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
      title: 'Submit a Query - ABC & Associates',
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
          {
            type: 'faqs',
            order: 2,
            textContent: {
              heading: 'Frequently Asked Questions',
              items: FAQ_GENERAL
            }
          }
        ]
      }
    }
  })

  console.log('  ✅ Template-17: Pages created')

  // ─── Seed SiteAdmin credentials for /admin route ─────────────────────────────
  const bcrypt = await import('bcryptjs')
  const siteAdminEmail = 'admin@template-17.example.com'
  const siteAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'ChangeMe@123'
  const passwordHash = await bcrypt.hash(siteAdminPassword, 12)

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: website.id },
    update: { email: siteAdminEmail, passwordHash, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: website.id, email: siteAdminEmail, passwordHash },
  })
  console.log(`  ✅ Template-17: SiteAdmin credentials set — ${siteAdminEmail} / ${siteAdminPassword}`)

  console.log('\n🎉 Database seed for Template-17 completed successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding Template-17 data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
