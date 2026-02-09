'use client'

import { Toaster } from '@/components/ui/toaster'
import { AuthInitializer } from '@/components/auth/auth-initializer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthInitializer />
      {children}
      <Toaster />
    </>
  )
}
