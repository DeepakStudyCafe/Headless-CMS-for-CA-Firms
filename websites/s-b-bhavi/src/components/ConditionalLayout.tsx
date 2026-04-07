'use client'

import { usePathname } from 'next/navigation'
import { TopHeader } from './TopHeader'
import { Header } from './Header'
import { Footer } from './Footer'

/** Conditionally renders public header/footer — hides them for /admin routes */
export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <TopHeader />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
