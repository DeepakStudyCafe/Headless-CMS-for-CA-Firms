import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { TopHeader } from '@/components/TopHeader'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Verma Accounting Services - Modern Accounting Solutions',
  description: 'Clean, modern accounting services for businesses',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <TopHeader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
