import React from 'react'

export function TopHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm py-2 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
          <span className="text-center sm:text-left">Patel Consulting | Trusted Advisors</span>
          <span className="text-center sm:text-right">Call us: +91-98765-43210</span>
        </div>
      </div>
    </div>
  )
}
