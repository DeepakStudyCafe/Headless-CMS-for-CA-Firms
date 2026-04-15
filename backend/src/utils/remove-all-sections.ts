import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Starting removal of all sections...');

  try {
    // Get count before deletion
    const sectionCount = await prisma.section.count();
    console.log(`📊 Found ${sectionCount} sections to remove`);

    if (sectionCount === 0) {
      console.log('ℹ️ No sections found to remove');
      return;
    }

    // Delete all sections
    console.log('🗑️ Deleting all sections...');
    const result = await prisma.section.deleteMany();
    
    console.log(`✅ Successfully removed ${result.count} sections`);
    console.log('🎉 All sections removed successfully!');

  } catch (error) {
    console.error('❌ Error removing sections:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('❌ Section removal failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
