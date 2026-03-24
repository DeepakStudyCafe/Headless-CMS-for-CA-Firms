/**
 * Quick fix script: Upserts SiteAdmin credentials for template-5
 * and ensures a central admin User exists for the admin-dashboard.
 *
 * Run with: npx ts-node src/utils/setup-admins.ts
 */
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('\n🔧 Setting up admin credentials...\n')

  // ─── 1. Central admin-dashboard User ───────────────────────────────────────
  const centralEmail = 'admin@cafirm.com'
  const centralPassword = 'Admin@123'
  const centralHash = await bcrypt.hash(centralPassword, 12)

  const centralUser = await prisma.user.upsert({
    where: { email: centralEmail },
    update: { passwordHash: centralHash, role: 'SUPER_ADMIN' },
    create: {
      name: 'Super Admin',
      email: centralEmail,
      passwordHash: centralHash,
      role: 'SUPER_ADMIN',
    },
  })
  console.log(`✅ Central admin-dashboard user:`)
  console.log(`   URL:      http://localhost:3000/login`)
  console.log(`   Email:    ${centralEmail}`)
  console.log(`   Password: ${centralPassword}`)
  console.log()

  // ─── 2. SiteAdmin for template-5 (/admin route) ────────────────────────────
  const siteAdminEmail = 'admin@vanguardca.in'
  const siteAdminPassword = 'Admin@123'
  const siteAdminHash = await bcrypt.hash(siteAdminPassword, 12)

  // Find the template-5 website
  const website = await prisma.website.findUnique({ where: { slug: 'template-5' } })
  if (!website) {
    console.error('❌ template-5 website not found in DB. Run "npm run seed:template5" first.')
    process.exit(1)
  }

  await (prisma as any).siteAdmin.upsert({
    where: { websiteId: website.id },
    update: { email: siteAdminEmail, passwordHash: siteAdminHash, failedAttempts: 0, lockedUntil: null },
    create: { websiteId: website.id, email: siteAdminEmail, passwordHash: siteAdminHash },
  })
  console.log(`✅ Template-5 site admin (/admin route):`)
  console.log(`   URL:       http://localhost:8081/admin`)
  console.log(`   Email:     ${siteAdminEmail}`)
  console.log(`   Password:  ${siteAdminPassword}`)
  console.log()

  console.log('🎉 All admin credentials set successfully!\n')
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
