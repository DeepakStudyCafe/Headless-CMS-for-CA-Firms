import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting Ajoy Goyal & Associates. database seed...')

  // Create Ajoy Goyal & Associates. Website
  const ajoyGoyalWebsite = await prisma.website.upsert({
    where: { slug: 'ajoy-goyal-and-co' },
    update: {
      name: 'Ajoy Goyal & Associates.',
      domain: 'http://localhost:8093',
      phone: '+91 22 1234 5678',
      email: 'info@ajoygoyal.com',
      address: '123 Financial District, BKC, Mumbai, Maharashtra 400051, India',
      workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      themeConfig: {
        primaryColor: '#000080',
        secondaryColor: '#f3f4f6',
        fontFamily: 'Inter',
        theme: 'modern',
        footerContent: {
          description: 'A structural financial consulting firm dedicated to bringing robust growth and stability.',
          copyright: '© 2026 Ajoy Goyal & Associates.. All rights reserved.'
        }
      },
    },
    create: {
      name: 'Ajoy Goyal & Associates.',
      slug: 'ajoy-goyal-and-co',
      domain: 'http://localhost:8093',
      phone: '+91 22 1234 5678',
      email: 'info@ajoygoyal.com',
      address: '123 Financial District, BKC, Mumbai, Maharashtra 400051, India',
      workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      themeConfig: {
        primaryColor: '#000080',
        secondaryColor: '#f3f4f6',
        fontFamily: 'Inter',
        theme: 'modern',
        footerContent: {
          description: 'A structural financial consulting firm dedicated to bringing robust growth and stability.',
          copyright: '© 2026 Ajoy Goyal & Associates.. All rights reserved.'
        }
      },
    },
  })
  console.log('✅ Ajoy Goyal & Associates. website created')

  // Helper to safely delete existing old pages to re-seed fresh
  await prisma.section.deleteMany({
    where: { page: { websiteId: ajoyGoyalWebsite.id } }
  })
  await prisma.page.deleteMany({
    where: { websiteId: ajoyGoyalWebsite.id }
  })

  // Home Page
  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      slug: 'home',
      title: 'Home',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'hero-slider',
            order: 1,
            textContent: {
              slides: [
                { image: '/uploads/hero-1.jpg', title: 'Strategic Financial\nConsultation', subtitle: 'Empowering businesses with expert advisory and precision-driven financial solutions for sustainable growth.', badge: 'Trusted by 500+ Businesses' },
                { image: '/uploads/hero-2.jpg', title: 'Expert Tax &\nAdvisory Services', subtitle: 'Navigate complex tax landscapes with our seasoned chartered accountants and industry specialists.', badge: '20+ Years of Excellence' },
                { image: '/uploads/hero-3.jpg', title: 'Building Financial\nConfidence', subtitle: 'From compliance to strategic planning — we deliver results that drive your business forward.', badge: 'Award-Winning Firm' },
              ]
            }
          },
          {
            type: 'services-grid',
            order: 2,
            textContent: {
              label: 'Our Expertise',
              title: 'Services That Drive Results',
              description: 'Comprehensive financial solutions tailored to your business, delivered with precision and deep industry expertise.',
              items: [
                { name: 'Bookkeeping', icon: 'BookOpen', desc: 'Precise financial record keeping for informed decision-making.', href: '/services/bookkeeping' },
                { name: 'GST Filing', icon: 'FileText', desc: 'Seamless GST compliance and return filing advisory.', href: '/services/gst-filing' },
                { name: 'Payroll', icon: 'Users', desc: 'Complete payroll processing and statutory compliance.', href: '/services/payroll' },
                { name: 'Tax Planning', icon: 'Calculator', desc: 'Strategic tax optimization to maximize your savings.', href: '/services/tax-planning' },
                { name: 'Company Formation', icon: 'Building2', desc: 'End-to-end business incorporation services.', href: '/services/company-formation' },
                { name: 'Compliance', icon: 'Shield', desc: 'Proactive regulatory compliance management.', href: '/services/compliance' },
                { name: 'Audit Services', icon: 'Search', desc: 'Comprehensive statutory and internal audits.', href: '/services/audit-services' },
                { name: 'Financial Advisory', icon: 'TrendingUp', desc: 'Expert guidance for financial growth.', href: '/services/financial-advisory' }
              ]
            }
          },
          {
            type: 'about-overview',
            order: 3,
            textContent: {
              badge: 'About Our Firm',
              heading: 'Trusted Financial Partners Since 2005',
              description1: 'Sharma & Co. is a premier Chartered Accountancy firm committed to delivering exceptional financial services. With nearly two decades of experience, we serve a diverse clientele from ambitious startups to established corporations.',
              description2: 'Our team brings deep industry expertise ensuring compliance, efficiency, and strategic financial growth for every client we serve.',
              tags: ['ICAI Registered', 'ISO Certified', 'Award Winning'],
              stats: [
                { end: 18, suffix: '+', label: 'Years Experience' },
                { end: 500, suffix: '+', label: 'Clients Served' },
                { end: 50, suffix: '+', label: 'Team Members' },
                { end: 98, suffix: '%', label: 'Client Satisfaction' }
              ]
            }
          },
          {
            type: 'industries',
            order: 4,
            textContent: {
              label: 'Industries We Serve',
              title: 'Expertise Across Sectors',
              description: 'Deep domain knowledge across key industries ensures tailored solutions for your unique challenges.',
              items: [
                { name: 'Startups', icon: 'Rocket', desc: 'Scaling with confidence' },
                { name: 'SMEs', icon: 'Store', desc: 'Streamlined operations' },
                { name: 'Manufacturing', icon: 'Factory', desc: 'Cost optimization' },
                { name: 'IT & Tech', icon: 'Laptop', desc: 'Tax-efficient structures' },
                { name: 'Real Estate', icon: 'Building', desc: 'Project financing' },
                { name: 'Consulting', icon: 'Briefcase', desc: 'Strategic advisory' }
              ]
            }
          },
          {
            type: 'testimonials',
            order: 5,
            textContent: {
              label: 'Testimonials',
              title: 'What Our Clients Say',
              description: 'Hear from the businesses we\'ve helped grow and succeed.',
              items: [
                { name: 'Rajesh Kumar', role: 'CEO, TechStartup India', text: 'Sharma & Co. transformed our financial operations. Their expertise in tax planning saved us significantly and their team\'s responsiveness is unmatched.' },
                { name: 'Priya Mehta', role: 'Director, GreenLeaf Mfg.', text: 'Exceptional audit services and compliance support. They truly understand the manufacturing sector and deliver beyond expectations.' },
                { name: 'Amit Patel', role: 'Founder, Digital Solutions', text: 'Professional, responsive, and deeply knowledgeable. The best CA firm we\'ve worked with — they feel like an extension of our team.' }
              ]
            }
          },
          {
            type: 'cta',
            order: 6,
            textContent: {
              badge: 'Let\'s Work Together',
              heading: 'Ready to Transform\nYour Business?',
              description: 'Let our team of expert Chartered Accountants help you navigate your financial journey. Schedule a complimentary consultation today.',
              buttonText: 'Schedule Free Consultation'
            }
          }
        ]
      }
    }
  })
  
  // About Page
  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      slug: 'about',
      title: 'About Us',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'page-hero',
            order: 1,
            imageUrl: '/uploads/about-hero.jpg',
            textContent: {
              title: 'About Us',
              subtitle: 'Building trust through financial excellence',
            }
          },
          {
            type: 'about-intro',
            order: 2,
            textContent: {
              badge: 'Who We Are',
              heading: 'A Legacy of Financial Excellence',
              description1: 'Sharma & Co. is one of India\'s leading Chartered Accountancy firms, established in 2005. We provide comprehensive financial services including auditing, taxation, advisory, and compliance solutions.',
              description2: 'Our team combines deep technical expertise with industry knowledge to deliver customized solutions that drive business growth and ensure regulatory compliance.',
              stats: [
                { end: 18, suffix: '+', label: 'Years Experience' },
                { end: 500, suffix: '+', label: 'Clients Served' },
                { end: 50, suffix: '+', label: 'Team Members' },
                { end: 15, suffix: '', label: 'Industry Awards' }
              ]
            }
          },
          {
            type: 'mission-vision',
            order: 3,
            textContent: {
              missionIcon: 'Target',
              visionIcon: 'Eye',
              missionTitle: 'Our Mission',
              missionDesc: 'To empower businesses with accurate, timely, and insightful financial services that enable informed decision-making and sustainable growth, while maintaining the highest standards of professional ethics.',
              visionTitle: 'Our Vision',
              visionDesc: 'To be the most trusted and innovative Chartered Accountancy firm in India, recognized for transforming businesses through strategic financial guidance and technology-driven solutions.',
            }
          },
          {
            type: 'core-values',
            order: 4,
            textContent: {
              label: 'Our Values',
              heading: 'What Drives Us',
              description: 'The principles that guide every decision and relationship.',
              items: [
                { icon: 'Shield', title: 'Integrity', desc: 'Upholding the highest ethical standards in every engagement.' },
                { icon: 'Award', title: 'Excellence', desc: 'Delivering exceptional quality and precision in all services.' },
                { icon: 'Users', title: 'Client-Centric', desc: 'Placing our clients\' success at the heart of everything.' },
                { icon: 'Heart', title: 'Commitment', desc: 'Going beyond expectations to deliver lasting value.' }
              ]
            }
          },
          {
            type: 'timeline',
            order: 5,
            textContent: {
              label: 'Our Journey',
              heading: 'Company Timeline',
              items: [
                { year: '2005', title: 'Founded', desc: 'Sharma & Co. established with a vision to redefine financial advisory.' },
                { year: '2010', title: '100 Clients', desc: 'Crossed the milestone of serving 100 businesses across India.' },
                { year: '2015', title: 'Team of 30', desc: 'Expanded our team with top chartered accountants and experts.' },
                { year: '2020', title: 'Digital Transformation', desc: 'Embraced technology for seamless cloud-based financial services.' },
                { year: '2024', title: '500+ Clients', desc: 'Serving over 500 businesses with 50+ dedicated professionals.' }
              ]
            }
          },
          {
            type: 'why-choose-us',
            order: 6,
            textContent: {
              badge: 'Why Choose Us',
              heading: 'The Sharma & Co. Advantage',
              description: 'We combine decades of expertise with modern technology to deliver unparalleled financial services.',
              items: [
                '20+ years of industry experience',
                'Team of 50+ qualified professionals',
                'Technology-driven processes',
                'Personalized service approach',
                '99% compliance track record',
                'Pan-India service coverage'
              ]
            }
          }
        ]
      }
    }
  })

  // Services Page
  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      slug: 'services',
      title: 'Our Services',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'page-hero',
            order: 1,
            imageUrl: '/uploads/services-hero.jpg',
            textContent: {
              title: 'Our Services',
              subtitle: 'Comprehensive financial solutions for your business',
            }
          },
          {
            type: 'services-list',
            order: 2,
            textContent: {
              label: 'What We Do',
              heading: 'Comprehensive Financial Solutions',
              description: 'From compliance to strategic advisory, we offer the full spectrum of financial services.',
              items: [
                { name: 'Bookkeeping', slug: 'bookkeeping', icon: 'BookOpen', desc: 'Comprehensive financial record keeping including ledger management, reconciliation, and financial reporting.' },
                { name: 'GST Filing', slug: 'gst-filing', icon: 'FileText', desc: 'End-to-end GST compliance including registration, return filing, reconciliation, and input tax credit advisory.' },
                { name: 'Payroll', slug: 'payroll', icon: 'Users', desc: 'Complete payroll processing including salary computation, statutory deductions, PF/ESI compliance.' },
                { name: 'Tax Planning', slug: 'tax-planning', icon: 'Calculator', desc: 'Strategic tax planning and optimization for individuals and businesses to minimize tax liability.' },
                { name: 'Company Formation', slug: 'company-formation', icon: 'Building2', desc: 'End-to-end company incorporation including private limited, LLP, OPC, and partnership firm.' },
                { name: 'Compliance', slug: 'compliance', icon: 'Shield', desc: 'Comprehensive regulatory compliance including ROC filings, annual returns, and statutory audit.' },
                { name: 'Audit Services', slug: 'audit-services', icon: 'Search', desc: 'Statutory, internal, tax, and special purpose audit services conducted with thoroughness.' },
                { name: 'Financial Advisory', slug: 'financial-advisory', icon: 'TrendingUp', desc: 'Business valuation, due diligence, fundraising support, and strategic financial planning.' }
              ]
            }
          }
        ]
      }
    }
  })

  // Team Page
  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      slug: 'team',
      title: 'Our Team',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'page-hero',
            order: 1,
            imageUrl: '/uploads/team-hero.jpg',
            textContent: {
              title: 'Our Team',
              subtitle: 'Meet the experts behind your financial success',
            }
          },
          {
            type: 'partners',
            order: 2,
            textContent: {
              label: 'Leadership',
              heading: 'Meet Our Partners',
              description: 'Experienced professionals leading the firm with vision and deep industry expertise.',
              items: [
                { name: 'CA Vikram Sharma', role: 'Managing Partner', expertise: 'Audit & Assurance, Tax Advisory', initials: 'VS' },
                { name: 'CA Neha Kapoor', role: 'Senior Partner', expertise: 'Corporate Finance, M&A Advisory', initials: 'NK' },
                { name: 'CA Rajat Singh', role: 'Partner - Tax', expertise: 'International Tax, Transfer Pricing', initials: 'RS' }
              ]
            }
          },
          {
            type: 'team-members',
            order: 3,
            textContent: {
              label: 'Our Professionals',
              heading: 'Team Members',
              items: [
                { name: 'Anita Desai', role: 'Manager - Audit', dept: 'Audit' },
                { name: 'Suresh Nair', role: 'Senior Associate - Tax', dept: 'Tax' },
                { name: 'Meera Iyer', role: 'Manager - Compliance', dept: 'Compliance' },
                { name: 'Arjun Reddy', role: 'Associate - Advisory', dept: 'Advisory' },
                { name: 'Kavita Joshi', role: 'Senior Associate - GST', dept: 'Tax' },
                { name: 'Rahul Verma', role: 'Associate - Payroll', dept: 'Payroll' }
              ]
            }
          },
          {
            type: 'certifications',
            order: 4,
            textContent: {
              label: 'Qualifications',
              heading: 'Certifications & Expertise',
              items: ['ICAI', 'ACCA', 'CPA', 'CFA', 'DISA', 'FAFD']
            }
          },
          {
            type: 'culture',
            order: 5,
            textContent: {
              badge: 'Our Culture',
              heading: 'A Place to Grow & Excel',
              description: 'At Sharma & Co., we foster a culture of continuous learning, collaboration, and professional development. Our team members are empowered to innovate and excel in their careers.',
              items: ['Continuous Learning', 'Work-Life Balance', 'Team Collaboration']
            }
          }
        ]
      }
    }
  })

  // Gallery Page
  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      slug: 'gallery',
      title: 'Gallery',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'page-hero',
            order: 1,
            imageUrl: '/uploads/gallery-hero.jpg',
            textContent: {
              title: 'Gallery',
              subtitle: 'A glimpse into our workspace and events',
            }
          },
          {
            type: 'gallery-grid',
            order: 2,
            textContent: {
              items: [
                { image: '/uploads/gallery-hero.jpg', title: 'Office View 1', category: 'Office' },
                { image: '/uploads/about-hero.jpg', title: 'Office View 2', category: 'Office' },
                { image: '/uploads/hero-1.jpg', title: 'Office View 3', category: 'Office' },
                { image: '/uploads/hero-2.jpg', title: 'Corporate Event 1', category: 'Events' },
                { image: '/uploads/hero-3.jpg', title: 'Corporate Event 2', category: 'Events' },
                { image: '/uploads/team-hero.jpg', title: 'Team Outing', category: 'Events' },
                { image: '/uploads/contact-hero.jpg', title: 'Client Meeting 1', category: 'Events' },
                { image: '/uploads/services-hero.jpg', title: 'Client Meeting 2', category: 'Events' },
                { image: '/uploads/career-hero.jpg', title: 'Career Seminar', category: 'Events' }
              ],
              labelOffice: 'Our Workspace',
              titleOffice: 'Office Gallery',
              descOffice: 'Step inside our modern, collaborative workspace.',
              labelEvents: 'Moments',
              titleEvents: 'Events & Meetings',
              descEvents: 'Highlights from our corporate events and client engagements.'
            }
          }
        ]
      }
    }
  })

  // Career Page
  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      slug: 'career',
      title: 'Careers',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'page-hero',
            order: 1,
            imageUrl: '/uploads/career-hero.jpg',
            textContent: {
              title: 'Careers',
              subtitle: 'Build your future with a leading CA firm',
            }
          },
          {
            type: 'career-intro',
            order: 2,
            textContent: {
              badge: 'Join Our Team',
              heading: 'Build Your Career With Us',
              description: 'At Sharma & Co., we nurture talent and provide an environment where professionals can thrive, learn, and grow into industry leaders.'
            }
          },
          {
            type: 'career-benefits',
            order: 3,
            textContent: {
              label: 'Benefits',
              heading: 'Why Work With Us',
              items: [
                { icon: 'TrendingUp', title: 'Growth Opportunities', desc: 'Clear career progression paths with mentorship programs.' },
                { icon: 'GraduationCap', title: 'Learning & Development', desc: 'Continuous professional education and certification support.' },
                { icon: 'Heart', title: 'Work-Life Balance', desc: 'Flexible work arrangements and wellness programs.' },
                { icon: 'Briefcase', title: 'Competitive Package', desc: 'Industry-leading compensation with comprehensive benefits.' }
              ]
            }
          },
          {
            type: 'job-openings',
            order: 4,
            textContent: {
              label: 'Openings',
              heading: 'Current Roles',
              items: [
                { title: 'Senior Audit Associate', dept: 'Audit & Assurance', type: 'Full-time', location: 'Mumbai' },
                { title: 'Tax Consultant', dept: 'Direct Tax', type: 'Full-time', location: 'Mumbai' },
                { title: 'GST Analyst', dept: 'Indirect Tax', type: 'Full-time', location: 'Pune' },
                { title: 'Article Trainee', dept: 'General Practice', type: 'Articleship', location: 'Mumbai' }
              ]
            }
          },
          {
            type: 'career-form',
            order: 5,
            textContent: {
              label: 'Apply',
              heading: 'Submit Your Application'
            }
          }
        ]
      }
    }
  })

  // Contact Page
  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      slug: 'contact',
      title: 'Contact Us',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'page-hero',
            order: 1,
            imageUrl: '/uploads/contact-hero.jpg',
            textContent: {
              title: 'Contact Us',
              subtitle: 'Let\'s start a conversation about your financial future',
            }
          },
          {
            type: 'contact-details',
            order: 2,
            textContent: {
              badge: 'Reach Out',
              heading: 'Get in Touch',
              officeHeading: 'Office Details',
              officeAddress: '123 Financial District, BKC, Mumbai, Maharashtra 400051, India',
              officePhone: '+91 22 1234 5678',
              officeEmail: 'info@ajoygoyal.com',
              officeHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
              mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.86!3d19.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM2LjAiTiA3MsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1'
            }
          },
          {
            type: 'contact-cta',
            order: 3,
            textContent: {
              heading: 'Ready to Get Started?',
              description: 'Schedule a free consultation with our expert team today.',
              buttonText: 'Submit a Query',
              buttonLink: '/query'
            }
          }
        ]
      }
    }
  })

  // Query Page
  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      slug: 'query',
      title: 'Submit a Query',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          {
            type: 'page-hero',
            order: 1,
            imageUrl: '/uploads/contact-hero.jpg',
            textContent: {
              title: 'Submit a Query',
              subtitle: 'We\'re here to help with your financial needs',
            }
          },
          {
            type: 'query-details',
            order: 2,
            textContent: {
              badge: 'Get in Touch',
              heading: 'Have a Question?',
              quickContactHeading: 'Quick Contact',
              quickContacts: [
                { icon: 'Phone', label: '+91 22 1234 5678', sub: 'Mon-Sat, 9am-6pm' },
                { icon: 'Mail', label: 'info@ajoygoyal.com', sub: 'We reply within 24 hours' },
                { icon: 'MessageCircle', label: 'Live Chat', sub: 'Available during business hours' }
              ],
              faqHeading: 'FAQs',
              faqs: [
                { q: 'How quickly will I receive a response?', a: 'We aim to respond to all queries within 24 business hours.' },
                { q: 'Can I schedule a call instead?', a: 'Absolutely! Use our contact page or call us directly to schedule a consultation.' },
                { q: 'Is the initial consultation free?', a: 'Yes, we offer a complimentary initial consultation to understand your needs.' },
                { q: 'Do you serve clients outside India?', a: 'Yes, we have experience serving clients across multiple countries.' }
              ]
            }
          }
        ]
      }
    }
  })

  // Service Details Data (Internal mapping since ServiceDetail.tsx dynamic lookup)

  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      title: 'Bookkeeping',
      slug: 'service-bookkeeping',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          { type: 'hero', order: 0, textContent: { title: 'Bookkeeping', description: 'Accurate financial record keeping for informed business decisions.', image: '/uploads/services-hero.jpg' } },
          { type: 'benefits', order: 1, textContent: { title: 'Why Choose Our Bookkeeping Service', items: ["Daily transaction recording","Bank reconciliation","Accounts payable & receivable","Financial statement preparation","Cash flow management"] } },
          { type: 'steps', order: 2, textContent: { title: 'Our Process', items: ["Initial Financial Review","Accounting Software Setup","Daily/Weekly Categorization","Month-end Close & Reporting"] } },
          { type: 'faqs', order: 3, textContent: { title: 'Frequently Asked Questions', items: [{"q":"What software do you use?","a":"We work with Tally, QuickBooks, Zoho, and other major accounting platforms."},{"q":"How often do I get reports?","a":"We provide monthly MIS reports, but can offer weekly summaries upon request."}] } }
        ]
      }
    }
  })

  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      title: 'GST Filing',
      slug: 'service-gst-filing',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          { type: 'hero', order: 0, textContent: { title: 'GST Filing', description: 'Timely GST compliance & returns to keep your business running smoothly.', image: '/uploads/services-hero.jpg' } },
          { type: 'benefits', order: 1, textContent: { title: 'Why Choose Our GST Filing Service', items: ["Monthly GSTR-1 & GSTR-3B filing","Quarterly GSTR-4 for composition dealers","Annual GST return filing","GST reconciliation","Input tax credit optimization"] } },
          { type: 'steps', order: 2, textContent: { title: 'Our Process', items: ["Invoice Collection","Data Reconciliation & ITC Matching","Draft Return Preparation","Client Approval & Final Filing"] } },
          { type: 'faqs', order: 3, textContent: { title: 'Frequently Asked Questions', items: [{"q":"Can you help with GST Registration?","a":"Yes, we provide end-to-end GST registration support."},{"q":"What if I missed a filing?","a":"We assist with late filings and minimize penalty impacts."}] } }
        ]
      }
    }
  })

  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      title: 'Payroll',
      slug: 'service-payroll',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          { type: 'hero', order: 0, textContent: { title: 'Payroll', description: 'End-to-end payroll management and statutory compliance.', image: '/uploads/services-hero.jpg' } },
          { type: 'benefits', order: 1, textContent: { title: 'Why Choose Our Payroll Service', items: ["Salary calculation & disbursement","PF & ESI compliance","TDS on salary computation","Leave & attendance management","Payslip generation"] } },
          { type: 'steps', order: 2, textContent: { title: 'Our Process', items: ["Attendance Data Integration","Deduction & Tax Calculation","Approval & Salary Disbursement","PF/ESI Return Filings"] } },
          { type: 'faqs', order: 3, textContent: { title: 'Frequently Asked Questions', items: [{"q":"Do you issue payslips?","a":"Yes, digital payslips are provided directly to employees."},{"q":"Are bonus and incentives handled?","a":"We structure performance pay and bonuses in a tax-efficient manner."}] } }
        ]
      }
    }
  })

  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      title: 'Tax Planning',
      slug: 'service-tax-planning',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          { type: 'hero', order: 0, textContent: { title: 'Tax Planning', description: 'Strategic tax optimization to maximize your savings legally.', image: '/uploads/services-hero.jpg' } },
          { type: 'benefits', order: 1, textContent: { title: 'Why Choose Our Tax Planning Service', items: ["Income tax planning","Investment advisory","Tax saving strategies","Advance tax computation","Tax return filing"] } },
          { type: 'steps', order: 2, textContent: { title: 'Our Process', items: ["Historical Tax Review","Goal & Investment Assessment","Strategy Formulation","Implementation & Return Filing"] } },
          { type: 'faqs', order: 3, textContent: { title: 'Frequently Asked Questions', items: [{"q":"When is the right time for tax planning?","a":"Tax planning should ideally begin at the start of the financial year."},{"q":"Do you assist with tax notices?","a":"Yes, we represent clients for scrutiny and notices from the IT department."}] } }
        ]
      }
    }
  })

  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      title: 'Company Formation',
      slug: 'service-company-formation',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          { type: 'hero', order: 0, textContent: { title: 'Company Formation', description: 'Business incorporation services ensuring a solid foundation.', image: '/uploads/services-hero.jpg' } },
          { type: 'benefits', order: 1, textContent: { title: 'Why Choose Our Company Formation Service', items: ["Private Limited Company registration","LLP formation","Partnership deed drafting","MSME registration","Startup India registration"] } },
          { type: 'steps', order: 2, textContent: { title: 'Our Process', items: ["Name Approval & DIN Registration","Drafting MOA & AOA","Filing Incorporation Docs","PAN, TAN & Bank Account Setup"] } },
          { type: 'faqs', order: 3, textContent: { title: 'Frequently Asked Questions', items: [{"q":"How long does incorporation take?","a":"Typically 10-15 working days subject to government approvals."},{"q":"What is the minimum capital required?","a":"There is no minimum paid-up capital requirement for a Private Limited Company now."}] } }
        ]
      }
    }
  })

  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      title: 'Compliance Management',
      slug: 'service-compliance',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          { type: 'hero', order: 0, textContent: { title: 'Compliance Management', description: 'Regulatory compliance support to avoid penalties and audits.', image: '/uploads/services-hero.jpg' } },
          { type: 'benefits', order: 1, textContent: { title: 'Why Choose Our Compliance Management Service', items: ["ROC filings & AOC-4/MGT-7","Annual return compliance","Director KYC updates","Statutory registers maintenance","FEMA / RBI guidelines checks"] } },
          { type: 'steps', order: 2, textContent: { title: 'Our Process', items: ["Compliance Calendar Setup","Document Drafting & Resolution formulation","Board Meeting Minutes Preparation","Filing Forms with Authorities"] } },
          { type: 'faqs', order: 3, textContent: { title: 'Frequently Asked Questions', items: [{"q":"What happens if we miss an ROC filing?","a":"Late filings attract daily penalties. We help regularize past defaults."},{"q":"Do you maintain statutory registers?","a":"Yes, we keep all required corporate records updated."}] } }
        ]
      }
    }
  })

  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      title: 'Audit Services',
      slug: 'service-audit-services',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          { type: 'hero', order: 0, textContent: { title: 'Audit Services', description: 'Comprehensive audit solutions providing true and fair views.', image: '/uploads/services-hero.jpg' } },
          { type: 'benefits', order: 1, textContent: { title: 'Why Choose Our Audit Services Service', items: ["Statutory audit under Companies Act","Internal financial controls review","Tax audit under Income Tax Act","Concurrent & Management audits","Due diligence for M&A"] } },
          { type: 'steps', order: 2, textContent: { title: 'Our Process', items: ["Audit Planning & Scope Design","Fieldwork & Verification","Issue Identification & Discussion","Final Audit Report Issuance"] } },
          { type: 'faqs', order: 3, textContent: { title: 'Frequently Asked Questions', items: [{"q":"Is statutory audit mandatory?","a":"Yes, for all registered companies regardless of turnover or profit."},{"q":"Do you do forensic audits?","a":"Yes, we have specialized personnel for investigative and forensic matters."}] } }
        ]
      }
    }
  })

  await prisma.page.create({
    data: {
      websiteId: ajoyGoyalWebsite.id,
      title: 'Financial Advisory',
      slug: 'service-financial-advisory',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      sections: {
        create: [
          { type: 'hero', order: 0, textContent: { title: 'Financial Advisory', description: 'Expert financial guidance to navigate growth and restructuring.', image: '/uploads/services-hero.jpg' } },
          { type: 'benefits', order: 1, textContent: { title: 'Why Choose Our Financial Advisory Service', items: ["Business valuation","Financial modelling & projections","Merger & acquisition support","Funding & loan assistance","CFO services on-demand"] } },
          { type: 'steps', order: 2, textContent: { title: 'Our Process', items: ["Needs Analysis & Data Gathering","Market & Financial Modeling","Draft Presentation","Final Execution & Advisory Setup"] } },
          { type: 'faqs', order: 3, textContent: { title: 'Frequently Asked Questions', items: [{"q":"Can you help raise funding?","a":"We assist with pitch decks, valuations, and connecting with financial institutions."},{"q":"What is an outsourced CFO?","a":"It gives you access to high-level strategic financial expertise without a full-time hire cost."}] } }
        ]
      }
    }
  })

  console.log('✅ Ajoy Goyal & Associates. seed complete')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
