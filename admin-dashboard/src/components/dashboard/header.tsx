'use client'

import { Button } from '@/components/ui/button'
import { Bell, LayoutDashboard } from 'lucide-react'

export function DashboardHeader() {
  return (
    <header className="w-full bg-white py-4 px-8 flex shadow-2xl items-center justify-between border-b border-gray-300">
      {/* Left spacer for perfect centering */}
      <div className="flex-1 hidden md:block"></div>

      <div className="flex items-center justify-center gap-4 md:flex-1">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-gray-700 bg-clip-text text-transparent drop-shadow-sm text-center whitespace-nowrap">
          Headless Content Management System
        </h1>
        <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-700 text-xs font-semibold shadow-sm whitespace-nowrap">v1.1</span>
      </div>
      
      {/* Right actions */}
      <div className="flex items-center justify-end space-x-4 flex-1">
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-full h-9 w-9 p-0">
          <Bell className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}