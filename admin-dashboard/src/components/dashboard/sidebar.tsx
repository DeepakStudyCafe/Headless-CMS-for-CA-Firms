'use client'

import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/authStore'
import { Home, Globe, Settings, LogOut, BarChart3, Users } from 'lucide-react'

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    localStorage.removeItem('token')
    router.push('/login')
  }

  const menuItems = [
    { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Globe, label: 'Websites', href: '/dashboard/websites' },
    { icon: Users, label: 'Demo Registrations', href: '/dashboard/demo-registrations' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ]

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col shadow-sm"
    >
      <div className="p-6 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="block text-xl font-bold text-gray-900 tracking-tight">Admin<span className="text-blue-600">Panel</span></span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          // Highlight only if pathname matches exactly
          const isActive = pathname === item.href
          return (
            <Button
              key={item.href}
              variant="ghost"
              className={`w-full justify-start rounded-xl py-6 px-4 text-sm font-semibold transition-all duration-300 ${isActive ? 'bg-blue-50 text-blue-700 hover:bg-blue-100/80 shadow-[0_2px_10px_-4px_rgba(59,130,246,0.3)]' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
              onClick={() => router.push(item.href)}
            >
              <Icon className={`mr-3 h-5 w-5 transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
              {item.label}
            </Button>
          )
        })}
      </nav>

      <div className="p-4 bg-gray-50/50 mt-auto">
        <div className="mb-3 p-3 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <span className="text-blue-700 font-bold text-sm uppercase">{user?.name?.charAt(0) || 'A'}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">{user?.name || 'Admin User'}</p>
            <p className="text-xs text-gray-500 truncate" title={user?.email}>{user?.email || 'admin@example.com'}</p>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start rounded-xl py-5 text-sm font-semibold text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300" onClick={handleLogout}>
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </motion.aside>
  )
}
