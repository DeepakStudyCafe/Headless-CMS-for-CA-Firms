import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'About Us', 'Services', 'Our Team', 'Blog', 'Contact Us'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          {/* Logo + Company Name */}
          <a href="#" className="flex-shrink-0 flex items-center gap-3" data-cursor="button">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="xyz & Associates Logo"
              className="transition-all duration-[350ms]"
              style={{ height: scrolled ? 32 : 38 }}
            />
            <span className="hidden md:flex flex-col font-bold text-base leading-tight tracking-wide select-none text-charcoal">
              xyz & Associates
              <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
            </span>
          </a>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                data-cursor="button"
                className="group relative font-body text-[13px] font-medium tracking-[0.3px] px-3.5 py-2 transition-colors duration-200"
                style={{ color: '#6B6B6B' }}
              >
                <span className="group-hover:text-charcoal transition-colors duration-200">{item}</span>
                <span
                  className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[250ms] ease-out"
                  style={{ background: '#C8A96E' }}
                />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center">
            <a
              href="#"
              data-cursor="button"
              className="btn-shimmer font-body text-[12px] font-semibold px-5 py-2.5 rounded-md transition-all duration-[250ms]
                hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(45,45,45,0.25)]"
              style={{ background: '#2D2D2D', color: '#FAF8F3' }}
            >
              Book Consultation
            </a>
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
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-8"
            style={{ background: '#FAF8F3', borderBottom: '2px solid #C8A96E' }}
          >
            <div className="flex flex-col items-center absolute top-6 left-6">
              <img src="https://api.digitechai.in/uploads/logo.png" alt="xyz & Associates Logo" className="h-10 mb-1" />
              <span className="font-bold text-charcoal text-base tracking-wide select-none flex flex-col items-center">
                xyz & Associates
                <span className="font-normal text-xs tracking-normal -mt-1">Chartered Accountants</span>
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-2xl font-body"
              style={{ color: '#2D2D2D' }}
              aria-label="Close menu"
            >
              ✕
            </button>
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href="#"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                className="font-display text-[28px] font-semibold mb-3 w-full max-w-sm pb-3 transition-colors duration-200 hover:text-primary hover:translate-x-2"
                style={{ color: '#2D2D2D', borderBottom: '1px solid #E8E2D9' }}
              >
                {item}
              </motion.a>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 font-body text-[12px] font-light"
              style={{ color: 'rgba(45,45,45,0.4)' }}
            >
              +91 98765 43210 · info@digitechca.in
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
