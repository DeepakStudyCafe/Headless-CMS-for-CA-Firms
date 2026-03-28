import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Briefcase, Image, Users, BarChart2, Calendar, FileText, Phone, Globe, Code, Clipboard, PieChart } from 'lucide-react';
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

  // return icon component (not an element) so caller can set classes (color/hover)
  const getIconForService = (name: string) => {
    const key = (name || '').toLowerCase();
    if (key.includes('tax') || key.includes('gst') || key.includes('compliance')) return PieChart;
    if (key.includes('audit')) return Clipboard;
    if (key.includes('accounts') || key.includes('book') || key.includes('accounting')) return FileText;
    if (key.includes('payroll')) return Users;
    if (key.includes('financial') || key.includes('finance') || key.includes('planning')) return BarChart2;
    if (key.includes('consult') || key.includes('advis') || key.includes('counsel')) return Globe;
    if (key.includes('it') || key.includes('tech') || key.includes('software') || key.includes('website')) return Code;
    if (key.includes('appointment') || key.includes('meeting') || key.includes('schedule')) return Calendar;
    if (key.includes('phone') || key.includes('call') || key.includes('helpline')) return Phone;
    return Briefcase;
  };

  const serviceMeta: Record<string, { icon?: any; description?: string }> = {
    // common service titles used across the site (icon = component)
    'bookkeeping': { icon: FileText, description: 'Daily bookkeeping, reconciliations and MIS reports' },
    'gst filing': { icon: PieChart, description: 'Monthly/quarterly GST return filing and GST advisory' },
    'tax planning': { icon: BarChart2, description: 'Tax planning and optimisation for businesses and individuals' },
    'audit services': { icon: Clipboard, description: 'Statutory, tax and internal audit services' },
    'company formation': { icon: Globe, description: 'Company incorporation and registration services' },
    'compliance': { icon: PieChart, description: 'Regulatory compliance and filings' },
    'payroll': { icon: Users, description: 'Payroll processing, TDS and statutory returns' },
    'financial advisory': { icon: BarChart2, description: 'Financial advisory, budgeting and forecasting' },
    'tax filing': { icon: PieChart, description: 'GST & income tax returns, compliance' },
    'gst registration': { icon: PieChart, description: 'GST registration and filings' },
    'audit': { icon: Clipboard, description: 'Statutory & tax audit services' },
    'accounting': { icon: FileText, description: 'Bookkeeping, MIS and financial statements' },
    'financial planning': { icon: BarChart2, description: 'Financial advisory and planning' },
    'company registration': { icon: Globe, description: 'Company formation & legal compliance' },
    'it services': { icon: Code, description: 'IT, software and website services' },
    'appointments': { icon: Calendar, description: 'Schedule meetings or consultations' },
  };

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
          <nav className="hidden md:flex items-center gap-1">
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

                {item.hasDropdown && item.subItems && item.subItems.length > 0 && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-2"
                      >
                        <div className="bg-card rounded-xl shadow-lg border border-border/40 p-3">
                          <div className="grid grid-cols-2 gap-3">
                            {item.subItems.map((service: any) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-2 rounded-lg hover:bg-navy/6 transition-colors group"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 flex-shrink-0 rounded-md bg-muted p-1 flex items-center justify-center">
                                    {service.image || (typeof service.icon === 'string') ? (
                                      <img src={service.icon || service.image} alt={service.name} className="w-full h-full object-contain" />
                                    ) : (
                                      (() => {
                                        const IconComp = serviceMeta[(service.name || '').toLowerCase()]?.icon || getIconForService(service.name);
                                        return <IconComp className="w-5 h-5 text-navy transition-colors duration-200 group-hover:text-accent" />;
                                      })()
                                    )}
                                  </div>

                                  <div>
                                    <div className="text-xs font-medium text-foreground leading-tight">{service.name}</div>
                                    <div className="text-[10px] text-muted-foreground mt-0.5">{service.description || service.subtitle || service.excerpt || serviceMeta[(service.name || '').toLowerCase()]?.description || 'Service'}</div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <Link to="/contact" className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-md bg-navy text-primary-foreground hover:bg-navy-light transition-all">
            Get a Consultation
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden p-2 ${!isScrolled ? 'text-white' : 'text-foreground'}`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="md:hidden fixed inset-0 z-50">
            {/* backdrop */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black" onClick={() => setMobileOpen(false)} />

            {/* drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.18 }}
              className="absolute right-0 top-0 h-full w-full sm:w-80 bg-card p-6 overflow-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="w-9 h-9 rounded-md overflow-hidden bg-transparent flex items-center justify-center p-1">
                    <img src={logoUrl} alt={`${firmName} logo`} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">{firmName}</span>
                </Link>

                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md text-foreground hover:bg-muted">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="divide-y divide-border/40">
                {navItems.map((item) => (
                  <div key={item.name} className="py-3">
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block w-full text-base font-medium text-foreground py-2"
                    >
                      {item.name}
                    </Link>

                    {item.hasDropdown && item.subItems && item.subItems.length > 0 && (
                      <div className="mt-2 pl-4 space-y-1">
                        {item.subItems.map((s) => (
                          <Link key={s.name} to={s.href} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground py-1 break-words">
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6">
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="block w-full text-center px-4 py-3 text-sm font-medium rounded-md bg-navy text-primary-foreground">
                  Get a Consultation
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
