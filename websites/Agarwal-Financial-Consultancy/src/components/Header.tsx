import { useState, useEffect } from 'react';
import { getWebsiteData } from '../lib/api';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const serviceDropdown = [
  { name: 'Bookkeeping', href: '/services/bookkeeping', icon: BookOpen },
  { name: 'GST Filing', href: '/services/gst-filing', icon: FileText },
  { name: 'Payroll', href: '/services/payroll', icon: Users },
  { name: 'Tax Planning', href: '/services/tax-planning', icon: Calculator },
  { name: 'Company Formation', href: '/services/company-formation', icon: Building2 },
  { name: 'Compliance', href: '/services/compliance', icon: Shield },
  { name: 'Audit Services', href: '/services/audit-services', icon: Search },
  { name: 'Financial Advisory', href: '/services/financial-advisory', icon: TrendingUp },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Query', href: '/query' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const [website, setWebsite] = useState<any>(null);

  useEffect(() => {
    getWebsiteData().then((w) => setWebsite(w)).catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      {/* Top bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`} style={{ backgroundColor: 'hsl(var(--primary))' }}>
        <div className="container-wide mx-auto flex items-center justify-between gap-6 px-4 py-2 text-sm" style={{ color: 'hsl(var(--primary-foreground))' }}>
          <div className="flex items-center gap-4">
            <a href="tel:+911234567890" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone size={14} /> <span className="ml-1">+91 9773545123</span>
            </a>
            <a href={`mailto:${website?.email || ''}`} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Mail size={14} /> <span className="ml-1">{website?.email || "Email loading..."}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener" aria-label="Instagram" className="w-6 h-6 flex items-center justify-center rounded-full bg-white/8 text-white/95 transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5 hover:bg-white/14 shadow-sm hover:shadow-md ring-0 hover:ring-2 hover:ring-white/20">
              <Instagram size={16} />
            </a>
            <a href="#" target="_blank" rel="noopener" aria-label="Facebook" className="w-6 h-6 flex items-center justify-center rounded-full bg-white/8 text-white/95 transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5 hover:bg-white/14 shadow-sm hover:shadow-md ring-0 hover:ring-2 hover:ring-white/20">
              <Facebook size={16} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener" aria-label="X" className="w-6 h-6 flex items-center justify-center rounded-full bg-white/8 text-white/95 transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5 hover:bg-white/14 shadow-sm hover:shadow-md ring-0 hover:ring-2 hover:ring-white/20">
              <X size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="w-6 h-6 flex items-center justify-center rounded-full bg-white/8 text-white/95 transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5 hover:bg-white/14 shadow-sm hover:shadow-md ring-0 hover:ring-2 hover:ring-white/20">
              <Linkedin size={16} />
            </a>
            
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="w-6 h-6 flex items-center justify-center rounded-full bg-white/8 text-white/95 transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5 hover:bg-white/14 shadow-sm hover:shadow-md ring-0 hover:ring-2 hover:ring-white/20">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      <nav className="container-wide mx-auto px-4 flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-">
                <div className="h-14 md:h-18 flex items-center justify-center overflow-hidden bg-transparent">
            <img
              src={isScrolled ? '/AFC-Black.png' : '/AFC-White.png'}
              alt="Agarwal Financial Consultancy logo"
              className="h-full w-auto object-contain"
            />
          </div>
          {/* <div>
            <span className={`font-heading font-bold text-lg transition-colors ${isScrolled ? 'text-secondary' : 'text-card'}`}>
              Agarwal Financial Consultancy
            </span>
            
          </div> */}
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div key={item.name} className="relative" onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)} onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}>
              <Link
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  isScrolled
                    ? 'text-foreground hover:bg-muted hover:text-primary'
                    : 'text-card/90 hover:text-card'
                } ${location.pathname === item.href ? (isScrolled ? 'text-primary' : 'text-card') : ''}`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />}
              </Link>

              {item.hasDropdown && (
                <AnimatePresence>
                  
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-card rounded-xl border border-border p-3"
                      style={{ boxShadow: 'var(--shadow-hero)' }}
                    >
                      {serviceDropdown.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-muted transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <service.icon size={16} style={{ color: 'hsl(var(--primary-foreground))' }} />
                          </div>
                          <span className="font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link to="/contact" className="ml-3 btn-primary-gradient text-sm !px-5 !py-2">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-foreground' : 'text-card'}`}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link to={item.href} className="block px-3 py-2.5 rounded-lg text-foreground hover:bg-muted font-medium">
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1 mt-1">
                      {serviceDropdown.map((s) => (
                        <Link key={s.name} to={s.href} className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="block btn-primary-gradient text-center text-sm mt-3">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
