
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed process for Template-3...');
  
  try {
    await prisma.$transaction(async (tx) => {
        // Find existing website or create
        let website = await tx.website.findUnique({
          where: { slug: 'template-3' }
        });
        
        if (!website) {
          website = await tx.website.create({
            data: {
              name: 'Template 3 - CA Firm',
              slug: 'template-3',
              description: 'Professional CA Firm template with modern UI',
              status: "PUBLISHED", publishedAt: new Date(),
            }
          });
          console.log('Created website: Template 3');
        } else {
          console.log('Website Template 3 already exists');
        }

        

    // ============================================
    // ABOUT PAGE
    // ============================================
    
    // Check if the page exists
    let aboutPage = await tx.page.findFirst({
      where: { slug: 'about', websiteId: website.id }
    });

    if (!aboutPage) {
      aboutPage = await tx.page.create({
        data: {
          title: 'ABOUT',
          slug: 'about',
          websiteId: website.id,
          status: 'PUBLISHED'
        }
      });
      console.log('Created about page');
    } else {
      await tx.page.update({ where: { id: aboutPage.id }, data: { status: 'PUBLISHED' } });
      console.log('about page already exists');
    }

    // Prepare sections for about
    const aboutSections = [

      {
        pageId: aboutPage.id,
        type: 'values',
        order: 10,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "icon": "Shield",
                        "title": "Integrity",
                        "desc": "We uphold the highest ethical standards in every engagement."
                },
                {
                        "icon": "Award",
                        "title": "Excellence",
                        "desc": "We strive for perfection in all our services and deliverables."
                },
                {
                        "icon": "Users",
                        "title": "Client Focus",
                        "desc": "Your success is our primary mission and motivation."
                },
                {
                        "icon": "Heart",
                        "title": "Trust",
                        "desc": "We build lasting relationships founded on mutual trust."
                }
        ]
}
      },

      {
        pageId: aboutPage.id,
        type: 'timeline',
        order: 20,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "year": "2005",
                        "title": "Founded",
                        "desc": "Apex & Associates established in Mumbai."
                },
                {
                        "year": "2010",
                        "title": "Expansion",
                        "desc": "Opened offices in Delhi and Bangalore."
                },
                {
                        "year": "2015",
                        "title": "500+ Clients",
                        "desc": "Crossed 500 active clients milestone."
                },
                {
                        "year": "2020",
                        "title": "Digital First",
                        "desc": "Launched cloud-based accounting solutions."
                },
                {
                        "year": "2024",
                        "title": "International",
                        "desc": "Expanded advisory services to international markets."
                }
        ]
}
      },
    ];

    // Seed sections for about
    for (const section of aboutSections) {
      const existingSection = await tx.section.findFirst({
        where: { pageId: section.pageId, type: section.type }
      });
      if (!existingSection) {
        await tx.section.create({ data: section });
      } else {
        // Upgrade existing section with new schema
        await tx.section.update({
          where: { id: existingSection.id },
          data: { textContent: section.textContent }
        });
      }
    }


    // ============================================
    // CAREER PAGE
    // ============================================
    
    // Check if the page exists
    let careerPage = await tx.page.findFirst({
      where: { slug: 'career', websiteId: website.id }
    });

    if (!careerPage) {
      careerPage = await tx.page.create({
        data: {
          title: 'CAREER',
          slug: 'career',
          websiteId: website.id,
          status: "PUBLISHED", publishedAt: new Date()
        }
      });
      console.log('Created about page');
    } else {
      await tx.page.update({ where: { id: aboutPage.id }, data: { status: 'PUBLISHED', publishedAt: new Date() } });
      console.log('about page already exists');
    }

    // Prepare sections for career
    const careerSections = [

      {
        pageId: careerPage.id,
        type: 'jobs',
        order: 10,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "title": "Senior Audit Associate",
                        "location": "Mumbai",
                        "type": "Full-time",
                        "experience": "3-5 years"
                },
                {
                        "title": "GST Compliance Manager",
                        "location": "Delhi",
                        "type": "Full-time",
                        "experience": "5+ years"
                },
                {
                        "title": "Junior Accountant",
                        "location": "Bangalore",
                        "type": "Full-time",
                        "experience": "0-2 years"
                },
                {
                        "title": "Financial Analyst",
                        "location": "Mumbai",
                        "type": "Full-time",
                        "experience": "2-4 years"
                }
        ]
}
      },

      {
        pageId: careerPage.id,
        type: 'benefits',
        order: 20,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "icon": "TrendingUp",
                        "title": "Career Growth",
                        "desc": "Clear progression paths and mentorship."
                },
                {
                        "icon": "Heart",
                        "title": "Health Benefits",
                        "desc": "Comprehensive medical insurance coverage."
                },
                {
                        "icon": "Users",
                        "title": "Team Culture",
                        "desc": "Collaborative and inclusive work environment."
                },
                {
                        "icon": "Award",
                        "title": "Learning",
                        "desc": "Sponsored certifications and training programs."
                }
        ]
}
      },
    ];

    // Seed sections for career
    for (const section of careerSections) {
      const existingSection = await tx.section.findFirst({
        where: { pageId: section.pageId, type: section.type }
      });
      if (!existingSection) {
        await tx.section.create({ data: section });
      } else {
        // Upgrade existing section with new schema
        await tx.section.update({
          where: { id: existingSection.id },
          data: { textContent: section.textContent }
        });
      }
    }


    // ============================================
    // CONTACT PAGE
    // ============================================
    
    // Check if the page exists
    let contactPage = await tx.page.findFirst({
      where: { slug: 'contact', websiteId: website.id }
    });

    if (!contactPage) {
      contactPage = await tx.page.create({
        data: {
          title: 'CONTACT',
          slug: 'contact',
          websiteId: website.id,
          status: "PUBLISHED", publishedAt: new Date()
        }
      });
      console.log('Created contact page');
    } else {
      await tx.page.update({ where: { id: contactPage.id }, data: { status: 'PUBLISHED', publishedAt: new Date() } });
      console.log('contact page already exists');
    }

    // Prepare sections for contact
    const contactSections = [
    ];

    // Seed sections for contact
    for (const section of contactSections) {
      const existingSection = await tx.section.findFirst({
        where: { pageId: section.pageId, type: section.type }
      });
      if (!existingSection) {
        await tx.section.create({ data: section });
      } else {
        // Upgrade existing section with new schema
        await tx.section.update({
          where: { id: existingSection.id },
          data: { textContent: section.textContent }
        });
      }
    }


    // ============================================
    // GALLERY PAGE
    // ============================================
    
    // Check if the page exists
    let galleryPage = await tx.page.findFirst({
      where: { slug: 'gallery', websiteId: website.id }
    });

    if (!galleryPage) {
      galleryPage = await tx.page.create({
        data: {
          title: 'GALLERY',
          slug: 'gallery',
          websiteId: website.id,
          status: "PUBLISHED", publishedAt: new Date()
        }
      });
      console.log('Created gallery page');
    } else {
      await tx.page.update({ where: { id: galleryPage.id }, data: { status: 'PUBLISHED', publishedAt: new Date() } });
      console.log('gallery page already exists');
    }

    // Prepare sections for gallery
    const gallerySections = [

      {
        pageId: galleryPage.id,
        type: 'galleryImages',
        order: 10,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "src": "hero1",
                        "category": "Office",
                        "title": "Board Room"
                },
                {
                        "src": "hero2",
                        "category": "Events",
                        "title": "Finance Consultation"
                },
                {
                        "src": "hero3",
                        "category": "Events",
                        "title": "Strategy Meeting"
                },
                {
                        "src": "heroAbout",
                        "category": "Office",
                        "title": "Our Building"
                },
                {
                        "src": "heroContact",
                        "category": "Office",
                        "title": "Reception Area"
                },
                {
                        "src": "heroServices",
                        "category": "Events",
                        "title": "Client Workshop"
                }
        ]
}
      },
    ];

    // Seed sections for gallery
    for (const section of gallerySections) {
      const existingSection = await tx.section.findFirst({
        where: { pageId: section.pageId, type: section.type }
      });
      if (!existingSection) {
        await tx.section.create({ data: section });
      } else {
        // Upgrade existing section with new schema
        await tx.section.update({
          where: { id: existingSection.id },
          data: { textContent: section.textContent }
        });
      }
    }


    // ============================================
    // HOME PAGE
    // ============================================
    
    // Check if the page exists
    let homePage = await tx.page.findFirst({
      where: { slug: 'home', websiteId: website.id }
    });

    if (!homePage) {
      homePage = await tx.page.create({
        data: {
          title: 'HOME',
          slug: 'home',
          websiteId: website.id,
          status: "PUBLISHED", publishedAt: new Date()
        }
      });
      console.log('Created home page');
    } else {
      await tx.page.update({ where: { id: homePage.id }, data: { status: 'PUBLISHED', publishedAt: new Date() } });
      console.log('home page already exists');
    }

    // Prepare sections for home
    const homeSections = [

      {
        pageId: homePage.id,
        type: 'hero',
        order: 10,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "slides": [
                {
                        "image": "hero1",
                        "title": "Trusted Financial Partners",
                        "subtitle": "Empowering businesses with strategic accounting and advisory services since 2005."
                },
                {
                        "image": "hero2",
                        "title": "Data-Driven Insights",
                        "subtitle": "Leveraging advanced analytics to drive your business growth and profitability."
                },
                {
                        "image": "hero3",
                        "title": "Strategic Advisory",
                        "subtitle": "Comprehensive consulting solutions tailored to your unique business needs."
                }
        ]
}
      },

      {
        pageId: homePage.id,
        type: 'services-section',
        order: 20,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "name": "Bookkeeping",
                        "icon": "BookOpen",
                        "desc": "Accurate financial record-keeping and reporting."
                },
                {
                        "name": "GST Filing",
                        "icon": "FileText",
                        "desc": "Timely and compliant GST return filing."
                },
                {
                        "name": "Payroll",
                        "icon": "Users",
                        "desc": "End-to-end payroll management solutions."
                },
                {
                        "name": "Tax Planning",
                        "icon": "Calculator",
                        "desc": "Strategic tax optimization and planning."
                },
                {
                        "name": "Company Formation",
                        "icon": "Building2",
                        "desc": "Seamless business incorporation services."
                },
                {
                        "name": "Compliance",
                        "icon": "Shield",
                        "desc": "Regulatory compliance and governance."
                },
                {
                        "name": "Audit Services",
                        "icon": "Search",
                        "desc": "Thorough and independent audit assurance."
                },
                {
                        "name": "Financial Advisory",
                        "icon": "TrendingUp",
                        "desc": "Expert guidance for financial growth."
                }
        ]
}
      },

      {
        pageId: homePage.id,
        type: 'industries',
        order: 30,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "name": "Startups",
                        "icon": "Rocket",
                        "desc": "Scaling from zero to success"
                },
                {
                        "name": "SMEs",
                        "icon": "Briefcase",
                        "desc": "Growth-focused financial solutions"
                },
                {
                        "name": "Manufacturing",
                        "icon": "Factory",
                        "desc": "Cost optimization and compliance"
                },
                {
                        "name": "IT & Technology",
                        "icon": "Monitor",
                        "desc": "Tech-enabled financial services"
                }
        ]
}
      },

      {
        pageId: homePage.id,
        type: 'testimonials',
        order: 40,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "name": "Rajesh Sharma",
                        "role": "CEO, TechVentures",
                        "text": "Apex & Associates transformed our financial operations. Their expertise in tax planning saved us significantly."
                },
                {
                        "name": "Priya Mehta",
                        "role": "Founder, GreenLeaf Organics",
                        "text": "Professional, responsive, and incredibly knowledgeable. They made compliance feel effortless."
                },
                {
                        "name": "Amit Patel",
                        "role": "Director, BuildRight Constructions",
                        "text": "Their audit services gave us complete confidence in our financial reporting. Highly recommended."
                }
        ]
}
      },
    ];

    // Seed sections for home
    for (const section of homeSections) {
      const existingSection = await tx.section.findFirst({
        where: { pageId: section.pageId, type: section.type }
      });
      if (!existingSection) {
        await tx.section.create({ data: section });
      } else {
        // Upgrade existing section with new schema
        await tx.section.update({
          where: { id: existingSection.id },
          data: { textContent: section.textContent }
        });
      }
    }


    // ============================================
    // QUERY PAGE
    // ============================================
    
    // Check if the page exists
    let queryPage = await tx.page.findFirst({
      where: { slug: 'query', websiteId: website.id }
    });

    if (!queryPage) {
      queryPage = await tx.page.create({
        data: {
          title: 'QUERY',
          slug: 'query',
          websiteId: website.id,
          status: "PUBLISHED", publishedAt: new Date()
        }
      });
      console.log('Created query page');
    } else {
      await tx.page.update({ where: { id: queryPage.id }, data: { status: 'PUBLISHED', publishedAt: new Date() } });
      console.log('query page already exists');
    }

    // Prepare sections for query
    const querySections = [

      {
        pageId: queryPage.id,
        type: 'faqs',
        order: 10,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "q": "What services does your firm offer?",
                        "a": "We offer bookkeeping, GST filing, payroll, tax planning, company formation, compliance, audit, and financial advisory services."
                },
                {
                        "q": "How can I schedule a consultation?",
                        "a": "You can fill out the query form below or contact us via phone/email to schedule a free consultation."
                },
                {
                        "q": "Do you serve clients outside India?",
                        "a": "Yes, we have experience serving international clients and handling cross-border financial matters."
                },
                {
                        "q": "What industries do you specialize in?",
                        "a": "We serve startups, SMEs, manufacturing, IT, real estate, healthcare, and more."
                }
        ]
}
      },
    ];

    // Seed sections for query
    for (const section of querySections) {
      const existingSection = await tx.section.findFirst({
        where: { pageId: section.pageId, type: section.type }
      });
      if (!existingSection) {
        await tx.section.create({ data: section });
      } else {
        // Upgrade existing section with new schema
        await tx.section.update({
          where: { id: existingSection.id },
          data: { textContent: section.textContent }
        });
      }
    }


    // ============================================
    // SERVICES PAGE
    // ============================================
    
    // Check if the page exists
    let servicesPage = await tx.page.findFirst({
      where: { slug: 'services', websiteId: website.id }
    });

    if (!servicesPage) {
      servicesPage = await tx.page.create({
        data: {
          title: 'SERVICES',
          slug: 'services',
          websiteId: website.id,
          status: "PUBLISHED", publishedAt: new Date()
        }
      });
      console.log('Created services page');
    } else {
      await tx.page.update({ where: { id: servicesPage.id }, data: { status: 'PUBLISHED', publishedAt: new Date() } });
      console.log('services page already exists');
    }

    // Prepare sections for services
    const servicesSections = [

      {
        pageId: servicesPage.id,
        type: 'services-section',
        order: 10,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "name": "Bookkeeping",
                        "href": "/services/bookkeeping",
                        "icon": "BookOpen",
                        "desc": "Accurate financial record-keeping, bank reconciliations, and periodic reporting for complete financial visibility."
                },
                {
                        "name": "GST Filing",
                        "href": "/services/gst-filing",
                        "icon": "FileText",
                        "desc": "Timely and accurate GST return filing with compliance monitoring and advisory on GST regulations."
                },
                {
                        "name": "Payroll",
                        "href": "/services/payroll",
                        "icon": "Users",
                        "desc": "End-to-end payroll management including salary processing, TDS, PF/ESI compliance, and reporting."
                },
                {
                        "name": "Tax Planning",
                        "href": "/services/tax-planning",
                        "icon": "Calculator",
                        "desc": "Strategic tax planning and optimization services to minimize liabilities while ensuring compliance."
                },
                {
                        "name": "Company Formation",
                        "href": "/services/company-formation",
                        "icon": "Building2",
                        "desc": "Seamless company registration, LLP formation, and incorporation services with complete documentation."
                },
                {
                        "name": "Compliance",
                        "href": "/services/compliance",
                        "icon": "Shield",
                        "desc": "Comprehensive regulatory compliance services including ROC filings, annual returns, and statutory audits."
                },
                {
                        "name": "Audit Services",
                        "href": "/services/audit-services",
                        "icon": "Search",
                        "desc": "Independent audit and assurance services ensuring transparency and accuracy in financial reporting."
                },
                {
                        "name": "Financial Advisory",
                        "href": "/services/financial-advisory",
                        "icon": "TrendingUp",
                        "desc": "Expert financial advisory covering valuations, due diligence, mergers, and strategic planning."
                }
        ]
}
      },
    ];

    // Seed sections for services
    for (const section of servicesSections) {
      const existingSection = await tx.section.findFirst({
        where: { pageId: section.pageId, type: section.type }
      });
      if (!existingSection) {
        await tx.section.create({ data: section });
      } else {
        // Upgrade existing section with new schema
        await tx.section.update({
          where: { id: existingSection.id },
          data: { textContent: section.textContent }
        });
      }
    }


    // ============================================
    // TEAM PAGE
    // ============================================
    
    // Check if the page exists
    let teamPage = await tx.page.findFirst({
      where: { slug: 'team', websiteId: website.id }
    });

    if (!teamPage) {
      teamPage = await tx.page.create({
        data: {
          title: 'TEAM',
          slug: 'team',
          websiteId: website.id,
          status: "PUBLISHED", publishedAt: new Date()
        }
      });
      console.log('Created team page');
    } else {
      await tx.page.update({ where: { id: teamPage.id }, data: { status: 'PUBLISHED', publishedAt: new Date() } });
      console.log('team page already exists');
    }

    // Prepare sections for team
    const teamSections = [

      {
        pageId: teamPage.id,
        type: 'partners',
        order: 10,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "name": "CA Vikram Desai",
                        "role": "Managing Partner",
                        "speciality": "Audit & Assurance"
                },
                {
                        "name": "CA Anita Krishnan",
                        "role": "Senior Partner",
                        "speciality": "Tax Advisory"
                },
                {
                        "name": "CA Rahul Gupta",
                        "role": "Partner",
                        "speciality": "Financial Advisory"
                }
        ]
}
      },

      {
        pageId: teamPage.id,
        type: 'team',
        order: 20,
        status: "PUBLISHED", publishedAt: new Date(), // MUST BE TRUE
        textContent: {
        "items": [
                {
                        "name": "Neha Sharma",
                        "role": "Senior Manager – Audit"
                },
                {
                        "name": "Arun Mehta",
                        "role": "Manager – Tax Compliance"
                },
                {
                        "name": "Sneha Patel",
                        "role": "Manager – GST Services"
                },
                {
                        "name": "Rohan Das",
                        "role": "Manager – Payroll"
                },
                {
                        "name": "Kavita Iyer",
                        "role": "Senior Associate – Bookkeeping"
                },
                {
                        "name": "Suresh Nair",
                        "role": "Associate – Company Formation"
                }
        ]
}
      },
    ];

    // Seed sections for team
    for (const section of teamSections) {
      const existingSection = await tx.section.findFirst({
        where: { pageId: section.pageId, type: section.type }
      });
      if (!existingSection) {
        await tx.section.create({ data: section });
      } else {
        // Upgrade existing section with new schema
        await tx.section.update({
          where: { id: existingSection.id },
          data: { textContent: section.textContent }
        });
      }
    }



        // --- NEW DYNAMIC HEADINGS ---
        
        const newSections = [
          { pageSlug: 'about', type: 'about', textContent: { heading: 'Who We Are', description1: 'Founded in 2005, Apex & Associates has established itself as a premier chartered accountancy firm.', description2: 'We believe in building lasting relationships with our clients based on trust, integrity, and exceptional service quality.', missionHeading: 'Our Mission', missionText: 'To empower businesses with innovative financial solutions, ensuring compliance, growth, and long-term success through expert guidance and unwavering commitment.', visionHeading: 'Our Vision', visionText: 'To be the most trusted and innovative chartered accountancy firm globally, setting new benchmarks in financial services excellence.' } },
          { pageSlug: 'career', type: 'career-header', textContent: { heading: 'Join Our Team', subheading: 'Build your career with a firm that values growth, innovation, and excellence.' } },
          { pageSlug: 'contact', type: 'contact-header', textContent: { heading: 'Get In Touch', subheading: 'Have a question or want to discuss how we can help your business? Fill out the form and our team will get back to you within 24 hours.' } },
          { pageSlug: 'gallery', type: 'gallery-header', textContent: { heading: 'Our Gallery' } },
          { pageSlug: 'home', type: 'services-section', textContent: { heading: 'Our Services', subheading: 'Comprehensive financial solutions tailored to drive your business forward.' } },
          { pageSlug: 'home', type: 'industries', textContent: { heading: 'Industries We Serve', subheading: 'Specialized expertise across diverse industry verticals.' } },
          { pageSlug: 'home', type: 'testimonials', textContent: { heading: 'What Our Clients Say', subheading: 'Trusted by businesses across industries.' } },
          { pageSlug: 'query', type: 'query-header', textContent: { heading: 'Have a Question?', subheading: 'Submit your query and our team will respond within 24 hours.' } },
          { pageSlug: 'services', type: 'services-header', textContent: { heading: 'What We Offer', subheading: 'Comprehensive financial services to support every aspect of your business.' } },
          { pageSlug: 'team', type: 'team-header', textContent: { heading: 'Leadership', subheading: "Meet the partners driving our firm's vision and excellence." } },
          { pageSlug: 'team', type: 'team-core-header', textContent: { heading: 'Our Team', subheading: 'Dedicated professionals committed to delivering exceptional results.' } },
          { pageSlug: 'team', type: 'team-certs-header', textContent: { heading: 'Certifications & Expertise' } }
        ];

        for (const sec of newSections) {
          let page = await tx.page.findFirst({ where: { slug: sec.pageSlug, websiteId: website.id }});
          if (page) {
            let existing = await tx.section.findFirst({ where: { pageId: page.id, type: sec.type }});
            await tx.page.update({ where: { id: page.id }, data: { status: 'PUBLISHED' } });
            if (existing) {
              await tx.section.update({
                where: { id: existing.id },
                data: {
                  textContent: {
                    ...(existing.textContent as object),
                    ...sec.textContent
                  }
                }
              });
            } else {
              await tx.section.create({
                data: {
                  pageId: page.id,
                  type: sec.type,
                  order: 999, // Append at end
                  status: "PUBLISHED", publishedAt: new Date(),
                  textContent: sec.textContent
                }
              });
            }
          }
        }

    });
    console.log('Successfully completed full deep seeding for Template-3!');

  } catch (err) {
    console.error('Error seeding template 3:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
