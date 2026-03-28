import { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar({ websiteData }: { websiteData?: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const logo = websiteData?.logo || 'https://api.digitechai.in/uploads/logo.png';
  const name = websiteData?.name || 'CA Firm';
  const phone = websiteData?.phone || '';
  const email = websiteData?.email || '';

  const serviceLinks: { title: string; href: string }[] = useMemo(
    () => websiteData?.themeConfig?.services || [],
    [websiteData]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-[350ms]"
        style={{
          background: 'rgba(250,248,243,0.96)',
          backdropFilter: 'blur(16px) saturate(180%)',
          height: 68,
          borderBottom: scrolled
            ? '1px solid rgba(200,169,110,0.25)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3" data-cursor="button">
            <img
              src={logo}
              alt={name + ' Logo'}
              className="transition-all duration-[350ms]"
              style={{ height: scrolled ? 32 : 38 }}
            />
            <span className="hidden md:flex flex-col font-bold text-base leading-tight tracking-wide select-none" style={{ color: '#2D2D2D' }}>
              {name}
              <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              if (item.href === '/services' && serviceLinks.length > 0) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      data-cursor="button"
                      className="group relative font-body text-[13px] font-medium tracking-[0.3px] px-3.5 py-2 transition-colors duration-200 flex items-center gap-1"
                      style={{ color: isActive(item.href) ? '#2D2D2D' : '#6B6B6B' }}
                    >
                      <span className="group-hover:text-charcoal transition-colors duration-200">{item.label}</span>
                      <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span
                        className={`absolute bottom-1 left-3.5 right-3.5 h-[1.5px] origin-left transition-transform duration-[250ms] ease-out ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                        style={{ background: '#C8A96E' }}
                      />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 rounded-xl overflow-hidden shadow-xl"
                          style={{ background: '#FAF8F3', border: '1px solid rgba(200,169,110,0.3)' }}
                        >
                          <Link
                            to="/services"
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors"
                            style={{ color: '#C8A96E', background: 'rgba(200,169,110,0.06)', borderBottom: '1px solid rgba(200,169,110,0.15)' }}
                          >
                            All Services →
                          </Link>
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.href}
                              to={s.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2.5 font-body text-sm transition-colors"
                              style={{ color: '#4A4A4A', borderBottom: '1px solid rgba(200,169,110,0.08)' }}
                              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,169,110,0.08)'; e.currentTarget.style.color = '#2D2D2D'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#4A4A4A'; }}
                            >
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  data-cursor="button"
                  className="group relative font-body text-[13px] font-medium tracking-[0.3px] px-3.5 py-2 transition-colors duration-200"
                  style={{ color: isActive(item.href) ? '#2D2D2D' : '#6B6B6B' }}
                >
                  <span className="group-hover:text-charcoal transition-colors duration-200">{item.label}</span>
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-[1.5px] origin-left transition-transform duration-[250ms] ease-out ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    style={{ background: '#C8A96E' }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/query"
              data-cursor="button"
              className="btn-shimmer font-body text-[12px] font-semibold px-5 py-2.5 rounded-md transition-all duration-[250ms] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(45,45,45,0.25)]"
              style={{ background: '#2D2D2D', color: '#FAF8F3' }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden ml-auto flex flex-col gap-[5px]"
            aria-label="Open menu"
            data-cursor="button"
          >
            {[0, 1, 2].map(i => (
              <span key={i} className="block w-5 h-[1.5px]" style={{ background: '#2D2D2D' }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300, duration: 0.4 }}
            className="fixed inset-0 z-[100] flex flex-col overflow-y-auto"
            style={{ background: '#FAF8F3' }}
          >
            <div className="flex items-center justify-between px-6 pt-5 pb-4" style={{ borderBottom: '1px solid rgba(200,169,110,0.2)' }}>
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <img src={logo} alt={name + ' Logo'} className="h-9" />
                <span className="font-bold text-sm" style={{ color: '#2D2D2D' }}>{name}</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-2xl font-body" style={{ color: '#2D2D2D' }} aria-label="Close menu">✕</button>
            </div>

            <div className="flex flex-col px-6 pt-4 pb-8 gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.06 }}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-[26px] font-semibold py-3 w-full block transition-colors duration-200"
                    style={{ color: isActive(item.href) ? '#C8A96E' : '#2D2D2D', borderBottom: '1px solid #E8E2D9' }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {serviceLinks.length > 0 && (
                <div className="mt-4 pl-4" style={{ borderLeft: '2px solid rgba(200,169,110,0.3)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C8A96E' }}>Services</p>
                  {serviceLinks.map(s => (
                    <Link key={s.href} to={s.href} onClick={() => setMobileOpen(false)}
                      className="block py-1.5 font-body text-sm" style={{ color: '#6B6B6B' }}>
                      → {s.title}
                    </Link>
                  ))}
                </div>
              )}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6">
                <Link
                  to="/query"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center font-body text-[13px] font-semibold px-6 py-3 rounded-md"
                  style={{ background: '#2D2D2D', color: '#FAF8F3' }}
                >
                  Book Consultation
                </Link>
              </motion.div>

              {(phone || email) && (
                <p className="mt-4 font-body text-xs text-center" style={{ color: 'rgba(45,45,45,0.4)' }}>
                  {[phone, email].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
