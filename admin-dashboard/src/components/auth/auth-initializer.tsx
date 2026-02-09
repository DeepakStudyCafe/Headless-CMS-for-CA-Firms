'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/authStore'

export function AuthInitializer() {
  const initialize = useAuthStore(state => state.initialize)

  useEffect(() => {
    // Initialize auth state when app starts
    initialize()
  }, [initialize])

  return null // This component doesn't render anything
}