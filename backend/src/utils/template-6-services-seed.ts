/**
 * Seed individual service sub-pages for Template-6.
 * Run: npx ts-node src/utils/template-6-services-seed.ts
 */
import { PrismaClient } from '@prisma/client';
import { SERVICE_DETAILS } from './template6-data';

const prisma = new PrismaClient();

async function main() {
  const website = await prisma.website.findUnique({ where: { slug: 'template-6' } });
  if (!website) {
    console.error('❌ template-6 website not found. Run the main seed first.');
    process.exit(1);
  }

  for (const [slug, svc] of Object.entries(SERVICE_DETAILS)) {
    // Remove any existing page for this slug
    const existing = await prisma.page.findFirst({ where: { websiteId: website.id, slug } });
    if (existing) {
      await prisma.section.deleteMany({ where: { pageId: existing.id } });
      await prisma.page.delete({ where: { id: existing.id } });
    }

    await prisma.page.create({
      data: {
        websiteId: website.id,
        slug,
        title: `${svc.title} — abc & Associates`,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        sections: {
          create: [
            {
              type: 'hero',
              order: 1,
              imageUrl: svc.heroImage,
              textContent: {
                label: 'Our Services',
                heading: svc.title,
                subheading: svc.tagline,
              },
            },
            {
              type: 'text-image',
              order: 2,
              imageUrl: svc.heroImage,
              textContent: {
                heading: 'What We Offer',
                description: svc.description,
                // features stored as objects {icon,title,description}
                features: svc.features,
              },
            },
            {
              type: 'process',
              order: 3,
              textContent: {
                heading: 'How It Works',
                items: svc.processSteps,
              },
            },
            {
              type: 'pricing',
              order: 4,
              textContent: {
                heading: 'Transparent Pricing',
                items: svc.pricingTiers.map(t => ({
                  name: t.name,
                  price: `₹${t.price}/month`,
                  features: t.features,
                  popular: t.highlighted,
                })),
              },
            },
            {
              type: 'faqs',
              order: 5,
              textContent: {
                heading: 'Frequently Asked Questions',
                items: svc.faqs,
              },
            },
          ],
        },
      },
    });
    console.log(`✅ Seeded service page: /${slug}`);
  }

  console.log('\n🎉 All 8 service sub-pages seeded successfully!');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
