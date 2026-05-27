'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { clientWebsiteAPI } from '@/lib/api'
import { Search, Plus, Globe, Building, Mail, Phone, Calendar, ArrowRight, Pencil, Trash } from 'lucide-react'
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
  domainStartDate?: string
  domainExpiryDate?: string
  paymentAmount?: string
  paymentDate?: string
  paymentDetails?: string
  domainPaymentAmount?: string
  templateSerialNo?: string
  remarks?: string
  createdAt: string
  isActive: boolean
}

export default function WebsitesPage() {
  const router = useRouter()
  const [websites, setWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [expiryFromDate, setExpiryFromDate] = useState('')
  const [expiryToDate, setExpiryToDate] = useState('')

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
    const matchSearch = (
      site.name.toLowerCase().includes(term) ||
      (site.companyName && site.companyName.toLowerCase().includes(term)) ||
      (site.domain && site.domain.toLowerCase().includes(term)) ||
      (site.email && site.email.toLowerCase().includes(term)) ||
      (site.phone && site.phone.includes(term))
    )

    let matchStartDate = true
    if (fromDate || toDate) {
      // Fallback to createdAt if startDate is not available
      const siteDate = site.startDate ? new Date(site.startDate) : new Date(site.createdAt)
      if (fromDate) {
        matchStartDate = matchStartDate && siteDate >= new Date(fromDate)
      }
      if (toDate) {
        const tDate = new Date(toDate)
        tDate.setHours(23, 59, 59, 999)
        matchStartDate = matchStartDate && siteDate <= tDate
      }
    }

    let matchExpiryDate = true
    if (expiryFromDate || expiryToDate) {
      if (!site.websiteExpiryDate) {
        matchExpiryDate = false
      } else {
        const expDate = new Date(site.websiteExpiryDate)
        if (expiryFromDate) {
          matchExpiryDate = matchExpiryDate && expDate >= new Date(expiryFromDate)
        }
        if (expiryToDate) {
          const eDate = new Date(expiryToDate)
          eDate.setHours(23, 59, 59, 999)
          matchExpiryDate = matchExpiryDate && expDate <= eDate
        }
      }
    }

    return matchSearch && matchStartDate && matchExpiryDate
  })

  const handleDeleteWebsite = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this website?')) {
      try {
        await clientWebsiteAPI.delete(id)
        setWebsites(websites.filter(site => site.id !== id))
      } catch (error) {
        console.error('Failed to delete website:', error)
        alert('Failed to delete website.')
      }
    }
  }

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
          <div className="flex flex-wrap items-end gap-4 w-full">
            <div className="flex flex-wrap items-end gap-x-6 gap-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Website Start Date</label>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm shrink-0">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <input 
                    type="date" 
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="text-sm outline-none bg-transparent text-gray-700 font-medium"
                  />
                  <span className="text-gray-400 text-sm font-medium">to</span>
                  <input 
                    type="date" 
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="text-sm outline-none bg-transparent text-gray-700 font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Website Expiry Date</label>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm shrink-0">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <input 
                    type="date" 
                    value={expiryFromDate}
                    onChange={(e) => setExpiryFromDate(e.target.value)}
                    className="text-sm outline-none bg-transparent text-gray-700 font-medium"
                  />
                  <span className="text-gray-400 text-sm font-medium">to</span>
                  <input 
                    type="date" 
                    value={expiryToDate}
                    onChange={(e) => setExpiryToDate(e.target.value)}
                    className="text-sm outline-none bg-transparent text-gray-700 font-medium"
                  />
                </div>
              </div>

              {(fromDate || toDate || expiryFromDate || expiryToDate) && (
                <button 
                  onClick={() => { setFromDate(''); setToDate(''); setExpiryFromDate(''); setExpiryToDate(''); }}
                  className="text-xs font-bold text-red-500 hover:text-red-700 hover:underline shrink-0 mb-3 ml-2 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="ml-auto w-full md:w-96 shrink-0 mt-2 md:mt-0">
              <div className="relative">
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
                  <th className="px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Website & Company
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Domain Details
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Website Dates
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Payment & Template
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider max-w-[150px]">
                    Remarks
                  </th>
                  <th className="px-4 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredWebsites.map((site) => (
                  <tr key={site.id} className="hover:bg-blue-50/40 transition-colors group">
                    <td className="px-4 py-3 whitespace-nowrap align-top">
                      <div className="text-[13px] font-bold text-gray-900">{site.name}</div>
                      {site.companyName && (
                        <div className="text-[11px] text-gray-500 flex items-center mt-1">
                          <Building className="w-3 h-3 mr-1" /> {site.companyName}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap align-top">
                      {site.email && (
                        <div className="text-[12px] text-gray-600 flex items-center">
                          <Mail className="w-3 h-3 mr-1 text-gray-400" /> {site.email}
                        </div>
                      )}
                      {site.phone && (
                        <div className="text-[11px] text-gray-500 flex items-center mt-1">
                          <Phone className="w-3 h-3 mr-1 text-gray-400" /> {site.phone}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap align-top">
                      {site.domain && (
                        <div className="text-[12px] font-medium text-gray-800 flex items-center">
                          <Globe className="w-3 h-3 mr-1 text-blue-500" /> {site.domain}
                        </div>
                      )}
                      {site.domainOwnership && (
                        <div className="text-[11px] text-gray-500 mt-1">
                          <span className="font-medium text-gray-700">Owner:</span> {site.domainOwnership}
                        </div>
                      )}
                      {site.domainOwnership === 'We Own' && site.domainStartDate && (
                        <div className="text-[11px] text-gray-500 mt-0.5">
                          <span className="font-medium text-gray-700">Start:</span> {formatDate(site.domainStartDate)}
                        </div>
                      )}
                      {site.domainOwnership === 'We Own' && site.domainExpiryDate && (
                        <div className="text-[11px] text-red-500 font-medium mt-0.5">
                          <span className="text-gray-700">Exp:</span> {formatDate(site.domainExpiryDate)}
                        </div>
                      )}
                      {site.domainOwnership === 'We Own' && site.domainPaymentAmount && (
                        <div className="text-[11px] text-green-600 font-medium mt-0.5">
                          <span className="text-gray-700">Amt:</span> ₹{site.domainPaymentAmount}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap align-top">
                      {site.startDate && (
                        <div className="text-[11px] text-gray-600">
                          <span className="font-medium text-gray-700">Start:</span> {formatDate(site.startDate)}
                        </div>
                      )}
                      {site.websiteExpiryDate && (
                        <div className="text-[11px] text-red-500 font-medium mt-1">
                          <span className="text-gray-700">Exp:</span> {formatDate(site.websiteExpiryDate)}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap align-top">
                      {site.paymentAmount && (
                        <div className="text-[12px] font-semibold text-green-600">
                          ₹{site.paymentAmount}
                        </div>
                      )}
                      {site.paymentDate && (
                        <div className="text-[11px] text-gray-500 mt-1">
                          <span className="font-medium text-gray-700">Date:</span> {formatDate(site.paymentDate)}
                        </div>
                      )}
                      {site.paymentDetails && (
                        <div className="text-[11px] text-gray-500 mt-0.5">
                          <span className="font-medium text-gray-700">Mode:</span> {site.paymentDetails}
                        </div>
                      )}
                      {site.templateSerialNo && (
                        <div className="text-[11px] text-gray-500 mt-1">
                          <span className="font-medium text-gray-700">Temp. :</span> {site.templateSerialNo}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 align-top max-w-[150px] overflow-hidden">
                      {site.remarks ? (
                        <p className="text-[11px] text-gray-500 truncate" title={site.remarks}>
                          {site.remarks}
                        </p>
                      ) : (
                        <span className="text-[11px] text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap align-top text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => router.push(`/dashboard/websites/create?id=${site.id}`)}
                          className="h-7 text-[11px] px-2 text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-100"
                        >
                          <Pencil className="w-3 h-3 mr-1" /> 
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteWebsite(site.id)}
                          className="h-7 text-[11px] px-2 text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100"
                        >
                          <Trash className="w-3 h-3 mr-1" /> 
                        </Button>
                      </div>
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
