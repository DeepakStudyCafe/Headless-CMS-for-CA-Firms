'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import api from '@/lib/api'
import { Search, ChevronDown, User, Mail, Phone, MapPin, Calendar, Clock, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import * as XLSX from 'xlsx'

interface DemoRegistration {
  id: string
  name: string
  email: string
  mobile: string
  state: string
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  createdAt: string
}

export default function DemoRegistrationsPage() {
  const [registrations, setRegistrations] = useState<DemoRegistration[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const fetchRegistrations = async () => {
    try {
      const response = await api.get('/demo-registrations')
      setRegistrations(response.data.data)
    } catch (error) {
      console.error('Failed to fetch registrations:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await api.put(`/demo-registrations/${id}`, { status: newStatus })
      setRegistrations(registrations.map(reg =>
        reg.id === id ? { ...reg, status: newStatus as any } : reg
      ))
    } catch (error) {
      console.error('Failed to update status:', error)
      alert('Failed to update status. Please try again.')
    }
  }

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch =
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.mobile.includes(searchTerm) ||
      reg.state.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === 'ALL' || reg.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800'
      case 'ACCEPTED': return 'bg-green-100 text-green-800'
      case 'REJECTED': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newSelected = new Set(selectedRowIds)
      filteredRegistrations.forEach(reg => newSelected.add(reg.id))
      setSelectedRowIds(newSelected)
    } else {
      const newSelected = new Set(selectedRowIds)
      filteredRegistrations.forEach(reg => newSelected.delete(reg.id))
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

  const isAllFilteredSelected = filteredRegistrations.length > 0 && filteredRegistrations.every(reg => selectedRowIds.has(reg.id))

  const handleExportExcel = () => {
    const rowsToExport = selectedRowIds.size > 0 
      ? registrations.filter(reg => selectedRowIds.has(reg.id))
      : filteredRegistrations;
    
    if (rowsToExport.length === 0) {
      alert("No data to export");
      return;
    }

    const data = rowsToExport.map(reg => ({
      'Name': reg.name,
      'Email': reg.email,
      'Mobile': reg.mobile,
      'State': reg.state,
      'Status': reg.status,
      'Date': new Date(reg.createdAt).toLocaleDateString('en-GB'),
      'Time': new Date(reg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Demo Registrations');
    XLSX.writeFile(workbook, 'Demo_Registrations.xlsx');
  }

  return (
    <div className="w-full pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Demo Registrations</h1>
          <p className="text-gray-500 mt-1 font-medium text-sm">Manage requests for template demo access.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={handleExportExcel} className="flex items-center gap-2 bg-white hover:bg-gray-50 shadow-sm rounded-xl font-semibold text-gray-700">
            <Download className="w-4 h-4 text-green-600" /> 
            {selectedRowIds.size > 0 ? `Export Selected (${selectedRowIds.size})` : 'Export All'}
          </Button>
        </div>
      </motion.div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        <div className="p-5 border-b border-gray-100 bg-gray-50/80">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, mobile..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-sm font-medium"
              />
            </div>

            <div className="w-full sm:w-auto relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 pr-8 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none cursor-pointer text-sm font-medium appearance-none"
              >
                <option value="ALL">All Status</option>
                <option value="PENDING">Pending</option>
                <option value="ACCEPTED">Accepted</option>
                <option value="REJECTED">Rejected</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-16 text-center text-gray-500 font-medium">Loading registrations...</div>
          ) : filteredRegistrations.length === 0 ? (
            <div className="p-16 text-center text-gray-500 font-medium">No registrations found.</div>
          ) : (
            <table className="w-full table-fixed min-w-[900px]">
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
                    <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Name</div>
                  </th>
                  <th className="w-2/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Mobile</div>
                  </th>
                  <th className="w-3/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Email</div>
                  </th>
                  <th className="w-1/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> State</div>
                  </th>
                  <th className="w-2/12 px-2 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Date</div>
                  </th>
                  <th className="w-2/12 px-4 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className={`hover:bg-blue-50/50 transition-colors group h-[72px] ${selectedRowIds.has(reg.id) ? 'bg-blue-50/30' : ''}`}>
                    <td className="px-4 py-3 align-middle">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        checked={selectedRowIds.has(reg.id)}
                        onChange={() => handleSelectRow(reg.id)}
                      />
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors truncate">{reg.name}</div>
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="text-xs text-gray-600 font-semibold truncate">{reg.mobile}</div>
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="text-xs text-gray-500 truncate" title={reg.email}>{reg.email}</div>
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold bg-gray-100 text-gray-600 uppercase tracking-wider truncate">
                        {reg.state}
                      </span>
                    </td>
                    <td className="px-2 py-3 align-middle truncate">
                      <div className="flex flex-col justify-center">
                        <span className="text-xs font-semibold text-gray-800 truncate">{new Date(reg.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5 truncate">
                          <Clock className="w-3 h-3 shrink-0" />
                          {new Date(reg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <div className="relative inline-block w-full max-w-[140px]">
                        <select
                          value={reg.status}
                          onChange={(e) => handleStatusChange(reg.id, e.target.value)}
                          className={`appearance-none w-full px-3 py-2 pr-8 rounded-lg text-xs font-bold border border-transparent hover:border-gray-200 cursor-pointer focus:ring-2 focus:ring-blue-500 transition-all shadow-sm truncate ${getStatusBadgeClass(reg.status)}`}
                        >
                          <option value="PENDING">PENDING</option>
                          <option value="ACCEPTED">ACCEPTED</option>
                          <option value="REJECTED">REJECTED</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-60" />
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
