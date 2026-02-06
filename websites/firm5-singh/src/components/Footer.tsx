'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getWebsiteData } from '@/lib/api'

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
    <footer className="bg-gradient-to-br from-orange-900 to-amber-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}/uploads/logo.png`}
                alt={websiteData?.name || 'Logo'}
                width={90}
                height={90}
                className="object-contain"
                unoptimized
              />
              <h3 className="text-xl font-bold">{websiteData?.name || 'Singh & Co. Advisors'}</h3>
            </div>
            <p className="text-orange-200">
              Your trusted partner for professional accounting and advisory services with personalized attention.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-amber-300">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-orange-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/service" className="block text-orange-200 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/team" className="block text-orange-200 hover:text-white transition-colors">
                Our Team
              </Link>
              <Link href="/contact" className="block text-orange-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-amber-300">Contact</h4>
            {websiteData?.email && (
              <p className="text-orange-200 mb-2">Email: {websiteData.email}</p>
            )}
            {websiteData?.phone && (
              <p className="text-orange-200 mb-2">Phone: {websiteData.phone}</p>
            )}
            {websiteData?.address && (
              <p className="text-orange-200">{websiteData.address}</p>
            )}
            {!websiteData && (
              <>
                <p className="text-orange-200 mb-2">Email: contact@singhcoadvisors.com</p>
                <p className="text-orange-200">Phone: +91 141 2567 890</p>
              </>
            )}
          </div>
        </div>
        <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-300">
          <p>&copy; 2026 Singh & Co. Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
