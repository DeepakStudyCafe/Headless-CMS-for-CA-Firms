'use client'

import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/authStore'
import { Home, Globe, Settings, LogOut, BarChart3 } from 'lucide-react'

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
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Globe, label: 'Websites', href: '/Websites' },
    { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ]

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 min-h-screen bg-gray-100 border-r border-gray-200 flex flex-col shadow-xl"
    >
      <nav className="flex-1 p-4 space-y-2">
        <div className="mb-3">
          <span className="block text-lg font-bold text-gray-800 tracking-wide">Admin Dashboard</span>
          <hr className="mt-2 border-t border-gray-300" />
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon
          // Highlight only if pathname matches exactly
          const isActive = pathname === item.href
          return (
            <Button
              key={item.href}
              variant="ghost"
              className={`w-full justify-start rounded-xl py-3 px-4 text-base font-medium transition-all duration-200 shadow-sm ${isActive ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50 hover:text-gray-600'}`}
              onClick={() => router.push(item.href)}
            >
              <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'}`} />
              {item.label}
            </Button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 bg-gray-100">
        <div className="mb-4 p-3 bg-white rounded-xl shadow-sm flex flex-col items-start">
          <p className="text-base font-semibold text-gray-900 break-words whitespace-normal w-full">{user?.name}</p>
          <p className="text-xs text-gray-500 break-words whitespace-normal w-full">{user?.email}</p>
          <p className="text-xs text-blue-600 mt-1 font-medium break-words whitespace-normal w-full">{user?.role}</p>
        </div>
        <Button variant="outline" className="w-full rounded-xl py-3 font-semibold border-2 border-gray-300 hover:bg-gray-200 transition-all duration-200" onClick={handleLogout}>
          <LogOut className="mr-2 h-5 w-5 text-gray-600" />
          Logout
        </Button>
      </div>
    </motion.aside>
  )
}
