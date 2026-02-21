'use client'

'use client'


import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getWebsiteData } from '@/lib/api'
import { Facebook, X, Linkedin, Instagram, Youtube } from 'lucide-react'

interface WebsiteData {
  name: string
  logo?: string
  phone?: string
  email?: string
  address?: string
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

  return (
    <footer className="bg-blue-900 text-white mt-1 pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="mb-8 md:mb-0 md:w-1/3 shrink-0">
            <div className="flex items-center space-x-3 mb-4 shrink-0 overflow-hidden">
              <Image
                src="https://api.digitechai.in/uploads/footerlogo.png"
                alt={websiteData?.name || 'Logo'}
                width={50}
                height={50}
                className="object-contain"
                unoptimized
              />
              <h3 className="text-xl font-bold p-0">{websiteData?.name || 'Sharma & Associates'}</h3>
            </div>
            <p className="text-gray-300">
              Professional Chartered Accountants providing expert financial, taxation, audit, compliance, advisory, and strategic business consulting services with integrity and excellence.
            </p>
          </div>
          <div className="flex flex-1 flex-col md:flex-row md:justify-between gap-8">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-300 hover:text-white">
                  About Us
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white">
                  Our Gallery
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white">
                  Contact
                </Link>
                <Link href="/service" className="block text-gray-300 hover:text-white">
                  Services
                </Link>
                <Link href="/team" className="block text-gray-300 hover:text-white">
                  Our Team
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <Link href="/service/bookkeeping" className="block text-gray-300 hover:text-white">Bookkeeping</Link>
                <Link href="/service/gst-filing" className="block text-gray-300 hover:text-white">GST Filing</Link>
                <Link href="/service/payroll" className="block text-gray-300 hover:text-white">Payroll</Link>
                <Link href="/service/tax-planning" className="block text-gray-300 hover:text-white">Tax Planning</Link>
                <Link href="/service/company-formation" className="block text-gray-300 hover:text-white">Company Formation</Link>
                {/* <Link href="/service/compliance" className="block text-gray-300 hover:text-white">Compliance</Link>
                <Link href="/service/audit-services" className="block text-gray-300 hover:text-white">Audit Services</Link>
                <Link href="/service/financial-advisory" className="block text-gray-300 hover:text-white">Financial Advisory</Link> */}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300 mb-2">Email: info@sharma-associates.com</p>
              <p className="text-gray-300 mb-2">Phone: +91 11 4567 8901</p>
              <p className="text-gray-300 mb-2">1201, Business Tower, Connaught Place, New Delhi - 110001</p>
              <p className="text-gray-300">Phone: +91 123 456 7890</p>

              {/* Social Media Icons under Contact */}
              <div className="flex gap-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="rounded-full bg-white/10 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                  <Facebook className="text-white w-5 h-5" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener" aria-label="X" className="rounded-full bg-white/10 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                  <X className="text-white w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="rounded-full bg-white/10 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                  <Linkedin className="text-white w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="rounded-full bg-white/10 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                  <Instagram className="text-white w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="rounded-full bg-white/10 hover:bg-blue-600 transition-colors w-10 h-10 flex items-center justify-center">
                  <Youtube className="text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="border-t border-gray-800 pt-6 w-full text-center text-gray-300">
            <p>&copy; 2026 Gupta & Associates. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
