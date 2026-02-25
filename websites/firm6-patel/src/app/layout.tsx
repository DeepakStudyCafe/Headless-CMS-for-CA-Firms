import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConditionalLayout } from '@/components/ConditionalLayout'

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
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
