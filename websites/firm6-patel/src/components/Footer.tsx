import React from 'react'

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-primary-900 to-accent-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-semibold">Patel Consulting</div>
        <div className="text-sm">&copy; {new Date().getFullYear()} Patel Consulting. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
