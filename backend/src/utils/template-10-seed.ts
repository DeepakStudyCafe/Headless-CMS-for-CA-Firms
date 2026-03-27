import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Template 10 website data...')

  const websiteData = {
    name: 'Template 10 Modern',
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
      secondaryColor: '#00796b'
    }
  }

  const template10 = await prisma.website.upsert({
    where: { slug: 'template-10' },
    update: websiteData,
    create: {
      slug: 'template-10',
      ...websiteData
    }
  })

  // Clear existing pages for idempotency
  await prisma.page.deleteMany({
    where: { websiteId: template10.id }
  })

  // 1. Home Page
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'home',
      title: 'Home - Template 10',
      status: 'PUBLISHED',
      sections: {
        create: [
          { type: 'hero', order: 1, textContent: {} },
          { type: 'stats', order: 2, textContent: {} },
          { type: 'services', order: 3, textContent: {} },
          { type: 'cta', order: 4, textContent: {} }
        ]
      }
    }
  })

  // 2. About Page
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'about',
      title: 'About Us - Template 10',
      status: 'PUBLISHED',
      sections: {
        create: [
          { type: 'hero', order: 1, textContent: {} },
          { type: 'heritage', order: 2, textContent: {} },
          { type: 'mission', order: 3, textContent: {} },
          { type: 'core-values', order: 4, textContent: {} },
          { type: 'cta', order: 5, textContent: {} }
        ]
      }
    }
  })

  // 3. Services Page
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'services',
      title: 'Services - Template 10',
      status: 'PUBLISHED',
      sections: {
        create: [
          { type: 'hero', order: 1, textContent: {} },
          { type: 'services-grid', order: 2, textContent: {} },
          { type: 'cta', order: 3, textContent: {} }
        ]
      }
    }
  })

  // 4. Team Page
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'team',
      title: 'Our Team - Template 10',
      status: 'PUBLISHED',
      sections: {
        create: [
          { type: 'hero', order: 1, textContent: {} },
          { type: 'team-bento', order: 2, textContent: {} },
          { type: 'team-staff', order: 3, textContent: {} },
          { type: 'cta', order: 4, textContent: {} }
        ]
      }
    }
  })

  // 5. Gallery Page
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'gallery',
      title: 'Gallery - Template 10',
      status: 'PUBLISHED',
      sections: {
        create: [
          { type: 'hero', order: 1, textContent: {} },
          { type: 'gallery-grid', order: 2, textContent: {} },
          { type: 'gallery-stats', order: 3, textContent: {} }
        ]
      }
    }
  })

  // 6. Contact Page
  await prisma.page.create({
    data: {
      websiteId: template10.id,
      slug: 'contact',
      title: 'Contact Us - Template 10',
      status: 'PUBLISHED',
      sections: {
        create: [
          { type: 'hero', order: 1, textContent: {} },
          { type: 'contact-info', order: 2, textContent: {} },
          { type: 'contact-form', order: 3, textContent: {} }
        ]
      }
    }
  })

  console.log('✅ Template 10 seeded successfully')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
