import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding Satyug corporate consultancy pvt ltd...')

  // Upsert website
  const satyug = await prisma.website.upsert({
    where: { slug: 'satyug-corporate-consultancy' },
    update: {
      name: 'Satyug corporate consultancy pvt ltd',
      domain: 'https://satyugcorporateconsultancy.com/',
      logo: '/uploads/logo.svg',
      phone: '+91 9276159122',
      email: 'satyugconsultancy@gmail.com',
      address: '503, Shayona, Nr. Jay Gangeshwar Society, Hirabaug, Varachha Road, Surat-395006.',
      workingHours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      themeConfig: {
        primaryColor: '#1e3a8a', // Deep Blue
        secondaryColor: '#f59e0b', // Amber
        fontFamily: 'Inter',
        theme: 'modern',
      },
    },
    create: {
      name: 'Satyug corporate consultancy pvt ltd',
      slug: 'satyug-corporate-consultancy',
      domain: 'https://satyugcorporateconsultancy.com/',
      logo: '/uploads/logo.svg',
      phone: '+91 9276159122',
      email: 'satyugconsultancy@gmail.com',
      address: '503, Shayona, Nr. Jay Gangeshwar Society, Hirabaug, Varachha Road, Surat-395006.',
      workingHours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      themeConfig: {
        primaryColor: '#1e3a8a',
        secondaryColor: '#f59e0b',
        fontFamily: 'Inter',
        theme: 'modern',
      },
    },
  })

  console.log('✅ Satyug corporate consultancy pvt ltd website created/updated')

  // Create pages (home, about, team, gallery)
  // Create or update Home page
  const existingHome = await prisma.page.findUnique({
    where: { websiteId_slug: { websiteId: satyug.id, slug: 'home' } },
    include: { sections: true },
  })

  const homeSections = [
    {
      type: 'hero',
      order: 1,
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      textContent: {
        heading: 'Strategic Excellence in Corporate Consulting',
        subheading: 'Empowering your business with insightful strategies and robust solutions.',
        cta: 'Connect With Us',
      },
    },
    {
      type: 'text-image',
      order: 2,
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      textContent: {
        heading: 'Global Business Solutions',
        subheading: 'Expertise across various industries',
        description: 'Satyug Corporate Consultancy Pvt Ltd is a premier consulting firm dedicated to providing top-tier strategic advisory, financial management, and operational excellence solutions.',
        features: ['Strategic Advisory', 'Financial Planning', 'Market Analysis', 'Risk Management'],
      },
    },
    {
      type: 'services',
      order: 3,
      imageUrl: null,
      textContent: {
        heading: 'Our Core Services',
        subheading: 'Comprehensive solutions for business growth',
        items: [
          { icon: 'briefcase', title: 'Corporate Strategy', description: 'Long-term planning and strategic alignment for sustainable growth.' },
          { icon: 'trending-up', title: 'Financial Advisory', description: 'Comprehensive financial planning and capital structure optimization.' },
          { icon: 'shield-check', title: 'Risk & Compliance', description: 'Ensuring your business meets all regulatory requirements.' },
          { icon: 'users', title: 'HR Consulting', description: 'Talent management and organizational development strategies.' },
          { icon: 'globe', title: 'Global Expansion', description: 'Guidance for entering and succeeding in international markets.' },
          { icon: 'bar-chart', title: 'Operations Consulting', description: 'Optimizing internal processes for maximum efficiency.' },
        ],
      },
    },
    {
      type: 'stats',
      order: 4,
      imageUrl: null,
      textContent: {
        heading: 'Our Global Presence',
        stats: [
          { value: '500+', label: 'Projects Delivered' },
          { value: '20+', label: 'Years of Experience' },
          { value: '50+', label: 'Industry Experts' },
          { value: '15+', label: 'Countries Served' },
        ],
      },
    },
    {
      type: 'cta',
      order: 5,
      imageUrl: null,
      textContent: {
        heading: 'Scale Your Business Today',
        description: 'Partner with Satyug for innovative solutions that drive real results.',
        cta: 'Contact Our Experts',
      },
    },
  ]

  if (existingHome) {
    await prisma.section.deleteMany({ where: { pageId: existingHome.id } })
    await prisma.page.update({
      where: { id: existingHome.id },
      data: {
        title: 'Home - Satyug corporate consultancy pvt ltd',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: { create: homeSections },
      },
    })
    console.log('Home page updated')
  } else {
    await prisma.page.create({
      data: {
        websiteId: satyug.id,
        slug: 'home',
        title: 'Home - Satyug corporate consultancy pvt ltd',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: { create: homeSections },
      },
    })
    console.log('Home page created')
  }

  // Create or update About page
  const existingAbout = await prisma.page.findUnique({
    where: { websiteId_slug: { websiteId: satyug.id, slug: 'about' } },
    include: { sections: true },
  })

  const aboutSections = [
    {
      type: 'hero',
      order: 1,
      imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600',
      textContent: {
        heading: 'About Satyug',
        subheading: 'Defining the gold standard in corporate consultancy',
      },
    },
    {
      type: 'text-image',
      order: 2,
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      textContent: {
        heading: 'Legacy of Excellence',
        description: 'With over two decades of experience, Satyug has been at the forefront of business innovation. We believe in creating lasting value for our clients through rigorous analysis and creative thinking.',
        features: ['Global Network', 'Expert Consultants', 'Proven Methodology', 'Client-Centric Approach'],
      },
    },
    {
      type: 'text-image',
      order: 3,
      imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
      textContent: {
        heading: 'Our Vision',
        description: 'To be the world\'s most influential consulting firm, transforming businesses and societies for a better future.',
        features: ['Integrity', 'Innovation', 'Collaboration', 'Impact'],
      },
    },
  ]

  if (existingAbout) {
    await prisma.section.deleteMany({ where: { pageId: existingAbout.id } })
    await prisma.page.update({
      where: { id: existingAbout.id },
      data: {
        title: 'About Us - Satyug corporate consultancy pvt ltd',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: { create: aboutSections },
      },
    })
    console.log('About page updated')
  } else {
    await prisma.page.create({
      data: {
        websiteId: satyug.id,
        slug: 'about',
        title: 'About Us - Satyug corporate consultancy pvt ltd',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: { create: aboutSections },
      },
    })
    console.log('About page created')
  }

  // Create or update Team page
  try {
    await prisma.page.create({
      data: {
        websiteId: satyug.id,
        slug: 'team',
        title: 'Our Team - Satyug corporate consultancy pvt ltd',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: {
          create: [
            {
              type: 'hero',
              order: 1,
              imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
              textContent: {
                heading: 'Our Leadership Team',
                subheading: 'Visionary leaders driving corporate transformation.',
              },
            },
            {
              type: 'team',
              order: 2,
              imageUrl: null,
              textContent: {
                heading: 'Executive Board',
                description: 'Our team of world-class consultants and industry veterans.',
                items: [
                  { name: 'Mr. Satyajit Singh', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', description: 'Strategic visionary with 25+ years experience.' },
                  { name: 'Ms. Ananya Roy', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', description: 'Expert in global operations and market entry.' },
                  { name: 'Mr. Vikram Malhotra', role: 'Director - Finance', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', description: 'Leading financial strategist and investment advisor.' },
                  { name: 'Ms. Ritu Verma', role: 'Director - HR', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400', description: 'Specialist in organizational development.' },
                ],
              },
            },
          ],
        },
      },
    })
    console.log('Team page created')
  } catch (err: any) {
    console.log('Team page handling...')
  }

  // Create or update Gallery page
  try {
    await prisma.page.create({
      data: {
        websiteId: satyug.id,
        slug: 'gallery',
        title: 'Gallery - Satyug corporate consultancy pvt ltd',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: {
          create: [
            {
              type: 'hero',
              order: 1,
              imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
              textContent: {
                heading: 'Inside Satyug',
                subheading: 'Our workspace and global engagements.',
              },
            },
            {
              type: 'gallery',
              order: 2,
              imageUrl: null,
              textContent: {
                heading: 'Our Global Offices',
                description: 'A look into our collaborative and innovative environment.',
                items: [
                  { title: 'Global Headquarters', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600' },
                  { title: 'Innovation Center', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
                  { title: 'Collaboration Lounge', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600' },
                  { title: 'Conference Hall', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600' },
                  { title: 'Tech Suite', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600' },
                  { title: 'Advisory Lounge', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' },
                ],
              },
            },
          ],
        },
      },
    })
    console.log('Gallery page created')
  } catch (err: any) {
    console.log('Gallery page handling...')
  }

  // Additional pages
  const pages = [
    { slug: 'services', title: 'Services', heading: 'Our Expertise', subheading: 'Specialized consulting for modern challenges.' },
    { slug: 'query', title: 'Query', heading: 'Submit a Query', subheading: 'We are here to answer your business questions.' },
    { slug: 'career', title: 'Careers', heading: 'Join Satyug', subheading: 'Build a meaningful career in consulting.' },
    { slug: 'contact', title: 'Contact', heading: 'Contact Us', subheading: 'Get in touch with our global team.' },
  ]

  for (const page of pages) {
    try {
      await prisma.page.create({
        data: {
          websiteId: satyug.id,
          slug: page.slug,
          title: `${page.title} - Satyug corporate consultancy pvt ltd`,
          status: 'PUBLISHED',
          publishedAt: new Date(),
          sections: {
            create: [
              {
                type: 'hero',
                order: 1,
                imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
                textContent: {
                  heading: page.heading,
                  subheading: page.subheading,
                },
              },
              {
                type: 'text-image',
                order: 2,
                imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
                textContent: {
                  heading: `${page.title} Details`,
                  description: `Explore ${page.title.toLowerCase()} at Satyug corporate consultancy pvt ltd and see how we make a difference.`,
                  features: ['Global Expertise', 'Data-Driven Insights', 'Customized Solutions', 'Ongoing Support'],
                },
              },
            ],
          },
        },
      })
    } catch (err: any) {}
  }
  
  // Service pages (8 services matching the template structure)
  const services = [
    {
      slug: 'bookkeeping',
      title: 'Corporate Bookkeeping - Satyug',
      heroHeading: 'Precision Bookkeeping Solutions',
      heroSubheading: 'Reliable financial record-keeping for your business growth.',
      heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600',
      contentHeading: 'Comprehensive Bookkeeping',
      contentDescription: 'We provide end-to-end bookkeeping services that ensure your financial records are always accurate and up-to-date.',
      features: ['Daily Ledger Maintenance', 'Bank Reconciliation', 'Accounts Payable/Receivable', 'Financial Statement Prep', 'Expense Tracking'],
      contentImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      slug: 'gst-filing',
      title: 'GST Compliance - Satyug',
      heroHeading: 'Hassle-Free GST Management',
      heroSubheading: 'Expert assistance in GST registration, filing, and compliance.',
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600',
      contentHeading: 'Expert GST Solutions',
      contentDescription: 'Stay compliant with GST regulations through our professional filing and advisory services.',
      features: ['GST Registration', 'Monthly/Quarterly Returns', 'Annual Return Filing', 'GST Audit Support', 'Input Tax Credit Analysis'],
      contentImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    },
    {
      slug: 'payroll',
      title: 'Payroll Management - Satyug',
      heroHeading: 'Streamlined Payroll Solutions',
      heroSubheading: 'Efficient and accurate payroll processing for your workforce.',
      heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600',
      contentHeading: 'Professional Payroll Services',
      contentDescription: 'Focus on your core business while we handle the complexities of payroll and statutory compliance.',
      features: ['Salary Processing', 'PF & ESI Compliance', 'Tax Deducted at Source (TDS)', 'Employee Self-Service', 'Payroll Reports'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'tax-planning',
      title: 'Tax Planning & Advisory - Satyug',
      heroHeading: 'Strategic Tax Optimization',
      heroSubheading: 'Minimize tax liabilities and maximize financial efficiency.',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Intelligent Tax Strategies',
      contentDescription: 'Our tax experts help you navigate complex tax laws with proactive planning and compliance.',
      features: ['Income Tax Planning', 'Corporate Tax Advisory', 'Wealth Management', 'TDS Compliance', 'Tax Audit Representation'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'company-formation',
      title: 'Business Setup Services - Satyug',
      heroHeading: 'Start Your Business Right',
      heroSubheading: 'End-to-end support for company incorporation and setup.',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Business Incorporation',
      contentDescription: 'From choosing the right legal structure to obtaining registrations, we help you launch successfully.',
      features: ['Company Incorporation', 'LLP Registration', 'Startup India Registration', 'MSME/Udyam Registration', 'IEC Code'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'compliance',
      title: 'Corporate Compliance - Satyug',
      heroHeading: 'Regulatory Compliance Mastery',
      heroSubheading: 'Ensuring your business meets all statutory and legal requirements.',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Comprehensive Compliance',
      contentDescription: 'We manage your ROC filings, secretarial audits, and other corporate legal obligations.',
      features: ['ROC Filings', 'Secretarial Audit', 'Annual Compliance', 'Board Meeting Documentation', 'Legal Advisory'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'audit-services',
      title: 'Audit & Assurance - Satyug',
      heroHeading: 'Trusted Audit Excellence',
      heroSubheading: 'High-quality auditing services to ensure financial integrity.',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Assurance Services',
      contentDescription: 'Independent and objective audit services that provide confidence to stakeholders.',
      features: ['Statutory Audit', 'Internal Audit', 'Management Audit', 'Stock Audit', 'Due Diligence'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'financial-advisory',
      title: 'Corporate Finance Advisory - Satyug',
      heroHeading: 'Strategic Financial Guidance',
      heroSubheading: 'Empowering businesses with sound financial advice and capital solutions.',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Finance Advisory',
      contentDescription: 'Strategic guidance on capital raising, project reports, and financial structuring.',
      features: ['Project Reports', 'CMA Data Preparation', 'Loan Syndication', 'Working Capital Management', 'Valuation Services'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
  ]

  for (const service of services) {
    try {
      await prisma.page.create({
        data: {
          websiteId: satyug.id,
          slug: service.slug,
          title: service.title,
          status: 'PUBLISHED',
          publishedAt: new Date(),
          sections: {
            create: [
              {
                type: 'hero',
                order: 1,
                imageUrl: service.heroImage,
                textContent: {
                  heading: service.heroHeading,
                  subheading: service.heroSubheading,
                },
              },
              {
                type: 'text-image',
                order: 2,
                imageUrl: service.contentImage,
                textContent: {
                  heading: service.contentHeading,
                  description: service.contentDescription,
                  features: service.features,
                },
              },
              {
                type: 'cta',
                order: 3,
                imageUrl: null,
                textContent: {
                  heading: 'Need Expert Consultation?',
                  description: 'Reach out to our specialists for tailored business solutions.',
                  cta: 'Contact Us Now',
                },
              },
            ],
          },
        },
      })
      console.log(`Service page created: ${service.slug}`)
    } catch (err: any) {
      if (err?.code === 'P2002') {
        // Update instead if it exists
        const page = await prisma.page.findUnique({
          where: { websiteId_slug: { websiteId: satyug.id, slug: service.slug } }
        });
        if (page) {
          await prisma.section.deleteMany({ where: { pageId: page.id } });
          await prisma.page.update({
            where: { id: page.id },
            data: {
              sections: {
                create: [
                  {
                    type: 'hero',
                    order: 1,
                    imageUrl: service.heroImage,
                    textContent: {
                      heading: service.heroHeading,
                      subheading: service.heroSubheading,
                    },
                  },
                  {
                    type: 'text-image',
                    order: 2,
                    imageUrl: service.contentImage,
                    textContent: {
                      heading: service.contentHeading,
                      description: service.contentDescription,
                      features: service.features,
                    },
                  },
                  {
                    type: 'cta',
                    order: 3,
                    imageUrl: null,
                    textContent: {
                      heading: 'Need Expert Consultation?',
                      description: 'Reach out to our specialists for tailored business solutions.',
                      cta: 'Contact Us Now',
                    },
                  },
                ],
              },
            },
          });
          console.log(`Service page updated: ${service.slug}`)
        }
      }
    }
  }

  console.log('✅ Satyug seed completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
