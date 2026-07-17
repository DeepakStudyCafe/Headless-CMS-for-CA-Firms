import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting comprehensive database seed...')

  console.log('🧹 Cleaning up existing pages and sections...')
  console.log('✅ Cleanup complete')

  await prisma.section.deleteMany({ where: { page: { website: { slug: 'delta-core-wealth' } } } });
  await prisma.page.deleteMany({ where: { website: { slug: 'delta-core-wealth' } } });

  // Create admin user
  const adminPassword = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD || 'ChangeMe@123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@cafirm.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'deltaadmin@cafirm.com',
      passwordHash: adminPassword,
      role: 'SUPER_ADMIN',
    },
  })
  console.log('✅ Admin user created')

  // ============================================================
  // WEBSITE 1: Delta Core Wealth
  // ============================================================
  const deltaWebsite = await prisma.website.upsert({
    where: { slug: 'delta-core-wealth' },
    update: {
      name: 'DeltaCore Wealth',
      domain: 'https://deltacorewealth.com/',
      logo: '/uploads/logo.svg',
      phone: '+91 7984908660',
      email: 'deltacorewealth@gmail.com, komal@deltacorewealth.com',
      address: '15/A, 26B Amravan Society, Shyamal, Ahmedabad 380015.',
      workingHours: '10:00 AM - 6:00 PM',
      themeConfig: {
        primaryColor: '#1e40af',
        secondaryColor: '#64748b',
        fontFamily: 'Inter',
        theme: 'professional',
      },
    },
    create: {
      name: 'DeltaCore Wealth',
      slug: 'delta-core-wealth',
      domain: 'https://deltacorewealth.com/',
      logo: '/uploads/logo.svg',
      phone: '+91 7984908660',
      email: 'deltacorewealth@gmail.com, komal@deltacorewealth.com',
      address: '15/A, 26B Amravan Society, Shyamal, Ahmedabad 380015.',
      workingHours: '10:00 AM - 6:00 PM',
      themeConfig: {
        primaryColor: '#1e40af',
        secondaryColor: '#64748b',
        fontFamily: 'Inter',
        theme: 'professional',
      },
    },
  })
  console.log('✅ Delta Core Wealth website created')

  // delta-core-wealth Pages
  await prisma.page.create({
    data: {
      websiteId: deltaWebsite.id,
      slug: 'home',
      title: 'Home - DeltaCore Wealth',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1748335354035-1c0462335fce',
            textContent: {
              heading: 'Build Wealth. Achieve Your Financial Goals.',
              subheading: 'Helping families manage money better through personalized wealth management and financial planning.',
              cta: 'Start Your Journey',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhbHRoJTIwbWFuYWdlbWVudHxlbnwwfDB8MHx8fDA%3D',
            textContent: {
              heading: 'Smart Wealth Management Solutions',
              subheading: 'Plan Today. Prosper Tomorrow.',
              description: 'DeltaCore Wealth helps individuals and families grow, protect, and manage their wealth through mutual funds, financial planning, insurance solutions, and goal-based investment strategies.',
              features: [ 'Mutual Fund Investments','Financial Planning','Portfolio Review & Rebalancing','Insurance & Risk Management'],
            },
          },
          {
            type: 'services',
            order: 3,
            imageUrl: null,
            textContent: {
              heading: 'Our Core Services',
              subheading: 'Personalized wealth management solutions for every stage of life',
              items: [
                { icon: 'trending', title: 'Mutual Fund Investments', description: 'Goal-oriented mutual fund investment solutions for long-term wealth creation' },
                { icon: 'file', title: 'Financial Planning', description: 'Personalized financial roadmaps aligned with your life goals' },
                { icon: 'shield', title: 'Insurance Planning', description: 'Health and general insurance solutions to protect your financial future' },
                { icon: 'building', title: 'Portfolio Review', description: 'Regular portfolio analysis and rebalancing for better performance' },
                { icon: 'users', title: 'Retirement Planning', description: 'Create a sustainable retirement plan with disciplined investing' },
                { icon: 'check', title: 'Tax-Efficient Investing', description: 'Investment strategies designed to optimize tax savings and long-term returns' },
              ],
            },
          },
          {
            type: 'stats',
            order: 4,
            imageUrl: null,
            textContent: {
              heading: 'Why Families Trust DeltaCore Wealth',
              stats: [
                { value: '100+', label: 'Families Guided' },
                { value: '100+', label: 'Investment Plans Reviewed' },
                { value: '10+', label: 'Financial Solutions Offered' },
                { value: '100%', label: 'Client-Focused Approach' },
              ],
            },
          },
          {
            type: 'cta',
            order: 5,
            imageUrl: null,
            textContent: {
              heading: 'Ready to Start Your Wealth Journey?',
              description: 'Book your complimentary financial health check and receive personalized investment guidance.',
              cta: 'Book Consultation',
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: deltaWebsite.id,
      slug: 'about',
      title: 'About Us - DeltaCore Wealth',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1714974528718-b3b52f91c334',
            textContent: {
              heading: 'About DeltaCore Wealth',
              subheading: 'Helping Families Build Long-Term Wealth',
            },
          },
          {
            type: 'text-image',
            order: 2,
            imageUrl: 'https://images.unsplash.com/photo-1565374392032-8007fb37c26e',
            textContent: {
              heading: 'Your Trusted Wealth Management Partner',
              description: 'DeltaCore Wealth is dedicated to helping individuals and families make informed financial decisions through personalized wealth management, mutual fund investments, financial planning, and insurance solutions. We focus on building long-term financial security with strategies tailored to your unique goals.',
              features: ['AMFI Registered Mutual Fund Distributor', 'Personalized Financial Planning', 'Goal-Based Investment Strategies', 'Client-Centric Wealth Management'],
            },
          },
          {
            type: 'text-image',
            order: 3,
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600',
            textContent: {
              heading: 'Our Mission & Values',
              description: 'Our mission is to simplify investing and empower families to achieve financial independence through disciplined investing, transparent advice, and long-term wealth creation.',
              features: ['Integrity & Transparency', 'Goal-Oriented Financial Advice', 'Long-Term Wealth Creation', 'Continuous Client Support'],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: deltaWebsite.id,
      slug: 'team',
      title: 'Our Team - DeltaCore Wealth',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            textContent: {
              heading: 'Meet Our Wealth Experts',
              subheading: 'Experienced professionals dedicated to your success',
            },
          },
          {
            type: 'team',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'Our Leadership',
              description: 'Led by experienced financial professionals focused on wealth creation, investment planning, and long-term financial well-being.',
              items: [
                { name: 'PRAJAPATI KOMAL KUSHAL', role: 'Founder & Wealth Advisor', image: 'https://images.unsplash.com/vector-1754112354428-874fda8f5fe8', description: 'AMFI Registered Mutual Fund Distributor (ARN 361093) | Certified PoSP (Health & General Insurance)' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: deltaWebsite.id,
      slug: 'services',
      title: 'Our Services - DeltaCore Wealth',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero',
            order: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
            textContent: {
              heading: 'Comprehensive Wealth Management Solutions',
              subheading: 'Personalized financial strategies designed around your goals',
            },
          },
          {
            type: 'services',
            order: 2,
            imageUrl: null,
            textContent: {
              heading: 'What We Offer',
              subheading: 'End-to-end wealth management and financial planning services',
              items: [
                { icon: 'trending', title: 'Mutual Fund Investments', description: 'Build long-term wealth with carefully selected mutual fund investment solutions' },
                { icon: 'file', title: 'Financial Planning', description: 'Personalized financial plans to help you achieve your life goals with confidence' },
                { icon: 'building', title: 'Portfolio Review', description: 'Regular portfolio analysis and rebalancing to keep your investments aligned with your objectives' },
                { icon: 'shield', title: 'Insurance Planning', description: 'Health and general insurance solutions to protect your family and financial future' },
                { icon: 'users', title: 'Retirement Planning', description: 'Create a sustainable retirement strategy through disciplined investing and wealth accumulation' },
                { icon: 'check', title: 'Tax-Efficient Investment Planning', description: 'Optimize your investments with tax-saving strategies while maximizing long-term returns' },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.page.create({
    data: {
      websiteId: deltaWebsite.id,
      slug: 'gallery',
      title: 'Gallery - DeltaCore Wealth',
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
      websiteId: deltaWebsite.id,
      slug: 'contact',
      title: 'Contact Us - DeltaCore Wealth',
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
              address: '15/A, 26B Amravan Society, Shyamal, Ahmedabad 380015',
              phone: '+91 7984908660',
              email: 'deltacorewealth@gmail.com, komal@deltacorewealth.com',
              hours: '10:00 AM - 6:00 PM',
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

  // Service Pages
  const deltaServices = [
  {
    slug: 'mutual-fund-investments',
    title: 'Mutual Fund Investments - DeltaCore Wealth',
    heroHeading: 'Mutual Fund Investment Solutions',
    heroSubheading: 'Build long-term wealth with disciplined investing',
    heroImage: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9',
    contentHeading: 'Smart Mutual Fund Investing',
    contentDescription: 'We help you select and manage mutual fund investments aligned with your financial goals, risk profile, and investment horizon.',
    features: [
      'Equity Mutual Funds',
      'Debt & Hybrid Funds',
      'SIP & Lump Sum Investments',
      'Goal-Based Investment Planning',
    ],
    contentImage: 'https://images.unsplash.com/photo-1642052502780-8ee67e3bf930',
  },
  {
    slug: 'financial-planning',
    title: 'Financial Planning - DeltaCore Wealth',
    heroHeading: 'Comprehensive Financial Planning',
    heroSubheading: 'A roadmap to your financial future',
    heroImage: 'https://images.unsplash.com/photo-1738736637589-5d8007bedbbc',
    contentHeading: 'Personalized Financial Planning',
    contentDescription: 'We create customized financial plans that help you achieve life goals such as education, home ownership, retirement, and wealth creation.',
    features: [
      'Goal-Based Planning',
      'Cash Flow Analysis',
      'Risk Assessment',
      'Investment Strategy',
    ],
    contentImage: 'https://images.unsplash.com/photo-1758518726609-c551f858cd5c',
  },
  {
    slug: 'wealth-management',
    title: 'Wealth Management - DeltaCore Wealth',
    heroHeading: 'Wealth Management Solutions',
    heroSubheading: 'Growing and preserving your wealth',
    heroImage: 'https://images.unsplash.com/photo-1669881336715-5a51a78d5434',
    contentHeading: 'Comprehensive Wealth Management',
    contentDescription: 'Our wealth management solutions are designed to help individuals and families grow, manage, and preserve their wealth across generations.',
    features: [
      'Investment Planning',
      'Wealth Preservation',
      'Asset Allocation',
      'Long-Term Wealth Creation',
    ],
    contentImage: 'https://images.unsplash.com/photo-1711606815631-38d32cdaec3e',
  },
  {
    slug: 'portfolio-review',
    title: 'Portfolio Review - DeltaCore Wealth',
    heroHeading: 'Portfolio Review & Rebalancing',
    heroSubheading: 'Keep your investments aligned with your goals',
    heroImage: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d',
    contentHeading: 'Comprehensive Portfolio Review',
    contentDescription: 'Regular portfolio reviews help optimize performance, manage risk, and ensure your investments remain aligned with your financial objectives.',
    features: [
      'Portfolio Analysis',
      'Asset Rebalancing',
      'Risk Evaluation',
      'Performance Review',
      'Investment Recommendations',
    ],
    contentImage: 'https://images.unsplash.com/photo-1618044733300-9472054094ee',
  },
  {
    slug: 'insurance-planning',
    title: 'Insurance Planning - DeltaCore Wealth',
    heroHeading: 'Insurance Planning',
    heroSubheading: 'Protect what matters most',
    heroImage: 'https://images.unsplash.com/photo-1637763723578-79a4ca9225f7',
    contentHeading: 'Health & General Insurance Solutions',
    contentDescription: 'Protect your family and finances with comprehensive health and general insurance solutions tailored to your needs.',
    features: [
      'Health Insurance',
      'General Insurance',
      'Risk Protection',
      'Policy Review',
      'Claims Assistance',
    ],
    contentImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
  },
  {
    slug: 'retirement-planning',
    title: 'Retirement Planning - DeltaCore Wealth',
    heroHeading: 'Retirement Planning',
    heroSubheading: 'Secure your future with confidence',
    heroImage: 'https://images.unsplash.com/photo-1758686254550-c5d8f4de1b3a',
    contentHeading: 'Retirement Solutions',
    contentDescription: 'Plan ahead with disciplined investment strategies that help you achieve financial independence after retirement.',
    features: [
      'Retirement Corpus Planning',
      'SIP-Based Retirement',
      'Income Planning',
      'Inflation Protection',
      'Long-Term Wealth Accumulation',
    ],
    contentImage: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800',
  },
  {
    slug: 'tax-efficient-investing',
    title: 'Tax-Efficient Investing - DeltaCore Wealth',
    heroHeading: 'Tax-Efficient Investment Planning',
    heroSubheading: 'Grow wealth while optimizing taxes',
    heroImage: 'https://images.unsplash.com/photo-1772588627342-5ec373e236d8',
    contentHeading: 'Smart Tax Planning',
    contentDescription: 'Invest strategically with tax-efficient investment options that help maximize returns while minimizing tax liabilities.',
    features: [
      'ELSS Mutual Funds',
      'Section 80C Planning',
      'Tax-Saving Strategies',
      'Investment Planning',
      'Long-Term Tax Efficiency',
    ],
    contentImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80',
  },
  {
    slug: 'goal-based-investing',
    title: 'Goal-Based Investing - DeltaCore Wealth',
    heroHeading: 'Goal-Based Investing',
    heroSubheading: 'Invest with a purpose',
    heroImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
    contentHeading: 'Achieve Your Financial Goals',
    contentDescription: 'Whether it is buying a home, funding education, or creating wealth, we build investment strategies tailored to your specific life goals.',
    features: [
      'Education Planning',
      'Home Purchase Planning',
      'Wealth Creation',
      'Goal Tracking',
      'Regular Portfolio Reviews',
    ],
    contentImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
  {
    slug: 'financial-health-check',
    title: 'Financial Health Check - DeltaCore Wealth',
    heroHeading: 'Financial Health Check',
    heroSubheading: 'Understand where you stand financially',
    heroImage: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf',
    contentHeading: 'Evaluate Your Financial Well-Being',
    contentDescription: 'Our financial health check helps assess your investments, savings, insurance, and financial goals, providing actionable recommendations for improvement.',
    features: [
      'Investment Review',
      'Risk Assessment',
      'Insurance Gap Analysis',
      'Goal Assessment',
      'Financial Recommendations',
    ],
    contentImage: 'https://images.unsplash.com/flagged/photo-1559733404-9b79677fc959',
  },
  {
    slug: 'investment-advisory',
    title: 'Investment Advisory - DeltaCore Wealth',
    heroHeading: 'Investment Advisory',
    heroSubheading: 'Expert guidance for informed investing',
    heroImage: 'https://images.unsplash.com/photo-1729077537326-91749c1c9197',
    contentHeading: 'Professional Investment Advisory',
    contentDescription: 'Receive personalized investment advice designed to help you make confident financial decisions and achieve sustainable long-term growth.',
    features: [
      'Investment Strategy',
      'Mutual Fund Advisory',
      'Portfolio Diversification',
      'Risk Management',
      'Long-Term Wealth Planning',
    ],
    contentImage: 'https://images.unsplash.com/photo-1768839724256-28cd4a373209',
  },
]

  for (const service of deltaServices) {
    await prisma.page.create({
      data: {
        websiteId: deltaWebsite.id,
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

  console.log('  ✅ DeltaCore Wealth: 10 pages created')

}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
