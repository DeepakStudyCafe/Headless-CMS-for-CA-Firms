const path = require('path');

// Change to backend directory for Prisma client
process.chdir(path.join(__dirname, 'backend'));

const { PrismaClient } = require('@prisma/client');

async function checkDatabase() {
  const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

  try {
    console.log('🔍 Checking database connection...');
    
    // Test connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    // Check if tables exist
    console.log('📊 Checking database tables...');
    
    try {
      const userCount = await prisma.user.count();
      console.log(`👤 Users table: ${userCount} records`);
    } catch (error) {
      console.log('❌ Users table:', error.message);
    }

    try {
      const websiteCount = await prisma.website.count();
      console.log(`🌐 Websites table: ${websiteCount} records`);
    } catch (error) {
      console.log('❌ Websites table:', error.message);
    }

    try {
      const pageCount = await prisma.page.count();
      console.log(`📄 Pages table: ${pageCount} records`);
    } catch (error) {
      console.log('❌ Pages table:', error.message);
    }

    try {
      const sectionCount = await prisma.section.count();
      console.log(`📝 Sections table: ${sectionCount} records`);
    } catch (error) {
      console.log('❌ Sections table:', error.message);
    }

    // Test admin user
    console.log('🔐 Checking admin user...');
    try {
      const admin = await prisma.user.findUnique({
        where: { email: 'admin@cafirm.com' }
      });
      
      if (admin) {
        console.log(`✅ Admin user found: ${admin.name} (${admin.role})`);
      } else {
        console.log('❌ Admin user not found');
      }
    } catch (error) {
      console.log('❌ Admin user check failed:', error.message);
    }

    console.log('🎉 Database check completed');
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('💡 Possible solutions:');
    console.error('   1. Check if PostgreSQL is running');
    console.error('   2. Verify DATABASE_URL in .env file');
    console.error('   3. Run: npx prisma migrate deploy');
    console.error('   4. Run: npx prisma generate');
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();