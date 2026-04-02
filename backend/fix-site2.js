const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const p = new PrismaClient();

async function run() {
  const website = await p.website.findUnique({ where: { slug: 'template-3' } });
  if (!website) return console.log('no website');
  
  const hash = await bcrypt.hash('Admin@123', 12);
  const admin = await p.siteAdmin.upsert({
    where: { websiteId: website.id },
    create: {
      websiteId: website.id,
      email: 'admin@template-3.com',
      passwordHash: hash
    },
    update: {
      email: 'admin@template-3.com',
      passwordHash: hash,
      failedAttempts: 0,
      lockedUntil: null
    }
  });

  console.log('Site Admin (re)configured:', admin.email);
}

run().finally(() => p.$disconnect());