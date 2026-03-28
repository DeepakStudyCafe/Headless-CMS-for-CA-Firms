import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const SERVICES = [
  { num: '01', slug: 'tax-planning-advisory', title: 'Tax Planning & Advisory', href: '/services/tax-planning-advisory', description: 'Strategic tax planning and advisory services to minimize liabilities and maximize savings for individuals and corporations.', icon: 'calculator' },
  { num: '02', slug: 'gst-compliance-filing', title: 'GST Compliance & Filing', href: '/services/gst-compliance-filing', description: 'End-to-end GST registration, return filing, and compliance management to keep your business fully compliant.', icon: 'file-check' },
  { num: '03', slug: 'audit-assurance', title: 'Audit & Assurance', href: '/services/audit-assurance', description: 'Comprehensive statutory, internal, and tax audits with detailed reporting and actionable insights.', icon: 'shield-check' },
  { num: '04', slug: 'company-registration', title: 'Company Registration', href: '/services/company-registration', description: 'Seamless incorporation services for private limited, LLP, OPC, and other business structures.', icon: 'building' },
  { num: '05', slug: 'financial-planning', title: 'Financial Planning', href: '/services/financial-planning', description: 'Holistic financial planning and wealth management strategies tailored to your long-term goals.', icon: 'trending-up' },
  { num: '06', slug: 'business-advisory', title: 'Business Advisory', href: '/services/business-advisory', description: 'Expert guidance on business strategy, restructuring, mergers, and operational optimization.', icon: 'briefcase' },
]

const SERVICE_DETAILS: Record<string, any> = {
  'tax-planning-advisory': {
    tagline: 'Strategic tax optimisation that keeps more of your earnings working for you.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920',
    description: 'We craft legally optimised tax strategies for individuals and businesses, ensuring full compliance while maximising legitimate savings through expert advisory.',
    features: ['Income tax return filing', 'Advance tax computation', 'Tax-saving investment advisory', 'TDS compliance & management'],
    processSteps: [
      { title: 'Assessment', description: 'We review your income sources, structure and applicable deductions.' },
      { title: 'Strategy', description: 'A tailored tax plan is developed to minimise liability legally.' },
      { title: 'Filing', description: 'Returns are filed accurately and on time every year.' },
      { title: 'Review', description: 'We track refunds and respond to any departmental notices.' },
    ],
    faqs: [
      { question: 'When should I start tax planning?', answer: 'Ideally at the start of the financial year to fully utilise available deductions.' },
      { question: 'Can you file returns for previous years?', answer: 'Yes, we handle belated and revised returns for prior financial years.' },
    ],
  },
  'gst-compliance-filing': {
    tagline: 'Complete GST management — never miss a deadline again.',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920',
    description: 'From registration to monthly filings and annual returns, we handle every aspect of GST compliance so you can focus on your business.',
    features: ['GST registration', 'GSTR-1, 3B, 9 filing', 'Input tax credit reconciliation', 'GST audit support & notices'],
    processSteps: [
      { title: 'Registration', description: 'We complete your GST registration end-to-end.' },
      { title: 'Monthly Filing', description: 'GSTR-1 and 3B are filed within deadlines each month.' },
      { title: 'ITC Review', description: 'Input tax credits are reconciled to prevent mismatches.' },
      { title: 'Annual Return', description: 'GSTR-9 is filed accurately with full supporting documentation.' },
    ],
    faqs: [
      { question: 'What if I miss a GST filing deadline?', answer: 'We will file the return and advise on applicable late fees and interest.' },
      { question: 'Do you handle GST notices?', answer: 'Yes, we draft responses and represent clients before GST authorities.' },
    ],
  },
  'audit-assurance': {
    tagline: 'Independent, thorough audits that stakeholders can rely on.',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920',
    description: 'Our audit and assurance services provide accurate, unbiased opinions on your financial statements in strict compliance with applicable standards.',
    features: ['Statutory audit under Companies Act', 'Tax audit under Income Tax Act', 'Internal audit & process review', 'Audit report issuance'],
    processSteps: [
      { title: 'Planning', description: 'We understand your business and assess audit risk areas.' },
      { title: 'Fieldwork', description: 'Transactions and balances are verified with supporting evidence.' },
      { title: 'Review', description: 'Findings are discussed with management before finalisation.' },
      { title: 'Report', description: 'Audit report is issued with observations and recommendations.' },
    ],
    faqs: [
      { question: 'Is statutory audit mandatory?', answer: 'All companies registered under the Companies Act require a statutory audit.' },
      { question: 'How long does an audit take?', answer: 'Typically 2–6 weeks depending on the size and complexity of the organisation.' },
    ],
  },
  'company-registration': {
    tagline: 'Launch your business with the right structure from day one.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
    description: 'We handle the entire incorporation process for private limited companies, LLPs, OPCs and other structures with full MCA expertise.',
    features: ['Private limited company incorporation', 'LLP formation', 'OPC registration', 'Post-incorporation statutory setup'],
    processSteps: [
      { title: 'Consultation', description: 'We advise on the right business structure for your goals.' },
      { title: 'Documentation', description: 'All required documents and MCA forms are prepared.' },
      { title: 'Filing', description: 'Forms are submitted to MCA and tracked to approval.' },
      { title: 'Incorporation', description: 'Certificate of incorporation is obtained and handed to you.' },
    ],
    faqs: [
      { question: 'How long does registration take?', answer: 'Typically 7–15 working days from document submission.' },
      { question: 'Is there a minimum capital requirement?', answer: 'There is no minimum paid-up capital for private limited companies.' },
    ],
  },
  'financial-planning': {
    tagline: 'Data-driven financial strategy aligned to your long-term vision.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920',
    description: 'We provide holistic financial planning covering wealth management, investment advisory, retirement planning and business financial strategy.',
    features: ['Investment portfolio advisory', 'Retirement & estate planning', 'Business financial strategy', 'Cash flow management'],
    processSteps: [
      { title: 'Discovery', description: 'We understand your financial position, goals and risk appetite.' },
      { title: 'Analysis', description: 'A comprehensive financial assessment is conducted.' },
      { title: 'Strategy', description: 'A personalised financial roadmap is developed and presented.' },
      { title: 'Review', description: 'Periodic reviews ensure the plan adapts to changing circumstances.' },
    ],
    faqs: [
      { question: 'When should I start financial planning?', answer: 'The best time is now — earlier planning yields significantly better outcomes.' },
      { question: 'Do you manage investments directly?', answer: 'We provide advisory; execution is through SEBI-registered entities.' },
    ],
  },
  'business-advisory': {
    tagline: 'Expert guidance that transforms your business strategy into results.',
    heroImage: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920',
    description: 'Our business advisory services support growth, restructuring, M&A, operational efficiency and strategic planning for businesses at every stage.',
    features: ['Business strategy & growth planning', 'Mergers & acquisitions support', 'Business restructuring', 'Virtual CFO services'],
    processSteps: [
      { title: 'Diagnosis', description: 'We assess your current business position and identify gaps.' },
      { title: 'Strategy', description: 'A tailored advisory roadmap is co-created with your team.' },
      { title: 'Implementation', description: 'We support execution of the agreed strategic initiatives.' },
      { title: 'Monitoring', description: 'Progress is tracked and strategy is refined as needed.' },
    ],
    faqs: [
      { question: 'What size of business do you advise?', answer: 'We work with startups to mid-market businesses across all sectors.' },
      { question: 'Do you offer Virtual CFO services?', answer: 'Yes, we provide flexible CFO support for businesses without full-time CFOs.' },
    ],
  },
}

const TEAM8 = [
  { name: 'Rajesh Sharma', role: 'Managing Partner', bio: '20+ years in taxation, audit and corporate advisory across diverse industries.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
  { name: 'Priya Patel', role: 'Senior Tax Consultant', bio: 'Specialist in direct and indirect tax planning for high-growth businesses.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
  { name: 'Amit Verma', role: 'Audit Director', bio: 'Leads statutory and internal audit engagements for large corporates.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
  { name: 'Sneha Kapoor', role: 'Financial Advisor', bio: 'Expert in wealth management and holistic financial planning.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
]

const GALLERY_ITEMS8 = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', alt: 'Mumbai Office', title: 'Mumbai Headquarters', category: 'Office' },
  { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', alt: 'Team Meeting', title: 'Annual Strategy Session', category: 'Team' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', alt: 'Client Event', title: 'Client Appreciation Evening', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800', alt: 'Award', title: 'CA Excellence Award 2024', category: 'Awards' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800', alt: 'Conference Room', title: 'Board Conference Room', category: 'Office' },
  { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', alt: 'Team Day', title: 'Annual Team Retreat', category: 'Team' },
]

const OPEN_POSITIONS8 = [
  { title: 'Senior Chartered Accountant', department: 'Tax & Compliance', type: 'Full-Time', location: 'Mumbai', description: 'Lead complex tax planning mandates and senior client advisory engagements.', experience: '5+ years' },
  { title: 'Audit Associate', department: 'Audit & Assurance', type: 'Full-Time', location: 'Mumbai', description: 'Assist in statutory audit fieldwork and financial report preparation.', experience: '1–3 years' },
  { title: 'GST Compliance Executive', department: 'Indirect Tax', type: 'Full-Time', location: 'Mumbai', description: 'Manage GST return filings and ITC reconciliation for multiple clients.', experience: '2+ years' },
]

const CAREER_BENEFITS8 = [
  { title: 'Professional Growth', description: 'Structured career progression with regular reviews and development programmes.' },
  { title: 'Competitive Compensation', description: 'Industry-leading packages with performance bonuses and statutory benefits.' },
  { title: 'Work-Life Balance', description: 'Flexible working arrangements and a culture that respects personal time.' },
  { title: 'Learning Culture', description: 'ICAI CPE access, in-house training and external certification support.' },
  { title: 'Collaborative Environment', description: 'Work alongside seasoned professionals in a supportive team culture.' },
  { title: 'Client Diversity', description: 'Exposure to clients across industries from startups to large enterprises.' },
]

const FAQ_GENERAL8 = [
  { q: 'What industries do you serve?', a: 'We serve businesses across manufacturing, retail, technology, real estate, healthcare and professional services.' },
  { q: 'How do I get started?', a: 'Contact us via our query form or phone. We will schedule a no-obligation initial consultation.' },
  { q: 'Do you offer virtual consultations?', a: 'Yes, we offer video and phone consultations for clients across India and abroad.' },
  { q: 'What is your response turnaround?', a: 'We respond to all client queries within 24 business hours.' },
  { q: 'Can you work with our current accounting software?', a: 'Yes, we are proficient with Tally, Zoho Books, QuickBooks and most popular platforms.' },
  { q: 'Do you handle NRI taxation?', a: 'Yes, we specialise in NRI tax planning, FEMA compliance and international tax advisory.' },
]

const STATS = [
  { value: 500, suffix: '+', label: 'Satisfied Clients', desc: 'Trusted by businesses across India' },
  { value: 18, suffix: '+', label: 'Years of Expertise', desc: 'Delivering excellence since 2005' },
  { value: 12, suffix: '', label: 'Expert Professionals', desc: 'ICAI certified team members' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', desc: 'Long-term partnerships built on trust' },
]

const FEATURES = [
  { title: 'ICAI Certified Experts', description: 'Our team holds prestigious ICAI certifications with decades of combined experience.', highlight: false },
  { title: '100% Compliance Guarantee', description: 'We ensure your business meets every regulatory requirement, every time.', highlight: true },
  { title: 'Personalized Approach', description: 'Tailored strategies designed around your unique business needs and goals.', highlight: false },
  { title: '24/7 Client Support', description: 'Round-the-clock availability for urgent queries and time-sensitive matters.', highlight: false },
]

const TEAM = [
  { name: 'Rajesh Sharma', role: 'Managing Partner', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
  { name: 'Priya Patel', role: 'Senior Tax Consultant', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
  { name: 'Amit Verma', role: 'Audit Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
  { name: 'Sneha Kapoor', role: 'Financial Advisor', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
]

const TESTIMONIALS = [
  { quote: 'Their meticulous approach to tax planning saved our company over ₹2 crore in the first year alone. Truly exceptional service.', name: 'Vikram Mehta', role: 'CEO, TechVista Solutions', stars: 5 },
  { quote: "The team's dedication to compliance and their proactive advisory approach has been invaluable for our growing business.", name: 'Ananya Singh', role: 'Founder, GreenLeaf Organics', stars: 5 },
  { quote: 'Professional, responsive, and incredibly knowledgeable. They\'ve been our trusted financial partners for over a decade.', name: 'Ravi Kumar', role: 'Director, Kumar Industries', stars: 5 },
  { quote: 'From GST filing to strategic planning, they handle everything with precision. I can focus on growing my business.', name: 'Deepika Joshi', role: 'MD, Horizon Exports', stars: 5 },
]

const INSIGHTS = [
  { category: 'Tax Planning', title: 'New Tax Regime 2025: What It Means for Your Business', date: 'Mar 12, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600' },
  { category: 'GST Updates', title: 'Key GST Changes Every Business Owner Must Know', date: 'Mar 8, 2025', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600' },
  { category: 'Advisory', title: 'Building a Financially Resilient Business in 2025', date: 'Mar 1, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600' },
]

async function main() {
  console.log('Seeding Template 8 website data...')

  const hashedPassword = await bcrypt.hash('Admin@123', 12)

  const website = await prisma.website.upsert({
    where: { slug: 'template-8' },
    update: {
      name: 'Precision Financial',
      domain: 'https://template8.local',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'info@precisionfinancial.in',
      address: '123 Financial District, Mumbai, Maharashtra 400001',
      workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0A0E17',
        secondaryColor: '#C8A96E',
        fontFamily: 'Cormorant Garamond',
        theme: 'dark',
        services: SERVICES.map(s => ({ title: s.title, href: s.href, slug: s.slug })),
        footerContent: {
          description: 'Your trusted partner for comprehensive financial solutions and regulatory compliance since 2005.',
          copyright: `© ${new Date().getFullYear()} Precision Financial. All rights reserved.`,
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          youtube: '',
        },
      },
    },
    create: {
      name: 'Precision Financial',
      slug: 'template-8',
      domain: 'https://template8.local',
      logo: 'https://api.digitechai.in/uploads/logo.png',
      phone: '+91 98765 43210',
      email: 'info@precisionfinancial.in',
      address: '123 Financial District, Mumbai, Maharashtra 400001',
      workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      isActive: true,
      isAdminEnabled: true,
      themeConfig: {
        primaryColor: '#0A0E17',
        secondaryColor: '#C8A96E',
        fontFamily: 'Cormorant Garamond',
        theme: 'dark',
        services: SERVICES.map(s => ({ title: s.title, href: s.href, slug: s.slug })),
        footerContent: {
          description: 'Your trusted partner for comprehensive financial solutions and regulatory compliance since 2005.',
          copyright: `© ${new Date().getFullYear()} Precision Financial. All rights reserved.`,
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          youtube: '',
        },
      },
    },
  })
  console.log('✅ Template-8 website created')

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: website.id },
    update: { email: 'admin@template8.in', passwordHash: hashedPassword, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: website.id, email: 'admin@template8.in', passwordHash: hashedPassword },
  })
  console.log('✅ Admin user created: admin@template8.in / Admin@123')

  await prisma.section.deleteMany({ where: { page: { websiteId: website.id } } })
  await prisma.page.deleteMany({ where: { websiteId: website.id } })

  await prisma.page.create({
    data: {
      websiteId: website.id,
      slug: 'home',
      title: 'Home - Precision Financial',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              label: 'Chartered Accountants — Est. 2005',
              line1: 'Precision. Trust.',
              line2: 'Financial Excellence.',
              subheading: 'Empowering businesses with strategic financial solutions, regulatory compliance, and trusted advisory services.',
              cta: 'Explore Services',
              secondaryCta: 'Our Approach →',
              ticker: 'Tax Planning • GST Filing • Audit & Assurance • Company Registration • Financial Advisory • Business Compliance • FEMA Consulting • ',
              slides: [
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920',
                'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920',
              ],
            },
          },
          {
            type: 'stats',
            order: 2,
            textContent: { stats: STATS },
          },
          {
            type: 'services',
            order: 3,
            textContent: {
              label: 'What We Offer',
              heading: 'Our Core Services',
              items: SERVICES,
            },
          },
          {
            type: 'about',
            order: 4,
            imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
            textContent: {
              label: 'Why Choose Us',
              heading: 'A Legacy of Trust & Precision',
              tagline: 'Where numbers meet integrity.',
              description: "For nearly two decades, we've been the trusted financial partner for businesses across India. Our team of ICAI-certified professionals combines deep technical expertise with a personalized approach to deliver exceptional results.",
              cta: 'Discover Our Story →',
              badge: '2005',
              items: FEATURES,
            },
          },
          {
            type: 'team',
            order: 5,
            textContent: {
              label: 'Meet The Team',
              heading: 'Our Expert Team',
              items: TEAM,
            },
          },
          {
            type: 'testimonials',
            order: 6,
            textContent: {
              label: 'Testimonials',
              heading: 'What Our Clients Say',
              items: TESTIMONIALS,
            },
          },
          {
            type: 'insights',
            order: 7,
            textContent: {
              label: 'Latest Insights',
              heading: 'Knowledge Hub',
              items: INSIGHTS,
            },
          },
          {
            type: 'cta',
            order: 8,
            textContent: {
              label: 'Take The Next Step',
              heading: 'Ready to Transform Your Finances?',
              subheading: 'Schedule a free consultation with our experts and discover how we can help your business thrive.',
              cta: 'Schedule Free Consultation',
              secondaryCta: 'Call Us',
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
      title: 'About Us - Precision Financial',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920',
            textContent: {
              label: 'Our Story',
              heading: 'Two Decades of Financial Precision',
              subheading: 'Founded in 2005, Precision Financial has built a legacy of trust and excellence, serving 500+ businesses across India with meticulous financial expertise.',
              cta: 'Meet the Team',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900',
            textContent: {
              label: 'Our Heritage',
              heading: 'Built on Trust, Driven by Precision',
              body: 'For nearly two decades, we have partnered with businesses of all sizes — from emerging startups to established enterprises — delivering financial clarity, compliance assurance, and strategic guidance that drives growth.',
              points: [
                'ICAI-certified team with cross-sector expertise',
                'Technology-driven processes for accuracy and efficiency',
                'Transparent communication and dedicated client support',
                'Long-term partnerships averaging over 7 years per client',
              ],
            },
          },
          {
            type: 'features',
            order: 3,
            textContent: {
              label: 'Our Values',
              heading: 'The Principles That Guide Us',
              items: FEATURES,
            },
          },
          {
            type: 'stats',
            order: 4,
            textContent: { stats: STATS },
          },
          {
            type: 'cta',
            order: 5,
            textContent: {
              label: 'Get Started',
              heading: 'Begin Your Journey With Us',
              subheading: 'Discover how Precision Financial can become your most trusted financial partner.',
              cta: 'Schedule Free Consultation',
              secondaryCta: 'Call Us',
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
      title: 'Services - Precision Financial',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920',
            textContent: {
              label: 'What We Offer',
              heading: 'Comprehensive Financial & Compliance Services',
              subheading: 'From strategic tax planning to statutory audit, our ICAI-certified team delivers end-to-end financial solutions tailored to your business.',
            },
          },
          {
            type: 'services',
            order: 2,
            textContent: {
              label: 'What We Offer',
              heading: 'Our Core Services',
              items: SERVICES,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              label: 'Take The Next Step',
              heading: 'Not Sure Which Service Fits Your Needs?',
              subheading: 'Our advisors will help identify the right solution for your business in a free consultation.',
              cta: 'Schedule Free Consultation',
              secondaryCta: 'Call Us',
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
        title: `${service.title} - Precision Financial`,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: {
          create: [
            {
              type: 'hero',
              order: 1,
              imageUrl: detail.heroImage,
              textContent: {
                label: 'Our Services',
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
                label: 'Overview',
                heading: `What Our ${service.title} Service Includes`,
                body: detail.description,
                points: detail.features,
              },
            },
            {
              type: 'process',
              order: 3,
              textContent: {
                label: 'How We Work',
                heading: 'Our Process',
                steps: detail.processSteps,
              },
            },
            {
              type: 'faqs',
              order: 4,
              textContent: {
                label: 'FAQs',
                heading: 'Common Questions',
                items: detail.faqs.map((f: any) => ({ question: f.question, answer: f.answer })),
              },
            },
            {
              type: 'cta',
              order: 5,
              textContent: {
                label: 'Take The Next Step',
                heading: `Ready to Get Started with ${service.title}?`,
                subheading: 'Speak with our specialists today for a solution tailored to your business.',
                cta: 'Schedule Free Consultation',
                secondaryCta: 'Call Us',
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
      title: 'Our Team - Precision Financial',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920',
            textContent: {
              label: 'Meet The Team',
              heading: 'The Experts Behind Your Financial Success',
              subheading: 'Our ICAI-certified professionals bring decades of combined expertise across tax, audit, financial planning and corporate advisory.',
            },
          },
          {
            type: 'team',
            order: 2,
            textContent: {
              label: 'Meet The Team',
              heading: 'Our Expert Team',
              items: TEAM8,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              label: 'Join Our Team',
              heading: 'Interested in Growing With Us?',
              subheading: 'We welcome talented professionals who are passionate about financial excellence.',
              cta: 'View Open Positions',
              secondaryCta: 'Contact Us',
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
      title: 'Gallery - Precision Financial',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920',
            textContent: {
              label: 'Our World',
              heading: 'A Glimpse Into Precision Financial',
              subheading: 'From our Mumbai office to client events and team milestones — a window into our world.',
            },
          },
          {
            type: 'gallery',
            order: 2,
            textContent: {
              label: 'Photo Gallery',
              heading: 'Our Moments',
              categories: ['All', 'Office', 'Team', 'Events', 'Awards'],
              items: GALLERY_ITEMS8,
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
      title: 'Contact Us - Precision Financial',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920',
            textContent: {
              label: 'Get In Touch',
              heading: "We're Here to Help",
              subheading: 'Reach out to schedule a consultation or ask any questions. Our team responds within 24 hours.',
            },
          },
          {
            type: 'contact-info',
            order: 2,
            textContent: {
              label: 'Contact Details',
              heading: 'Reach Us Directly',
              mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890',
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
      title: 'Submit a Query - Precision Financial',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920',
            textContent: {
              label: 'Ask Us Anything',
              heading: 'Submit Your Query',
              subheading: 'Have a question or need guidance? Fill in the form and our experts will respond promptly.',
            },
          },
          {
            type: 'faqs',
            order: 2,
            textContent: {
              label: 'Common Questions',
              heading: 'Frequently Asked Questions',
              items: FAQ_GENERAL8.map(f => ({ question: f.q, answer: f.a })),
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
      title: 'Careers - Precision Financial',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920',
            textContent: {
              label: 'Join Our Team',
              heading: 'Build a Career in Financial Excellence',
              subheading: 'Join a team of passionate professionals dedicated to delivering exceptional financial services with precision and integrity.',
            },
          },
          {
            type: 'career',
            order: 2,
            textContent: {
              label: 'Life at Precision Financial',
              heading: 'Why Work With Us',
              benefits: CAREER_BENEFITS8,
              positions: OPEN_POSITIONS8,
              processSteps: [
                { title: 'Apply Online', description: 'Submit your CV through our careers form.' },
                { title: 'Initial Screening', description: 'Our HR team reviews applications within 5 working days.' },
                { title: 'Technical Interview', description: 'A structured interview with our senior professionals.' },
                { title: 'Offer & Onboarding', description: 'Successful candidates receive an offer and onboarding plan.' },
              ],
            },
          },
        ],
      },
    },
  })
  console.log('✅ Career page created')

  console.log('\n🎉 Template-8 seeding complete!')
  console.log('   Admin: admin@template8.in / Admin@123')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
