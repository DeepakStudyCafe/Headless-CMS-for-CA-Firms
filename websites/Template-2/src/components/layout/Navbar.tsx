import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp } from 'lucide-react';

const serviceDropdown = [
  { name: 'Bookkeeping', href: '/services/bookkeeping', icon: BookOpen, desc: 'Accurate financial record management' },
  { name: 'GST Filing', href: '/services/gst-filing', icon: FileText, desc: 'Timely GST compliance & returns' },
  { name: 'Payroll', href: '/services/payroll', icon: Users, desc: 'End-to-end payroll processing' },
  { name: 'Tax Planning', href: '/services/tax-planning', icon: Calculator, desc: 'Strategic tax optimization' },
  { name: 'Company Formation', href: '/services/company-formation', icon: Building2, desc: 'Business incorporation services' },
  { name: 'Compliance', href: '/services/compliance', icon: Shield, desc: 'Regulatory compliance management' },
  { name: 'Audit Services', href: '/services/audit-services', icon: Search, desc: 'Comprehensive audit & assurance' },
  { name: 'Financial Advisory', href: '/services/financial-advisory', icon: TrendingUp, desc: 'Expert financial guidance' },
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden bg-transparent flex items-center justify-center p-1">
              <img
                src="https://api.digitechai.in/uploads/logo.png"
                alt="Apex & Associates logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className={`font-display font-bold text-lg tracking-tight ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                Apex & Associates
              </span>
              <p className={`text-[10px] tracking-[0.2em] uppercase ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                Chartered Accountants
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium font-body transition-colors duration-200 flex items-center gap-1 rounded-md ${
                    isScrolled
                      ? 'text-foreground/80 hover:text-foreground hover:bg-secondary'
                      : 'text-primary-foreground/80 hover:text-primary-foreground'
                  } ${location.pathname === item.href ? (isScrolled ? 'text-foreground' : 'text-primary-foreground') : ''}`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Mega Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-card rounded-xl border border-border p-6 w-[600px] grid grid-cols-2 gap-2" style={{ boxShadow: 'var(--shadow-card-hover)' }}>
                          {serviceDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                <service.icon className="w-5 h-5 text-accent" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">{service.name}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{service.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:inline-flex btn-gold text-sm py-2 px-6">
              Get a Consultation
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {serviceDropdown.map((s) => (
                        <Link key={s.name} to={s.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="block btn-gold text-sm text-center mt-4">
                Get a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
