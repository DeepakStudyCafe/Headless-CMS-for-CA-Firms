import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting basic database seed...');
  console.log('⚠️  Note: For full content seeding, use comprehensive-seed.ts instead');

  // Create admin user
  const adminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Admin@123', 10);
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@cafirm.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: process.env.ADMIN_EMAIL || 'admin@cafirm.com',
      passwordHash: adminPassword,
      role: 'SUPER_ADMIN'
    }
  });
  console.log('✅ Admin user created');

  // Create 3 CA Firm websites (without pages - use comprehensive-seed for pages)
  const websites = [
    {
      name: 'Sharma & Associates',
      slug: 'sharma-associates',
      domain: 'https://sharma-associates.com',
      logo: '/uploads/sharma-logo.png',
      themeConfig: {
        primaryColor: '#1e40af',
        secondaryColor: '#64748b',
        fontFamily: 'Inter',
        theme: 'professional'
      }
    },
    {
      name: 'Verma Accounting Services',
      slug: 'verma-accounting',
      domain: 'https://verma-accounting.com',
      logo: '/uploads/verma-logo.png',
      themeConfig: {
        primaryColor: '#ffffff',
        secondaryColor: '#000000',
        fontFamily: 'Roboto',
        theme: 'modern'
      }
    },
    {
      name: 'Gupta Tax Advisors',
      slug: 'gupta-tax-advisors',
      domain: 'https://gupta-tax-advisors.com',
      logo: '/uploads/gupta-logo.png',
      themeConfig: {
        primaryColor: '#8b5cf6',
        secondaryColor: '#ec4899',
        fontFamily: 'Poppins',
        theme: 'creative'
      }
    }
  ];

  for (const websiteData of websites) {
    const website = await prisma.website.upsert({
      where: { slug: websiteData.slug },
      update: {},
      create: websiteData
    });

    console.log(`✅ Website created: ${website.name}`);
  }

  console.log('🎉 Basic database seed completed successfully!');
  console.log('💡 Run comprehensive-seed.ts for full content with pages and sections');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
