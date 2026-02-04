import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting comprehensive database seed...')
  
  // First, clean up existing pages and sections to avoid duplicates
  console.log('🧹 Cleaning up existing pages and sections...')
  await prisma.section.deleteMany({})
  await prisma.page.deleteMany({})
  console.log('✅ Cleanup complete')

  // Create admin user
  const adminPassword = await bcrypt.hash('Admin@123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@cafirm.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@cafirm.com',
      passwordHash: adminPassword,
      role: 'SUPER_ADMIN',
    },
  })
  console.log('✅ Admin user created')

  // ============================================================
  // WEBSITE 1: Sharma & Associates (Professional Blue Theme)
  // ============================================================
  const sharma = await prisma.website.upsert({
    where: { slug: 'sharma-associates' },
    update: {
      name: 'Sharma & Associates',
      domain: 'https://sharma-associates.com',
      logo: '/uploads/logo.svg',
      phone: '+91 11 4567 8901',
      email: 'info@sharma-associates.com',
      address: '1201, Business Tower, Connaught Place, New Delhi - 110001',
      workingHours: 'Mon - Sat: 9:30 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#1e40af',
        secondaryColor: '#64748b',
        fontFamily: 'Inter',
        theme: 'professional',
      },
    },
    create: {
      name: 'Sharma & Associates',
      slug: 'sharma-associates',
      domain: 'https://sharma-associates.com',
      logo: '/uploads/logo.svg',
      phone: '+91 11 4567 8901',
      email: 'info@sharma-associates.com',
      address: '1201, Business Tower, Connaught Place, New Delhi - 110001',
      workingHours: 'Mon - Sat: 9:30 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#1e40af',
        secondaryColor: '#64748b',
        fontFamily: 'Inter',
        theme: 'professional',
      },
    },
  })
  console.log('✅ Sharma & Associates website created')

  // Sharma Pages
  await prisma.page.create({
    data: {
      websiteId: sharma.id,
      slug: 'home',
      title: 'Home - Sharma & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
            textContent: {
              heading: 'Trusted Chartered Accountants Since 1995',
              subheading: 'Expert financial guidance for businesses and individuals',
              cta: 'Get Started',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
            textContent: {
              heading: 'Professional Audit & Assurance Services',
              subheading: 'Comprehensive Financial Solutions',
              description: 'With over 25 years of experience, Sharma & Associates provides top-tier audit, taxation, and corporate advisory services to businesses across industries.',
              features: ['Statutory & Internal Audits', 'Tax Planning & Compliance', 'Corporate Advisory', 'Financial Due Diligence'],
            },
          },
          {
            type: 'services',
            order: 3,
            imageUrl: null,
            textContent: {
              heading: 'Our Core Services',
              subheading: 'Comprehensive accounting solutions for your business',
              items: [
                { icon: 'shield', title: 'Audit Services', description: 'Statutory, internal, and forensic audit services' },
                { icon: 'file', title: 'Taxation', description: 'Income tax, GST, and international taxation' },
                { icon: 'building', title: 'Corporate Services', description: 'Company formation, compliance, and secretarial' },
                { icon: 'trending', title: 'Financial Advisory', description: 'Business valuation and financial planning' },
                { icon: 'users', title: 'Risk Management', description: 'Internal controls and risk assessment' },
                { icon: 'check', title: 'Compliance', description: 'Regulatory compliance and reporting' },
              ],
            },
          },
          {
            type: 'stats',
            order: 4,
            imageUrl: null,
            textContent: {
              heading: 'Our Achievements',
              stats: [
                { value: '500+', label: 'Clients Served' },
                { value: '25+', label: 'Years Experience' },
                { value: '50+', label: 'Team Members' },
                { value: '98%', label: 'Client Satisfaction' },
              ],
            },
          },
          {
            type: 'cta',
            order: 5,
            imageUrl: null,
            textContent: {
              heading: 'Ready to Transform Your Business?',
              description: 'Contact us today for a free consultation with our expert team',
              cta: 'Schedule Consultation',
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: sharma.id,
      slug: 'about',
      title: 'About Us - Sharma & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'About Sharma & Associates',
              subheading: 'Building trust through excellence in accounting since 1995',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
            textContent: {
              heading: 'Our Legacy of Excellence',
              description: 'Founded by CA Rajesh Sharma, our firm has grown from a small practice to one of the most respected accounting firms in the region. We specialize in serving corporate clients with complex audit and taxation needs.',
              features: ['ISO 9001:2015 Certified', 'Member of ICAI', 'Recognized by major regulatory bodies', 'Award-winning team'],
            },
          },
          {
            type: 'text-image',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            textContent: {
              heading: 'Our Values & Mission',
              description: 'We are committed to delivering exceptional service with integrity, professionalism, and innovation.',
              features: ['Client-centric approach', 'Ethical practices', 'Continuous development', 'Technology-driven solutions'],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: sharma.id,
      slug: 'team',
      title: 'Our Team - Sharma & Associates',
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
              description: 'Led by experienced chartered accountants and finance professionals',
              items: [
                { name: 'CA Rajesh Sharma', role: 'Managing Partner', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', description: 'FCA, 30+ years experience' },
                { name: 'CA Priya Mehta', role: 'Partner - Audit', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', description: 'Specializes in corporate audits' },
                { name: 'CA Amit Kumar', role: 'Partner - Taxation', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', description: 'Expert in international taxation' },
                { name: 'CA Sneha Gupta', role: 'Senior Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', description: 'Financial advisory specialist' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: sharma.id,
      slug: 'services',
      title: 'Our Services - Sharma & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600',
            textContent: {
              heading: 'Comprehensive Accounting Solutions',
              subheading: 'Tailored services for businesses of all sizes',
            },
          },
          {
            type: 'services',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'What We Offer',
              subheading: 'Full-spectrum accounting and advisory services',
              items: [
                { icon: 'shield', title: 'Audit & Assurance', description: 'Statutory audits, internal audits, and assurance services' },
                { icon: 'file', title: 'Direct & Indirect Taxation', description: 'Income tax, GST planning and compliance' },
                { icon: 'building', title: 'Corporate Advisory', description: 'Mergers, acquisitions, and restructuring' },
                { icon: 'trending', title: 'Business Valuation', description: 'Fair value assessments and due diligence' },
                { icon: 'users', title: 'Risk Management', description: 'Internal controls and fraud detection' },
                { icon: 'check', title: 'Regulatory Compliance', description: 'FEMA, RBI, SEBI compliance' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: sharma.id,
      slug: 'gallery',
      title: 'Gallery - Sharma & Associates',
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
              description: 'Our modern office space and team at work',
              items: [
                { title: 'Main Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
                { title: 'Conference Room', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600' },
                { title: 'Team Meeting', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' },
                { title: 'Client Consultation', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600' },
                { title: 'Reception Area', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600' },
                { title: 'Work Station', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: sharma.id,
      slug: 'contact',
      title: 'Contact Us - Sharma & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600',
            textContent: {
              heading: 'Get In Touch',
              subheading: 'We are here to help with your financial needs',
            },
          },
          {
            type: 'contact-info',
            order: 2,
            imageUrl: null,
            textContent: {
              title: 'Contact Information',
              subtitle: 'Reach out to us through any of these channels',
              address: '501, Commerce Tower, MG Road, Mumbai - 400001',
              phone: '+91 22 2345 6789',
              email: 'info@sharma-associates.com',
              hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
            },
          },
          {
            type: 'contact-form',
            order: 3,
            imageUrl: null,
            textContent: {
              title: 'Send Us a Message',
              subtitle: 'Fill out the form and we will get back to you shortly',
              formFields: ['name', 'email', 'phone', 'message'],
              submitText: 'Submit Inquiry',
            },
          },
        ],
      },
    },
  })

  // Sharma Service Pages
  const sharmaServices = [
    {
      slug: 'audit-services',
      title: 'Audit Services - Sharma & Associates',
      heroHeading: 'Professional Audit Services',
      heroSubheading: 'Ensuring accuracy, compliance, and transparency',
      heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
      contentHeading: 'Comprehensive Audit Solutions',
      contentDescription: 'We conduct thorough statutory audits as per Companies Act and other regulatory requirements. Our comprehensive approach ensures complete compliance.',
      features: ['Financial statement audits', 'Internal control assessment', 'Compliance verification', 'Detailed audit reports'],
      contentImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      slug: 'taxation-services',
      title: 'Taxation Services - Sharma & Associates',
      heroHeading: 'Expert Taxation Services',
      heroSubheading: 'Maximize tax efficiency and ensure compliance',
      heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600',
      contentHeading: 'Income Tax & GST Services',
      contentDescription: 'Strategic tax planning and compliance for individuals and corporations. We help minimize tax liability while ensuring full compliance.',
      features: ['Tax planning & advisory', 'Return filing', 'Tax litigation support', 'Transfer pricing documentation'],
      contentImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    },
    {
      slug: 'corporate-services',
      title: 'Corporate Services - Sharma & Associates',
      heroHeading: 'Corporate Advisory Services',
      heroSubheading: 'Strategic guidance for business growth and compliance',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Company Formation & Compliance',
      contentDescription: 'End-to-end services for company incorporation, annual compliance, and secretarial services.',
      features: ['Private & public company incorporation', 'LLP formation', 'Annual ROC filings', 'Board meeting management'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'bookkeeping',
      title: 'Bookkeeping Services - Sharma & Associates',
      heroHeading: 'Bookkeeping Services',
      heroSubheading: 'Professional financial record management',
      heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Professional bookkeeping services to keep your financial records accurate and up-to-date.',
      features: ['Daily transaction recording', 'Bank reconciliation', 'Accounts payable & receivable', 'Financial statement preparation', 'Cash flow management'],
      contentImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      slug: 'gst-filing',
      title: 'GST Filing Services - Sharma & Associates',
      heroHeading: 'GST Filing Services',
      heroSubheading: 'Expert GST compliance and filing services',
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600',
      contentHeading: 'Complete GST Solutions',
      contentDescription: 'We ensure timely and accurate GST returns to keep your business compliant with all tax regulations.',
      features: ['Monthly GSTR-1 & GSTR-3B filing', 'Quarterly GSTR-4 for composition dealers', 'Annual GST return filing', 'GST reconciliation', 'Input tax credit optimization'],
      contentImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    },
    {
      slug: 'payroll',
      title: 'Payroll Management - Sharma & Associates',
      heroHeading: 'Payroll Management',
      heroSubheading: 'Complete payroll processing solutions',
      heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Complete payroll processing solutions including salary computation, statutory compliance, and employee tax management.',
      features: ['Salary calculation & disbursement', 'PF & ESI compliance', 'TDS on salary', 'Leave & attendance management', 'Payslip generation'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'tax-planning',
      title: 'Tax Planning & Advisory - Sharma & Associates',
      heroHeading: 'Tax Planning & Advisory',
      heroSubheading: 'Strategic tax planning services',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Strategic tax planning services to minimize your tax liability legally while ensuring full compliance with tax laws.',
      features: ['Income tax planning', 'Investment advisory', 'Tax saving strategies', 'Advance tax computation', 'Tax return filing'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'company-formation',
      title: 'Company Formation - Sharma & Associates',
      heroHeading: 'Company Formation',
      heroSubheading: 'End-to-end company registration services',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'End-to-end company registration and formation services. From choosing the right business structure to getting your company registered.',
      features: ['Private Limited Company registration', 'LLP formation', 'Partnership deed drafting', 'MSME registration', 'Startup India registration'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'compliance',
      title: 'Regulatory Compliance - Sharma & Associates',
      heroHeading: 'Regulatory Compliance',
      heroSubheading: 'Comprehensive compliance services',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Comprehensive compliance services to keep your business aligned with all statutory and regulatory requirements.',
      features: ['ROC filings', 'Annual compliance', 'Statutory audits', 'Legal compliance review', 'Director KYC'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'financial-advisory',
      title: 'Financial Advisory - Sharma & Associates',
      heroHeading: 'Financial Advisory',
      heroSubheading: 'Expert financial advisory services',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Expert financial advisory services to help you make informed business decisions and achieve your financial goals.',
      features: ['Business valuation', 'Financial planning', 'Investment advisory', 'Merger & acquisition support', 'Funding assistance'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
  ]

  for (const service of sharmaServices) {
    await prisma.page.create({
      data: {
        websiteId: sharma.id,
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
                heading: 'Ready to Get Started?',
                description: `Contact us today to learn more about our ${service.heroHeading.toLowerCase()}.`,
                cta: 'Contact Us',
              },
            },
          ],
        },
      },
    })
  }
  
  console.log('  ✅ Sharma & Associates: 10 pages created')

  // ============================================================
  // WEBSITE 2: Verma Accounting Services (Modern Black/White Theme)
  // ============================================================
  const verma = await prisma.website.upsert({
    where: { slug: 'verma-accounting' },
    update: {
      name: 'Verma Accounting Services',
      domain: 'https://verma-accounting.com',
      logo: '/uploads/logo.svg',
      phone: '+91 80 1234 5678',
      email: 'hello@verma-accounting.com',
      address: '456, Tech Park, Electronic City, Bangalore - 560100',
      workingHours: 'Mon - Sat: 9:30 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#ffffff',
        secondaryColor: '#000000',
        fontFamily: 'Roboto',
        theme: 'modern',
      },
    },
    create: {
      name: 'Verma Accounting Services',
      slug: 'verma-accounting',
      domain: 'https://verma-accounting.com',
      logo: '/uploads/logo.svg',
      phone: '+91 80 1234 5678',
      email: 'hello@verma-accounting.com',
      address: '456, Tech Park, Electronic City, Bangalore - 560100',
      workingHours: 'Mon - Sat: 9:30 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#ffffff',
        secondaryColor: '#000000',
        fontFamily: 'Roboto',
        theme: 'modern',
      },
    },
  })
  console.log('✅ Verma Accounting Services website created')

  // Verma Pages
  await prisma.page.create({
    data: {
      websiteId: verma.id,
      slug: 'home',
      title: 'Home - Verma Accounting Services',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1600',
            textContent: {
              heading: 'Modern Accounting Solutions',
              subheading: 'Bookkeeping, GST, and Payroll services for growing businesses',
              cta: 'Explore Services',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=800',
            textContent: {
              heading: 'Simplify Your Finances',
              description: 'Verma Accounting Services specializes in bookkeeping, GST compliance, and payroll management for SMEs. We leverage cloud accounting tools to provide real-time financial insights.',
              features: ['Cloud-based bookkeeping', 'Automated GST filing', 'End-to-end payroll management', '24/7 online support'],
            },
          },
          {
            type: 'services',
            order: 3,
            imageUrl: null,
            textContent: {
              heading: 'Our Services',
              subheading: 'Everything you need for financial compliance',
              items: [
                { icon: 'calculator', title: 'Bookkeeping', description: 'Daily accounting and financial record management' },
                { icon: 'file', title: 'GST Services', description: 'Complete GST registration and compliance' },
                { icon: 'users', title: 'Payroll Management', description: 'Salary processing and compliance' },
                { icon: 'trending', title: 'Financial Reports', description: 'Monthly P&L and balance sheets' },
                { icon: 'check', title: 'Tax Filing', description: 'Income tax and TDS returns' },
                { icon: 'book', title: 'Advisory', description: 'Financial planning and budgeting' },
              ],
            },
          },
          {
            type: 'stats',
            order: 4,
            imageUrl: null,
            textContent: {
              heading: 'Numbers That Matter',
              stats: [
                { value: '300+', label: 'Active Clients' },
                { value: '8+', label: 'Years in Business' },
                { value: '20+', label: 'Team Members' },
                { value: '95%', label: 'Retention Rate' },
              ],
            },
          },
          {
            type: 'cta',
            order: 5,
            imageUrl: null,
            textContent: {
              heading: 'Start Your Free Trial',
              description: 'Try our bookkeeping services free for 30 days',
              cta: 'Get Started Free',
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: verma.id,
      slug: 'about',
      title: 'About Us - Verma Accounting',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600',
            textContent: {
              heading: 'About Verma Accounting',
              subheading: 'Tech-enabled accounting for modern businesses',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            textContent: {
              heading: 'Our Story',
              description: 'Founded in 2015, we pioneered cloud-based accounting services for SMEs. Our mission is to make professional accounting accessible and affordable through technology.',
              features: ['Cloud-first approach', 'Transparent pricing', 'Personalized service', 'Fast turnaround times'],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: verma.id,
      slug: 'team',
      title: 'Our Team - Verma Accounting',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600',
            textContent: {
              heading: 'Meet Our Team',
              subheading: 'Dedicated professionals at your service',
            },
          },
          {
            type: 'team',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'Our People',
              items: [
                { name: 'CA Suresh Verma', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', description: 'Technology-focused CA' },
                { name: 'Neha Sharma', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', description: 'Process optimization expert' },
                { name: 'Rahul Singh', role: 'GST Specialist', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', description: 'GST compliance expert' },
                { name: 'Pooja Reddy', role: 'Payroll Manager', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400', description: 'HR & payroll specialist' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: verma.id,
      slug: 'services',
      title: 'Services - Verma Accounting',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
            textContent: {
              heading: 'Our Services',
              subheading: 'Complete accounting solutions for SMEs',
            },
          },
          {
            type: 'services',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'What We Do',
              items: [
                { icon: 'calculator', title: 'Bookkeeping', description: 'Professional accounting services' },
                { icon: 'file', title: 'GST Filing', description: 'Monthly & quarterly GST returns' },
                { icon: 'users', title: 'Payroll', description: 'Complete salary management' },
                { icon: 'trending', title: 'Tax Planning', description: 'Strategic tax advisory' },
                { icon: 'building', title: 'Company Formation', description: 'Business registration services' },
                { icon: 'shield', title: 'Audit Services', description: 'Statutory and internal audits' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: verma.id,
      slug: 'gallery',
      title: 'Gallery - Verma Accounting',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'Our Workspace',
              subheading: 'Modern office for modern accounting',
            },
          },
          {
            type: 'gallery',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'Office Photos',
              items: [
                { title: 'Reception', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600' },
                { title: 'Work Area', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
                { title: 'Meeting Room', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600' },
                { title: 'Team', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: verma.id,
      slug: 'contact',
      title: 'Contact Us - Verma Accounting',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600',
            textContent: {
              heading: 'Contact Verma Accounting',
              subheading: 'Let us help with your accounting needs',
            },
          },
          {
            type: 'contact-info',
            order: 2,
            imageUrl: null,
            textContent: {
              title: 'Get In Touch',
              subtitle: 'Reach out to us anytime',
              address: '203, Business Plaza, Park Street, Kolkata - 700016',
              phone: '+91 33 2456 7890',
              email: 'contact@verma-accounting.com',
              hours: 'Mon - Fri: 10:00 AM - 7:00 PM',
            },
          },
          {
            type: 'contact-form',
            order: 3,
            imageUrl: null,
            textContent: {
              title: 'Send Your Query',
              subtitle: 'We will respond within 24 hours',
              formFields: ['name', 'email', 'phone', 'message'],
              submitText: 'Send Message',
            },
          },
        ],
      },
    },
  })

  // Verma Service Pages
  const vermaServices = [
    {
      slug: 'bookkeeping',
      title: 'Bookkeeping Services - Verma Accounting',
      heroHeading: 'Bookkeeping Services',
      heroSubheading: 'Professional financial record management',
      heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Professional bookkeeping services to keep your financial records accurate and up-to-date.',
      features: ['Daily transaction recording', 'Bank reconciliation', 'Accounts payable & receivable', 'Financial statement preparation', 'Cash flow management'],
      contentImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      slug: 'gst-filing',
      title: 'GST Filing Services - Verma Accounting',
      heroHeading: 'GST Filing Services',
      heroSubheading: 'Expert GST compliance and filing services',
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600',
      contentHeading: 'Complete GST Solutions',
      contentDescription: 'We ensure timely and accurate GST returns to keep your business compliant.',
      features: ['Monthly GSTR-1 & GSTR-3B filing', 'Quarterly GSTR-4', 'Annual GST return filing', 'GST reconciliation', 'Input tax credit optimization'],
      contentImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    },
    {
      slug: 'payroll',
      title: 'Payroll Management - Verma Accounting',
      heroHeading: 'Payroll Management',
      heroSubheading: 'Complete payroll processing solutions',
      heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Complete payroll processing solutions including salary computation and statutory compliance.',
      features: ['Salary calculation & disbursement', 'PF & ESI compliance', 'TDS on salary', 'Leave management', 'Payslip generation'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'tax-planning',
      title: 'Tax Planning & Advisory - Verma Accounting',
      heroHeading: 'Tax Planning & Advisory',
      heroSubheading: 'Strategic tax planning services',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Strategic tax planning services to minimize your tax liability legally.',
      features: ['Income tax planning', 'Investment advisory', 'Tax saving strategies', 'Advance tax computation', 'Tax return filing'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'company-formation',
      title: 'Company Formation - Verma Accounting',
      heroHeading: 'Company Formation',
      heroSubheading: 'End-to-end company registration services',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'End-to-end company registration and formation services.',
      features: ['Private Limited Company registration', 'LLP formation', 'Partnership deed drafting', 'MSME registration', 'Startup India registration'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'compliance',
      title: 'Regulatory Compliance - Verma Accounting',
      heroHeading: 'Regulatory Compliance',
      heroSubheading: 'Comprehensive compliance services',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Comprehensive compliance services to keep your business aligned with regulations.',
      features: ['ROC filings', 'Annual compliance', 'Statutory audits', 'Legal compliance review', 'Director KYC'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'audit-services',
      title: 'Audit Services - Verma Accounting',
      heroHeading: 'Audit Services',
      heroSubheading: 'Professional audit and assurance services',
      heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Professional audit and assurance services including statutory audit and internal audit.',
      features: ['Statutory audit', 'Internal audit', 'Tax audit', 'GST audit', 'Stock audit'],
      contentImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      slug: 'financial-advisory',
      title: 'Financial Advisory - Verma Accounting',
      heroHeading: 'Financial Advisory',
      heroSubheading: 'Expert financial advisory services',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Expert financial advisory services to help you make informed business decisions.',
      features: ['Business valuation', 'Financial planning', 'Investment advisory', 'Merger & acquisition support', 'Funding assistance'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
  ]

  for (const service of vermaServices) {
    await prisma.page.create({
      data: {
        websiteId: verma.id,
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
                heading: 'Ready to Get Started?',
                description: `Contact us today to learn more about our ${service.heroHeading.toLowerCase()}.`,
                cta: 'Contact Us',
              },
            },
          ],
        },
      },
    })
  }
  
  console.log('  ✅ Verma Accounting: 14 pages created')

  // ============================================================
  // WEBSITE 3: Gupta Tax Advisors (Creative Purple/Pink Theme)
  // ============================================================
  const gupta = await prisma.website.upsert({
    where: { slug: 'gupta-tax-advisors' },
    update: {
      name: 'Gupta Tax Advisors',
      domain: 'https://gupta-tax-advisors.com',
      logo: '/uploads/logo.svg',
      phone: '+91 80 4567 8901',
      email: 'hello@gupta-tax.com',
      address: '1501, Startup Tower, HSR Layout, Bangalore - 560102',
      workingHours: 'Mon - Sat: 9:30 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#8b5cf6',
        secondaryColor: '#ec4899',
        fontFamily: 'Poppins',
        theme: 'creative',
      },
    },
    create: {
      name: 'Gupta Tax Advisors',
      slug: 'gupta-tax-advisors',
      domain: 'https://gupta-tax-advisors.com',
      logo: '/uploads/logo.svg',
      phone: '+91 80 4567 8901',
      email: 'hello@gupta-tax.com',
      address: '1501, Startup Tower, HSR Layout, Bangalore - 560102',
      workingHours: 'Mon - Sat: 9:30 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#8b5cf6',
        secondaryColor: '#ec4899',
        fontFamily: 'Poppins',
        theme: 'creative',
      },
    },
  })
  console.log('✅ Gupta Tax Advisors website created')

  // Gupta Pages
  await prisma.page.create({
    data: {
      websiteId: gupta.id,
      slug: 'home',
      title: 'Home - Gupta Tax Advisors',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600',
            textContent: {
              heading: 'Your Tax Success Partner',
              subheading: 'Innovative tax solutions for startups and entrepreneurs',
              cta: 'Book Consultation',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
            textContent: {
              heading: 'Startups Trust Us',
              description: 'Gupta Tax Advisors specializes in serving startups, freelancers, and entrepreneurs with creative tax planning, company registration, and compliance services.',
              features: ['Startup India registration', 'Tax-saving strategies', 'Compliance management', 'Growth-focused advisory'],
            },
          },
          {
            type: 'services',
            order: 3,
            imageUrl: null,
            textContent: {
              heading: 'Services for Entrepreneurs',
              items: [
                { icon: 'sparkles', title: 'Tax Planning', description: 'Strategic tax optimization' },
                { icon: 'briefcase', title: 'Startup Registration', description: 'Company & LLP formation' },
                { icon: 'shield', title: 'Compliance', description: 'ROC & regulatory filings' },
                { icon: 'trending', title: 'Advisory', description: 'Business growth consulting' },
                { icon: 'file', title: 'Funding Support', description: 'Investor-ready financials' },
                { icon: 'users', title: 'Mentorship', description: 'Startup founder guidance' },
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
                { value: '200+', label: 'Startups Launched' },
                { value: '5+', label: 'Years Experience' },
                { value: '15+', label: 'Expert Team' },
                { value: '100%', label: 'Client Satisfaction' },
              ],
            },
          },
          {
            type: 'cta',
            order: 5,
            imageUrl: null,
            textContent: {
              heading: 'Launch Your Startup Right',
              description: 'Get expert guidance from day one',
              cta: 'Start Free Consultation',
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: gupta.id,
      slug: 'about',
      title: 'About - Gupta Tax Advisors',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600',
            textContent: {
              heading: 'About Gupta Tax Advisors',
              subheading: 'Empowering entrepreneurs since 2018',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
            textContent: {
              heading: 'Our Vision',
              description: 'We believe every startup deserves professional tax and compliance support. Our mission is to make expert advisory accessible to emerging businesses at affordable rates.',
              features: ['Startup-friendly pricing', 'Personalized attention', 'Fast response times', 'Growth mindset'],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: gupta.id,
      slug: 'team',
      title: 'Team - Gupta Tax Advisors',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600',
            textContent: {
              heading: 'Meet the Team',
              subheading: 'Passionate experts dedicated to your success',
            },
          },
          {
            type: 'team',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'Leadership',
              items: [
                { name: 'CA Rohit Gupta', role: 'Founder & Managing Partner', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', description: 'Startup ecosystem advocate' },
                { name: 'Priya Kapoor', role: 'Tax Consultant', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', description: 'Tax planning specialist' },
                { name: 'Arjun Mehta', role: 'Compliance Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', description: 'ROC & MCA expert' },
                { name: 'Divya Iyer', role: 'Business Advisor', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', description: 'Startup strategist' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: gupta.id,
      slug: 'services',
      title: 'Services - Gupta Tax Advisors',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600',
            textContent: {
              heading: 'Our Services',
              subheading: 'Everything you need to launch and grow',
            },
          },
          {
            type: 'services',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'What We Offer',
              items: [
                { icon: 'sparkles', title: 'Tax Planning', description: 'Minimize tax liability legally' },
                { icon: 'briefcase', title: 'Company Formation', description: 'Pvt Ltd, LLP, OPC registration' },
                { icon: 'shield', title: 'Compliance', description: 'All regulatory filings' },
                { icon: 'trending', title: 'Advisory', description: 'Growth consulting' },
                { icon: 'file', title: 'GST Services', description: 'Complete GST solutions' },
                { icon: 'users', title: 'Payroll', description: 'Salary management' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: gupta.id,
      slug: 'gallery',
      title: 'Gallery - Gupta Tax Advisors',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'Our Creative Space',
              subheading: 'Where innovation meets compliance',
            },
          },
          {
            type: 'gallery',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'Office & Events',
              items: [
                { title: 'Startup Hub', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600' },
                { title: 'Co-working', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
                { title: 'Team Event', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' },
                { title: 'Workshop', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: gupta.id,
      slug: 'contact',
      title: 'Contact Us - Gupta Tax Advisors',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600',
            textContent: {
              heading: "Let's Connect",
              subheading: 'Your tax queries, our expertise',
            },
          },
          {
            type: 'contact-info',
            order: 2,
            imageUrl: null,
            textContent: {
              title: 'Contact Details',
              subtitle: 'Multiple ways to reach us',
              address: '1501, Startup Tower, HSR Layout, Bangalore - 560102',
              phone: '+91 80 4567 8901',
              email: 'hello@gupta-tax.com',
              hours: 'Mon - Sat: 9:30 AM - 8:00 PM',
            },
          },
          {
            type: 'contact-form',
            order: 3,
            imageUrl: null,
            textContent: {
              title: 'Drop Us a Line',
              subtitle: 'Quick response guaranteed',
              formFields: ['name', 'email', 'phone', 'message'],
              submitText: 'Get In Touch',
            },
          },
        ],
      },
    },
  })

  // Gupta Service Pages
  const guptaServices = [
    {
      slug: 'bookkeeping',
      title: 'Bookkeeping Services - Gupta Tax Advisors',
      heroHeading: 'Startup Bookkeeping',
      heroSubheading: 'Clean books for fast-growing startups',
      heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600',
      contentHeading: 'Modern Bookkeeping Solutions',
      contentDescription: 'Cloud-based bookkeeping designed for startups. Real-time financial insights to help you make better decisions.',
      features: ['Cloud-based system', 'Real-time reporting', 'Expense automation', 'Investor-ready books'],
      contentImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      slug: 'gst-filing',
      title: 'GST Filing Services - Gupta Tax Advisors',
      heroHeading: 'GST Made Simple',
      heroSubheading: 'Hassle-free GST compliance for startups',
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600',
      contentHeading: 'Complete GST Support',
      contentDescription: 'From registration to filing, we handle all your GST requirements. Focus on scaling while we ensure compliance.',
      features: ['GST registration', 'Monthly filing', 'Input credit optimization', 'Audit support'],
      contentImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    },
    {
      slug: 'compliance',
      title: 'Compliance Services - Gupta Tax Advisors',
      heroHeading: 'Regulatory Compliance',
      heroSubheading: 'Complete compliance solutions for startups',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Comprehensive Compliance Services',
      contentDescription: 'Stay compliant with all regulatory requirements. From company formation to annual filings, we handle it all.',
      features: ['Company registration & formation', 'Annual compliance filings', 'ROC compliance', 'Regulatory updates & alerts', 'Statutory audit support'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'startup',
      title: 'Startup Services - Gupta Tax Advisors',
      heroHeading: 'Startup Solutions',
      heroSubheading: 'Everything you need to start and grow',
      heroImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600',
      contentHeading: 'Complete Startup Support',
      contentDescription: 'From idea to execution, we provide comprehensive services to help startups succeed.',
      features: ['Business registration', 'Startup India certification', 'DPIIT registration', 'Angel tax exemption', 'Funding assistance'],
      contentImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    },
    {
      slug: 'tax-planning',
      title: 'Tax Planning Services - Gupta Tax Advisors',
      heroHeading: 'Strategic Tax Planning',
      heroSubheading: 'Optimize your tax strategy for growth',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Smart Tax Planning',
      contentDescription: 'Strategic tax planning to maximize savings while ensuring full compliance. Perfect for entrepreneurs and growing businesses.',
      features: ['Income tax planning', 'Capital gains optimization', 'Investment advisory', 'Tax-efficient structuring', 'Return filing & compliance'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
  ]

  for (const service of guptaServices) {
    await prisma.page.create({
      data: {
        websiteId: gupta.id,
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
                heading: 'Get Started Today',
                description: `Contact us to learn more about our ${service.heroHeading.toLowerCase()}.`,
                cta: 'Contact Us',
              },
            },
          ],
        },
      },
    })
  }
  
  console.log('  ✅ Gupta Tax Advisors: 11 pages created')

  // ============================================================
  // WEBSITE 4: Kapoor Financial Services (Emerald Green Theme)
  // ============================================================
  const kapoor = await prisma.website.upsert({
    where: { slug: 'kapoor-financial' },
    update: {
      name: 'Kapoor Financial Services',
      domain: 'https://kapoor-financial.com',
      logo: '/uploads/logo.svg',
      phone: '+91 22 9876 5432',
      email: 'info@kapoor-financial.com',
      address: '15th Floor, Corporate Plaza, Bandra East, Mumbai - 400051',
      workingHours: 'Mon - Fri: 9:00 AM - 6:30 PM',
      themeConfig: {
        primaryColor: '#059669',
        secondaryColor: '#10b981',
        fontFamily: 'Inter',
        theme: 'emerald',
      },
    },
    create: {
      name: 'Kapoor Financial Services',
      slug: 'kapoor-financial',
      domain: 'https://kapoor-financial.com',
      logo: '/uploads/logo.svg',
      phone: '+91 22 9876 5432',
      email: 'info@kapoor-financial.com',
      address: '15th Floor, Corporate Plaza, Bandra East, Mumbai - 400051',
      workingHours: 'Mon - Fri: 9:00 AM - 6:30 PM',
      themeConfig: {
        primaryColor: '#059669',
        secondaryColor: '#10b981',
        fontFamily: 'Inter',
        theme: 'emerald',
      },
    },
  })
  console.log('✅ Kapoor Financial Services website created')

  // Kapoor Pages
  await prisma.page.create({
    data: {
      websiteId: kapoor.id,
      slug: 'home',
      title: 'Kapoor Financial Services',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
            textContent: {
              heading: 'Strategic Financial Solutions for Growth',
              subheading: 'Expert financial advisory and investment management services',
              cta: 'Explore Services',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
            textContent: {
              heading: 'Investment Banking & Financial Advisory',
              subheading: 'Unlock Your Financial Potential',
              description: 'Kapoor Financial Services provides comprehensive financial solutions including investment banking, wealth management, and corporate finance advisory to help clients achieve their financial goals.',
              features: ['Investment Banking', 'Wealth Management', 'Corporate Finance', 'Portfolio Management'],
            },
          },
          {
            type: 'services',
            order: 3,
            imageUrl: null,
            textContent: {
              heading: 'Our Financial Services',
              subheading: 'Comprehensive financial solutions tailored to your needs',
              items: [
                { icon: 'trending-up', title: 'Investment Banking', description: 'Merger, acquisition, and capital raising services' },
                { icon: 'shield', title: 'Wealth Management', description: 'Personal wealth planning and portfolio management' },
                { icon: 'building', title: 'Corporate Finance', description: 'Strategic financial advisory and restructuring' },
                { icon: 'globe', title: 'International Trade Finance', description: 'Cross-border financing solutions' },
                { icon: 'calculator', title: 'Financial Planning', description: 'Comprehensive financial planning services' },
                { icon: 'check-circle', title: 'Risk Management', description: 'Financial risk assessment and mitigation' },
              ],
            },
          },
          {
            type: 'stats',
            order: 4,
            imageUrl: null,
            textContent: {
              heading: 'Our Track Record',
              stats: [
                { value: '₹500Cr+', label: 'Assets Under Management' },
                { value: '15+', label: 'Years in Business' },
                { value: '200+', label: 'Satisfied Clients' },
                { value: '95%', label: 'Client Retention' },
              ],
            },
          },
          {
            type: 'cta',
            order: 5,
            imageUrl: null,
            textContent: {
              heading: 'Ready to Grow Your Wealth?',
              description: 'Schedule a consultation with our financial experts today',
              cta: 'Book Consultation',
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: kapoor.id,
      slug: 'about',
      title: 'About Us - Kapoor Financial Services',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'About Kapoor Financial Services',
              subheading: 'Empowering financial success since 2009',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800',
            textContent: {
              heading: 'Our Journey of Excellence',
              description: 'Founded by Amit Kapoor, our firm has established itself as a leading financial services provider specializing in investment banking and wealth management for high-net-worth individuals and corporate clients.',
              features: ['SEBI Registered Investment Advisor', 'Member of Financial Planning Standards Board', 'ISO 27001 Certified', 'Award-winning investment strategies'],
            },
          },
          {
            type: 'text-image',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            textContent: {
              heading: 'Our Investment Philosophy',
              description: 'We believe in building long-term wealth through disciplined investment strategies and comprehensive risk management.',
              features: ['Research-driven approach', 'Client-centric solutions', 'Transparent communication', 'Performance-oriented strategies'],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: kapoor.id,
      slug: 'team',
      title: 'Our Team - Kapoor Financial Services',
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
              description: 'Led by experienced financial professionals and chartered accountants',
              items: [
                { name: 'CA Amit Kapoor', role: 'Managing Partner', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', description: 'FCA, 25+ years in financial services' },
                { name: 'CA Riya Sharma', role: 'Partner - Investment Banking', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', description: 'Specializes in corporate finance' },
                { name: 'CA Vikash Kumar', role: 'Partner - Wealth Management', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', description: 'Expert in portfolio management' },
                { name: 'CA Deepika Patel', role: 'Senior Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', description: 'Financial advisory specialist' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: kapoor.id,
      slug: 'gallery',
      title: 'Gallery - Kapoor Financial Services',
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
              description: 'Our modern office space and financial advisory center',
              items: [
                { title: 'Executive Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
                { title: 'Investment Center', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600' },
                { title: 'Client Advisory Room', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' },
                { title: 'Financial Planning Session', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600' },
                { title: 'Reception Lobby', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600' },
                { title: 'Trading Floor', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600' },
              ],
            },
          },
        ],
      },
    },
  })

  // Generate additional pages for Kapoor Financial
  const kapoorPages = [
    { slug: 'services', title: 'Services', heading: 'Our Services', subheading: 'Comprehensive financial solutions for all your needs' },
    { slug: 'query', title: 'Query', heading: 'Send us a Query', subheading: 'Have questions? We are here to help' },
    { slug: 'career', title: 'Careers', heading: 'Join Our Team', subheading: 'Build your career in financial services' },
    { slug: 'contact', title: 'Contact', heading: 'Contact Us', subheading: 'Get in touch with our financial experts' },
  ]

  for (const page of kapoorPages) {
    await prisma.page.create({
      data: {
        websiteId: kapoor.id,
        slug: page.slug,
        title: `${page.title} - Kapoor Financial Services`,
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
              imageUrl: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800',
              textContent: {
                heading: `${page.title} Content`,
                description: `Detailed information about ${page.title.toLowerCase()} at Kapoor Financial Services.`,
                features: ['Professional service', 'Expert guidance', 'Client satisfaction', 'Quality assurance'],
              },
            },
          ],
        },
      },
    })
  }

  // Kapoor Service Pages
  const kapoorServices = [
    {
      slug: 'bookkeeping',
      title: 'Bookkeeping Services - Kapoor Financial Services',
      heroHeading: 'Professional Bookkeeping',
      heroSubheading: 'Accurate financial record management for growing businesses',
      heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600',
      contentHeading: 'Expert Bookkeeping Solutions',
      contentDescription: 'Professional bookkeeping services to maintain accurate financial records and support your business growth.',
      features: ['Daily transaction recording', 'Bank reconciliation', 'Accounts management', 'Financial reporting', 'Digital accounting'],
      contentImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      slug: 'gst-filing',
      title: 'GST Filing Services - Kapoor Financial Services',
      heroHeading: 'GST Compliance',
      heroSubheading: 'Expert GST filing and compliance services',
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600',
      contentHeading: 'Complete GST Solutions',
      contentDescription: 'Comprehensive GST filing and compliance services to keep your business tax-compliant.',
      features: ['Monthly GST returns', 'Quarterly filings', 'Annual returns', 'GST reconciliation', 'Input credit optimization'],
      contentImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    },
    {
      slug: 'payroll',
      title: 'Payroll Management - Kapoor Financial Services',
      heroHeading: 'Payroll Solutions',
      heroSubheading: 'Complete payroll processing and management',
      heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600',
      contentHeading: 'Comprehensive Payroll Services',
      contentDescription: 'End-to-end payroll processing including salary computation, compliance, and reporting.',
      features: ['Salary processing', 'Statutory compliance', 'Employee records', 'Tax calculations', 'Payroll reports'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'tax-planning',
      title: 'Tax Planning Services - Kapoor Financial Services',
      heroHeading: 'Strategic Tax Planning',
      heroSubheading: 'Optimize your tax strategy for maximum savings',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Tax Optimization Strategies',
      contentDescription: 'Strategic tax planning services to minimize liability while ensuring full compliance.',
      features: ['Tax strategy development', 'Investment planning', 'Compliance management', 'Tax return filing', 'Advisory services'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'company-formation',
      title: 'Company Formation - Kapoor Financial Services',
      heroHeading: 'Business Formation',
      heroSubheading: 'Complete company registration and incorporation services',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Company Formation Services',
      contentDescription: 'End-to-end business registration services from consultation to incorporation.',
      features: ['Company registration', 'Documentation', 'Compliance setup', 'Banking assistance', 'Ongoing support'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'compliance',
      title: 'Compliance Services - Kapoor Financial Services',
      heroHeading: 'Regulatory Compliance',
      heroSubheading: 'Stay compliant with all regulatory requirements',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Compliance Management',
      contentDescription: 'Comprehensive compliance services to meet all regulatory and statutory requirements.',
      features: ['Regulatory filings', 'Compliance monitoring', 'Documentation', 'Advisory services', 'Risk management'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'audit-services',
      title: 'Audit Services - Kapoor Financial Services',
      heroHeading: 'Professional Auditing',
      heroSubheading: 'Independent audit and assurance services',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Audit & Assurance',
      contentDescription: 'Professional audit services providing independent verification and assurance.',
      features: ['Financial audits', 'Internal audits', 'Compliance audits', 'Risk assessment', 'Audit reports'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'financial-advisory',
      title: 'Financial Advisory - Kapoor Financial Services',
      heroHeading: 'Financial Advisory',
      heroSubheading: 'Strategic financial guidance and consulting',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Financial Consulting',
      contentDescription: 'Expert financial advisory services to support your business growth and investment decisions.',
      features: ['Investment advisory', 'Financial planning', 'Risk management', 'Business valuation', 'Strategic guidance'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
  ]

  for (const service of kapoorServices) {
    await prisma.page.create({
      data: {
        websiteId: kapoor.id,
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
                heading: 'Ready to Get Started?',
                description: 'Contact us today for a consultation',
                buttonText: 'Contact Us',
              },
            },
          ],
        },
      },
    })
  }

  console.log('  ✅ Kapoor Financial Services: 8 pages created + 8 service pages')

  // ============================================================
  // WEBSITE 5: Singh & Co. Advisors (Orange/Amber Theme)
  // ============================================================
  const singh = await prisma.website.upsert({
    where: { slug: 'singh-co-advisors' },
    update: {
      name: 'Singh & Co. Advisors',
      domain: 'https://singh-co-advisors.com',
      logo: '/uploads/logo.svg',
      phone: '+91 80 1234 5678',
      email: 'info@singh-co-advisors.com',
      address: '12th Floor, Tech Park, Electronic City, Bangalore - 560100',
      workingHours: 'Mon - Sat: 10:00 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#ea580c',
        secondaryColor: '#f59e0b',
        fontFamily: 'Inter',
        theme: 'orange',
      },
    },
    create: {
      name: 'Singh & Co. Advisors',
      slug: 'singh-co-advisors',
      domain: 'https://singh-co-advisors.com',
      logo: '/uploads/logo.svg',
      phone: '+91 80 1234 5678',
      email: 'info@singh-co-advisors.com',
      address: '12th Floor, Tech Park, Electronic City, Bangalore - 560100',
      workingHours: 'Mon - Sat: 10:00 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#ea580c',
        secondaryColor: '#f59e0b',
        fontFamily: 'Inter',
        theme: 'orange',
      },
    },
  })
  console.log('✅ Singh & Co. Advisors website created')

  // Singh Pages
  await prisma.page.create({
    data: {
      websiteId: singh.id,
      slug: 'home',
      title: 'Singh & Co. Advisors',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
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
              description: 'Singh & Co. leverages cutting-edge technology to provide modern accounting solutions, business consulting, and startup advisory services to help businesses thrive in the digital economy.',
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
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: singh.id,
      slug: 'about',
      title: 'About Us - Singh & Co. Advisors',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'About Singh & Co. Advisors',
              subheading: 'Pioneering the future of business advisory since 2012',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            textContent: {
              heading: 'Innovation Meets Expertise',
              description: 'Founded by Arjun Singh, our firm specializes in providing technology-enabled business solutions for startups and growing enterprises. We combine traditional accounting expertise with modern digital tools.',
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
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: singh.id,
      slug: 'team',
      title: 'Our Team - Singh & Co. Advisors',
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
                { name: 'CA Arjun Singh', role: 'Managing Partner', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', description: 'FCA, 20+ years experience in technology' },
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

  await prisma.page.create({
    data: {
      websiteId: singh.id,
      slug: 'gallery',
      title: 'Gallery - Singh & Co. Advisors',
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

  // Generate additional pages for Singh & Co.
  const singhPages = [
    { slug: 'services', title: 'Services', heading: 'Our Services', subheading: 'Comprehensive digital business solutions' },
    { slug: 'query', title: 'Query', heading: 'Business Inquiry', subheading: 'Connect with our business advisors' },
    { slug: 'career', title: 'Careers', heading: 'Join Innovation', subheading: 'Be part of the digital transformation' },
    { slug: 'contact', title: 'Contact', heading: 'Contact Us', subheading: 'Get in touch with our tech-enabled team' },
  ]

  for (const page of singhPages) {
    await prisma.page.create({
      data: {
        websiteId: singh.id,
        slug: page.slug,
        title: `${page.title} - Singh & Co. Advisors`,
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
                description: `Comprehensive information about ${page.title.toLowerCase()} at Singh & Co. Advisors.`,
                features: ['Digital-first approach', 'Innovation-driven', 'Client-focused solutions', 'Technology-enabled'],
              },
            },
          ],
        },
      },
    })
  }

  // Singh Service Pages
  const singhServices = [
    {
      slug: 'bookkeeping',
      title: 'Digital Bookkeeping - Singh & Co. Advisors',
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
      title: 'GST Services - Singh & Co. Advisors',
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
      title: 'Smart Payroll - Singh & Co. Advisors',
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
      title: 'Strategic Tax Planning - Singh & Co. Advisors',
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
      title: 'Digital Company Formation - Singh & Co. Advisors',
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
      title: 'Smart Compliance - Singh & Co. Advisors',
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
      title: 'Digital Audit Services - Singh & Co. Advisors',
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
      title: 'Financial Technology Advisory - Singh & Co. Advisors',
      heroHeading: 'FinTech Advisory',
      heroSubheading: 'Strategic financial guidance for the digital economy',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Digital Finance Strategy',
      contentDescription: 'Strategic financial advisory services focused on digital transformation and innovation.',
      features: ['Digital strategy', 'FinTech integration', 'Innovation consulting', 'Technology assessment', 'Future planning'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
  ]

  for (const service of singhServices) {
    await prisma.page.create({
      data: {
        websiteId: singh.id,
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
  }

  console.log('  ✅ Singh & Co. Advisors: 8 pages created + 8 service pages')

  // ============================================================
  // WEBSITE 6: Patel Consulting (Teal/Cyan Theme)
  // ============================================================
  const patel = await prisma.website.upsert({
    where: { slug: 'patel-consulting' },
    update: {
      name: 'Patel Consulting',
      domain: 'https://patel-consulting.com',
      logo: '/uploads/logo.svg',
      phone: '+91 79 8765 4321',
      email: 'info@patel-consulting.com',
      address: '8th Floor, Business Square, SG Highway, Ahmedabad - 380015',
      workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      themeConfig: {
        primaryColor: '#0d9488',
        secondaryColor: '#06b6d4',
        fontFamily: 'Inter',
        theme: 'teal',
      },
    },
    create: {
      name: 'Patel Consulting',
      slug: 'patel-consulting',
      domain: 'https://patel-consulting.com',
      logo: '/uploads/logo.svg',
      phone: '+91 79 8765 4321',
      email: 'info@patel-consulting.com',
      address: '8th Floor, Business Square, SG Highway, Ahmedabad - 380015',
      workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      themeConfig: {
        primaryColor: '#0d9488',
        secondaryColor: '#06b6d4',
        fontFamily: 'Inter',
        theme: 'teal',
      },
    },
  })
  console.log('✅ Patel Consulting website created')

  // Patel Pages
  await prisma.page.create({
    data: {
      websiteId: patel.id,
      slug: 'home',
      title: 'Patel Consulting',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
            textContent: {
              heading: 'Strategic Business Consulting Excellence',
              subheading: 'Transforming businesses through strategic financial consulting and advisory',
              cta: 'Discover Solutions',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800',
            textContent: {
              heading: 'Strategic Business Transformation',
              subheading: 'Excellence in Consulting',
              description: 'Patel Consulting provides strategic business consulting, financial advisory, and organizational transformation services to help businesses achieve sustainable growth and operational excellence.',
              features: ['Strategic Planning', 'Business Transformation', 'Financial Advisory', 'Operational Excellence'],
            },
          },
          {
            type: 'services',
            order: 3,
            imageUrl: null,
            textContent: {
              heading: 'Our Consulting Services',
              subheading: 'Strategic solutions for business excellence',
              items: [
                { icon: 'target', title: 'Strategic Planning', description: 'Long-term business strategy and planning services' },
                { icon: 'refresh-cw', title: 'Business Transformation', description: 'Organizational change and transformation consulting' },
                { icon: 'trending-up', title: 'Performance Optimization', description: 'Operational efficiency and performance improvement' },
                { icon: 'briefcase', title: 'Management Consulting', description: 'Leadership development and management consulting' },
                { icon: 'globe', title: 'Market Expansion', description: 'Market entry and expansion strategy consulting' },
                { icon: 'award', title: 'Quality Excellence', description: 'Quality management and process improvement' },
              ],
            },
          },
          {
            type: 'stats',
            order: 4,
            imageUrl: null,
            textContent: {
              heading: 'Our Consulting Excellence',
              stats: [
                { value: '250+', label: 'Successful Projects' },
                { value: '18+', label: 'Years of Excellence' },
                { value: '75+', label: 'Expert Consultants' },
                { value: '97%', label: 'Project Success Rate' },
              ],
            },
          },
          {
            type: 'cta',
            order: 5,
            imageUrl: null,
            textContent: {
              heading: 'Ready to Transform Your Business?',
              description: 'Partner with us for strategic consulting and sustainable business growth',
              cta: 'Schedule Strategy Session',
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: patel.id,
      slug: 'about',
      title: 'About Us - Patel Consulting',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'About Patel Consulting',
              subheading: 'Strategic excellence in business consulting since 2006',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800',
            textContent: {
              heading: 'Strategic Excellence & Innovation',
              description: 'Founded by Ravi Patel, our consulting firm has helped hundreds of organizations achieve their strategic objectives through innovative consulting solutions and proven methodologies.',
              features: ['Strategic consulting expertise', 'Industry-specific solutions', 'Proven methodologies', 'Results-driven approach'],
            },
          },
          {
            type: 'text-image',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            textContent: {
              heading: 'Our Consulting Philosophy',
              description: 'We believe in creating sustainable value through strategic thinking, operational excellence, and collaborative partnerships with our clients.',
              features: ['Client partnership approach', 'Sustainable solutions', 'Strategic thinking', 'Measurable results'],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: patel.id,
      slug: 'team',
      title: 'Our Team - Patel Consulting',
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
              description: 'Led by experienced chartered accountants and finance professionals',
              items: [
                { name: 'CA Rajesh Sharma', role: 'Managing Partner', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', description: 'FCA, 30+ years experience' },
                { name: 'CA Priya Mehta', role: 'Partner - Audit', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', description: 'Specializes in corporate audits' },
                { name: 'CA Amit Kumar', role: 'Partner - Taxation', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', description: 'Expert in international taxation' },
                { name: 'CA Sneha Gupta', role: 'Senior Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', description: 'Financial advisory specialist' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: patel.id,
      slug: 'gallery',
      title: 'Gallery - Patel Consulting',
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
              description: 'Our modern office space and team at work',
              items: [
                { title: 'Main Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
                { title: 'Conference Room', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600' },
                { title: 'Team Meeting', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' },
                { title: 'Client Consultation', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600' },
                { title: 'Reception Area', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600' },
                { title: 'Work Station', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600' },
              ],
            },
          },
        ],
      },
    },
  })

  // Generate additional pages for Patel Consulting
  const patelPages = [
    { slug: 'services', title: 'Services', heading: 'Our Services', subheading: 'Comprehensive strategic consulting services' },
    { slug: 'query', title: 'Query', heading: 'Strategic Consultation', subheading: 'Connect with our strategic consulting experts' },
    { slug: 'career', title: 'Careers', heading: 'Join Excellence', subheading: 'Build your consulting career with industry leaders' },
    { slug: 'contact', title: 'Contact', heading: 'Contact Us', subheading: 'Get in touch with our consulting experts' },
  ]

  for (const page of patelPages) {
    await prisma.page.create({
      data: {
        websiteId: patel.id,
        slug: page.slug,
        title: `${page.title} - Patel Consulting`,
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
              imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800',
              textContent: {
                heading: `${page.title} Excellence`,
                description: `Comprehensive information about ${page.title.toLowerCase()} at Patel Consulting.`,
                features: ['Strategic excellence', 'Client-focused approach', 'Proven methodologies', 'Results-driven solutions'],
              },
            },
          ],
        },
      },
    })
  }

  // Patel Service Pages
  const patelServices = [
    {
      slug: 'bookkeeping',
      title: 'Strategic Bookkeeping - Patel Consulting',
      heroHeading: 'Strategic Financial Management',
      heroSubheading: 'Comprehensive bookkeeping with business insights',
      heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600',
      contentHeading: 'Strategic Approach',
      contentDescription: 'Bookkeeping services that provide strategic insights for business growth and decision-making.',
      features: ['Strategic analysis', 'Performance metrics', 'Growth insights', 'Decision support', 'Executive reporting'],
      contentImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      slug: 'gst-filing',
      title: 'GST Consulting - Patel Consulting',
      heroHeading: 'Strategic GST Management',
      heroSubheading: 'Comprehensive GST strategy and compliance',
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600',
      contentHeading: 'GST Excellence',
      contentDescription: 'Strategic GST management with compliance optimization and business impact analysis.',
      features: ['Strategic planning', 'Compliance optimization', 'Risk management', 'Business impact analysis', 'Process improvement'],
      contentImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    },
    {
      slug: 'payroll',
      title: 'Strategic Payroll Solutions - Patel Consulting',
      heroHeading: 'Strategic HR Solutions',
      heroSubheading: 'Payroll management with organizational strategy',
      heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600',
      contentHeading: 'Organizational Excellence',
      contentDescription: 'Strategic payroll solutions aligned with organizational goals and human resource strategy.',
      features: ['Strategic HR alignment', 'Performance tracking', 'Cost optimization', 'Policy development', 'Change management'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'tax-planning',
      title: 'Strategic Tax Advisory - Patel Consulting',
      heroHeading: 'Strategic Tax Consulting',
      heroSubheading: 'Long-term tax strategy and wealth planning',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Wealth Strategy',
      contentDescription: 'Comprehensive tax planning integrated with long-term wealth building and business strategy.',
      features: ['Wealth planning', 'Strategic tax management', 'Business structuring', 'Investment strategy', 'Legacy planning'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'company-formation',
      title: 'Strategic Business Formation - Patel Consulting',
      heroHeading: 'Business Strategy & Formation',
      heroSubheading: 'Strategic approach to business structuring',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Strategic Formation',
      contentDescription: 'Business formation with strategic planning, market analysis, and long-term growth considerations.',
      features: ['Strategic planning', 'Market analysis', 'Business modeling', 'Growth strategy', 'Risk assessment'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'compliance',
      title: 'Strategic Compliance - Patel Consulting',
      heroHeading: 'Strategic Risk Management',
      heroSubheading: 'Compliance integrated with business strategy',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Integrated Compliance',
      contentDescription: 'Strategic compliance management that supports business objectives while managing risk.',
      features: ['Risk strategy', 'Governance frameworks', 'Strategic compliance', 'Performance management', 'Process optimization'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
    {
      slug: 'audit-services',
      title: 'Strategic Audit Services - Patel Consulting',
      heroHeading: 'Strategic Assurance',
      heroSubheading: 'Audit services with strategic business insights',
      heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600',
      contentHeading: 'Strategic Audit',
      contentDescription: 'Audit services that provide strategic insights and recommendations for business improvement.',
      features: ['Strategic insights', 'Performance analysis', 'Risk assessment', 'Improvement recommendations', 'Value creation'],
      contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      slug: 'financial-advisory',
      title: 'Strategic Financial Advisory - Patel Consulting',
      heroHeading: 'Strategic Business Advisory',
      heroSubheading: 'Comprehensive financial and business strategy consulting',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'Strategic Excellence',
      contentDescription: 'Comprehensive financial advisory services with strategic business consulting and transformation guidance.',
      features: ['Strategic planning', 'Business transformation', 'Financial strategy', 'Growth consulting', 'Performance optimization'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
  ]

  for (const service of patelServices) {
    await prisma.page.create({
      data: {
        websiteId: patel.id,
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
                heading: 'Transform Your Business',
                description: 'Partner with us for strategic excellence',
                buttonText: 'Get Consultation',
              },
            },
          ],
        },
      },
    })
  }

  console.log('  ✅ Patel Consulting: 8 pages created + 8 service pages')

  console.log('\n🎉 Database seed completed successfully!')
  console.log('\n📊 Summary:')
  console.log('   - 6 Websites created/updated')
  console.log('   - Sharma & Associates: 10 pages')
  console.log('   - Verma Accounting: 14 pages')
  console.log('   - Gupta Tax Advisors: 11 pages')
  console.log('   - Kapoor Financial Services: 8 pages + 8 service pages')
  console.log('   - Singh & Co. Advisors: 8 pages + 8 service pages')
  console.log('   - Patel Consulting: 8 pages + 8 service pages')
  console.log('   - Total: 83 pages with unique content')
  console.log('   - All pages have production-ready content\n')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
