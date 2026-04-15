import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminRoot() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('site_admin_token')
    navigate(token ? '/admin/dashboard' : '/admin/login', { replace: true })
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
    </div>
  )
}
