import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { TopHeader } from '@/components/TopHeader'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const poppins = Poppins({ weight: ['300', '400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gupta Tax Advisors - Creative Tax Solutions',
  description: 'Innovative tax advisory services with a creative approach',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TopHeader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
