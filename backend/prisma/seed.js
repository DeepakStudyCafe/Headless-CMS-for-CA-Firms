const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@cafirm.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@cafirm.com',
      passwordHash: hashedPassword,
      role: 'SUPER_ADMIN',
    },
  });

  console.log('👤 Created admin user:', adminUser.email);

  // Create default websites
  const websites = [
    {
      name: 'Sharma & Associates',
      slug: 'sharma',
      domain: 'sadgurushakti.org',
      phone: '+91 9876543210',
      email: 'sharma.contact@gmail.com',
      address: 'Mumbai, Maharashtra',
    },
    {
      name: 'Verma & Co',
      slug: 'verma', 
      domain: 'automatepractice.com',
      phone: '+91 9876543211',
      email: 'verma.business@gmail.com',
      address: 'Delhi, India',
    },
    {
      name: 'Gupta Partners',
      slug: 'gupta',
      domain: 'capracticeautomation.com', 
      phone: '+91 9876543212',
      email: 'gupta.k.deepak@gmail.com',
      address: 'Bangalore, Karnataka',
    },
    {
      name: 'Kapoor Associates',
      slug: 'kapoor',
      domain: 'practovia.com',
      phone: '+91 9876543213', 
      email: 'kapoor.contact@gmail.com',
      address: 'Pune, Maharashtra',
    },
    {
      name: 'Singh & Partners',
      slug: 'singh',
      domain: 'digitechai.in',
      phone: '+91 9876543214',
      email: 'singh.contact@gmail.com', 
      address: 'Chennai, Tamil Nadu',
    },
    {
      name: 'Patel Group',
      slug: 'patel',
      domain: 'cadeepakgupta.com',
      phone: '+91 9876543215',
      email: 'patel.contact@gmail.com',
      address: 'Ahmedabad, Gujarat',
    },
  ];

  for (const websiteData of websites) {
    const website = await prisma.website.upsert({
      where: { slug: websiteData.slug },
      update: {},
      create: websiteData,
    });
    
    console.log(`🌐 Created website: ${website.name}`);
    
    // Create a default home page for each website
    const homePage = await prisma.page.upsert({
      where: {
        websiteId_slug: {
          websiteId: website.id,
          slug: 'home'
        }
      },
      update: {},
      create: {
        websiteId: website.id,
        slug: 'home',
        title: 'Home',
        status: 'PUBLISHED',
        publishedAt: new Date(),
      },
    });

    console.log(`📄 Created home page for: ${website.name}`);

    // Create a hero section for the home page
    await prisma.section.upsert({
      where: { 
        id: `${homePage.id}-hero`
      },
      update: {},
      create: {
        id: `${homePage.id}-hero`,
        pageId: homePage.id,
        type: 'hero',
        textContent: {
          heading: `Welcome to ${website.name}`,
          subheading: 'Professional Chartered Accountancy Services',
          description: 'Expert financial solutions for your business growth and compliance needs.',
          buttonText: 'Get Started',
          buttonLink: '/contact'
        },
        order: 1,
      },
    });

    console.log(`🎯 Created hero section for: ${website.name}`);
  }

  console.log('✅ Database seeded successfully');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });