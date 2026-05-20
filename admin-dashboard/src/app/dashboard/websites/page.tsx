'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { clientWebsiteAPI } from '@/lib/api'
import { Search, Plus, Globe, Building, Mail, Phone, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'

interface Website {
  id: string
  name: string
  companyName?: string
  domain?: string
  email?: string
  phone?: string
  startDate?: string
  websiteExpiryDate?: string
  domainOwnership?: string
  domainExpiryDate?: string
  createdAt: string
  isActive: boolean
}

export default function WebsitesPage() {
  const router = useRouter()
  const [websites, setWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchWebsites()
  }, [])

  const fetchWebsites = async () => {
    try {
      const response = await clientWebsiteAPI.getAll()
      setWebsites(response.data?.data?.websites || [])
    } catch (error) {
      console.error('Failed to fetch websites:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredWebsites = websites.filter(site => {
    const term = searchTerm.toLowerCase()
    return (
      site.name.toLowerCase().includes(term) ||
      (site.companyName && site.companyName.toLowerCase().includes(term)) ||
      (site.domain && site.domain.toLowerCase().includes(term)) ||
      (site.email && site.email.toLowerCase().includes(term)) ||
      (site.phone && site.phone.includes(term))
    )
  })

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex justify-between items-end"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Websites</h1>
          <p className="text-gray-500 mt-2">Manage customer websites and domains.</p>
        </div>
        <Button onClick={() => router.push('/dashboard/websites/create')} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Website
        </Button>
      </motion.div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search websites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-12 text-center text-gray-500">Loading websites...</div>
          ) : filteredWebsites.length === 0 ? (
            <div className="p-12 text-center text-gray-500">No websites found.</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50/80 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Website & Company
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Domain
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredWebsites.map((site) => (
                  <tr key={site.id} className="hover:bg-blue-50/40 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">{site.name}</div>
                      {site.companyName && (
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                          <Building className="w-3 h-3 mr-1" /> {site.companyName}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {site.email && (
                        <div className="text-sm text-gray-600 flex items-center">
                          <Mail className="w-3 h-3 mr-1" /> {site.email}
                        </div>
                      )}
                      {site.phone && (
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                          <Phone className="w-3 h-3 mr-1" /> {site.phone}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {site.domain && (
                        <div className="text-sm text-gray-600 flex items-center">
                          <Globe className="w-3 h-3 mr-1" /> {site.domain}
                        </div>
                      )}
                      {site.domainOwnership && (
                        <div className="text-xs text-gray-500 mt-1">
                          Owner: {site.domainOwnership}
                        </div>
                      )}
                      {site.domainExpiryDate && (
                        <div className="text-xs text-red-500 font-medium">
                          Exp: {formatDate(site.domainExpiryDate)}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {site.startDate && (
                        <div className="text-xs text-gray-600">
                          Start: {formatDate(site.startDate)}
                        </div>
                      )}
                      {site.websiteExpiryDate && (
                        <div className="text-xs text-red-500 font-medium">
                          Exp: {formatDate(site.websiteExpiryDate)}
                        </div>
                      )}
                      
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push(`/dashboard/websites/${site.id}`)}
                        className="text-blue-600 hover:bg-blue-50"
                      >
                        Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
