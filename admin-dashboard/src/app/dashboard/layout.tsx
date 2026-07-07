'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'
import { Sidebar } from '@/components/dashboard/sidebar'
import { DashboardHeader } from '@/components/dashboard/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { isAuthenticated, isInitialized, initialize } = useAuthStore()

  useEffect(() => {
    // Initialize auth store on component mount
    initialize()
  }, [initialize])

  useEffect(() => {
    // Redirect to login if not authenticated and initialization is complete
    if (isInitialized && !isAuthenticated) {
      
      router.push('/login')
    }
  }, [isAuthenticated, isInitialized, router])

  // Show loading while initialization is in progress
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Show loading if not authenticated (during redirect)
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden w-full">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-gray-50 py-4 px-2 md:px-4 md:py-4">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
