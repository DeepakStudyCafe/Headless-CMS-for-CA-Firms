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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={'http://localhost:5000/uploads/logo.png'}
                alt={websiteData?.name || 'Logo'}
                width={90}
                height={90}
                className="object-contain"
                unoptimized
              />
              <h3 className="text-xl font-bold">{websiteData?.name || 'Sharma & Associates'}</h3>
            </div>
            <p className="text-gray-400">
              Professional Chartered Accountants providing expert financial services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white">
                About Us
              </Link>
              <Link href="/service" className="block text-gray-400 hover:text-white">
                Services
              </Link>
              <Link href="/team" className="block text-gray-400 hover:text-white">
                Our Team
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            {websiteData?.email && (
              <p className="text-gray-400 mb-2">Email: {websiteData.email}</p>
            )}
            {websiteData?.phone && (
              <p className="text-gray-400 mb-2">Phone: {websiteData.phone}</p>
            )}
            {websiteData?.address && (
              <p className="text-gray-400">{websiteData.address}</p>
            )}
            <p className="text-gray-400">Phone: +91 123 456 7890</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Sharma & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
