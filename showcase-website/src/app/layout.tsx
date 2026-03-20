import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webcafe - Best CA Firm Website Templates | Chartered Accountant Web Design',
  description: 'Webcafe offers top-ranked, SEO-friendly website templates for Chartered Accountant firms. Responsive CA websites with tax, audit, GST, finance consultancy pages to boost visibility and conversions.',
  keywords: 'Webcafe, CA website template, chartered accountant website, accounting firm website, CA web design, GST consultant website, tax advisor web template, audit firm website template',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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
