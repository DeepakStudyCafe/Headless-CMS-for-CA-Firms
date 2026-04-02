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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
          <div className="mb-8 md:mb-0 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4 shrink-0 overflow-hidden">
              <Image
                src="https://api.digitechai.in/uploads/footerlogo.png"
                alt={websiteData?.name || 'Logo'}
                width={50}
                height={50}
                className="object-contain"
                unoptimized
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold p-0 leading-tight">I S K & Co.</h3>
                <span className="text-xs font-medium text-gray-400 tracking-wider uppercase mt-1">
                  Chartered Accountants
                </span>
              </div>
            </div>
            <p className="text-gray-400">
              {fc.description || 'Professional Chartered Accountants providing expert financial, taxation, audit, compliance, advisory, and strategic business consulting services with integrity and excellence.'}
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white">About Us</Link>
              <Link href="/about" className="block text-gray-400 hover:text-white">Our Gallery</Link>
              <Link href="/about" className="block text-gray-400 hover:text-white">Contact</Link>
              <Link href="/service" className="block text-gray-400 hover:text-white">Services</Link>
              <Link href="/team" className="block text-gray-400 hover:text-white">Our Team</Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <Link href="/service/bookkeeping" className="block text-gray-400 hover:text-white">Bookkeeping</Link>
              <Link href="/service/gst-filing" className="block text-gray-400 hover:text-white">GST Filing</Link>
              <Link href="/service/payroll" className="block text-gray-400 hover:text-white">Payroll</Link>
              <Link href="/service/tax-planning" className="block text-gray-400 hover:text-white">Tax Planning</Link>
              <Link href="/service/company-formation" className="block text-gray-400 hover:text-white">Company Formation</Link>
            </div>
          </div>

          <div className="md:col-span-1 col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4">Contact</h4>
            {websiteData?.email && <p className="text-gray-400 mb-2">Email: {websiteData.email}</p>}
            {websiteData?.phone && <p className="text-gray-400 mb-2">Phone: {websiteData.phone}</p>}
            {websiteData?.address && <p className="text-gray-400 mb-2">{websiteData.address}</p>}
            <div className="flex items-center mt-4 space-x-3">
              <a href={fc.facebook || 'https://facebook.com'} target="_blank" rel="noopener" aria-label="Facebook" className="rounded-full bg-white/6 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                <Facebook className="text-white w-5 h-5" />
              </a>
              <a href={fc.twitter || 'https://x.com'} target="_blank" rel="noopener" aria-label="X" className="rounded-full bg-white/6 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                <X className="text-white w-5 h-5" />
              </a>
              <a href={fc.linkedin || 'https://linkedin.com'} target="_blank" rel="noopener" aria-label="LinkedIn" className="rounded-full bg-white/6 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                <Linkedin className="text-white w-5 h-5" />
              </a>
              <a href={fc.instagram || 'https://instagram.com'} target="_blank" rel="noopener" aria-label="Instagram" className="rounded-full bg-white/6 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                <Instagram className="text-white w-5 h-5" />
              </a>
              <a href={fc.youtube || 'https://youtube.com'} target="_blank" rel="noopener" aria-label="YouTube" className="rounded-full bg-white/6 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                <Youtube className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-2 text-gray-400 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
          <div className="text-left">
            {fc.copyright || '\u00a9 2026 I S K & Co. All rights reserved.'}
          </div>
          <div className="text-left md:text-right">
            Powered By{' '}
            <a href="https://webcafe.co.in/" target="_blank" rel="noopener" className="hover:text-white hover:underline">Webcafe</a>
            <span className="text-gray-400">{' '}a Product of Studycafe Pvt Ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

