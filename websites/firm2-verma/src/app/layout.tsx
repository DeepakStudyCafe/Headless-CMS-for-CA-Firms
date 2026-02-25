import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ConditionalLayout } from '@/components/ConditionalLayout'

const roboto = Roboto({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Verma Accounting Services - Modern Accounting Solutions',
  description: 'Clean, modern accounting services for businesses',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
