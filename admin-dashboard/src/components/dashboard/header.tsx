'use client'

import { Button } from '@/components/ui/button'
import { Settings, User, Bell } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'

export function DashboardHeader() {
  const { user } = useAuthStore()

  return (
    <header
      className="w-full bg-gray-100 py-4 px-8 flex shadow-lg items-center justify-between border-b border-b-gray-200"
      
    >
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-start">
          <h1 className="text-1xl md:text-2xl font-extrabold text-blue-700 drop-shadow-md">
            Headless CMS
          </h1>
          
        </div>
        <span className="ml-2 px-3 py-1 rounded-full bg-blue-200 text-blue-700 text-xs font-semibold shadow-sm">v1.0</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm">
          <Bell className="w-4 h-4 mr-2" />
          Notifications
        </Button>
        
        <Button variant="outline" size="sm">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
        
        <div className="flex items-center space-x-2">
          <User className="w-6 h-6 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-900">{user?.name || 'Admin'}</p>
            <p className="text-xs text-gray-500">{user?.role || 'ADMIN'}</p>
          </div>
        </div>
      </div>
    </header>
  )
}