import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const SERVICES = [
  {
    slug: 'bookkeeping',
    title: 'Bookkeeping',
    icon: 'menu_book',
    description: 'Accurate and structured financial record keeping for real-time visibility and better decisions.',
    tag: 'Core Service',
    cta: 'Learn more',
    highlights: ['Double-entry ledger precision', 'Monthly MIS reporting'],
  },
  {
    slug: 'payroll',
    title: 'Payroll Management',
    icon: 'payments',
    description: 'End-to-end payroll processing with PF, ESIC, PT and TDS compliance support.',
    tag: 'Compliance',
    cta: 'Explore payroll',
  },
  {
    slug: 'gst-filing',
    title: 'GST Filing',
    icon: 'receipt_long',
    description: 'Monthly GST filings, ITC reconciliation, annual returns and advisory with zero-delay execution.',
    tag: 'Tax',
    cta: 'View GST service',
  },
  {
    slug: 'tax-planning',
    title: 'Tax Planning',
    icon: 'query_stats',
    description: 'Strategic direct tax planning for individuals and enterprises with compliance-first execution.',
    tag: 'Advisory',
    cta: 'Plan your taxes',
  },
  {
    slug: 'company-formation',
    title: 'Company Formation',
    icon: 'domain',
    description: 'Private limited, LLP and startup incorporation with post-registration statutory setup.',
    tag: 'Startup',
    cta: 'Start incorporation',
  },
  {
    slug: 'audit-services',
    title: 'Audit Services',
    icon: 'fact_check',
    description: 'Statutory, internal and tax audit services designed to improve controls and governance.',
    tag: 'Assurance',
    cta: 'Request audit',
  },
  {
    slug: 'compliance',
    title: 'Regulatory Compliance',
    icon: 'gavel',
    description: 'ROC, FEMA and labor law compliance under one framework with proactive deadline management.',
    tag: 'Governance',
    cta: 'Secure compliance',
  },
  {
    slug: 'financial-advisory',
    title: 'Financial Advisory',
    icon: 'trending_up',
    description: 'Valuation, transaction support and CFO advisory to unlock sustainable business growth.',
    tag: 'Growth',
    cta: 'Talk to advisor',
  },
]

const SERVICE_DETAILS: Record<string, any> = {
  bookkeeping: {
    title: 'Bookkeeping',
    tagline: 'Accurate and audit-ready financial records, month after month.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    description: 'We maintain ledgers, reconcile bank entries and deliver monthly reports so your team always works with reliable numbers.',
    features: ['Daily transaction posting', 'Vendor and customer ledgers', 'Bank reconciliation', 'Monthly P&L and balance sheet'],
    processSteps: [
      { title: 'Onboarding', description: 'We map your accounting workflows and chart of accounts.' },
      { title: 'Book Updates', description: 'Transactions are recorded in a fixed cycle with quality checks.' },
      { title: 'Reconciliation', description: 'Bank and ledger reconciliation closes the month cleanly.' },
      { title: 'Reporting', description: 'Management-ready monthly reports are delivered with insights.' },
    ],
    pricingTiers: [
      { title: 'Starter', price: '₹9,999/mo', description: 'Up to 300 entries per month' },
      { title: 'Growth', price: '₹19,999/mo', description: 'Up to 1000 entries + monthly review' },
      { title: 'Scale', price: 'Custom', description: 'High-volume and multi-entity bookkeeping' },
    ],
    faqs: [
      { question: 'Do you work on cloud accounting tools?', answer: 'Yes, we support major accounting platforms and custom workflows.' },
      { question: 'Can you migrate old books?', answer: 'Yes, we can clean and migrate historical data after an assessment.' },
    ],
  },
  payroll: {
    title: 'Payroll Management',
    tagline: 'Automated payroll accuracy with full statutory compliance.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    description: 'From salary computation to statutory filing, our payroll process is designed for accuracy and on-time delivery.',
    features: ['Salary processing', 'PF / ESIC / PT filings', 'Form 16 and payroll records', 'Payroll helpdesk support'],
    processSteps: [
      { title: 'Structure Setup', description: 'Compensation structure and deduction rules are configured.' },
      { title: 'Monthly Run', description: 'Payroll is processed using attendance and approvals.' },
      { title: 'Compliance Filing', description: 'All statutory dues and returns are filed on time.' },
      { title: 'Disbursement Support', description: 'Payslips and payout reports are delivered for review.' },
    ],
    pricingTiers: [
      { title: 'Starter', price: '₹7,999/mo', description: 'Up to 25 employees' },
      { title: 'Growth', price: '₹14,999/mo', description: 'Up to 100 employees' },
      { title: 'Enterprise', price: 'Custom', description: 'Multi-location payroll and SLA support' },
    ],
    faqs: [
      { question: 'Can you handle contractor payouts?', answer: 'Yes, payroll and contractor payout workflows can be managed together.' },
      { question: 'Do you support attendance integrations?', answer: 'Yes, standard attendance exports and APIs are supported.' },
    ],
  },
  'gst-filing': {
    title: 'GST Filing',
    tagline: 'Reliable GST operations with proactive reconciliation.',
    heroImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=80',
    description: 'We manage monthly GST filings, reconciliations and annual returns while reducing compliance risk.',
    features: ['GSTR-1 and GSTR-3B filing', 'ITC reconciliation', 'GSTR-9 / 9C support', 'GST notices response'],
    processSteps: [
      { title: 'Data Collection', description: 'Invoices and ledgers are collected and validated.' },
      { title: 'Reconciliation', description: 'Input and output data is reconciled before filing.' },
      { title: 'Return Filing', description: 'Monthly and periodic returns are filed within due dates.' },
      { title: 'Review', description: 'Exception reports and risk points are shared with action items.' },
    ],
    pricingTiers: [
      { title: 'Basic', price: '₹5,999/mo', description: 'Single GST registration' },
      { title: 'Business', price: '₹12,999/mo', description: 'Up to 5 GST registrations' },
      { title: 'Group', price: 'Custom', description: 'High-volume and multi-state support' },
    ],
    faqs: [
      { question: 'Can you handle GST notices?', answer: 'Yes, we assist with notice response and representation.' },
      { question: 'Do you recover missed ITC?', answer: 'Yes, reconciliation workflows include missed credit analysis.' },
    ],
  },
  'tax-planning': {
    title: 'Tax Planning',
    tagline: 'Forward-looking tax strategy for better cash outcomes.',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80',
    description: 'We design annual and transaction-level tax strategies aligned with your risk appetite and growth plans.',
    features: ['Advance tax planning', 'Entity-level optimization', 'NRI tax advisory', 'Assessment and appeal support'],
    processSteps: [
      { title: 'Tax Profiling', description: 'Current tax posture and exposures are assessed.' },
      { title: 'Planning', description: 'A practical tax roadmap is created with scenarios.' },
      { title: 'Execution', description: 'Recommended structures and actions are implemented.' },
      { title: 'Quarterly Review', description: 'Tax positions are reviewed and adjusted as needed.' },
    ],
    pricingTiers: [
      { title: 'Advisory Lite', price: '₹15,000', description: 'One-time annual planning session' },
      { title: 'Quarterly', price: '₹49,999/yr', description: 'Quarterly planning and review' },
      { title: 'Strategic', price: 'Custom', description: 'Complex and group-entity tax advisory' },
    ],
    faqs: [
      { question: 'Do you provide litigation support?', answer: 'Yes, planning and representation support are both available.' },
      { question: 'Can you support NRI taxation?', answer: 'Yes, NRI and cross-border tax matters are covered.' },
    ],
  },
  'company-formation': {
    title: 'Company Formation',
    tagline: 'Fast and compliant business incorporation support.',
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80',
    description: 'From name approval to post-incorporation setup, we help founders launch quickly with compliant structures.',
    features: ['Entity selection advisory', 'MCA filings', 'PAN/TAN/GST setup', 'Post-incorporation compliance'],
    processSteps: [
      { title: 'Structure Advisory', description: 'Entity type is finalized based on goals and funding plans.' },
      { title: 'Documentation', description: 'All incorporation and KYC documents are prepared.' },
      { title: 'Registration', description: 'MCA filings are completed and approvals tracked.' },
      { title: 'Kickoff Compliance', description: 'Initial compliance calendar and filings are set up.' },
    ],
    pricingTiers: [
      { title: 'LLP', price: '₹14,999', description: 'End-to-end LLP incorporation' },
      { title: 'Private Limited', price: '₹24,999', description: 'Company incorporation and basic setup' },
      { title: 'Startup Bundle', price: '₹39,999', description: 'Incorporation + GST + compliance starter' },
    ],
    faqs: [
      { question: 'How long does incorporation take?', answer: 'Typically 7-12 business days, subject to approvals.' },
      { question: 'Do you help with post-incorporation compliance?', answer: 'Yes, we set up your first compliance cycle.' },
    ],
  },
  'audit-services': {
    title: 'Audit Services',
    tagline: 'Independent assurance designed for stronger governance.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80',
    description: 'Our audits combine technical rigor with practical recommendations for financial and process improvement.',
    features: ['Statutory audits', 'Internal audits', 'Tax audits', 'Process and control review'],
    processSteps: [
      { title: 'Planning', description: 'Scope and risk assessment are finalized with management.' },
      { title: 'Fieldwork', description: 'Evidence gathering and control testing are conducted.' },
      { title: 'Findings Review', description: 'Observations are validated with stakeholders.' },
      { title: 'Final Report', description: 'Actionable report is issued with closure matrix.' },
    ],
    pricingTiers: [
      { title: 'Statutory', price: 'Custom', description: 'As per scale and complexity' },
      { title: 'Internal Audit', price: 'From ₹75,000/qtr', description: 'Quarterly review model' },
      { title: 'Special Review', price: 'Custom', description: 'Focused process and risk audits' },
    ],
    faqs: [
      { question: 'Can audits be done remotely?', answer: 'Yes, hybrid and remote audit workflows are supported.' },
      { question: 'Do you provide management recommendations?', answer: 'Yes, every report includes practical recommendations.' },
    ],
  },
  compliance: {
    title: 'Regulatory Compliance',
    tagline: 'Consistent compliance without deadline stress.',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
    description: 'We maintain your compliance calendar and execute filings across ROC, labor and related statutory domains.',
    features: ['ROC annual filings', 'Board and AGM support', 'Regulatory alerts and reminders', 'Compliance health reports'],
    processSteps: [
      { title: 'Calendar Setup', description: 'All statutory due dates are mapped for the year.' },
      { title: 'Document Readiness', description: 'Required documents are tracked and reviewed.' },
      { title: 'Filing Execution', description: 'Filings are submitted with evidence and logs.' },
      { title: 'Status Reporting', description: 'Monthly compliance status is shared with leadership.' },
    ],
    pricingTiers: [
      { title: 'Essential', price: '₹9,999/mo', description: 'Basic ROC and compliance support' },
      { title: 'Business', price: '₹19,999/mo', description: 'Expanded compliance coverage' },
      { title: 'Enterprise', price: 'Custom', description: 'Group-level multi-entity compliance' },
    ],
    faqs: [
      { question: 'Do you provide compliance dashboarding?', answer: 'Yes, status dashboards can be configured for review.' },
      { question: 'Can you coordinate with legal teams?', answer: 'Yes, we coordinate with legal and CS teams as needed.' },
    ],
  },
  'financial-advisory': {
    title: 'Financial Advisory',
    tagline: 'Strategic finance support for high-impact decisions.',
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80',
    description: 'From valuation to growth strategy, we provide decision-grade financial advisory for founders and leadership teams.',
    features: ['Business valuation', 'Financial modelling', 'Transaction support', 'CFO advisory'],
    processSteps: [
      { title: 'Diagnostic', description: 'Business and financial baseline is established.' },
      { title: 'Modeling', description: 'Scenarios are modeled for strategy and risk.' },
      { title: 'Decision Support', description: 'Leadership receives recommendations and options.' },
      { title: 'Execution Guidance', description: 'Support continues during implementation.' },
    ],
    pricingTiers: [
      { title: 'Project Advisory', price: 'From ₹1,25,000', description: 'Scoped advisory engagements' },
      { title: 'Retainer', price: 'From ₹75,000/mo', description: 'Monthly leadership support' },
      { title: 'Transaction', price: 'Custom', description: 'Deal-linked advisory engagements' },
    ],
    faqs: [
      { question: 'Do you support fund raise preparation?', answer: 'Yes, investor-ready financial packs can be prepared.' },
      { question: 'Is this suitable for early-stage businesses?', answer: 'Yes, advisory can be scaled for startup stages.' },
    ],
  },
}

async function main() {
  console.log('Seeding Template 10 website data...')

  const websiteData = {
    name: 'Arvind Gupta & Associates',
    domain: 'https://template10.local',
    logo: 'https://api.digitechai.in/uploads/logo.png',
    phone: '+91 11 4567 8900',
    email: 'contact@arvindgupta.ca',
    address: '102-105, Corporate Plaza, Parliament Street, New Delhi, Delhi 110001',
    workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    isActive: true,
    isAdminEnabled: true,
    themeConfig: {
      theme: 'template10',
      fontFamily: 'Manrope',
      primaryColor: '#004d40',
      secondaryColor: '#00796b',
      services: SERVICES.map((service) => ({
        title: service.title,
        href: `/services/${service.slug}`,
      })),
      contactContent: {
        phone2: '+91 11 4567 8911',
        email2: 'advisory@arvindgupta.ca',
        heroTitle: 'Let us discuss your business and compliance roadmap.',
        heroSubtitle: 'Our team responds to all qualified requests within one business day.',
        mapUrl: 'https://maps.google.com/?q=Parliament+Street+New+Delhi',
      },
      footerContent: {
        description: 'Partner-led chartered accountancy services for businesses that demand precision and speed.',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        youtube: '',
        copyright: '© 2026 Arvind Gupta & Associates. All rights reserved.',
      },
    },
  }

  const template10 = await prisma.website.upsert({
    where: { slug: 'template-10' },
    update: websiteData,
    create: {
      slug: 'template-10',
      ...websiteData,
    },
  })

  // Clean existing content for idempotency.
  await prisma.section.deleteMany({ where: { page: { websiteId: template10.id } } })
  await prisma.page.deleteMany({ where: { websiteId: template10.id } })

  // Home
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'home',
      title: 'Home - Arvind Gupta & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
            textContent: {
              badge: 'Established 1998',
              title: 'Precision in Every Digit.',
              description: 'Redefining financial consultancy through structural precision and proactive advisory support.',
              primaryCTA: 'Partner With Us',
              secondaryCTA: 'View Services',
            },
          },
          {
            type: 'services',
            order: 2,
            textContent: {
              title: 'Core Competencies',
              items: SERVICES,
            },
          },
          {
            type: 'stats',
            order: 3,
            textContent: {
              stats: [
                { value: 25, suffix: '+', label: 'Years of Legacy' },
                { value: 500, suffix: '+', label: 'Corporate Clients' },
                { value: 12000, suffix: '+', label: 'Audits Completed' },
                { value: 40, suffix: '+', label: 'Global Experts' },
              ],
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Ready to architect your financial future?',
              description: 'Our partners are ready to provide a confidential consultation tailored to your business.',
              cta: 'Schedule Call',
            },
          },
        ],
      },
    },
  })

  // About
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'about',
      title: 'About - Arvind Gupta & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
            textContent: {
              badge: 'Established 1998',
              title: 'Architects of Financial Trust.',
              subtitle: 'A legacy of precision and a future defined by strategic innovation.',
            },
          },
          {
            type: 'heritage',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80',
            textContent: {
              title: 'Our Heritage',
              years: '25+',
              linkText: 'Learn about our founder',
              description:
                '<p>Founded by CA Arvind Gupta, the firm was built on one principle: precision creates trust.</p><p>Today we support enterprises across audit, tax, compliance and strategic advisory, delivering board-ready outcomes.</p>',
            },
          },
          {
            type: 'mission',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
            textContent: {
              vision: 'To be the most trusted strategic finance partner for growth-stage and established enterprises.',
              mission: 'To combine technical rigor, rapid execution and transparent advisory in every engagement.',
            },
          },
          {
            type: 'values',
            order: 4,
            textContent: {
              values: [
                { icon: 'verified_user', title: 'Unwavering Trust', description: 'Transparent communication and ethical execution in every mandate.' },
                { icon: 'psychology', title: 'Deep Expertise', description: 'Specialist teams with domain-level experience across industries.' },
                { icon: 'handshake', title: 'Client Success', description: 'We align every recommendation to measurable business outcomes.' },
                { icon: 'precision_manufacturing', title: 'Precision First', description: 'Controls, review layers and detail-oriented execution.' },
              ],
            },
          },
          {
            type: 'cta',
            order: 5,
            textContent: {
              title: 'Ready to build your financial future?',
              subtitle: 'Join businesses that trust our partners for critical compliance and advisory outcomes.',
              primaryButton: 'Schedule a Consultation',
              secondaryButton: 'View Our Services',
            },
          },
        ],
      },
    },
  })

  // Services (listing)
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'services',
      title: 'Services - Arvind Gupta & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
            textContent: {
              badge: 'Our Expertise',
              title: 'Precision-Driven Financial Architecture.',
              subtitle: 'Comprehensive consulting and compliance solutions tailored for modern enterprises.',
              primaryButton: 'Explore All Services',
              secondaryButton: 'Download Brochure',
            },
          },
          {
            type: 'grid',
            order: 2,
            textContent: {
              title: 'A Holistic Spectrum of Compliance & Growth',
              description: 'From bookkeeping to strategic advisory, every service is engineered for predictable outcomes.',
              items: SERVICES,
            },
          },
          {
            type: 'cta',
            order: 3,
            textContent: {
              title: 'Ready to Architect Your Growth?',
              description: 'Schedule a private consultation with our senior associates.',
              primaryButton: 'Book Free Consultation',
              secondaryButton: 'Contact Support',
            },
          },
        ],
      },
    },
  })

  // Individual service pages (/services/:slug)
  for (const service of SERVICES) {
    const detail = SERVICE_DETAILS[service.slug]

    await prisma.page.create({
      data: {
        websiteId: template10.id,
        slug: service.slug,
        title: `${service.title} - Arvind Gupta & Associates`,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: {
          create: [
            {
              type: 'hero',
              order: 1,
              imageUrl: detail.heroImage,
              textContent: {
                heading: detail.title,
                subheading: detail.tagline,
                label: 'Service Detail',
              },
            },
            {
              type: 'text-image',
              order: 2,
              textContent: {
                heading: 'What We Offer',
                description: detail.description,
                features: detail.features,
              },
            },
            {
              type: 'process',
              order: 3,
              textContent: {
                heading: 'How It Works',
                items: detail.processSteps,
              },
            },
            {
              type: 'pricing',
              order: 4,
              textContent: {
                heading: 'Pricing',
                items: detail.pricingTiers,
              },
            },
            {
              type: 'faqs',
              order: 5,
              textContent: {
                heading: 'Frequently Asked Questions',
                items: detail.faqs,
              },
            },
            {
              type: 'cta',
              order: 6,
              textContent: {
                heading: `Need help with ${detail.title}?`,
                subheading: 'Speak to our advisory team for a quick implementation roadmap.',
                cta: 'Book a Consultation',
              },
            },
          ],
        },
      },
    })
  }

  // Team
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'team',
      title: 'Team - Arvind Gupta & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              badge: 'Our Leadership',
              title: 'The Architects of Financial Integrity.',
              description: 'Meet the multidisciplinary team driving precision and growth for modern enterprises.',
              quote: 'Our strength lies in domain depth and relentless execution quality.',
            },
          },
          {
            type: 'leaders',
            order: 2,
            textContent: {
              items: [
                {
                  role: 'Founder & Managing Partner',
                  name: 'CA. Arvind Gupta',
                  description: '25+ years across tax planning, corporate structuring and strategic advisory.',
                  tags: ['FCA', 'DISA (ICAI)', 'ID - IICA'],
                  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80',
                  isLeadership: true,
                },
                {
                  role: 'Direct Tax Specialist',
                  name: 'CA. Meera Sharma',
                  description: 'Leads direct tax and international tax mandates for enterprise accounts.',
                  footerRole: 'Partner | FCA',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80',
                  isLeadership: true,
                },
                {
                  role: 'Audit & Assurance',
                  name: 'CA. Rajesh Verma',
                  description: 'Specializes in audit governance for BFSI and manufacturing sectors.',
                  footerRole: 'Partner | ACA',
                  image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&q=80',
                  isLeadership: true,
                },
                {
                  role: 'Corporate Law & Compliance',
                  name: 'CS. Ananya Iyer',
                  description: 'Heads secretarial and compliance operations for multi-entity groups.',
                  stats: [
                    { value: '12+', label: 'Years Exp' },
                    { value: '500+', label: 'Compliances' },
                  ],
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80',
                  isLeadership: true,
                },
              ],
            },
          },
          {
            type: 'staff',
            order: 3,
            textContent: {
              title: 'The Core Excellence Team',
              description: 'Associate professionals with specialist skills across audit, tax, payroll and compliance.',
              items: [
                {
                  name: 'Siddharth K.',
                  role: 'Senior Audit Manager',
                  description: 'Leads industrial audit teams with strong control and risk frameworks.',
                  qualification: 'CA INTER',
                  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
                },
                {
                  name: 'Pooja Deshmukh',
                  role: 'GST Consultant',
                  description: 'Handles monthly GST operations and annual reconciliations.',
                  qualification: 'M.COM, CA INTER',
                  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
                },
                {
                  name: 'Arjun Mehta',
                  role: 'Payroll Specialist',
                  description: 'Manages payroll and statutory dues for large workforces.',
                  qualification: 'MBA (Finance)',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
                },
                {
                  name: 'Sanya Goyal',
                  role: 'Tax Associate',
                  description: 'Focuses on individual tax planning and advisory.',
                  qualification: 'CA',
                  image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
                },
              ],
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              title: 'Shape the future of Global Finance.',
              description: 'We are always looking for ambitious professionals to join our team.',
              buttonText: 'Explore Career Opportunities',
            },
          },
        ],
      },
    },
  })

  // Gallery
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'gallery',
      title: 'Gallery - Arvind Gupta & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            textContent: {
              badge: 'Visual Journey',
              title: 'Inside Our World',
              description: 'A curated look at our team, workspaces and milestone moments.',
            },
          },
          {
            type: 'grid',
            order: 2,
            textContent: {
              categories: ['Office Space', 'Team Events', 'Awards & Recognition'],
              items: [
                {
                  id: 1,
                  category: 'Office Space',
                  title: 'The Boardroom',
                  span: 'md:col-span-8',
                  height: 'h-[400px]',
                  image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                },
                {
                  id: 2,
                  category: 'Team Events',
                  title: 'Collaborative Excellence',
                  span: 'md:col-span-4',
                  height: 'h-[400px]',
                  image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?w=900&q=80',
                },
                {
                  id: 3,
                  category: 'Awards & Recognition',
                  title: 'Firm of the Year',
                  span: 'md:col-span-4',
                  height: 'h-[300px]',
                  image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=900&q=80',
                },
                {
                  id: 4,
                  category: 'Office Space',
                  title: 'Executive Suite',
                  span: 'md:col-span-4',
                  height: 'h-[300px]',
                  image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=900&q=80',
                },
                {
                  id: 5,
                  category: 'Team Events',
                  title: 'Annual Strategy Meet',
                  span: 'md:col-span-4',
                  height: 'h-[300px]',
                  image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80',
                },
                {
                  id: 6,
                  category: 'Awards & Recognition',
                  title: 'Standard of Excellence',
                  span: 'md:col-span-6',
                  height: 'h-[400px]',
                  image: 'https://images.unsplash.com/photo-1472747624745-ce92d32d3a35?w=1200&q=80',
                },
                {
                  id: 7,
                  category: 'Team Events',
                  title: 'Our Culture',
                  span: 'md:col-span-6',
                  height: 'h-[400px]',
                  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
                },
              ],
            },
          },
          {
            type: 'stats',
            order: 3,
            textContent: {
              stats: [
                { value: 15, suffix: '+', label: 'Years of Excellence' },
                { value: 50, suffix: '+', label: 'Major Awards' },
                { value: 200, suffix: '+', label: 'Certifications' },
                { value: 10000, suffix: '+', label: 'Success Stories' },
              ],
            },
          },
        ],
      },
    },
  })

  // Contact
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'contact',
      title: 'Contact - Arvind Gupta & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
            textContent: {
              badge: 'Connect With Us',
              heading: 'Architecting Your Financial Future.',
              subheading: 'Our specialists are ready to guide you on audit, tax and compliance priorities.',
            },
          },
          {
            type: 'contact-info',
            order: 2,
            textContent: {
              officeTitle: 'Principal Office',
              officeAddress: '102-105, Corporate Plaza, Parliament Street, New Delhi, Delhi 110001',
              channelsTitle: 'Direct Channels',
              phone: '+91 11 4567 8900',
              email: 'contact@arvindgupta.ca',
              timings: 'Mon - Sat: 9:00 AM - 6:00 PM',
              mapLink: 'https://maps.google.com/?q=Parliament+Street+New+Delhi',
              queryTitle: 'Have a Complex Query?',
              queryDescription: 'For dispute and technical matters, submit a detailed query for partner review.',
              queryBtnText: 'Submit Technical Query',
            },
          },
          {
            type: 'contact-form',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80',
            textContent: {
              formTitle: 'Send us a Message',
              formSubtitle: 'Our executive assistants route your inquiry to the relevant practice lead within 24 hours.',
              mapTitle: 'Principal Headquarters',
              mapDesc: 'Strategically located in the heart of Delhi\'s financial district.',
              subjectOptions: ['Tax Planning', 'GST Compliance', 'Audit & Assurance', 'Company Formation', 'General Inquiry'],
            },
          },
        ],
      },
    },
  })

  // Career (CMS-driven route)
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'career',
      title: 'Careers - Arvind Gupta & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80',
            textContent: {
              label: 'Careers',
              heading: 'Build the Future of Financial Excellence',
              subheading: 'Join a firm where mentorship, accountability and growth are part of daily work.',
            },
          },
          {
            type: 'career',
            order: 2,
            textContent: {
              benefitsHeading: 'Benefits & Perks',
              positionsHeading: 'Open Positions',
              benefits: [
                { title: 'Continuous Learning', description: 'ICAI programs, certifications and internal training paths.' },
                { title: 'Career Growth', description: 'Clear progression tracks with bi-annual review cycles.' },
                { title: 'Flexible Work', description: 'Hybrid model with output-focused collaboration.' },
                { title: 'Health & Wellbeing', description: 'Comprehensive insurance and wellbeing support.' },
              ],
              positions: [
                { title: 'Senior Chartered Accountant', location: 'Mumbai', type: 'Full-Time', description: 'Lead statutory audits for enterprise accounts.' },
                { title: 'GST Compliance Manager', location: 'Delhi NCR', type: 'Full-Time', description: 'Own GST reconciliation and filing quality.' },
                { title: 'Financial Advisory Analyst', location: 'Mumbai', type: 'Full-Time', description: 'Support valuation and due diligence projects.' },
              ],
            },
          },
          {
            type: 'stats',
            order: 3,
            textContent: {
              heading: 'Career Growth in Numbers',
              stats: [
                { value: 40, suffix: '+', label: 'Team Members' },
                { value: 25, suffix: '+', label: 'Years of Legacy' },
                { value: 500, suffix: '+', label: 'Corporate Clients' },
                { value: 98, suffix: '%', label: 'Retention' },
              ],
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Ready to Apply?',
              subheading: 'Share your profile and our HR team will respond within five business days.',
              cta: 'Submit Application',
            },
          },
        ],
      },
    },
  })

  // Query (CMS-driven route)
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'query',
      title: 'Submit a Query - Arvind Gupta & Associates',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&q=80',
            textContent: {
              label: 'Ask Our Experts',
              heading: 'Have a Query? We Have Answers.',
              subheading: 'Submit your tax, compliance or advisory question and receive a detailed response.',
            },
          },
          {
            type: 'query-form',
            order: 2,
            textContent: {
              formHeading: 'Submit Your Query',
              formSubheading: 'Choose a query type and our specialists will connect with you.',
              queryTypes: [
                { value: 'general', label: 'General Inquiry' },
                { value: 'pricing', label: 'Pricing & Packages' },
                { value: 'service-details', label: 'Service Details' },
                { value: 'compliance', label: 'Compliance Issue' },
                { value: 'tax-planning', label: 'Tax Planning Advice' },
              ],
            },
          },
          {
            type: 'faqs',
            order: 3,
            textContent: {
              heading: 'Frequently Asked Questions',
              items: [
                { question: 'What businesses do you serve?', answer: 'We serve startups, SMEs and enterprise groups across major sectors.' },
                { question: 'How quickly can you onboard us?', answer: 'Most engagements are onboarded within 3-5 business days.' },
                { question: 'Do you offer remote consultations?', answer: 'Yes, video and phone-based advisory are available.' },
                { question: 'Can you represent us in proceedings?', answer: 'Yes, representation support is available for eligible matters.' },
              ],
            },
          },
          {
            type: 'cta',
            order: 4,
            textContent: {
              heading: 'Need urgent guidance?',
              subheading: 'Use priority query mode and our response team will expedite review.',
              cta: 'Submit Priority Query',
            },
          },
        ],
      },
    },
  })

  // Site-admin credentials for /admin route
  const siteAdminEmail = 'admin@template10.local'
  const siteAdminPassword = 'Admin@123'
  const passwordHash = await bcrypt.hash(siteAdminPassword, 12)

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: template10.id },
    update: {
      email: siteAdminEmail,
      passwordHash,
      failedAttempts: 0,
      lockedUntil: null,
    },
    create: {
      websiteId: template10.id,
      email: siteAdminEmail,
      passwordHash,
    },
  })

  console.log(`✅ Template 10 seeded successfully — SiteAdmin: ${siteAdminEmail} / ${siteAdminPassword}`)
}

main()
  .catch((e) => {
    console.error('Error seeding Template 10 data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
