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
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap sm:flex-nowrap justify-between items-center text-[11px] sm:text-sm gap-y-2 py-1 sm:py-0 w-full">
            <div className="flex items-center space-x-1 sm:space-x-2 order-1">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>+91 7405859821</span>
            </div>
            
            <div className="flex items-center order-3 sm:order-2 w-full sm:w-auto justify-between sm:justify-start gap-2 sm:gap-4 break-all sm:break-normal">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>accounts@purohitco.com</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 text-right">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>capurohitandco@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2 order-2 sm:order-3">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Mon - Sat: 11:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div className="bg-blue-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center text-[11px] sm:text-sm gap-y-2 py-1 sm:py-0 w-full">
          {websiteData.phone && (
            <div className="flex items-center space-x-1 sm:space-x-2 order-1">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>{websiteData.phone}</span>
            </div>
          )}
          
          {websiteData.email && (
            <div className="flex items-center order-3 sm:order-2 w-full sm:w-auto justify-between sm:justify-start gap-2 sm:gap-4 break-all sm:break-normal">
              {websiteData.email.split(',').map((emailStr, idx) => (
                <div key={idx} className={`flex items-center space-x-1 sm:space-x-2 ${idx > 0 ? 'text-right' : ''}`}>
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{emailStr.trim()}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-1 sm:space-x-2 order-2 sm:order-3">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>{websiteData.workingHours || 'Mon - Sat: 11:00 AM - 7:00 PM'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

