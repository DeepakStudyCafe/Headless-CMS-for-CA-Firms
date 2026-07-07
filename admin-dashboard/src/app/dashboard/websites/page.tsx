'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { clientWebsiteAPI } from '@/lib/api'
import { Search, Plus, Globe, Building, Mail, Phone, Calendar, Pencil, Trash, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import * as XLSX from 'xlsx'

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
  
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set())

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
        // Remove from selection if deleted
        const newSelected = new Set(selectedRowIds)
        newSelected.delete(id)
        setSelectedRowIds(newSelected)
      } catch (error) {
        console.error('Failed to delete website:', error)
        alert('Failed to delete website.')
      }
    }
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newSelected = new Set(selectedRowIds)
      filteredWebsites.forEach(site => newSelected.add(site.id))
      setSelectedRowIds(newSelected)
    } else {
      const newSelected = new Set(selectedRowIds)
      filteredWebsites.forEach(site => newSelected.delete(site.id))
      setSelectedRowIds(newSelected)
    }
  }

  const handleSelectRow = (id: string) => {
    const newSelected = new Set(selectedRowIds)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedRowIds(newSelected)
  }

  const isAllFilteredSelected = filteredWebsites.length > 0 && filteredWebsites.every(site => selectedRowIds.has(site.id))
  
  const handleExportExcel = () => {
    const rowsToExport = selectedRowIds.size > 0 
      ? websites.filter(site => selectedRowIds.has(site.id))
      : filteredWebsites;
    
    if (rowsToExport.length === 0) {
      alert("No data to export");
      return;
    }

    const data = rowsToExport.map(site => ({
      'Website Name': site.name,
      'Company Name': site.companyName || '',
      'Domain': site.domain || '',
      'Email': site.email || '',
      'Phone': site.phone || '',
      'Start Date': site.startDate ? formatDate(site.startDate) : '',
      'Expiry Date': site.websiteExpiryDate ? formatDate(site.websiteExpiryDate) : '',
      'Domain Ownership': site.domainOwnership || '',
      'Domain Expiry': site.domainExpiryDate ? formatDate(site.domainExpiryDate) : '',
      'Payment Amount': site.paymentAmount || '',
      'Payment Date': site.paymentDate ? formatDate(site.paymentDate) : '',
      'Template Serial': site.templateSerialNo || '',
      'Remarks': site.remarks || ''
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Websites');
    XLSX.writeFile(workbook, 'Websites.xlsx');
  }

  return (
    <div className="w-full pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Websites</h1>
          <p className="text-gray-500 mt-1 font-medium text-sm">Manage customer websites and domains seamlessly.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={handleExportExcel} className="flex items-center gap-2 bg-white hover:bg-gray-50 shadow-sm rounded-xl font-semibold text-gray-700">
            <Download className="w-4 h-4 text-green-600" /> 
            {selectedRowIds.size > 0 ? `Export Selected (${selectedRowIds.size})` : 'Export All'}
          </Button>
          <Button onClick={() => router.push('/dashboard/websites/create')} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md rounded-xl font-semibold">
            <Plus className="w-4 h-4" /> Add Website
          </Button>
        </div>
      </motion.div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        <div className="p-5 border-b border-gray-100 bg-gray-50/80">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Start Date</label>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm shrink-0">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <input 
                    type="date" 
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="text-xs outline-none bg-transparent text-gray-700 font-semibold"
                  />
                  <span className="text-gray-300 text-xs font-medium px-1">to</span>
                  <input 
                    type="date" 
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="text-xs outline-none bg-transparent text-gray-700 font-semibold"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Expiry Date</label>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm shrink-0">
                  <Calendar className="w-4 h-4 text-red-500" />
                  <input 
                    type="date" 
                    value={expiryFromDate}
                    onChange={(e) => setExpiryFromDate(e.target.value)}
                    className="text-xs outline-none bg-transparent text-gray-700 font-semibold"
                  />
                  <span className="text-gray-300 text-xs font-medium px-1">to</span>
                  <input 
                    type="date" 
                    value={expiryToDate}
                    onChange={(e) => setExpiryToDate(e.target.value)}
                    className="text-xs outline-none bg-transparent text-gray-700 font-semibold"
                  />
                </div>
              </div>

              {(fromDate || toDate || expiryFromDate || expiryToDate) && (
                <button 
                  onClick={() => { setFromDate(''); setToDate(''); setExpiryFromDate(''); setExpiryToDate(''); }}
                  className="text-xs font-bold text-red-500 hover:text-red-700 hover:underline shrink-0 mt-5 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="w-full lg:w-80 shrink-0 mt-2 lg:mt-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search websites..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-sm font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-16 text-center text-gray-500 font-medium">Loading websites...</div>
          ) : filteredWebsites.length === 0 ? (
            <div className="p-16 text-center text-gray-500 font-medium">No websites found.</div>
          ) : (
            <table className="w-full table-fixed min-w-[1000px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="w-12 px-4 py-4 text-left">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      checked={isAllFilteredSelected}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="w-2/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Website & Company
                  </th>
                  <th className="w-2/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Contact Info
                  </th>
                  <th className="w-2/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Domain Details
                  </th>
                  <th className="w-2/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Dates
                  </th>
                  <th className="w-2/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Payment & Template
                  </th>
                  <th className="w-2/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Remarks
                  </th>
                  <th className="w-[100px] px-4 py-4 text-right text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredWebsites.map((site) => (
                  <tr key={site.id} className={`hover:bg-blue-50/50 transition-colors group h-[80px] ${selectedRowIds.has(site.id) ? 'bg-blue-50/30' : ''}`}>
                    <td className="px-4 py-3 align-middle">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        checked={selectedRowIds.has(site.id)}
                        onChange={() => handleSelectRow(site.id)}
                      />
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="flex flex-col justify-center">
                        <div className="text-sm font-bold text-gray-900 truncate">{site.name}</div>
                        <div className="text-[11px] text-gray-500 flex items-center mt-1 truncate">
                          <Building className="w-3 h-3 mr-1 shrink-0" /> <span className="truncate">{site.companyName || '-'}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="flex flex-col justify-center">
                        <div className="text-xs text-gray-600 flex items-center truncate">
                          <Mail className="w-3 h-3 mr-1.5 text-gray-400 shrink-0" /> <span className="truncate">{site.email || '-'}</span>
                        </div>
                        <div className="text-[11px] text-gray-500 flex items-center mt-1 truncate">
                          <Phone className="w-3 h-3 mr-1.5 text-gray-400 shrink-0" /> <span className="truncate">{site.phone || '-'}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="flex flex-col justify-center">
                        <div className="text-xs font-semibold text-gray-800 flex items-center truncate">
                          <Globe className="w-3 h-3 mr-1.5 text-blue-500 shrink-0" /> <span className="truncate">{site.domain || '-'}</span>
                        </div>
                        {site.domainOwnership === 'We Own' && site.domainExpiryDate ? (
                          <div className="text-[11px] text-red-500 font-semibold mt-1 truncate flex items-center">
                            Exp: {formatDate(site.domainExpiryDate)}
                          </div>
                        ) : (
                          <div className="text-[11px] text-gray-500 mt-1 truncate flex items-center font-medium">
                            {site.domainOwnership || '-'}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="flex flex-col justify-center">
                        <div className="text-[11px] text-gray-600 truncate">
                          <span className="font-semibold text-gray-700">Start:</span> {site.startDate ? formatDate(site.startDate) : '-'}
                        </div>
                        <div className="text-[11px] text-red-500 font-semibold mt-1 truncate">
                          <span className="text-gray-700">Exp:</span> {site.websiteExpiryDate ? formatDate(site.websiteExpiryDate) : '-'}
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="flex flex-col justify-center">
                        <div className="text-xs font-bold text-emerald-600 truncate">
                          {site.paymentAmount ? `₹${site.paymentAmount}` : '-'}
                        </div>
                        <div className="text-[11px] text-gray-500 mt-1 truncate">
                          <span className="font-semibold text-gray-700">TPL:</span> {site.templateSerialNo || '-'}
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3 align-middle">
                      <div className="flex flex-col justify-center h-full max-h-[64px] overflow-hidden">
                        <p className="text-[11px] text-gray-500 line-clamp-3 leading-snug" title={site.remarks}>
                          {site.remarks || '-'}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 align-middle text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => router.push(`/dashboard/websites/create?id=${site.id}`)}
                          className="h-8 w-8 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                        >
                          <Pencil className="w-4 h-4" /> 
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteWebsite(site.id)}
                          className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
                        >
                          <Trash className="w-4 h-4" /> 
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
