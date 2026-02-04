import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TopHeader } from '@/components/TopHeader'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patel Consulting',
  description: 'Teal/Cyan themed consulting website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gradient-to-br from-primary-50 to-accent-100 min-h-screen flex flex-col'}>
        <TopHeader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
