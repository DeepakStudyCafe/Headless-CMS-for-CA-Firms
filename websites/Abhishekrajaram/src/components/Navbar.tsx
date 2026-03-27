import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getWebsiteData } from '@/lib/api';

const DEFAULT_NAV = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Services', href: '/services', hasDropdown: true, subItems: [] as { name: string; href: string }[] },
  { name: 'Query', href: '/query' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    getWebsiteData().then(setWebsiteData);
  }, []);

  const navItems = useMemo(() => {
    const servicesList = websiteData?.themeConfig?.services || [];
    return DEFAULT_NAV.map((item) => {
      if (item.hasDropdown && servicesList.length > 0) {
        return { ...item, subItems: servicesList.map((s: any) => ({ name: s.title, href: s.href })) };
      }
      return item;
    });
  }, [websiteData]);

  const logoUrl = websiteData?.logo || 'https://api.digitechai.in/uploads/logo.png';
  const firmName = websiteData?.name || 'Sterling & Co.';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border/50'
          : 'bg-transparent'
        }`}
    >
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-1">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-transparent flex items-center justify-center p-1">
              <img src={logoUrl} alt={`${firmName} logo`} className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <span className={`font-serif font-bold text-lg ${!isScrolled ? 'text-white' : 'text-foreground'}`}>{firmName}</span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] ${!isScrolled ? 'text-white/90' : 'text-muted-foreground'}`}>Chartered Accountants</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${location.pathname === item.href
                      ? 'text-accent'
                      : !isScrolled
                        ? 'text-white/90 hover:text-white'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && item.subItems && item.subItems.length > 0 && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] pt-2"
                      >
                        <div className="bg-card rounded-xl shadow-xl border border-border/50 p-3 space-y-1">
                          {item.subItems.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <Link to="/contact" className="hidden lg:inline-flex px-5 py-2.5 text-sm font-medium rounded-lg bg-navy text-primary-foreground hover:bg-navy-light transition-all">
            Get a Consultation
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 ${!isScrolled ? 'text-white' : 'text-foreground'}`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.subItems && item.subItems.length > 0 && (
                    <div className="pl-8 space-y-1">
                      {item.subItems.map((s) => (
                        <Link key={s.name} to={s.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="block mx-4 mt-4 text-center px-5 py-3 text-sm font-medium rounded-lg bg-navy text-primary-foreground">
                Get a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
