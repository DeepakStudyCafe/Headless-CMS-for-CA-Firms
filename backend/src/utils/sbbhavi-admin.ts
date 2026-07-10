import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const website = await prisma.website.findUnique({ where: { slug: 's-b-bhavi' } })
  if (!website) { return console.log('no website'); }

  const hash = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD || 'ChangeMe@123', 12)
  const email = 'admin@sb-bhavi.com'

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: website.id },
    update: { email: email, passwordHash: hash },
    create: { websiteId: website.id, email: email, passwordHash: hash }
  })
  
  console.log('Site admin created for S B Bhavi with: ' + email + ' / <See Environment Variable>')
}

main().catch(console.error).finally(() => prisma.$disconnect())
