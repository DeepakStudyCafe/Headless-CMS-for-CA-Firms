'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { clientWebsiteAPI } from '@/lib/api'
import api from '@/lib/api'
import { Globe, Users, CheckCircle, Clock, TrendingUp, Activity, DollarSign, CreditCard, Calendar as CalendarIcon, ChevronDown, BarChart2 } from 'lucide-react'
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area
} from 'recharts'

export default function AnalyticsPage() {
  const [websites, setWebsites] = useState<any[]>([])
  const [registrations, setRegistrations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [dateFilter, setDateFilter] = useState<'7D' | '6M' | '1Y'>('7D')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [webRes, regRes] = await Promise.all([
          clientWebsiteAPI.getAll(),
          api.get('/demo-registrations')
        ])
        setWebsites(webRes.data?.data?.websites || [])
        setRegistrations(regRes.data?.data || [])
      } catch (error) {
        console.error('Failed to fetch analytics data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)]">
        <div className="flex flex-col items-center gap-3 text-gray-500">
          <Activity className="w-8 h-8 animate-spin text-blue-600" />
          <p className="font-semibold text-sm">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  // --- Filtering Logic ---
  const getFilteredData = (data: any[], dateField: string) => {
    const now = new Date()
    let limitDate = new Date()
    limitDate.setHours(0, 0, 0, 0)
    
    if (dateFilter === '7D') limitDate.setDate(now.getDate() - 6)
    else if (dateFilter === '6M') limitDate.setMonth(now.getMonth() - 5)
    else if (dateFilter === '1Y') limitDate.setFullYear(now.getFullYear() - 1)
    
    if (dateFilter === '6M' || dateFilter === '1Y') {
      limitDate.setDate(1)
    }

    return data.filter(item => {
      const itemDate = new Date(item[dateField])
      return itemDate >= limitDate
    })
  }

  const filteredWebsites = getFilteredData(websites, 'createdAt')
  const filteredRegistrations = getFilteredData(registrations, 'createdAt')

  // --- Calculate Metrics ---
  const activeWebsites = filteredWebsites.filter(w => w.isActive !== false).length
  const totalWebsites = filteredWebsites.length
  
  const pendingReg = filteredRegistrations.filter(r => r.status === 'PENDING').length
  const totalDemos = filteredRegistrations.length

  const paymentAmount = filteredWebsites.reduce((acc, site) => acc + (parseFloat(site.paymentAmount) || 0), 0)
  const domainPaymentAmount = filteredWebsites.reduce((acc, site) => acc + (parseFloat(site.domainPaymentAmount) || 0), 0)

  // Trend Data for Graphs
  const generateTrendData = () => {
    let periods: any[] = []
    if (dateFilter === '7D') {
      periods = Array.from({ length: 7 }).map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - (6 - i))
        return {
          key: d.toISOString().split('T')[0],
          display: d.toLocaleDateString('en-US', { weekday: 'short' }),
          websites: 0,
          demos: 0,
          payment: 0,
          domainPayment: 0
        }
      })
    } else {
      const months = dateFilter === '6M' ? 6 : 12
      periods = Array.from({ length: months }).map((_, i) => {
        const d = new Date()
        d.setMonth(d.getMonth() - ((months - 1) - i))
        return {
          key: `${d.getFullYear()}-${d.getMonth()}`,
          display: d.toLocaleDateString('en-US', { month: 'short' }),
          websites: 0,
          demos: 0,
          payment: 0,
          domainPayment: 0
        }
      })
    }

    filteredWebsites.forEach(w => {
      const d = new Date(w.createdAt)
      const key = dateFilter === '7D' ? d.toISOString().split('T')[0] : `${d.getFullYear()}-${d.getMonth()}`
      const p = periods.find(p => p.key === key)
      if (p) {
        p.websites += 1
        p.payment += parseFloat(w.paymentAmount) || 0
        p.domainPayment += parseFloat(w.domainPaymentAmount) || 0
      }
    })

    filteredRegistrations.forEach(r => {
      const d = new Date(r.createdAt)
      const key = dateFilter === '7D' ? d.toISOString().split('T')[0] : `${d.getFullYear()}-${d.getMonth()}`
      const p = periods.find(p => p.key === key)
      if (p) {
        p.demos += 1
      }
    })

    return periods
  }

  const trendData = generateTrendData()

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="w-full pb-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Analytics Dashboard</h1>
          <p className="text-gray-500 mt-1 font-medium text-xs">Overview of business performance and growth.</p>
        </div>
        
        <div className="relative shrink-0 w-full md:w-auto">
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value as any)}
            className="w-full appearance-none pl-9 pr-9 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
          >
            <option value="7D">Last 7 Days</option>
            <option value="6M">Last 6 Months</option>
            <option value="1Y">Last 1 Year</option>
          </select>
          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </motion.div>

      {/* KPI Cards in 2 Rows (3 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Row 1 */}
        <motion.div custom={1} initial="hidden" animate="visible" variants={cardVariants} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Total Websites</p>
              <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none">{totalWebsites}</p>
            </div>
          </div>
          <TrendingUp className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
        </motion.div>

        <motion.div custom={2} initial="hidden" animate="visible" variants={cardVariants} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Active Sites</p>
              <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none">{activeWebsites}</p>
            </div>
          </div>
        </motion.div>

        <motion.div custom={3} initial="hidden" animate="visible" variants={cardVariants} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Payment Amount</p>
              <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none">₹{paymentAmount.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div custom={4} initial="hidden" animate="visible" variants={cardVariants} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Total Demos</p>
              <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none">{totalDemos}</p>
            </div>
          </div>
        </motion.div>

        <motion.div custom={5} initial="hidden" animate="visible" variants={cardVariants} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Pending Demos</p>
              <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none">{pendingReg}</p>
            </div>
          </div>
          {pendingReg > 0 && <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_0_4px_rgba(249,115,22,0.1)] animate-pulse" />}
        </motion.div>

        <motion.div custom={6} initial="hidden" animate="visible" variants={cardVariants} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-purple-100 transition-colors">
              <CreditCard className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Domain Payments</p>
              <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none">₹{domainPaymentAmount.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Separate Graphs Grid (2x2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Websites Trend */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Websites Growth</h3>
              <p className="text-[11px] text-gray-500 font-medium">New websites created over time</p>
            </div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Globe className="w-4 h-4" /></div>
          </div>
          <div className="h-[220px] w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorWebsites" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="display" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                  cursor={{stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '4 4'}}
                />
                <Area 
                  type="monotone" 
                  dataKey="websites" 
                  name="Websites"
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorWebsites)" 
                  activeDot={{ r: 5, strokeWidth: 0, fill: '#3b82f6' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Demo Registrations Trend */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Demo Registrations</h3>
              <p className="text-[11px] text-gray-500 font-medium">Template demo requests</p>
            </div>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Users className="w-4 h-4" /></div>
          </div>
          <div className="h-[220px] w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDemos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="display" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                  cursor={{stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '4 4'}}
                />
                <Area 
                  type="monotone" 
                  dataKey="demos" 
                  name="Demos"
                  stroke="#f59e0b" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorDemos)" 
                  activeDot={{ r: 5, strokeWidth: 0, fill: '#f59e0b' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Payment Amount Trend */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Payments Revenue</h3>
              <p className="text-[11px] text-gray-500 font-medium">Revenue from websites</p>
            </div>
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><DollarSign className="w-4 h-4" /></div>
          </div>
          <div className="h-[220px] w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData} margin={{ top: 5, right: 0, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="display" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} tickFormatter={(val) => `₹${val}`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                  cursor={{fill: '#f8fafc'}}
                  formatter={(value: any) => [`₹${(value || 0).toLocaleString()}`, 'Payment']}
                />
                <Bar dataKey="payment" name="Payment" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Domain Payment Trend */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Domain Payments</h3>
              <p className="text-[11px] text-gray-500 font-medium">Revenue from domain sales</p>
            </div>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><CreditCard className="w-4 h-4" /></div>
          </div>
          <div className="h-[220px] w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData} margin={{ top: 5, right: 0, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="display" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} tickFormatter={(val) => `₹${val}`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                  cursor={{fill: '#f8fafc'}}
                  formatter={(value: any) => [`₹${(value || 0).toLocaleString()}`, 'Domain Payment']}
                />
                <Bar dataKey="domainPayment" name="Domain Payment" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
