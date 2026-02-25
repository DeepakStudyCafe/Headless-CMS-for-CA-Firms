import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ConditionalLayout } from '@/components/ConditionalLayout'

const poppins = Poppins({ weight: ['300', '400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gupta Tax Advisors - Creative Tax Solutions',
  description: 'Innovative tax advisory services with a creative approach',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
