import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { TopHeader } from '@/components/TopHeader'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Kapoor Financial Services - Expert CA Firm',
  description: 'Expert Chartered Accountants providing professional financial, taxation, and business advisory services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TopHeader />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
