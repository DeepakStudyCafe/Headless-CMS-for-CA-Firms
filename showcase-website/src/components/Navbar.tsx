'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Home, 
  User, 
  Users, 
  LayoutGrid, 
  Briefcase, 
  Tag, 
  FileText,
  Menu,
  X
} from 'lucide-react'

export default function Navbar({ forceSolid = false }: { forceSolid?: boolean } = {}) {
  const [isScrolled, setIsScrolled] = useState(forceSolid)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (forceSolid) {
      setIsScrolled(true)
      return
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [forceSolid])

  // Close menu when route changes
  useEffect(() => {
    setIsMoreMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About Us', icon: User },
    { href: '/our-client', label: 'Our Client', icon: Users },
    { href: '/templates', label: 'Templates', icon: LayoutGrid },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/pricing', label: 'Pricing', icon: Tag },
    { href: '/blog', label: 'Blog', icon: FileText },
    { href: '/contact', label: 'Contact', icon: Phone },
  ]

  // Split links for bottom nav UX
  const mainLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About Us', icon: User },
    { href: '/our-client', label: 'Our Client', icon: Users },
    { href: '/contact', label: 'Contact', icon: Phone },
  ]

  const moreLinks = [
    { href: '/templates', label: 'Templates', icon: LayoutGrid },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/pricing', label: 'Pricing', icon: Tag },
    { href: '/blog', label: 'Blog', icon: FileText },
  ]

  const isAnyMoreLinkActive = moreLinks.some(link => pathname === link.href)

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMoreMenuOpen 
          ? 'py-2 lg:py-3 bg-white shadow-md backdrop-blur-sm' 
          : 'py-2 bg-white lg:py-5 lg:bg-transparent'}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src={isScrolled || isMoreMenuOpen ? '/webcafe-black.png' : '/webcafe-white.png'}
                alt="Webcafe Logo"
                className="hidden lg:block h-8 w-auto"
                draggable="false"
              />
              <img
                src="/webcafe-black.png"
                alt="Webcafe Logo"
                className="lg:hidden h-6 w-auto"
                draggable="false"
              />
            </Link>

            {/* Mobile "Schedule a Call" button */}
            <div className="lg:hidden ml-auto">
              <Link
                href="/schedule-call"
                className="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full text-xs transition-all duration-300 shadow-lg shadow-primary-600/20"
              >
                <Phone className="w-3.5 h-3.5" />
                Schedule
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 hover:text-primary-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                    } ${pathname === link.href ? 'text-primary-600' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/schedule-call"
                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Unified Mobile Bottom Navigation Component */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 z-[70] pb-safe shadow-[0_-12px_32px_rgba(0,0,0,0.12)]">
        <AnimatePresence>
          {isMoreMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-5 px-2 pt-6 pb-6 border-b border-gray-50 mb-1">
                {moreLinks.map((link) => {
                  const Icon = link.icon
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex flex-col items-center justify-center transition-all duration-300 ${isActive ? 'text-primary-600' : 'text-gray-500'
                        }`}
                    >
                      <div className="relative">
                        <Icon className={`w-5 h-5 mb-1 ${isActive ? 'scale-110' : ''} transition-transform duration-300`} />
                      </div>
                      <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                        {link.label}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary Bottom Navbar row */}
        <div className="grid grid-cols-5 px-2 py-3">
          {mainLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center transition-all duration-300 ${isActive ? 'text-primary-600' : 'text-gray-500'
                  }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 mb-1 ${isActive ? 'scale-110' : ''} transition-transform duration-300`} />
                </div>
                <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                  {link.label}
                </span>
              </Link>
            )
          })}

          {/* Integrated Menu Toggle Button */}
          <button
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className={`flex flex-col items-center justify-center transition-all duration-300 ${isMoreMenuOpen || isAnyMoreLinkActive ? 'text-primary-600' : 'text-gray-500'
              }`}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: isMoreMenuOpen ? 90 : 0 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                {isMoreMenuOpen ? (
                  <X className="w-5 h-5 mb-1 scale-110" />
                ) : (
                  <Menu className={`w-5 h-5 mb-1 ${isAnyMoreLinkActive ? 'scale-110' : ''}`} />
                )}
              </motion.div>
            </div>
            <span className={`text-[10px] font-bold ${isMoreMenuOpen || isAnyMoreLinkActive ? 'opacity-100' : 'opacity-80'}`}>
              Menu
            </span>
          </button>
        </div>
      </div>

      {/* Spacer for bottom nav */}
      <div className="lg:hidden h-20" />
    </>
  )
}
