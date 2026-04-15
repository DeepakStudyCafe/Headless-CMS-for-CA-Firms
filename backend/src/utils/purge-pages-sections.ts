import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Starting purge of pages and sections...');

  // Delete all sections first (due to foreign key constraints)
  console.log('🗑️ Deleting all sections...');
  const deletedSections = await prisma.section.deleteMany();
  console.log(`✅ Deleted ${deletedSections.count} sections`);

  // Delete all pages
  console.log('🗑️ Deleting all pages...');
  const deletedPages = await prisma.page.deleteMany();
  console.log(`✅ Deleted ${deletedPages.count} pages`);

  console.log('🎉 Purge completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Purge failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
