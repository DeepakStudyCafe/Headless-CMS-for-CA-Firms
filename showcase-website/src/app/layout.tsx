import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Automationcafe - Professional CA Firm Website Templates',
  description: 'Premium website templates for Chartered Accountant firms. Modern, responsive, and feature-rich designs to elevate your practice.',
  keywords: 'CA website, chartered accountant, accounting website, tax advisor website, professional website templates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
