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
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 141 2567 890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@singhcoadvisors.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
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
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{websiteData.workingHours || 'Mon - Sat: 10:00 AM - 7:00 PM'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
