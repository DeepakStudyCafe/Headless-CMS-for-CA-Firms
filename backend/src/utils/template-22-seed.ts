import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Template-22 website data...')

  const website = await prisma.website.upsert({
    where: { slug: 'template-22' },
    update: {
      name: 'ABC & Associates',
      domain: 'https://template-22.in',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'hello@abc-associates.in',
      address: 'Mumbai, India',
      workingHours: 'Mon — Sat · 10:00 am to 7:00 pm IST',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#1a2744',
        secondaryColor: '#c8a55a',
        fontFamily: 'Inter',
        theme: 'light',
        services: [
          { title: 'Bookkeeping', href: '/services/bookkeeping' },
          { title: 'GST Filing', href: '/services/gst-filing' },
          { title: 'Payroll', href: '/services/payroll' },
          { title: 'Tax Planning', href: '/services/tax-planning' },
          { title: 'Company Formation', href: '/services/company-formation' },
          { title: 'Compliance', href: '/services/compliance' },
          { title: 'Audit Services', href: '/services/audit-services' },
          { title: 'Financial Advisory', href: '/services/financial-advisory' }
        ],
        contactContent: {
          heroTitle: "Let's Connect",
          heroSubtitle: "Ready to discuss how we can help your business? We'd love to hear from you.",
          mapUrl: '',
        },
        footerContent: {
          description: "A boutique chartered accountancy practice quietly trusted since 2008.",
          copyright: "© 2026 ABC & Associates. All rights reserved.",
          facebook: "",
          twitter: "",
          linkedin: "",
          instagram: "",
          youtube: "",
        }
      },
    },
    create: {
      name: 'ABC & Associates',
      slug: 'template-22',
      domain: 'https://template-22.in',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'hello@abc-associates.in',
      address: 'Mumbai, India',
      workingHours: 'Mon — Sat · 10:00 am to 7:00 pm IST',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#1a2744',
        secondaryColor: '#c8a55a',
        fontFamily: 'Inter',
        theme: 'light',
        services: [
          { title: 'Bookkeeping', href: '/services/bookkeeping' },
          { title: 'GST Filing', href: '/services/gst-filing' },
          { title: 'Payroll', href: '/services/payroll' },
          { title: 'Tax Planning', href: '/services/tax-planning' },
          { title: 'Company Formation', href: '/services/company-formation' },
          { title: 'Compliance', href: '/services/compliance' },
          { title: 'Audit Services', href: '/services/audit-services' },
          { title: 'Financial Advisory', href: '/services/financial-advisory' }
        ],
        contactContent: {
          heroTitle: "Let's Connect",
          heroSubtitle: "Ready to discuss how we can help your business? We'd love to hear from you.",
          mapUrl: '',
        },
        footerContent: {
          description: "A boutique chartered accountancy practice quietly trusted since 2008.",
          copyright: "© 2026 ABC & Associates. All rights reserved.",
          facebook: "",
          twitter: "",
          linkedin: "",
          instagram: "",
          youtube: "",
        }
      },
    },
  })
  console.log('✅ Template-22 website created')

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
            imageUrl: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76',
            textContent: {
              est: 'Est. 2008',
              heading: 'Trusted Chartered Accountants',
              description: 'ABC & Associates — premium chartered accountancy services. Audit, tax, advisory and compliance with elegance and precision.',
              ctaPrimary: 'Get Consultation',
              ctaSecondary: 'Explore Services →',
              statsText: '15+ yrs',
              statsSub: 'of trusted practice'
            },
          },
          {
            type: 'highlights',
            order: 2,
            textContent: {
              items: [
                { icon: 'Award', value: '15+', label: 'Years Experience' },
                { icon: 'Users', value: '500+', label: 'Happy Clients' },
                { icon: 'Briefcase', value: '2.5K+', label: 'Projects Done' },
                { icon: 'Target', value: '100%', label: 'Commitment' }
              ]
            },
          },
          {
            type: 'about',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              estVal: '2008',
              estLabel: 'ESTABLISHED',
              subheading: 'Who We Are',
              heading: 'Our Legacy of Excellence',
              description: 'Since our founding, we have been dedicated to providing exceptional accounting and advisory services. Our team brings together decades of experience to help businesses navigate complex financial landscapes.',
              points: [
                'We uphold the highest ethical standards in all our dealings.',
                'Accuracy and attention to detail are the hallmarks of our work.',
                'We view our client relationships as long-term strategic partnerships.'
              ]
            },
          },
          {
            type: 'services',
            order: 4,
            textContent: {
              subheading: 'Our Expertise',
              heading: 'Tailored Financial Solutions',
              description: 'Comprehensive solutions tailored to meet your financial, compliance, and strategic needs.',
              items: [
                { icon: 'BookOpen', title: 'Bookkeeping', desc: 'Accurate record keeping and financial reporting.', featured: false },
                { icon: 'FileText', title: 'GST Filing', desc: 'Seamless GST compliance and timely returns.', featured: false },
                { icon: 'Calculator', title: 'Tax Planning', desc: 'Strategic tax optimization and advisory.', featured: true }
              ]
            },
          },
          {
            type: 'whyus',
            order: 5,
            textContent: {
              subheading: 'Why Choose Us',
              heading: 'Precision & Partnership',
              items: [
                { icon: 'Shield', title: 'Integrity', desc: 'We uphold the highest ethical standards in all our dealings.' },
                { icon: 'Target', title: 'Precision', desc: 'Accuracy and attention to detail are the hallmarks of our work.' },
                { icon: 'Users', title: 'Partnership', desc: 'We view our client relationships as long-term strategic partnerships.' }
              ]
            },
          },
          {
            type: 'process',
            order: 6,
            textContent: {
              subheading: 'How We Work',
              heading: 'Our Approach',
              steps: [
                { n: '01', title: 'Discovery', desc: 'Understanding your unique business needs and financial goals.' },
                { n: '02', title: 'Strategy', desc: 'Developing a tailored plan for tax, compliance, and growth.' },
                { n: '03', title: 'Execution', desc: 'Implementing the strategy with precision and regular monitoring.' }
              ]
            },
          },
          {
            type: 'team',
            order: 7,
            textContent: {
              subheading: 'Our Experts',
              heading: 'Meet the Team',
              items: [
                { name: 'John Doe', role: 'Managing Partner', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800' },
                { name: 'Jane Smith', role: 'Tax Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800' },
                { name: 'Robert Johnson', role: 'Audit Lead', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800' },
                { name: 'Emily Davis', role: 'Advisory Manager', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800' }
              ]
            },
          },
          {
            type: 'contact',
            order: 8,
            textContent: {
              subheading: 'Get in Touch',
              heading: 'Ready to Work Together?',
              description: 'Reach out to schedule a consultation with our financial experts.',
              panelHeading: 'Contact Info',
              panelDesc: 'We are here to assist you with any questions or services you may need.',
              contacts: [
                { icon: 'Phone', label: 'Call Us', value: '+91 98765 43210' },
                { icon: 'Mail', label: 'Email Us', value: 'hello@abc-associates.in' },
                { icon: 'MapPin', label: 'Visit Us', value: 'Mumbai, India' }
              ]
            },
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
      title: 'About - ABC & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'About Us',
              subheading: 'Learn about our legacy of excellence and commitment to success.',
            },
          },
          {
            type: 'about',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786',
            textContent: {
              heading: 'Our Legacy of Excellence',
              description: 'Since our founding, we have been dedicated to providing exceptional accounting and advisory services. Our team brings together decades of experience to help businesses navigate complex financial landscapes. We pride ourselves on our client-centric approach, ensuring that every solution is tailored to meet the unique needs of the individuals and organizations we serve.',
              valuesHeading: 'Our Core Values',
              values: [
                { icon: 'Shield', title: 'Integrity', desc: 'We uphold the highest ethical standards in all our dealings.' },
                { icon: 'Target', title: 'Precision', desc: 'Accuracy and attention to detail are the hallmarks of our work.' },
                { icon: 'Users', title: 'Partnership', desc: 'We view our client relationships as long-term strategic partnerships.' }
              ]
            },
          }
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
            type: 'services',
            order: 1,
            textContent: {
              heading: 'Our Services',
              description: 'Comprehensive solutions tailored to meet your financial, compliance, and strategic needs.',
              items: [
                { name: 'Bookkeeping', icon: 'BookOpen', path: '/services/bookkeeping', desc: 'Accurate record keeping and financial reporting.' },
                { name: 'GST Filing', icon: 'FileText', path: '/services/gst-filing', desc: 'Seamless GST compliance and timely returns.' },
                { name: 'Payroll', icon: 'Users', path: '/services/payroll', desc: 'Efficient payroll processing for your team.' },
                { name: 'Tax Planning', icon: 'Calculator', path: '/services/tax-planning', desc: 'Strategic tax optimization and advisory.' },
                { name: 'Company Formation', icon: 'Building', path: '/services/company-formation', desc: 'End-to-end support for starting your business.' },
                { name: 'Compliance', icon: 'ShieldCheck', path: '/services/compliance', desc: 'Ensuring adherence to all regulatory norms.' },
                { name: 'Audit Services', icon: 'Search', path: '/services/audit-services', desc: 'Comprehensive financial audits & assurance.' },
                { name: 'Financial Advisory', icon: 'TrendingUp', path: '/services/financial-advisory', desc: 'Expert guidance for business growth.' }
              ]
            },
          }
        ]
      }
    }
  })

  // Individual Service Pages
  const svcList = [
    { slug: 'bookkeeping', title: 'Bookkeeping', desc: "Our bookkeeping services provide a solid foundation for your business's financial clarity." },
    { slug: 'gst-filing', title: 'GST Filing', desc: "Ensure your business stays fully compliant with all local and national GST regulations." },
    { slug: 'payroll', title: 'Payroll', desc: "End-to-end payroll solutions designed to minimize administrative burdens." },
    { slug: 'tax-planning', title: 'Tax Planning', desc: "Strategic tax planning to maximize your returns while ensuring total compliance." },
    { slug: 'company-formation', title: 'Company Formation', desc: "Start your entrepreneurial journey with our comprehensive company formation services." },
    { slug: 'compliance', title: 'Compliance', desc: "Navigate the complex landscape of regulatory requirements with ease." },
    { slug: 'audit-services', title: 'Audit Services', desc: "Thorough, objective, and detailed audits to strengthen your financial integrity." },
    { slug: 'financial-advisory', title: 'Financial Advisory', desc: "Expert advisory to guide your financial decisions and promote business growth." },
  ]
  for (const svc of svcList) {
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
              imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
              textContent: {
                heading: svc.title,
                subheading: `Expert solutions for your ${svc.title.toLowerCase()} needs. Ensuring compliance, accuracy, and strategic growth.`,
              },
            },
            {
              type: 'text-image',
              order: 2,
              textContent: {
                heading: 'Discover Our Approach',
                description: `${svc.desc}\n\nWe provide personalized strategies and continuous monitoring to ensure optimal results.`,
                features: [
                  { title: 'Tailored Approach', description: 'Our tailored approach ensures your business is always ahead.' },
                  { title: '100% Compliant', description: 'Our 100% compliant approach ensures your business is always ahead.' },
                  { title: 'Dedicated Experts', description: 'Our dedicated experts ensures your business is always ahead.' },
                  { title: 'Digital Transformation', description: 'Our digital transformation ensures your business is always ahead.' },
                  { title: 'Real-time Reporting', description: 'Our real-time reporting ensures your business is always ahead.' },
                  { title: 'Error-free Audits', description: 'Our error-free audits ensures your business is always ahead.' }
                ],
              },
            },
            {
              type: 'process',
              order: 3,
              textContent: {
                heading: 'How It Works',
                items: [
                  { title: 'Initial Assessment', description: 'We review your current financial state.' },
                  { title: 'System Integration', description: 'Seamlessly syncing platforms.' },
                  { title: 'Monthly Processing', description: 'Regular tracking of ledgers.' },
                  { title: 'Strategic Review', description: 'Monthly check-ins to discuss adjustments.' },
                ],
              },
            },
            {
              type: 'cta',
              order: 4,
              textContent: {
                heading: 'Ready to Optimize Your Business?',
                description: 'Get in touch with our expert advisors today to streamline your operations.',
                ctaText: 'Consult an Expert',
                ctaLink: '/contact'
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
      title: 'Team - ABC & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'team',
            order: 1,
            textContent: {
              heading: 'Meet Our Experts',
              description: 'A dedicated team of professionals committed to your success.',
              items: [
                { name: 'John Doe', role: 'Managing Partner', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800' },
                { name: 'Jane Smith', role: 'Tax Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800' },
                { name: 'Robert Johnson', role: 'Audit Lead', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800' },
                { name: 'Emily Davis', role: 'Advisory Manager', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800' }
              ]
            },
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
      title: 'Contact - ABC & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'contact',
            order: 1,
            textContent: {
              heading: "Let's Connect",
              description: "Ready to discuss how we can help your business? We'd love to hear from you.",
              address: 'Mumbai, India',
              email: 'hello@abc-associates.in',
              phone: '+91 98765 43210'
            },
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
      title: 'Gallery - ABC & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'Gallery',
              subheading: 'A visual journey through our workplace, milestones, and culture.',
            },
          },
          {
            type: 'gallery',
            order: 2,
            textContent: {
              categories: ['All', 'Office', 'Events', 'Awards'],
              items: [
                { category: 'Office', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c', alt: 'Office' },
                { category: 'Events', src: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a', alt: 'Events' },
                { category: 'Awards', src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1', alt: 'Awards' },
                { category: 'Office', src: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76', alt: 'Office' },
                { category: 'Events', src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06', alt: 'Events' },
              ]
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
      title: 'Careers - ABC & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              heading: 'Build Your Career',
              subheading: 'Join a dynamic team of professionals and grow your expertise in a collaborative environment.',
            },
          },
          {
            type: 'career',
            order: 2,
            textContent: {
              positionsHeading: 'Open Positions',
              formHeading: 'Apply Now',
              positions: [
                { title: 'Tax Consultant', type: 'Full-time', experience: '2-4 Years' },
                { title: 'Audit Executive', type: 'Full-time', experience: '3-5 Years' },
                { title: 'Articled Assistant', type: 'Internship', experience: 'Fresher' }
              ]
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
            textContent: {
              heading: 'Submit a Query',
              subheading: 'Have a specific question? Let our experts guide you to the right solution.',
            },
          },
          {
            type: 'query-form',
            order: 2,
            textContent: {
              formHeading: 'Send Us a Query',
              formSubheading: 'Fill in the details below and our specialists will get back to you.',
              queryTypes: [
                { value: 'Tax Planning', label: 'Tax Planning' },
                { value: 'GST', label: 'GST' },
                { value: 'Audit', label: 'Audit' },
                { value: 'Other', label: 'Other' },
              ],
            },
          },
        ]
      }
    }
  })

  console.log('  ✅ Template-22: Pages created')

  // Seed SiteAdmin credentials
  const bcrypt = await import('bcryptjs')
  const siteAdminEmail = 'admin@template-22.in'
  const siteAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'ChangeMe@123'
  const passwordHash = await bcrypt.hash(siteAdminPassword, 12)

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: website.id },
    update: { email: siteAdminEmail, passwordHash, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: website.id, email: siteAdminEmail, passwordHash },
  })
  console.log(`  ✅ Template-22: SiteAdmin credentials set`)

  console.log('\n🎉 Database seed for Template-22 completed successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding Template-22 data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
