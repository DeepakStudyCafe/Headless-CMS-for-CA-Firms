import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const SERVICES = [
  { slug: 'tax-planning-filing', title: 'Tax Planning & Filing', href: '/services/tax-planning-filing', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z', description: 'Strategic tax optimization for individuals and businesses. We minimize liabilities while ensuring full compliance.' },
  { slug: 'gst-compliance', title: 'GST Compliance', href: '/services/gst-compliance', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', description: 'End-to-end GST registration, return filing, and compliance management for seamless operations.' },
  { slug: 'statutory-audit', title: 'Statutory Audit', href: '/services/statutory-audit', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', description: 'Independent and thorough auditing services that ensure transparency and accuracy in every report.' },
  { slug: 'company-registration', title: 'Company Registration', href: '/services/company-registration', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', description: 'Seamless company incorporation, LLP formation, and business registration services across India.' },
  { slug: 'financial-advisory', title: 'Financial Advisory', href: '/services/financial-advisory', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', description: 'Data-driven financial strategy, investment advisory, and wealth management solutions for growth.' },
  { slug: 'bookkeeping', title: 'Bookkeeping', href: '/services/bookkeeping', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', description: 'Accurate, timely bookkeeping and accounting services for a clear financial picture year-round.' },
]

const SERVICE_DETAILS: Record<string, any> = {
  'tax-planning-filing': {
    tagline: 'Strategic tax planning that keeps more money where it belongs — with you.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    description: 'We craft legally optimised tax strategies for individuals and businesses, ensuring compliance while maximising savings.',
    features: ['Income tax return filing', 'Advance tax computation', 'Tax-saving investment advisory', 'TDS compliance management'],
    processSteps: [
      { title: 'Assessment', description: 'We review your income sources and applicable deductions.' },
      { title: 'Strategy', description: 'A tailored tax plan is developed to minimise liability.' },
      { title: 'Filing', description: 'Returns are filed accurately and on time.' },
      { title: 'Review', description: 'We track refunds and respond to any notices.' },
    ],
    faqs: [
      { question: 'When should I start tax planning?', answer: 'Ideally at the beginning of the financial year to maximise deductions.' },
      { question: 'Can you file returns for previous years?', answer: 'Yes, we handle belated and revised returns for prior financial years.' },
    ],
  },
  'gst-compliance': {
    tagline: 'Complete GST management so you never miss a deadline.',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
    description: 'From registration to monthly filings and annual returns, we handle every aspect of GST compliance for your business.',
    features: ['GST registration', 'GSTR-1, 3B, 9 filing', 'Input tax credit reconciliation', 'GST audit support'],
    processSteps: [
      { title: 'Registration', description: 'We complete your GST registration end-to-end.' },
      { title: 'Monthly Filing', description: 'GSTR-1 and 3B are filed within deadlines each month.' },
      { title: 'ITC Review', description: 'Input tax credits are reconciled to avoid mismatches.' },
      { title: 'Annual Return', description: 'GSTR-9 is filed accurately with full supporting documents.' },
    ],
    faqs: [
      { question: 'What if I miss a GST filing deadline?', answer: 'We will file the return and advise on applicable late fees and interest.' },
      { question: 'Do you handle GST notices?', answer: 'Yes, we draft responses and represent clients before GST authorities.' },
    ],
  },
  'statutory-audit': {
    tagline: 'Independent, thorough audits that stakeholders can rely on.',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80',
    description: 'Our statutory audit service provides accurate, unbiased assurance on your financial statements in line with applicable standards.',
    features: ['Statutory audit under Companies Act', 'Tax audit under Income Tax Act', 'Internal audit', 'Audit report issuance'],
    processSteps: [
      { title: 'Planning', description: 'We understand your business and assess audit risks.' },
      { title: 'Fieldwork', description: 'Transactions and balances are verified with supporting evidence.' },
      { title: 'Review', description: 'Findings are discussed with management before finalisation.' },
      { title: 'Report', description: 'Audit report is issued with observations and recommendations.' },
    ],
    faqs: [
      { question: 'Is statutory audit mandatory for my company?', answer: 'All companies registered under the Companies Act require a statutory audit.' },
      { question: 'How long does the audit take?', answer: 'Typically 2–6 weeks depending on the size of the organisation.' },
    ],
  },
  'company-registration': {
    tagline: 'Launch your business with the right structure from day one.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    description: 'We handle the entire incorporation process for private limited companies, LLPs, OPCs and other structures with MCA expertise.',
    features: ['Private limited company incorporation', 'LLP formation', 'OPC registration', 'Post-registration statutory setup'],
    processSteps: [
      { title: 'Consultation', description: 'We advise on the right business structure for your goals.' },
      { title: 'Documentation', description: 'All required documents and forms are prepared.' },
      { title: 'Filing', description: 'MCA forms are submitted and tracked.' },
      { title: 'Incorporation', description: 'Certificate of incorporation is obtained and handed to you.' },
    ],
    faqs: [
      { question: 'How long does company registration take?', answer: 'Typically 7–15 working days from document submission.' },
      { question: 'What is the minimum capital required?', answer: 'There is no minimum paid-up capital requirement for private limited companies.' },
    ],
  },
  'financial-advisory': {
    tagline: 'Data-driven financial strategy aligned to your long-term goals.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    description: 'We provide strategic financial advisory covering investment planning, business valuation, CFO services and wealth management.',
    features: ['Investment advisory', 'Business valuation', 'Virtual CFO services', 'Wealth management planning'],
    processSteps: [
      { title: 'Discovery', description: 'We understand your financial position and goals.' },
      { title: 'Analysis', description: 'A comprehensive financial assessment is conducted.' },
      { title: 'Strategy', description: 'A personalised financial roadmap is developed.' },
      { title: 'Review', description: 'We meet periodically to review and adjust the plan.' },
    ],
    faqs: [
      { question: 'Do you offer Virtual CFO services?', answer: 'Yes, we provide part-time CFO support for startups and growing businesses.' },
      { question: 'Can you help with business valuation?', answer: 'Yes, we conduct valuations for fundraising, M&A and regulatory purposes.' },
    ],
  },
  'bookkeeping': {
    tagline: 'Accurate books, delivered on time, every month.',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80',
    description: 'We maintain your financial records with precision, providing you with real-time visibility and audit-ready books year-round.',
    features: ['Daily transaction recording', 'Bank reconciliation', 'Monthly P&L and balance sheet', 'Vendor and client ledger management'],
    processSteps: [
      { title: 'Onboarding', description: 'We set up your chart of accounts and workflows.' },
      { title: 'Recording', description: 'All transactions are recorded in a regular cycle.' },
      { title: 'Reconciliation', description: 'Banks and ledgers are reconciled at month-end.' },
      { title: 'Reports', description: 'Management reports are delivered with insights.' },
    ],
    faqs: [
      { question: 'Which accounting software do you use?', answer: 'We work with Tally, Zoho Books, QuickBooks and custom platforms.' },
      { question: 'Can you migrate historical books?', answer: 'Yes, we can clean and migrate data from any prior accounting system.' },
    ],
  },
}

const TEAM = [
  { name: 'CA. Arjun Sharma', role: 'Managing Partner', bio: '20+ years in tax, audit and corporate advisory across industries.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
  { name: 'CA. Priya Nair', role: 'Senior Tax Consultant', bio: 'Specialist in direct and indirect tax planning for growing businesses.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
  { name: 'CA. Rohit Kapoor', role: 'Audit Director', bio: 'Leads statutory and internal audit engagements for large corporates.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
  { name: 'CA. Meera Joshi', role: 'Financial Advisor', bio: 'Expert in wealth management and strategic financial planning.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
]

const GALLERY_ITEMS = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', alt: 'Our Office', title: 'New Delhi Office', category: 'Office' },
  { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', alt: 'Team Meeting', title: 'Strategy Session', category: 'Team' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', alt: 'Client Workshop', title: 'Annual Client Workshop', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800', alt: 'Awards', title: 'Excellence Award 2024', category: 'Awards' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800', alt: 'Office Interior', title: 'Conference Room', category: 'Office' },
  { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', alt: 'Team Event', title: 'Annual Team Day', category: 'Team' },
]

const OPEN_POSITIONS = [
  { title: 'Senior Chartered Accountant', department: 'Tax & Compliance', type: 'Full-Time', location: 'New Delhi', description: 'Lead complex tax planning mandates and client advisory engagements.', experience: '5+ years' },
  { title: 'Audit Associate', department: 'Audit', type: 'Full-Time', location: 'New Delhi', description: 'Assist in statutory audit fieldwork and report preparation.', experience: '1–3 years' },
  { title: 'GST Executive', department: 'Indirect Tax', type: 'Full-Time', location: 'New Delhi', description: 'Handle GST return filings and ITC reconciliation for multiple clients.', experience: '2+ years' },
]

const CAREER_BENEFITS = [
  { title: 'Professional Growth', description: 'Structured career path with regular performance reviews and skill development programmes.' },
  { title: 'Competitive Compensation', description: 'Industry-leading salaries with performance bonuses and statutory benefits.' },
  { title: 'Work-Life Balance', description: 'Flexible working hours and a culture that respects personal time.' },
  { title: 'Learning Culture', description: 'Access to ICAI CPE programmes, in-house training and external certifications.' },
  { title: 'Collaborative Team', description: 'Work alongside experienced professionals in a supportive and collaborative environment.' },
  { title: 'Client Exposure', description: 'Direct exposure to diverse clients across industries from day one.' },
]

const FAQ_GENERAL = [
  { q: 'What industries do you serve?', a: 'We serve businesses across manufacturing, retail, technology, real estate, healthcare, and professional services.' },
  { q: 'How do I get started with DigitechCA?', a: 'Simply reach out via our contact form or call us. We will schedule an initial consultation at no charge.' },
  { q: 'Do you offer virtual consultations?', a: 'Yes, we offer video and phone consultations for clients across India and abroad.' },
  { q: 'What is your turnaround time for queries?', a: 'We respond to all queries within 24 business hours.' },
  { q: 'Can you work with our existing accounting software?', a: 'Yes, we are proficient with Tally, Zoho Books, QuickBooks and most popular platforms.' },
  { q: 'Do you handle NRI tax matters?', a: 'Yes, we provide specialised NRI tax planning, FEMA compliance and international tax advisory.' },
]

const STATS = [
  { value: 500, suffix: '+', label: 'CLIENTS SERVED', desc: 'Businesses trust our expertise' },
  { value: 18, suffix: '+', label: 'YEARS ACTIVE', desc: 'Of consistent excellence' },
  { value: 12, suffix: '', label: 'OUR EXPERTS', desc: 'Qualified professionals' },
  { value: 98, suffix: '%', label: 'SATISFACTION', desc: 'Client retention rate' },
]

const FEATURES = [
  { title: 'Dedicated Team of Experts', description: 'A qualified team of CAs, CS, and legal professionals delivering comprehensive financial solutions.' },
  { title: 'Technology-Driven Approach', description: 'We leverage cutting-edge tools for accurate, efficient financial management and real-time reporting.' },
  { title: 'Transparent Communication', description: 'Regular updates, clear reporting, and a single point of contact — always accessible.' },
  { title: '100% Compliance Guarantee', description: 'We ensure every filing meets regulatory deadlines with zero penalties, every single time.' },
]

const TESTIMONIALS = [
  { quote: 'DigitechCA transformed our financial operations. Their strategic tax planning saved us over 30% in the first year alone. Truly exceptional service that exceeded every expectation.', name: 'Rajesh Mehta', role: 'CEO, Mehta Industries', initials: 'RM' },
  { quote: "The team's attention to detail during our statutory audit was remarkable. They identified opportunities we'd missed for years.", name: 'Priya Sharma', role: 'Director, Sharma Exports', initials: 'PS' },
  { quote: 'From GST compliance to financial advisory, DigitechCA handles everything flawlessly. Trusted partners for over 8 years.', name: 'Amit Patel', role: 'Founder, TechVentures Pvt Ltd', initials: 'AP' },
  { quote: 'Their proactive approach to compliance and deadlines gives us complete peace of mind. We can focus on growth while they handle the numbers.', name: 'Sunita Reddy', role: 'CFO, Reddy Pharmaceuticals', initials: 'SR' },
]

async function main() {
  console.log('Seeding Template 7 website data...')

  const hashedPassword = await bcrypt.hash('Admin@123', 12)

  const website = await prisma.website.upsert({
    where: { slug: 'template-7' },
    update: {
      name: 'DigitechCA & Associates',
      domain: 'https://template7.local',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'info@digitechca.in',
      address: '123 Financial District, New Delhi, 110001',
      workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#2D2D2D',
        secondaryColor: '#C8A96E',
        fontFamily: 'Cormorant Garamond',
        theme: 'light',
        services: SERVICES.map(s => ({ title: s.title, href: s.href, slug: s.slug })),
        footerContent: {
          description: 'Your trusted partner in financial excellence.',
          copyright: `© ${new Date().getFullYear()} DigitechCA & Associates`,
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          youtube: '',
        },
      },
    },
    create: {
      name: 'DigitechCA & Associates',
      slug: 'template-7',
      domain: 'https://template7.local',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'info@digitechca.in',
      address: '123 Financial District, New Delhi, 110001',
      workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#2D2D2D',
        secondaryColor: '#C8A96E',
        fontFamily: 'Cormorant Garamond',
        theme: 'light',
        services: SERVICES.map(s => ({ title: s.title, href: s.href, slug: s.slug })),
        footerContent: {
          description: 'Your trusted partner in financial excellence.',
          copyright: `© ${new Date().getFullYear()} DigitechCA & Associates`,
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          youtube: '',
        },
      },
    },
  })
  console.log('✅ Template-7 website created')

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: website.id },
    update: { email: 'admin@template7.in', passwordHash: hashedPassword, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: website.id, email: 'admin@template7.in', passwordHash: hashedPassword },
  })
  console.log('✅ Admin user created: admin@template7.in / Admin@123')

  await prisma.section.deleteMany({ where: { page: { websiteId: website.id } } })
  await prisma.page.deleteMany({ where: { websiteId: website.id } })

  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'home',
      title: 'Home - DigitechCA & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200',
            textContent: {
              label: 'CHARTERED ACCOUNTANTS',
              line1: 'Trusted Financial',
              line2: 'Expertise,',
              line3: 'Delivered.',
              heading: 'Trusted Financial Expertise, Delivered.',
              subheading: 'DigitechCA & Associates — trusted by 500+ businesses across India for taxation, compliance, audit, and financial strategy.',
              cta: 'Our Services',
              secondaryCta: 'Contact Us',
              ticker: 'TAX PLANNING · GST COMPLIANCE · AUDIT & ASSURANCE · COMPANY REGISTRATION · WEALTH ADVISORY',
              heroStats: [
                { value: '500+', label: 'Clients' },
                { value: '18+', label: 'Years' },
                { value: '98%', label: 'Retention' },
              ],
              slides: [
                { img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200', caption: 'Empowering Your Growth' },
                { img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200', caption: 'Strategic Financial Excellence' },
                { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200', caption: 'Building Lasting Partnerships' },
              ],
            },
          },
          {
            type: 'stats',
            order: 2,
            textContent: {
              label: 'OUR IMPACT',
              heading: 'Numbers That Define Our Legacy',
              description: 'Our track record speaks volumes. These milestones reflect the trust our clients place in us every single year.',
              stats: STATS,
            },
          },
          {
            type: 'services',
            order: 3,
            textContent: {
              label: 'PRACTICE AREAS',
              heading: 'What We Do Best',
              items: SERVICES,
            },
          },
          {
            type: 'why-choose-us',
            order: 4,
            imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900',
            textContent: {
              label: 'WHY US',
              heading: 'Trusted. Expert. Always.',
              quote: 'More than compliance — we build lasting financial clarity.',
              badge: 'Trusted Since 2005',
              cta: 'Our Story',
              items: FEATURES,
            },
          },
          {
            type: 'testimonials',
            order: 5,
            textContent: {
              label: 'CLIENT VOICES',
              heading: 'What Our Clients Say',
              items: TESTIMONIALS,
            },
          },
          {
            type: 'cta',
            order: 6,
            textContent: {
              label: "LET'S TALK",
              heading: 'Ready to Build Your Financial Future?',
              subheading: 'Take the first step toward financial clarity. Our expert team is ready to craft a strategy tailored to your business goals.',
              cta: 'Book Consultation',
              secondaryCta: 'Call Us',
              footnote: 'Response within 24 hrs · No obligation',
            },
          },
        ],
      },
    },
  })
  console.log('✅ Home page created')

  // About Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'about',
      title: 'About Us - DigitechCA & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600',
            textContent: {
              label: 'OUR STORY',
              heading: 'Two Decades of Financial Excellence',
              subheading: 'Founded in 2005, DigitechCA & Associates has grown into one of India\'s most trusted chartered accountancy firms, serving 500+ businesses with integrity and expertise.',
              cta: 'Meet the Team',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900',
            textContent: {
              label: 'OUR HERITAGE',
              heading: 'Built on a Foundation of Trust',
              body: 'Since 2005, we have partnered with businesses of all sizes — from emerging startups to established enterprises — delivering financial clarity, compliance assurance, and strategic guidance that drives real growth.',
              points: [
                'ICAI-certified professionals with cross-sector experience',
                'Transparent processes and real-time client communication',
                'Technology-driven approach for accuracy and efficiency',
                'Long-term partnerships averaging over 7 years per client',
              ],
            },
          },
          {
            type: 'features',
            order: 3,
            textContent: {
              label: 'OUR VALUES',
              heading: 'What We Stand For',
              items: [
                { title: 'Integrity', description: 'We hold ourselves to the highest ethical standards, ensuring every recommendation serves your best interests.' },
                { title: 'Excellence', description: 'We pursue precision in every engagement, from the simplest filing to the most complex advisory mandate.' },
                { title: 'Partnership', description: 'We treat every client relationship as a long-term partnership, investing in your success as our own.' },
                { title: 'Innovation', description: 'We continuously adopt new tools and methods to deliver faster, more accurate financial solutions.' },
              ],
            },
          },
          {
            type: 'stats',
            order: 4,
            textContent: {
              label: 'BY THE NUMBERS',
              heading: 'Our Impact Over 18 Years',
              stats: STATS,
            },
          },
          {
            type: 'cta',
            order: 5,
            textContent: {
              label: "LET'S CONNECT",
              heading: 'Start Your Journey With Us',
              subheading: 'Discover how DigitechCA can become your most trusted financial partner.',
              cta: 'Book a Consultation',
              secondaryCta: 'Call Us',
              footnote: 'No obligation · Response within 24 hrs',
            },
          },
        ],
      },
    },
  })
  console.log('✅ About page created')

  // Services Listing Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'services',
      title: 'Services - DigitechCA & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600',
            textContent: {
              label: 'PRACTICE AREAS',
              heading: 'Comprehensive Financial & Compliance Services',
              subheading: 'From tax planning to statutory audit, our expert team delivers end-to-end financial solutions tailored to your business.',
            },
          },
          {
            type: 'services',
            order: 2,
            textContent: {
              label: 'WHAT WE OFFER',
              heading: 'Our Core Services',
              items: SERVICES,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              label: 'GET STARTED',
              heading: 'Not Sure Which Service You Need?',
              subheading: 'Talk to our advisors for a free consultation and we\'ll guide you to the right solution.',
              cta: 'Book Free Consultation',
              secondaryCta: 'Call Us',
              footnote: 'No obligation · Response within 24 hrs',
            },
          },
        ],
      },
    },
  })
  console.log('✅ Services listing page created')

  // Service Detail Pages
  for (const service of SERVICES) {
    const detail = SERVICE_DETAILS[service.slug]
    await prisma.page.create({
      data: {
        websiteId: website.id,
        slug: `services/${service.slug}`,
        title: `${service.title} - DigitechCA & Associates`,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: {
          create: [
            {
              type: 'hero',
              order: 1,
              imageUrl: detail.heroImage,
              textContent: {
                label: 'OUR SERVICES',
                heading: service.title,
                subheading: detail.tagline,
                breadcrumb: [{ label: 'Services', href: '/services' }, { label: service.title }],
              },
            },
            {
              type: 'text-image',
              order: 2,
              imageUrl: detail.heroImage,
              textContent: {
                label: 'OVERVIEW',
                heading: `What Our ${service.title} Service Includes`,
                body: detail.description,
                points: detail.features,
              },
            },
            {
              type: 'process',
              order: 3,
              textContent: {
                label: 'HOW WE WORK',
                heading: 'Our Process',
                steps: detail.processSteps,
              },
            },
            {
              type: 'faqs',
              order: 4,
              textContent: {
                label: 'FAQS',
                heading: 'Common Questions',
                items: detail.faqs.map((f: any) => ({ question: f.question, answer: f.answer })),
              },
            },
            {
              type: 'cta',
              order: 5,
              textContent: {
                label: 'NEXT STEP',
                heading: `Ready to Get Started with ${service.title}?`,
                subheading: 'Speak with our specialists today for a tailored solution.',
                cta: 'Book Consultation',
                secondaryCta: 'Call Us',
                footnote: 'No obligation · Response within 24 hrs',
              },
            },
          ],
        },
      },
    })
    console.log(`✅ Service detail page created: ${service.slug}`)
  }

  // Team Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'team',
      title: 'Our Team - DigitechCA & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600',
            textContent: {
              label: 'MEET THE TEAM',
              heading: 'The Experts Behind Your Financial Success',
              subheading: 'Our team of ICAI-certified professionals brings decades of combined expertise across tax, audit, advisory, and compliance.',
            },
          },
          {
            type: 'team',
            order: 2,
            textContent: {
              label: 'OUR PROFESSIONALS',
              heading: 'Our Leadership Team',
              items: TEAM,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              label: 'JOIN US',
              heading: 'Interested in Working With Us?',
              subheading: 'We\'re always looking for talented professionals to join our growing team.',
              cta: 'View Open Positions',
              secondaryCta: 'Contact Us',
              footnote: 'Equal opportunity employer',
            },
          },
        ],
      },
    },
  })
  console.log('✅ Team page created')

  // Gallery Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'gallery',
      title: 'Gallery - DigitechCA & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            textContent: {
              label: 'OUR WORLD',
              heading: 'A Glimpse Into DigitechCA',
              subheading: 'From our offices to client workshops and team events — a window into how we work.',
            },
          },
          {
            type: 'gallery',
            order: 2,
            textContent: {
              label: 'PHOTO GALLERY',
              heading: 'Our Moments',
              categories: ['All', 'Office', 'Team', 'Events', 'Awards'],
              items: GALLERY_ITEMS,
            },
          },
        ],
      },
    },
  })
  console.log('✅ Gallery page created')

  // Contact Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'contact',
      title: 'Contact Us - DigitechCA & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600',
            textContent: {
              label: 'GET IN TOUCH',
              heading: 'We\'re Here to Help',
              subheading: 'Reach out to schedule a consultation or ask any questions. Our team responds within 24 hours.',
            },
          },
          {
            type: 'contact-info',
            order: 2,
            textContent: {
              label: 'CONTACT DETAILS',
              heading: 'Reach Us Directly',
              mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjIiTiA3N8KwMTInMzIuNSJF!5e0!3m2!1sen!2sin!4v1234567890',
              officeHours: 'Mon–Sat: 9:00 AM – 6:00 PM',
            },
          },
        ],
      },
    },
  })
  console.log('✅ Contact page created')

  // Query Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'query',
      title: 'Submit a Query - DigitechCA & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600',
            textContent: {
              label: 'ASK US ANYTHING',
              heading: 'Submit Your Query',
              subheading: 'Have a question or need guidance? Fill in the form below and our experts will get back to you promptly.',
            },
          },
          {
            type: 'faqs',
            order: 2,
            textContent: {
              label: 'COMMON QUESTIONS',
              heading: 'Frequently Asked Questions',
              items: FAQ_GENERAL.map(f => ({ question: f.q, answer: f.a })),
            },
          },
        ],
      },
    },
  })
  console.log('✅ Query page created')

  // Career Page
  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'career',
      title: 'Careers - DigitechCA & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600',
            textContent: {
              label: 'JOIN OUR TEAM',
              heading: 'Build Your Career in Financial Excellence',
              subheading: 'Join a team of passionate professionals committed to delivering exceptional financial services across India.',
            },
          },
          {
            type: 'career',
            order: 2,
            textContent: {
              label: 'WHY JOIN US',
              heading: 'Life at DigitechCA',
              benefits: CAREER_BENEFITS,
              positions: OPEN_POSITIONS,
              processSteps: [
                { title: 'Apply Online', description: 'Submit your CV and a brief cover note through our careers form.' },
                { title: 'Initial Screening', description: 'Our HR team reviews applications within 5 working days.' },
                { title: 'Technical Interview', description: 'A structured interview with our senior professionals.' },
                { title: 'Offer & Onboarding', description: 'Successful candidates receive an offer and a structured onboarding plan.' },
              ],
            },
          },
        ],
      },
    },
  })
  console.log('✅ Career page created')

  console.log('\n🎉 Template-7 seeding complete!')
  console.log('   Admin: admin@template7.in / Admin@123')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
