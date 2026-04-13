'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getWebsiteData } from '@/lib/api'
import { Facebook, X, Linkedin, Instagram, Youtube } from 'lucide-react'

interface FooterContent {
  description?: string
  facebook?: string
  twitter?: string
  linkedin?: string
  instagram?: string
  youtube?: string
  copyright?: string
}

interface WebsiteData {
  name: string
  logo?: string
  phone?: string
  email?: string
  address?: string
  themeConfig?: {
    footerContent?: FooterContent
  }
}

export function Footer() {
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null)

  useEffect(() => {
    async function fetchWebsiteData() {
      const data = await getWebsiteData()
      setWebsiteData(data)
    }
    fetchWebsiteData()
  }, [])

  const fc: FooterContent = websiteData?.themeConfig?.footerContent || {}

  return (
    <footer className="bg-black text-white pt-12 pb-4">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 items-start">
          <div className="mb-6 md:mb-0 md:w-1/3 shrink-0 pr-6">
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://api.digitechai.in/uploads/footerlogo.png"
                  alt={websiteData?.name || 'Logo'}
                  width={40}
                  height={40}
                  className="object-contain"
                  unoptimized
                />
                <div>
                  <h3 className="text-xl font-semibold">{websiteData?.name || 'S B Bhavi & CO.'}</h3>
                  <div className="text-sm text-gray-400">Chartered Accountant</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                {fc.description || 'Professional Chartered Accountants providing expert financial, taxation, audit, compliance, advisory, and strategic business consulting services with integrity and excellence.'}
              </p>
            </div>
          </div>

          <div className="md:w-1/3 flex gap-8">
            <div className="min-w-[140px]">
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white">
                  About Us
                </Link>
                <Link href="/gallery" className="block text-gray-400 hover:text-white">
                  Our Gallery
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white">
                  Contact
                </Link>
                <Link href="/service" className="block text-gray-400 hover:text-white">
                  Services
                </Link>
                <Link href="/team" className="block text-gray-400 hover:text-white">
                  Our Team
                </Link>
              </div>
            </div>

            <div className="min-w-[140px]">
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <div className="space-y-2">
                <Link href="/service/bookkeeping" className="block text-gray-400 hover:text-white">Bookkeeping</Link>
                <Link href="/service/gst-filing" className="block text-gray-400 hover:text-white">GST Filing</Link>
                <Link href="/service/payroll" className="block text-gray-400 hover:text-white">Payroll</Link>
                <Link href="/service/tax-planning" className="block text-gray-400 hover:text-white">Tax Planning</Link>
                <Link href="/service/company-formation" className="block text-gray-400 hover:text-white">Company Formation</Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            {websiteData?.email && <p className="text-gray-400 mb-2">Email: {websiteData.email}</p>}
            {websiteData?.phone && <p className="text-gray-400 mb-2">Phone: {websiteData.phone}</p>}
            {websiteData?.address && <p className="text-gray-400 mb-2">{websiteData.address}</p>}
            <div className="flex gap-3 mt-4">
              <a href={fc.facebook || 'https://facebook.com'} target="_blank" rel="noopener" aria-label="Facebook" className="rounded-full bg-white/6 hover:bg-white/10 transition-colors w-10 h-10 flex items-center justify-center">
                <Facebook className="text-white w-5 h-5" />
              </a>
              <a href={fc.twitter || 'https://x.com'} target="_blank" rel="noopener" aria-label="X" className="rounded-full bg-white/6 hover:bg-white/10 transition-colors w-10 h-10 flex items-center justify-center">
                <X className="text-white w-5 h-5" />
              </a>
              <a href={fc.linkedin || 'https://linkedin.com'} target="_blank" rel="noopener" aria-label="LinkedIn" className="rounded-full bg-white/6 hover:bg-white/10 transition-colors w-10 h-10 flex items-center justify-center">
                <Linkedin className="text-white w-5 h-5" />
              </a>
              <a href={fc.instagram || 'https://instagram.com'} target="_blank" rel="noopener" aria-label="Instagram" className="rounded-full bg-white/6 hover:bg-white/10 transition-colors w-10 h-10 flex items-center justify-center">
                <Instagram className="text-white w-5 h-5" />
              </a>
              <a href={fc.youtube || 'https://youtube.com'} target="_blank" rel="noopener" aria-label="YouTube" className="rounded-full bg-white/6 hover:bg-white/10 transition-colors w-10 h-10 flex items-center justify-center">
                <Youtube className="text-white w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-gray-400 text-sm gap-3">
          <div className="w-full md:w-auto">
            {fc.copyright || `\u00a9 ${new Date().getFullYear()} ${websiteData?.name || 'S B Bhavi & CO.'}. All rights reserved.`}
          </div>
          <div className="w-full md:w-auto">
            Powered By{' '}
            <a href="https://webcafe.co.in/" target="_blank" rel="noopener" className="hover:text-white hover:underline">Webcafe a Product of Studycafe Pvt Ltd.</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
