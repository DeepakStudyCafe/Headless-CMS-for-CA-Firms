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
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              {websiteData?.logo ? (
                 <Image
              src="https://api.digitechai.in/uploads/logo.png"
              alt={websiteData?.name || 'Logo'}
              width={90}
              height={90}
              className="object-contain"
              unoptimized
            />
              ) : null}
              <h3 className="text-xl font-light">{websiteData?.name || 'Verma Accounting Services'}</h3>
            </div>
            <p className="text-gray-400 font-light">Modern accounting solutions</p>
          </div>
          <div>
            <h4 className="font-normal mb-4">Contact</h4>
            {websiteData?.email && (
              <p className="text-gray-400 font-light mb-2">{websiteData.email}</p>
            )}
            {websiteData?.phone && (
              <p className="text-gray-400 font-light">{websiteData.phone}</p>
            )}
          </div>
          <div>
            <p className="text-gray-400 font-light">&copy; 2026 {websiteData?.name || 'Company'}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
