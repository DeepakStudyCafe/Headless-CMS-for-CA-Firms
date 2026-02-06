'use client'

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
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {websiteData?.logo ? (
                <Image
              src={`${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}/uploads/logo.png`}
              alt={websiteData?.name || 'Logo'}
              width={60}
              height={60}
              className="object-contain"
              unoptimized
            />
              ) : null}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                {websiteData?.name || 'Gupta Tax Advisors'}
              </h3>
            </div>
            <p className="text-purple-200">Creative tax solutions for modern businesses</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            {websiteData?.email && (
              <p className="text-purple-200 mb-1">{websiteData.email}</p>
            )}
            {websiteData?.phone && (
              <p className="text-purple-200">{websiteData.phone}</p>
            )}
          </div>
          <div>
            <p className="text-purple-200">&copy; 2026 {websiteData?.name || 'Company'}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
