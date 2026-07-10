import { PrismaClient } from '@prisma/client';
import {
  HERO_SLIDES,
  STATS,
  SERVICES,
  WHY_CHOOSE_US,
  TEAM_MEMBERS,
  CORE_VALUES,
  MISSION_VISION,
  CERTIFICATIONS,
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  CAREER_BENEFITS,
  CONTACT_INFO,
  FAQ_GENERAL,
  SERVICE_DETAILS
} from './template-16-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Template-16 website data...');

  const template16 = await prisma.website.upsert({
    where: { slug: 'template-16' },
    update: {
      name: 'Template 16 CA Firm',
      domain: 'https://template-16.local/',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'contact@abcassociates.com',
      address: '501, Corporate Tower, MG Road, Mumbai 400001',
      workingHours: 'Mon - Fri: 10:00 AM - 7:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0ea5e9',
        secondaryColor: '#f8fafc',
        fontFamily: 'Inter',
        theme: 'modern',
        contactContent: {
          heroTitle: "Contact Our Team",
          heroSubtitle: "Looking for expert advice or ready to start a project? Reach out to us.",
          mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
          description: "Delivering financial clarity and strategic growth with unparalleled expertise.",
          copyright: "© 2026 ABC Associates. All rights reserved.",
        }
      },
    },
    create: {
      name: 'Template 16 CA Firm',
      slug: 'template-16',
      domain: 'https://template-16.local/',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'contact@abcassociates.com',
      address: '501, Corporate Tower, MG Road, Mumbai 400001',
      workingHours: 'Mon - Fri: 10:00 AM - 7:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0ea5e9',
        secondaryColor: '#f8fafc',
        fontFamily: 'Inter',
        theme: 'modern',
        contactContent: {
          heroTitle: "Contact Our Team",
          heroSubtitle: "Looking for expert advice or ready to start a project? Reach out to us.",
          mapUrl: CONTACT_INFO.mapEmbedUrl,
        },
        footerContent: {
          description: "Delivering financial clarity and strategic growth with unparalleled expertise.",
          copyright: "© 2026 ABC Associates. All rights reserved.",
        }
      },
    },
  });
  console.log('✅ Template-16 website created');

  await prisma.section.deleteMany({
    where: { page: { websiteId: template16.id } }
  });
  await prisma.page.deleteMany({
    where: { websiteId: template16.id }
  });

  // Home Page
  await prisma.page.create({
    data: {
      websiteId: template16.id,
      slug: 'home',
      title: 'Home - Template-16',
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
              heading: HERO_SLIDES[0].title,
              subheading: HERO_SLIDES[0].subtitle,
              cta: 'Discover Our Services',
            },
          },
          {
            type: 'services',
            order: 2,
            textContent: {
              heading: 'Our Services',
              subheading: 'one trusted partner for every financial need.',
              items: SERVICES.slice(0, 6), // Assuming Home shows 6
            },
          },
          {
            type: 'text-image',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
            textContent: {
              heading: 'About Us',
              description: 'We are a premier Chartered Accountancy firm dedicated to delivering financial clarity and strategic growth. With over a decade of excellence, we partner with businesses to navigate complex regulatory landscapes.',
              stats: STATS,
              features: [
                "ICAI-registered partners with 15+ years of experience",
                "Integrated tax, audit, and advisory under one roof",
                "Proactive compliance with personalised attention"
              ]
            },
          },
          {
            type: 'why-us',
            order: 4,
            textContent: {
              heading: 'Why Choose Us',
              items: WHY_CHOOSE_US,
            },
          },
          {
            type: 'team',
            order: 5,
            textContent: {
              heading: 'Our Team',
              title: 'Meet the experts behind your numbers',
              items: TEAM_MEMBERS
            }
          },
          {
            type: 'contact',
            order: 6,
            textContent: {
              heading: 'Get in Touch',
              title: "Let's talk about your financial goals",
              description: 'Send us a query and one of our partners will respond within one business day.',
              items: [
                { icon: 'MapPin', title: 'Office Address', description: CONTACT_INFO.address },
                { icon: 'Phone', title: 'Phone', description: CONTACT_INFO.phone },
                { icon: 'Mail', title: 'Email', description: CONTACT_INFO.email }
              ],
              formLabels: {
                name: "Your Name",
                email: "Email Address",
                phone: "Phone Number",
                message: "Your Message",
                button: "Send Message"
              }
            }
          }
        ]
      }
    }
  });

  // About Page
  await prisma.page.create({
    data: {
      websiteId: template16.id,
      slug: 'about',
      title: 'About Us - Template-16',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
            textContent: {
              heading: 'About Us',
              subheading: 'Delivering financial clarity and strategic growth with unparalleled expertise.',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
            textContent: {
              heading: 'Our Story',
              description: 'Founded with a vision to redefine financial consultancy, our firm has grown into a trusted partner for businesses across the globe. We combine traditional financial wisdom with modern technological solutions to deliver outcomes that truly matter.',
            },
          },
          {
            type: 'mission-vision',
            order: 3,
            textContent: {
              heading: 'Mission & Vision',
              items: MISSION_VISION,
            },
          },
          {
            type: 'values',
            order: 4,
            textContent: {
              heading: 'Core Values',
              items: CORE_VALUES,
            },
          },
          {
            type: 'certifications',
            order: 5,
            textContent: {
              heading: 'Certifications',
              items: CERTIFICATIONS,
            },
          },
        ]
      }
    }
  });

  // Services Main Page
  await prisma.page.create({
    data: {
      websiteId: template16.id,
      slug: 'services',
      title: 'Services - Template-16',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'Our Services',
              subheading: 'Comprehensive financial expertise',
              description: 'From day-to-day compliance to high-stakes advisory — one trusted partner for every financial need.'
            },
          },
          {
            type: 'services',
            order: 2,
            textContent: {
              items: SERVICES,
            },
          },
        ]
      }
    }
  });

  // Individual Service Pages
  const t16services = [
    { slug: 'bookkeeping', title: 'Bookkeeping' },
    { slug: 'gst-filing', title: 'GST Filing' },
    { slug: 'payroll', title: 'Payroll' },
    { slug: 'tax-planning', title: 'Tax Planning' },
    { slug: 'company-formation', title: 'Company Formation' },
    { slug: 'compliance', title: 'Compliance' },
    { slug: 'audit-services', title: 'Audit Services' },
    { slug: 'financial-advisory', title: 'Financial Advisory' },
  ];

  for (const svc of t16services) {
    const details = SERVICE_DETAILS[svc.slug] || {
      title: svc.title,
      tagline: `Professional ${svc.title} services`,
      description: '',
      features: [],
      processSteps: [],
      faqs: []
    };
    
    await prisma.page.create({
      data: {
        websiteId: template16.id,
        slug: svc.slug,
        title: `${svc.title} - Template-16`,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: {
          create: [
            {
              type: 'hero',
              order: 1,
              textContent: {
                heading: details.title,
                subheading: details.tagline,
                description: details.description.split('\n')[0],
              },
            },
            {
              type: 'overview',
              order: 2,
              imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
              textContent: {
                heading: 'Overview',
                title: details.title,
                description: details.description,
              },
            },
            {
              type: 'features',
              order: 3,
              textContent: {
                heading: 'Key Benefits',
                title: `Why Choose Our ${details.title}`,
                items: details.features,
              },
            },
            {
              type: 'process',
              order: 4,
              textContent: {
                heading: 'Our Process',
                title: 'How It Works',
                items: details.processSteps,
              },
            },
            {
              type: 'faqs',
              order: 5,
              textContent: {
                heading: 'Questions',
                title: 'Frequently Asked',
                items: details.faqs,
              },
            },
          ],
        },
      },
    });
  }

  // Team Page
  await prisma.page.create({
    data: {
      websiteId: template16.id,
      slug: 'team',
      title: 'Our Team - Template-16',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'Leadership',
              title: 'Meet the minds behind our success',
              description: 'Our partners bring decades of combined experience across diverse sectors, ensuring you receive world-class advisory tailored to your unique challenges.',
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
  });

  // Gallery Page
  await prisma.page.create({
    data: {
      websiteId: template16.id,
      slug: 'gallery',
      title: 'Gallery - Template-16',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'Our Life',
              title: 'Moments of Excellence',
              description: 'A glimpse into our professional environment, firm culture, and the milestones we celebrate together.',
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
  });

  // Query Page
  await prisma.page.create({
    data: {
      websiteId: template16.id,
      slug: 'query',
      title: 'Submit a Query - Template-16',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'Support',
              title: 'How can we help you today?',
              description: 'Whether you need comprehensive audit services, tax planning, or corporate compliance, our experts are ready to assist you.',
            },
          },
          {
            type: 'faqs',
            order: 2,
            textContent: {
              heading: 'FAQs',
              title: 'Frequently Asked Questions',
              items: FAQ_GENERAL,
            },
          }
        ]
      }
    }
  });

  // Career Page
  await prisma.page.create({
    data: {
      websiteId: template16.id,
      slug: 'career',
      title: 'Careers - Template-16',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'Careers',
              title: 'Build your future with us',
              description: 'Join a team of driven professionals who are redefining excellence in financial services. We foster a culture of continuous learning and growth.',
            },
          },
          {
            type: 'culture',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
            textContent: {
              heading: 'Our Culture',
              title: 'A workplace that inspires',
              description: 'We believe that our greatest asset is our people. Our culture is built on mutual respect, continuous learning, and a shared passion for excellence. We provide an environment where innovative ideas are encouraged and professional growth is nurtured.',
              features: [
                "Collaborative team environment",
                "Continuous professional development",
                "Mentorship from industry veterans"
              ]
            }
          },
          {
            type: 'benefits',
            order: 3,
            textContent: {
              heading: 'Perks',
              title: 'Why work with us?',
              items: CAREER_BENEFITS,
            },
          },
        ]
      }
    }
  });

  // Contact Page
  await prisma.page.create({
    data: {
      websiteId: template16.id,
      slug: 'contact',
      title: 'Contact Us - Template-16',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'Reach Out',
              title: 'We are here to connect',
              description: 'Looking for expert advice or ready to start a project? Reach out to us.',
            },
          },
          {
            type: 'contact',
            order: 2,
            textContent: {
              info: CONTACT_INFO,
              heading: 'Get in Touch',
              title: "Let's talk about your financial goals",
              description: 'Send us a query and one of our partners will respond within one business day.',
              items: [
                { icon: 'MapPin', title: 'Office Address', description: CONTACT_INFO.address },
                { icon: 'Phone', title: 'Phone', description: CONTACT_INFO.phone },
                { icon: 'Mail', title: 'Email', description: CONTACT_INFO.email }
              ],
              formLabels: {
                name: "Your Name",
                email: "Email Address",
                phone: "Phone Number",
                message: "Your Message",
                button: "Send Message"
              }
            },
          },
          {
            type: 'quick-contact',
            order: 3,
            textContent: {
              items: [
                { icon: 'Phone', title: 'Support', description: 'Available 9AM - 6PM' },
                { icon: 'Mail', title: 'Email', description: 'contact@abcassociates.com' },
                { icon: 'MapPin', title: 'Visit', description: 'Mumbai, India' }
              ]
            }
          },
          {
            type: 'map',
            order: 4,
            textContent: {
              mapUrl: CONTACT_INFO.mapEmbedUrl
            }
          }
        ]
      }
    }
  });

  console.log('  ✅ Template-16: Pages created');

  const bcrypt = await import('bcryptjs');
  const siteAdminEmail = 'admin@template-16.local';
  const siteAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'ChangeMe@123';
  const passwordHash = await bcrypt.hash(siteAdminPassword, 12);

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: template16.id },
    update: { email: siteAdminEmail, passwordHash, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: template16.id, email: siteAdminEmail, passwordHash },
  });
  console.log(`  ✅ Template-16: SiteAdmin credentials set — ${siteAdminEmail} / ${siteAdminPassword}`);

  console.log('\n🎉 Database seed for Template-16 completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding Template-16 data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
