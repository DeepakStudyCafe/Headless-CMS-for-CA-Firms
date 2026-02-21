'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, Clock } from 'lucide-react'
import { getWebsiteData } from '@/lib/api'

interface WebsiteData {
  phone?: string
  email?: string
  workingHours?: string
}

export function TopHeader() {
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null)

  useEffect(() => {
    async function fetchWebsiteData() {
      const data = await getWebsiteData()
      setWebsiteData(data)
    }
    fetchWebsiteData()
  }, [])

  if (!websiteData) {
    return (
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 22 6789 1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@kapoorfinancial.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <Clock className="w-4 h-4" />
              <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items:center text-sm">
          <div className="flex flex-wrap items-center gap-4">
            {websiteData.phone && (
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{websiteData.phone}</span>
              </div>
            )}
            {websiteData.email && (
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{websiteData.email}</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <Clock className="w-4 h-4" />
            <span>{websiteData.workingHours || 'Mon - Sat: 9:00 AM - 6:30 PM'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
