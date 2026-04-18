import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding A. Arun Ganjewar and Co. (full content clone of Singh & Co.)')

  // Upsert website using Singh's content structure
  const arun = await prisma.website.upsert({
    where: { slug: 'a-arun-ganjewar-and-co' },
    update: {
      name: 'A. Arun Ganjewar and Co.',
      domain: 'https://aaganjewarandco.in/',
      logo: '/uploads/logo.svg',
      phone: '+91 9271759598',
      email: 'ganjewar.arun@gmail.com',
      address: 'near vishva hospital , somesh colony , behind Kalamandir, Nanded -431601 maharashtra ',
      workingHours: 'Mon - Sat: 10:00 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#ea580c',
        secondaryColor: '#f59e0b',
        fontFamily: 'Inter',
        theme: 'orange',
      },
    },
    create: {
      name: 'A. Arun Ganjewar and Co.',
      slug: 'a-arun-ganjewar-and-co',
      domain: 'https://aaganjewarandco.in/',
      logo: '/uploads/logo.svg',
      phone: '+91 9271759598',
      email: 'ganjewar.arun@gmail.com',
      address: 'near vishva hospital , somesh colony , behind Kalamandir, Nanded -431601 maharashtra ',
      workingHours: 'Mon - Sat: 10:00 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#ea580c',
        secondaryColor: '#f59e0b',
        fontFamily: 'Inter',
        theme: 'orange',
      },
    },
  })

  console.log('✅ A. Arun Ganjewar and Co. website created/updated')

  // Create pages (home, about, team, gallery)
  // Create or update Home page: delete existing sections and recreate to ensure content matches seed
  const existingHome = await prisma.page.findUnique({
    where: { websiteId_slug: { websiteId: arun.id, slug: 'home' } },
    include: { sections: true },
  })

  const homeSections = [
    {
      type: 'hero',
      order: 1,
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      textContent: {
        heading: 'Modern Business Advisory Solutions',
        subheading: 'Technology-driven accounting and business consulting services',
        cta: 'Get Started',
      },
    },
    {
      type: 'text-image',
      order: 2,
      imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
      textContent: {
        heading: 'Digital-First Accounting Solutions',
        subheading: 'Innovative Business Advisory',
        description: 'A. Arun Ganjewar and Co. leverages cutting-edge technology to provide modern accounting solutions, business consulting, and startup advisory services to help businesses thrive in the digital economy.',
        features: ['Cloud-based Accounting', 'Startup Advisory', 'Digital Transformation', 'Business Automation'],
      },
    },
    {
      type: 'services',
      order: 3,
      imageUrl: null,
      textContent: {
        heading: 'Our Advisory Services',
        subheading: 'Modern solutions for contemporary businesses',
        items: [
          { icon: 'laptop', title: 'Digital Accounting', description: 'Cloud-based accounting and bookkeeping services' },
          { icon: 'rocket', title: 'Startup Services', description: 'Complete startup setup and advisory services' },
          { icon: 'settings', title: 'Business Automation', description: 'Process automation and digital transformation' },
          { icon: 'chart-bar', title: 'Financial Analytics', description: 'Advanced financial reporting and analytics' },
          { icon: 'shield', title: 'Compliance Management', description: 'Automated compliance and regulatory services' },
          { icon: 'users', title: 'HR & Payroll', description: 'Complete HR and payroll management solutions' },
        ],
      },
    },
    {
      type: 'stats',
      order: 4,
      imageUrl: null,
      textContent: {
        heading: 'Our Impact',
        stats: [
          { value: '300+', label: 'Startups Launched' },
          { value: '12+', label: 'Years of Innovation' },
          { value: '150+', label: 'Team of Experts' },
          { value: '99%', label: 'Client Success Rate' },
        ],
      },
    },
    {
      type: 'cta',
      order: 5,
      imageUrl: null,
      textContent: {
        heading: 'Ready to Transform Your Business?',
        description: 'Join hundreds of businesses that have streamlined their operations with our solutions',
        cta: 'Start Your Journey',
      },
    },
  ]

  if (existingHome) {
    await prisma.section.deleteMany({ where: { pageId: existingHome.id } })
    await prisma.page.update({
      where: { id: existingHome.id },
      data: {
        title: 'Home - A. Arun Ganjewar and Co.',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: { create: homeSections },
      },
    })
    console.log('Home page updated')
  } else {
    await prisma.page.create({
      data: {
        websiteId: arun.id,
        slug: 'home',
        title: 'Home - A. Arun Ganjewar and Co.',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: { create: homeSections },
      },
    })
    console.log('Home page created')
  }

  // Create or update About page similarly
  const existingAbout = await prisma.page.findUnique({
    where: { websiteId_slug: { websiteId: arun.id, slug: 'about' } },
    include: { sections: true },
  })

  const aboutSections = [
    {
      type: 'hero',
      order: 1,
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
      textContent: {
        heading: 'About A. Arun Ganjewar and Co.',
        subheading: 'Pioneering the future of business advisory',
      },
    },
    {
      type: 'text-image',
      order: 2,
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      textContent: {
        heading: 'Innovation Meets Expertise',
        description: 'Founded by experienced professionals, our firm specializes in providing technology-enabled business solutions for startups and growing enterprises. We combine traditional accounting expertise with modern digital tools.',
        features: ['Technology-driven solutions', 'Startup ecosystem expertise', 'Cloud-first approach', 'Innovation-focused team'],
      },
    },
    {
      type: 'text-image',
      order: 3,
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      textContent: {
        heading: 'Our Digital Vision',
        description: 'We envision a future where businesses can focus on growth while technology handles their operational complexities.',
        features: ['Automation-first approach', 'Scalable solutions', 'Data-driven insights', 'Future-ready services'],
      },
    },
  ]

  if (existingAbout) {
    await prisma.section.deleteMany({ where: { pageId: existingAbout.id } })
    await prisma.page.update({
      where: { id: existingAbout.id },
      data: {
        title: 'About Us - A. Arun Ganjewar and Co.',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: { create: aboutSections },
      },
    })
    console.log('About page updated')
  } else {
    await prisma.page.create({
      data: {
        websiteId: arun.id,
        slug: 'about',
        title: 'About Us - A. Arun Ganjewar and Co.',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: { create: aboutSections },
      },
    })
    console.log('About page created')
  }

  try {
    await prisma.page.create({
    data: {
      websiteId: arun.id,
      slug: 'team',
      title: 'Our Team - A. Arun Ganjewar and Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600',
            textContent: {
              heading: 'Meet Our Expert Team',
              subheading: 'Experienced professionals dedicated to your success',
            },
          },
          {
            type: 'team',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'Our Leadership',
              description: 'Led by experienced chartered accountants and business advisors',
              items: [
                { name: 'CA A. Arun Ganjewar', role: 'Managing Partner', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', description: 'FCA, 20+ years experience' },
                { name: 'CA Neha Patel', role: 'Partner - Digital Services', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', description: 'Specializes in digital transformation' },
                { name: 'CA Karan Mehta', role: 'Partner - Startup Advisory', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', description: 'Expert in startup consulting' },
                { name: 'CA Priya Sharma', role: 'Senior Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', description: 'Technology solutions specialist' },
              ],
            },
          },
        ],
      },
    },
    })
  } catch (err: any) {
    if (err?.code === 'P2002') console.log('Team page exists — skipping')
    else throw err
  }

  try {
    await prisma.page.create({
    data: {
      websiteId: arun.id,
      slug: 'gallery',
      title: 'Gallery - A. Arun Ganjewar and Co.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600',
            textContent: {
              heading: 'Our Office & Events',
              subheading: 'A glimpse into our professional environment',
            },
          },
          {
            type: 'gallery',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'Office & Team Photos',
              description: 'Our modern tech-enabled office and advisory centers',
              items: [
                { title: 'Innovation Hub', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
                { title: 'Digital Workspace', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600' },
                { title: 'Advisory Sessions', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' },
                { title: 'Tech Consultations', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600' },
                { title: 'Modern Reception', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600' },
                { title: 'Collaboration Space', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600' },
              ],
            },
          },
        ],
      },
    },
    })
  } catch (err: any) {
    if (err?.code === 'P2002') console.log('Gallery page exists — skipping')
    else throw err
  }

  // Generate additional pages (services, query, career, contact)
  const pages = [
    { slug: 'services', title: 'Services', heading: 'Our Services', subheading: 'Comprehensive digital business solutions' },
    { slug: 'query', title: 'Query', heading: 'Business Inquiry', subheading: 'Connect with our business advisors' },
    { slug: 'career', title: 'Careers', heading: 'Join Innovation', subheading: 'Be part of the digital transformation' },
    { slug: 'contact', title: 'Contact', heading: 'Contact Us', subheading: 'Get in touch with our tech-enabled team' },
  ]

  for (const page of pages) {
    try {
      await prisma.page.create({
        data: {
          websiteId: arun.id,
          slug: page.slug,
          title: `${page.title} - A. Arun Ganjewar and Co.`,
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
                imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
                textContent: {
                  heading: `${page.title} Information`,
                  description: `Comprehensive information about ${page.title.toLowerCase()} at A. Arun Ganjewar and Co.`,
                  features: ['Digital-first approach', 'Innovation-driven', 'Client-focused solutions', 'Technology-enabled'],
                },
              },
            ],
          },
        },
      })
    } catch (err: any) {
      if (err?.code === 'P2002') {
        console.log(`Page ${page.slug} exists — skipping`)
      } else throw err
    }
  }

  // Service pages (copied structure from Singh services)
  const services = [
    {
      slug: 'bookkeeping',
      title: 'Digital Bookkeeping - A. Arun Ganjewar and Co.',
      heroHeading: 'Modern Bookkeeping Solutions',
      heroSubheading: 'Cloud-based accounting for the digital age',
      heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600',
      contentHeading: 'Digital-First Approach',
      contentDescription: 'Leverage cloud technology for real-time bookkeeping and financial insights.',
      features: ['Cloud-based accounting', 'Real-time reporting', 'Automated reconciliation', 'Digital workflows', 'Mobile accessibility'],
      contentImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      slug: 'gst-filing',
      title: 'GST Services - A. Arun Ganjewar and Co.',
      heroHeading: 'Automated GST Filing',
      heroSubheading: 'Technology-driven GST compliance solutions',
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600',
      contentHeading: 'Smart GST Solutions',
      contentDescription: 'Automated GST filing and compliance with advanced technology integration.',
      features: ['Automated filing', 'Real-time tracking', 'Compliance alerts', 'Error detection', 'Digital records'],
      contentImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    },
    {
      slug: 'payroll',
      title: 'Smart Payroll - A. Arun Ganjewar and Co.',
      heroHeading: 'Intelligent Payroll Systems',
      heroSubheading: 'Automated payroll processing with AI integration',
      heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600',
      contentHeading: 'Next-Gen Payroll',
      contentDescription: 'AI-powered payroll processing with automated compliance and reporting.',
      features: ['AI-powered processing', 'Automated compliance', 'Employee self-service', 'Real-time analytics', 'Mobile app'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'tax-planning',
      title: 'Strategic Tax Planning - A. Arun Ganjewar and Co.',
      heroHeading: 'Data-Driven Tax Planning',
      heroSubheading: 'AI-assisted tax optimization strategies',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Intelligent Tax Strategy',
      contentDescription: 'Use data analytics and AI to create optimal tax planning strategies.',
      features: ['AI-driven insights', 'Predictive analysis', 'Scenario planning', 'Real-time optimization', 'Digital documentation'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'company-formation',
      title: 'Digital Company Formation - A. Arun Ganjewar and Co.',
      heroHeading: 'Fast-Track Incorporation',
      heroSubheading: 'Digital company formation in record time',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Digital Incorporation',
      contentDescription: 'Streamlined digital company formation with automated documentation and processes.',
      features: ['Online incorporation', 'Digital documents', 'Fast processing', 'Automated compliance', 'Real-time updates'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'compliance',
      title: 'Smart Compliance - A. Arun Ganjewar and Co.',
      heroHeading: 'Automated Compliance',
      heroSubheading: 'AI-powered regulatory compliance monitoring',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Compliance Automation',
      contentDescription: 'Automated compliance monitoring and reporting with real-time alerts.',
      features: ['Automated monitoring', 'Real-time alerts', 'Smart documentation', 'Compliance dashboard', 'Predictive compliance'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'audit-services',
      title: 'Digital Audit Services - A. Arun Ganjewar and Co.',
      heroHeading: 'Tech-Enabled Auditing',
      heroSubheading: 'Modern audit solutions with digital tools',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Digital Audit Excellence',
      contentDescription: 'Advanced audit services leveraging digital tools and data analytics.',
      features: ['Digital audit trails', 'Data analytics', 'Real-time reporting', 'Risk assessment tools', 'Automated testing'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'financial-advisory',
      title: 'Financial Technology Advisory - A. Arun Ganjewar and Co.',
      heroHeading: 'FinTech Advisory',
      heroSubheading: 'Strategic financial guidance for the digital economy',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Digital Finance Strategy',
      contentDescription: 'Strategic financial advisory services focused on digital transformation and innovation.',
      features: ['Digital strategy', 'FinTech integration', 'Innovation consulting', 'Technology assessment', 'Future planning'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
  ]

  for (const service of services) {
    try {
      await prisma.page.create({
        data: {
          websiteId: arun.id,
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
                  heading: 'Ready to Modernize?',
                  description: 'Transform your business with our digital solutions',
                  buttonText: 'Get Started',
                },
              },
            ],
          },
        },
      })
    } catch (err: any) {
      if (err?.code === 'P2002') console.log(`Service page ${service.slug} exists — skipping`)
      else throw err
    }
  }

  console.log('  ✅ A. Arun Ganjewar and Co.: pages and service pages created')

  console.log('\n🌱 Seed completed for a-arun-ganjewar-and-co')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
