const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function test() {
  const website = await p.website.findUnique({where:{slug:'template-3'}});
  if (!website) { console.log('no website'); return; }
  console.log('website', website.id, website.slug);
  const admin = await p.siteAdmin.findUnique({where:{websiteId:website.id}});
  console.log('admin', admin);
}

test().catch(console.error).finally(()=>p.$disconnect());