import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting comprehensive database seed...')

  console.log('🧹 Cleaning up existing pages and sections...')
  console.log('✅ Cleanup complete')

  await prisma.section.deleteMany({ where: { page: { website: { slug: 'k-s-anithasree-and-associates' } } } });
  await prisma.page.deleteMany({ where: { website: { slug: 'k-s-anithasree-and-associates' } } });

  // Create admin user
  const adminPassword = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD || 'ChangeMe@123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@cafirm.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'vbadmin@cafirm.com',
      passwordHash: adminPassword,
      role: 'SUPER_ADMIN',
    },
  })
  console.log('✅ Admin user created')

  // ============================================================
  // WEBSITE 1: K S Anithasree & Associates (Professional Blue Theme)
  // ============================================================
  const k_s_anithasree = await prisma.website.upsert({
    where: { slug: 'k-s-anithasree-and-associates' },
    update: {
      name: 'K S Anithasree & Associates',
      domain: 'https://anithasreeassociates.in/',
      logo: '/uploads/logo.svg',
      phone: '+91 9003887511',
      email: 'caanithasree@gmail.com',
      address: '45/4, 1st floor, CKC Vibav Plaza, Above Bank of Maharashtra, Vijayamangalam Road, Uthukuli, Tiruppur-638751',
      workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
      themeConfig: {
        primaryColor: '#1e40af',
        secondaryColor: '#64748b',
        fontFamily: 'Inter',
        theme: 'professional',
      },
    },
    create: {
      name: 'K S Anithasree & Associates',
      slug: 'k-s-anithasree-and-associates',
      domain: 'https://anithasreeassociates.in/',
      logo: '/uploads/logo.svg',
      phone: '+91 9003887511',
      email: 'caanithasree@gmail.com',
      address: '45/4, 1st floor, CKC Vibav Plaza, Above Bank of Maharashtra, Vijayamangalam Road, Uthukuli, Tiruppur-638751',
      workingHours: '09:00 to 07:00',
      themeConfig: {
        primaryColor: '#1e40af',
        secondaryColor: '#64748b',
        fontFamily: 'Inter',
        theme: 'professional',
      },
    },
  })
  console.log('✅ K S Anithasree & Associates website created')

  // k_s_anithasree Pages
  await prisma.page.create({
    data: {
      websiteId: k_s_anithasree.id,
      slug: 'home',
      title: 'Home - K S Anithasree & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
            textContent: {
              heading: 'Trusted Chartered Accountants Since 2026',
              subheading: 'Expert financial guidance for businesses and individuals',
              cta: 'Get Started',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              heading: 'Professional Audit & Assurance Services',
              subheading: 'Comprehensive Financial Solutions',
              description: 'With over 1 years of experience, K S Anithasree & Associates provides top-tier audit, taxation, and corporate advisory services to businesses across industries.',
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
                { icon: 'users', title: 'K S Anithasree Management', description: 'Internal controls and K S Anithasree assessment' },
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
                { value: '100+', label: 'Clients Served' },
                { value: '1+', label: 'Years Experience' },
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
      websiteId: k_s_anithasree.id,
      slug: 'about',
      title: 'About Us - K S Anithasree & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            textContent: {
              heading: 'About K S Anithasree & Associates',
              subheading: 'Building trust through excellence in accounting since 2026',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Our Legacy of Excellence',
              description: 'Founded by CA K S Anithasree, our firm has grown from a small practice to one of the most respected accounting firms in the region. We specialize in serving corporate clients with complex audit and taxation needs.',
              features: ['ISO 9001:2015 Certified', 'Member of ICAI', 'Recognized by major regulatory bodies', 'Award-winning team'],
            },
          },
          {
            type: 'text-image',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600',
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
      websiteId: k_s_anithasree.id,
      slug: 'team',
      title: 'Our Team - K S Anithasree & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
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
                { name: 'CA Agrawal', role: 'Managing Partner', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400', description: 'FCA, 30+ years experience' },
                { name: 'CA Priya Mehta', role: 'Partner - Audit', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', description: 'Specializes in corporate audits' },
                { name: 'CA Amit Kumar', role: 'Partner - Taxation', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', description: 'Expert in international taxation' },
                { name: 'CA Sneha Gupta', role: 'Senior Manager', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', description: 'Financial advisory specialist' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: k_s_anithasree.id,
      slug: 'services',
      title: 'Our Services - K S Anithasree & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
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
                { icon: 'users', title: 'k_s_anithasree Management', description: 'Internal controls and fraud detection' },
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
      websiteId: k_s_anithasree.id,
      slug: 'gallery',
      title: 'Gallery - K S Anithasree & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600',
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
                { title: 'Main Office', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600' },
                { title: 'Conference Room', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600' },
                { title: 'Team Meeting', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600' },
                { title: 'Client Consultation', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600' },
                { title: 'Reception Area', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600' },
                { title: 'Work Station', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: k_s_anithasree.id,
      slug: 'contact',
      title: 'Contact Us - K S Anithasree & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600',
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
              address: '45/4, 1st floor, CKC Vibav Plaza, Above Bank of Maharashtra, Vijayamangalam Road, Uthukuli, Tiruppur-638751',
              phone: '+91 9003887511',
              email: 'caanithasree@gmail.com',
              hours: '09:00 to 07:00',
              mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.216835251915!2d77.45356687504764!3d11.171574889002233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDEwJzE3LjciTiA3N8KwMjcnMjIuMSJF!5e0!3m2!1sen!2sin!4v1781334300838!5m2!1sen!2sin',
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

  // k_s_anithasree Service Pages
  const k_s_anithasreeServices = [
    {
      slug: 'audit-services',
      title: 'Audit Services - K S Anithasree & Associates',
      heroHeading: 'Professional Audit Services',
      heroSubheading: 'Ensuring accuracy, compliance, and transparency',
      heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
      contentHeading: 'Comprehensive Audit Solutions',
      contentDescription: 'We conduct thorough statutory audits as per Companies Act and other regulatory requirements. Our comprehensive approach ensures complete compliance.',
      features: ['Financial statement audits', 'Internal control assessment', 'Compliance verification', 'Detailed audit reports'],
      contentImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    },
    {
      slug: 'taxation-services',
      title: 'Taxation Services - K S Anithasree & Associates',
      heroHeading: 'Expert Taxation Services',
      heroSubheading: 'Maximize tax efficiency and ensure compliance',
      heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      contentHeading: 'Income Tax & GST Services',
      contentDescription: 'Strategic tax planning and compliance for individuals and corporations. We help minimize tax liability while ensuring full compliance.',
      features: ['Tax planning & advisory', 'Return filing', 'Tax litigation support', 'Transfer pricing documentation'],
      contentImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    },
    {
      slug: 'corporate-services',
      title: 'Corporate Services - K S Anithasree & Associates',
      heroHeading: 'Corporate Advisory Services',
      heroSubheading: 'Strategic guidance for business growth and compliance',
      heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600',
      contentHeading: 'Company Formation & Compliance',
      contentDescription: 'End-to-end services for company incorporation, annual compliance, and secretarial services.',
      features: ['Private & public company incorporation', 'LLP formation', 'Annual ROC filings', 'Board meeting management'],
      contentImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      slug: 'bookkeeping',
      title: 'Bookkeeping Services - K S Anithasree & Associates',
      heroHeading: 'Bookkeeping Services',
      heroSubheading: 'Professional financial record management',
      heroImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Professional bookkeeping services to keep your financial records accurate and up-to-date.',
      features: ['Daily transaction recording', 'Bank reconciliation', 'Accounts payable & receivable', 'Financial statement preparation', 'Cash flow management'],
      contentImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    },
    {
      slug: 'gst-filing',
      title: 'GST Filing Services - K S Anithasree & Associates',
      heroHeading: 'GST Filing Services',
      heroSubheading: 'Expert GST compliance and filing services',
      heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
      contentHeading: 'Complete GST Solutions',
      contentDescription: 'We ensure timely and accurate GST returns to keep your business compliant with all tax regulations.',
      features: ['Monthly GSTR-1 & GSTR-3B filing', 'Quarterly GSTR-4 for composition dealers', 'Annual GST return filing', 'GST reconciliation', 'Input tax credit optimization'],
      contentImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
    },
    {
      slug: 'payroll',
      title: 'Payroll Management - K S Anithasree & Associates',
      heroHeading: 'Payroll Management',
      heroSubheading: 'Complete payroll processing solutions',
      heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Complete payroll processing solutions including salary computation, statutory compliance, and employee tax management.',
      features: ['Salary calculation & disbursement', 'PF & ESI compliance', 'TDS on salary', 'Leave & attendance management', 'Payslip generation'],
      contentImage: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800',
    },
    {
      slug: 'tax-planning',
      title: 'Tax Planning & Advisory - K S Anithasree & Associates',
      heroHeading: 'Tax Planning & Advisory',
      heroSubheading: 'Strategic tax planning services',
      heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
      contentHeading: 'What We Offer',
      contentDescription: 'Strategic tax planning services to minimize your tax liability legally while ensuring full compliance with tax laws.',
      features: ['Income tax planning', 'Investment advisory', 'Tax saving strategies', 'Advance tax computation', 'Tax return filing'],
      contentImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80',
    },
    {
      slug: 'company-formation',
      title: 'Company Formation - K S Anithasree & Associates',
      heroHeading: 'Company Formation',
      heroSubheading: 'End-to-end company registration services',
      heroImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'End-to-end company registration and formation services. From choosing the right business structure to getting your company registered.',
      features: ['Private Limited Company registration', 'LLP formation', 'Partnership deed drafting', 'MSME registration', 'Startup India registration'],
      contentImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      slug: 'compliance',
      title: 'Regulatory Compliance - K S Anithasree & Associates',
      heroHeading: 'Regulatory Compliance',
      heroSubheading: 'Comprehensive compliance services',
      heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      contentHeading: 'What We Offer',
      contentDescription: 'Comprehensive compliance services to keep your business aligned with all statutory and regulatory requirements.',
      features: ['ROC filings', 'Annual compliance', 'Statutory audits', 'Legal compliance review', 'Director KYC'],
      contentImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      slug: 'financial-advisory',
      title: 'Financial Advisory - K S Anithasree & Associates',
      heroHeading: 'Financial Advisory',
      heroSubheading: 'Expert financial advisory services',
      heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
      contentHeading: 'What We Offer',
      contentDescription: 'Expert financial advisory services to help you make informed business decisions and achieve your financial goals.',
      features: ['Business valuation', 'Financial planning', 'Investment advisory', 'Merger & acquisition support', 'Funding assistance'],
      contentImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
  ]

  for (const service of k_s_anithasreeServices) {
    await prisma.page.create({
      data: {
        websiteId: k_s_anithasree.id,
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

  console.log('  ✅ K S Anithasree & Associates: 10 pages created')

}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
