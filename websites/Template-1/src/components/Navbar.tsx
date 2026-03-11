import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase } from 'lucide-react';

const serviceDropdown = [
  { name: 'Bookkeeping', href: '/services/bookkeeping', icon: BookOpen, desc: 'Accurate financial record keeping' },
  { name: 'GST Filing', href: '/services/gst-filing', icon: FileText, desc: 'Timely GST compliance & returns' },
  { name: 'Payroll', href: '/services/payroll', icon: Users, desc: 'End-to-end payroll management' },
  { name: 'Tax Planning', href: '/services/tax-planning', icon: Calculator, desc: 'Strategic tax optimization' },
  { name: 'Company Formation', href: '/services/company-formation', icon: Building2, desc: 'Business registration & setup' },
  { name: 'Compliance', href: '/services/compliance', icon: Shield, desc: 'Regulatory compliance support' },
  { name: 'Audit Services', href: '/services/audit-services', icon: Search, desc: 'Comprehensive audit solutions' },
  { name: 'Financial Advisory', href: '/services/financial-advisory', icon: Briefcase, desc: 'Expert financial guidance' },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-transparent flex items-center justify-center p-1">
              <img
                src="https://api.digitechai.in/uploads/logo.png"
                alt="Sterling & Co. logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className={`font-serif font-bold text-lg ${!isScrolled ? 'text-white' : 'text-foreground'}`}>Sterling & Co.</span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] ${!isScrolled ? 'text-white/90' : 'text-muted-foreground'}`}>Chartered Accountants</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    location.pathname === item.href
                      ? 'text-accent'
                      : !isScrolled
                      ? 'text-white/90 hover:text-white'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Mega Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-2"
                      >
                        <div className="bg-card rounded-xl shadow-xl border border-border/50 p-6 grid grid-cols-2 gap-2">
                          {serviceDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                <service.icon className="w-5 h-5 text-accent" />
                              </div>
                              <div>
                                <span className="text-sm font-medium text-foreground">{service.name}</span>
                                <span className="block text-xs text-muted-foreground mt-0.5">{service.desc}</span>
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
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-8 space-y-1">
                      {serviceDropdown.map((s) => (
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
