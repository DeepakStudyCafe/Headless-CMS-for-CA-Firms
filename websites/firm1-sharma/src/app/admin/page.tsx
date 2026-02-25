'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/** Root /admin — redirects to dashboard if logged in, else to login */
export default function AdminRoot() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('site_admin_token')
    router.replace(token ? '/admin/dashboard' : '/admin/login')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
    </div>
  )
}
