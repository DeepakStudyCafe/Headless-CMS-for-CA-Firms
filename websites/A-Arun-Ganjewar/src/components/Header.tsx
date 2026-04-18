'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getWebsiteData } from '@/lib/api'

interface WebsiteData {
  name: string
  logo?: string
}

const serviceDropdown = [
  { name: 'Bookkeeping', href: '/services/bookkeeping' },
  { name: 'GST Filing', href: '/services/gst-filing' },
  { name: 'Payroll', href: '/services/payroll' },
  { name: 'Tax Planning', href: '/services/tax-planning' },
  { name: 'Company Formation', href: '/services/company-formation' },
  { name: 'Compliance', href: '/services/compliance' },
  { name: 'Audit Services', href: '/services/audit-services' },
  { name: 'Financial Advisory', href: '/services/financial-advisory' },
]

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Services', href: '/service', hasDropdown: true },
  { name: 'Query', href: '/query' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null)

  useEffect(() => {
    async function fetchWebsiteData() {
      const data = await getWebsiteData()
      setWebsiteData(data)
    }
    fetchWebsiteData()
  }, [])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://api.digitechai.in/uploads/logo.png"
              alt={websiteData?.name || 'Logo'}
              width={40}
              height={40}
              className="object-contain"
              unoptimized
            />
            <span className="text-2xl font-bold text-gray-700">
              {websiteData?.name || 'Singh & Co. Advisors'}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith('/services'))
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors hover:text-gray-600 flex items-center gap-1 ${
                        isActive ? 'text-gray-600' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                        >
                          {serviceDropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                    isActive ? 'text-gray-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="h-0.5 bg-gray-600 mt-1"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navigation.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-gray-600"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {serviceDropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block py-2 text-sm text-gray-600 hover:text-gray-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </motion.div>
        )}
      </nav>
    </header>
  )
}
