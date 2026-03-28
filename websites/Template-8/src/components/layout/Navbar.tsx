import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navItemVariant } from "@/lib/animations";
import { Menu, X } from "lucide-react";

const DEFAULT_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const Navbar = ({ websiteData }: { websiteData?: any }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const logo = websiteData?.logo || 'https://api.digitechai.in/uploads/logo.png';
  const name = websiteData?.name || 'CA Firm';

  const serviceLinks: { title: string; href: string }[] = useMemo(() => {
    return websiteData?.themeConfig?.services || [];
  }, [websiteData]);

  const navItems = useMemo(() => DEFAULT_NAV, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/[0.92] backdrop-blur-xl border-b border-gold/25 py-4 px-6 lg:px-16"
            : "bg-transparent py-7 px-6 lg:px-16"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            style={{ transform: scrolled ? "scale(0.88)" : "scale(1)", transition: "transform 0.5s ease" }}
          >
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img src={logo} alt={name + ' Logo'} className="h-10 lg:h-9 w-auto" />
              <span className="hidden md:flex flex-col font-bold text-cream text-lg leading-tight tracking-wide select-none">
                {name}
                <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => {
              if (item.href === '/services' && serviceLinks.length > 0) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <motion.span
                      custom={i}
                      variants={navItemVariant}
                      initial="hidden"
                      animate="visible"
                      className="relative font-body text-sm text-cream/90 hover:text-cream transition-all duration-300 tracking-wide group cursor-pointer flex items-center gap-1"
                    >
                      {item.label}
                      <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      <span className={`absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-gold origin-left transition-transform duration-300 ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </motion.span>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl overflow-hidden shadow-2xl"
                          style={{ background: "#0A0E17", border: "1px solid rgba(200,169,110,0.2)" }}
                        >
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.href}
                              to={s.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-3 text-sm text-cream/80 hover:text-gold hover:bg-white/5 transition-colors font-body border-b border-white/5 last:border-0"
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
                <motion.div key={item.href} custom={i} variants={navItemVariant} initial="hidden" animate="visible">
                  <Link
                    to={item.href}
                    className="relative font-body text-sm text-cream/90 hover:text-cream transition-all duration-300 tracking-wide group"
                    style={{ letterSpacing: "0em" }}
                    onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.04em")}
                    onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "0em")}
                  >
                    {item.label}
                    <span className={`absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-gold origin-left transition-transform duration-300 ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div custom={navItems.length} variants={navItemVariant} initial="hidden" animate="visible" className="hidden lg:block">
            <Link
              to="/query"
              className="shimmer-btn px-6 py-2.5 text-sm font-body font-medium text-primary-foreground rounded-sm hover:scale-[1.03] active:scale-[0.97] transition-transform"
            >
              Book Consultation
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-cream p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMobileOpen(false)} className="text-cream p-2" aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center px-12 gap-6 border-l-2 border-gold/30 ml-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-4xl md:text-5xl text-cream hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.08, duration: 0.4 }}
              >
                <Link
                  to="/query"
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-base text-gold border border-gold/40 px-6 py-3 rounded-sm hover:bg-gold hover:text-ink transition-all"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
