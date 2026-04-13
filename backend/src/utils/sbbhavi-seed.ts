import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding S B Bhavi & CO website data (Verma Replica)...')

  // ============================================================
  // S B Bhavi & CO (Modern Black/White Theme)
  // ============================================================
  const sbbhavi = await prisma.website.upsert({
    where: { slug: 's-b-bhavi' },
    update: {
      name: 'S B Bhavi & CO.',
      domain: 'https://casbbhavi.in',
      logo: '/uploads/logo.svg',
      phone: '+91 9819157403',
      email: 'cabhavi10@gmail.com',
      address: 'Bldg No 118 Flat No 302 Manisha Vishnu CHS, Opp Tilak Nagar Police Station, Tilak Nagar, Chembur Mumbai 400089',
      workingHours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#ffffff',
        secondaryColor: '#000000',
        fontFamily: 'Roboto',
        theme: 'modern',
      },
    },
    create: {
      name: 'S B Bhavi & CO.',
      slug: 's-b-bhavi',
      domain: 'https://casbbhavi.in',
      logo: '/uploads/logo.svg',
      phone: '+91 9819157403',
      email: 'cabhavi10@gmail.com',
      address: 'Bldg No 118 Flat No 302 Manisha Vishnu CHS, Opp Tilak Nagar Police Station, Tilak Nagar, Chembur Mumbai 400089',
      workingHours: 'Mon - Sat: 10:00 AM - 6:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#ffffff',
        secondaryColor: '#000000',
        fontFamily: 'Roboto',
        theme: 'modern',
      },
    },
  })
  console.log('S B Bhavi & CO website created')
  
  await prisma.page.deleteMany({ where: { websiteId: sbbhavi.id } });

  // S B Bhavi Pages (Replica of Verma Pages)
  await prisma.page.create({
    data: {
      websiteId: sbbhavi.id,
      slug: 'home',
      title: 'Home - S B Bhavi & CO.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.stockcake.com/public/8/f/2/8f232cdb-1ba5-42aa-be75-f9fbb33c2f6c_large/corporate-team-meeting-stockcake.jpg',
            textContent: {
              heading: 'Modern Accounting Solutions',
              subheading: 'Bookkeeping, GST, and Payroll services for growing businesses',
              cta: 'Explore Services',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://blog.camonk.com/wp-content/uploads/2025/12/Top-CA-Firms-in-Chandigarh-Best-Articleship-CA-Monk-1024x683.jpg',
            textContent: {
              heading: 'Simplify Your Finances',
              description: 'We specialize in bookkeeping, GST compliance, and payroll management for SMEs. We leverage cloud accounting tools to provide real-time financial insights.',
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
      websiteId: sbbhavi.id,
      slug: 'about',
      title: 'About Us - S B Bhavi & CO.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600',
            textContent: {
              heading: 'About S B Bhavi & CO.',
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
      websiteId: sbbhavi.id,
      slug: 'team',
      title: 'Our Team - S B Bhavi & CO.',
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
      websiteId: sbbhavi.id,
      slug: 'services',
      title: 'Services - S B Bhavi & CO.',
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
      websiteId: sbbhavi.id,
      slug: 'gallery',
      title: 'Gallery - S B Bhavi & CO.',
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
      websiteId: sbbhavi.id,
      slug: 'contact',
      title: 'Contact Us - S B Bhavi & CO.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600',
            textContent: {
              heading: 'Contact S B Bhavi & CO.',
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
              address: 'Bldg No 118 Flat No 302 Manisha Vishnu CHS, Opp Tilak Nagar Police Station, Tilak Nagar, Chembur Mumbai 400089',
              phone: '+91 9819157403',
              email: 'cabhavi10@gmail.com',
              hours: 'Mon - sat: 10:00 AM - 6:00 PM',
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

  // S B Bhavi Service Pages
  const sbbhaviServices = [
    {
      slug: 'bookkeeping',
      title: 'Bookkeeping Services - S B Bhavi & CO.',
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
      title: 'GST Filing Services - S B Bhavi & CO.',
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
      title: 'Payroll Management - S B Bhavi & CO.',
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
      title: 'Tax Planning & Advisory - S B Bhavi & CO.',
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
      title: 'Company Formation - S B Bhavi & CO.',
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
      title: 'Regulatory Compliance - S B Bhavi & CO.',
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
      title: 'Audit Services - S B Bhavi & CO.',
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
      title: 'Financial Advisory - S B Bhavi & CO.',
      heroHeading: 'Financial Advisory',
      heroSubheading: 'Expert financial advisory services',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Expert financial advisory services to help you make informed business decisions.',
      features: ['Business valuation', 'Financial planning', 'Investment advisory', 'Merger & acquisition support', 'Funding assistance'],
      contentImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    },
  ]

  for (const service of sbbhaviServices) {
    await prisma.page.create({
      data: {
        websiteId: sbbhavi.id,
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

  console.log('? S B Bhavi: 14 pages created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
