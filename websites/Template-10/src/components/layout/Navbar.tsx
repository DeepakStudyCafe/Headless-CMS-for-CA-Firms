import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar({ data }: { data?: any }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(location.pathname.startsWith('/services'));

  const getFirmName = (rawName?: string) => {
    if (!rawName) return "Arvind Gupta & Associates";
    if (rawName.includes("Template")) return "Arvind Gupta & Associates";
    return rawName;
  };
  const brandName = getFirmName(data?.name);

  const servicesList = useMemo(() => {
    const fallback = [
      { title: 'Bookkeeping', href: '/services/bookkeeping' },
      { title: 'Payroll', href: '/services/payroll' },
      { title: 'GST Filing', href: '/services/gst-filing' },
      { title: 'Tax Planning', href: '/services/tax-planning' },
      { title: 'Company Formation', href: '/services/company-formation' },
      { title: 'Compliance', href: '/services/compliance' },
      { title: 'Audit Services', href: '/services/audit-services' },
      { title: 'Financial Advisory', href: '/services/financial-advisory' },
    ];

    const dynamicServices = data?.themeConfig?.services;
    if (!Array.isArray(dynamicServices) || dynamicServices.length === 0) {
      return fallback;
    }

    return dynamicServices
      .map((service: any) => {
        const title = service?.title || service?.name || service?.label;
        const slug = service?.slug || String(title || '').toLowerCase().trim().replace(/\s+/g, '-');
        const href = service?.href || service?.path || (slug ? `/services/${slug}` : '/services');

        return {
          title,
          href,
        };
      })
      .filter((service: { title?: string; href?: string }) => Boolean(service.title && service.href));
  }, [data]);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(location.pathname.startsWith('/services'));
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center h-20 px-6 md:px-8 max-w-7xl mx-auto">
        
        {/* LOGO & BRAND */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={data?.logo || "https://api.digitechai.in/uploads/logo.png"}
            alt={`${brandName} Logo`}
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-base md:text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline leading-tight">
              {brandName}
            </span>
            <span className="text-[10px] md:text-sm font-medium text-slate-600 dark:text-slate-400 -mt-0.5 tracking-wide uppercase">
              Chartered Accountants
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-8 font-manrope font-semibold tracking-tight text-sm">
          <Link to="/" className={`transition-colors hover:-translate-y-0.5 duration-200 ${location.pathname === '/' ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            Home
          </Link>
          <Link to="/about" className={`transition-colors hover:-translate-y-0.5 duration-200 ${location.pathname === '/about' ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            About
          </Link>
          <Link to="/team" className={`transition-colors hover:-translate-y-0.5 duration-200 ${location.pathname === '/team' ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            Team
          </Link>
          <Link to="/gallery" className={`transition-colors hover:-translate-y-0.5 duration-200 ${location.pathname === '/gallery' ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            Gallery
          </Link>
          <div className="relative group"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/services" className={`flex items-center gap-1 transition-colors hover:-translate-y-0.5 duration-200 ${location.pathname.startsWith('/services') ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </Link>

            {/* MEGA MENU DROPDOWN */}
            {activeDropdown === 'services' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[800px] z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 p-8 grid grid-cols-2 gap-x-12 gap-y-8">
                  
                  {/* Column 1 */}
                  <Link to="/services/bookkeeping" className="flex items-start gap-4 hover:translate-x-1 transition-transform group/item">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">Bookkeeping</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">Accurate financial record keeping</p>
                    </div>
                  </Link>
                  {/* Column 2 */}
                  <Link to="/services/gst-filing" className="flex items-start gap-4 hover:translate-x-1 transition-transform group/item">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">GST Filing</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">Timely GST compliance & returns</p>
                    </div>
                  </Link>

                  {/* Column 1 */}
                  <Link to="/services/payroll" className="flex items-start gap-4 hover:translate-x-1 transition-transform group/item">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">Payroll</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">End-to-end payroll management</p>
                    </div>
                  </Link>
                  {/* Column 2 */}
                  <Link to="/services/tax-planning" className="flex items-start gap-4 hover:translate-x-1 transition-transform group/item">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">Tax Planning</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">Strategic tax optimization</p>
                    </div>
                  </Link>

                  {/* Column 1 */}
                  <Link to="/services/company-formation" className="flex items-start gap-4 hover:translate-x-1 transition-transform group/item">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">Company Formation</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">Business incorporation services</p>
                    </div>
                  </Link>
                  {/* Column 2 */}
                  <Link to="/services/compliance" className="flex items-start gap-4 hover:translate-x-1 transition-transform group/item">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">Compliance</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">Regulatory compliance support</p>
                    </div>
                  </Link>

                  {/* Column 1 */}
                  <Link to="/services/audit-services" className="flex items-start gap-4 hover:translate-x-1 transition-transform group/item">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">Audit Services</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">Comprehensive audit solutions</p>
                    </div>
                  </Link>
                  {/* Column 2 */}
                  <Link to="/services/financial-advisory" className="flex items-start gap-4 hover:translate-x-1 transition-transform group/item">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">Financial Advisory</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-snug">Expert financial guidance</p>
                    </div>
                  </Link>

                </div>
              </div>
            )}
          </div>
          <Link to="/query" className={`transition-colors hover:-translate-y-0.5 duration-200 ${location.pathname === '/query' ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            Query
          </Link>
          <Link to="/career" className={`transition-colors hover:-translate-y-0.5 duration-200 ${location.pathname === '/career' ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            Career
          </Link>
          <Link to="/contact" className={`transition-colors hover:-translate-y-0.5 duration-200 ${location.pathname === '/contact' ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            Contact
          </Link>
        </div>
        
        <div className="hidden lg:block">
          <Link to="/contact" className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-manrope font-semibold text-sm scale-95 active:scale-100 transition-all hover:translate-y-[-2px] shadow-lg shadow-primary/10">
            Get a Quote
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden text-slate-900 dark:text-slate-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="bg-slate-100/50 dark:bg-slate-800/50 h-[1px] w-full absolute bottom-0"></div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full left-0 shadow-lg max-h-[85vh] overflow-y-auto">

          
          <div className="flex flex-col p-6 space-y-4 font-manrope font-semibold text-slate-600 dark:text-slate-400">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}>Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary' : ''}`}>About</Link>
            <Link to="/team" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary transition-colors ${location.pathname === '/team' ? 'text-primary' : ''}`}>Team</Link>
            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary transition-colors ${location.pathname === '/gallery' ? 'text-primary' : ''}`}>Gallery</Link>
            
            <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary transition-colors ${location.pathname.startsWith('/services') ? 'text-primary' : ''}`}>Services</Link>
                            <button
                              type="button"
                              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                              className="p-1 text-slate-500 hover:text-primary transition-colors"
                              aria-label="Toggle services menu"
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                          </div>
                          {isMobileServicesOpen && (
                            <div className="pl-4 flex flex-col gap-3 mt-2 border-l-2 border-slate-100 dark:border-slate-800">
                              {servicesList.map((service, i) => (
                                <Link key={i} to={service.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">{service.title}</Link>
                              ))}
                            </div>
                          )}
            </div>

            <Link to="/query" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary transition-colors ${location.pathname === '/query' ? 'text-primary' : ''}`}>Query</Link>
            <Link to="/career" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary transition-colors ${location.pathname === '/career' ? 'text-primary' : ''}`}>Career</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary transition-colors ${location.pathname === '/contact' ? 'text-primary' : ''}`}>Contact</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-on-primary text-center px-6 py-3 rounded-xl mt-4 shadow-sm active:scale-95 transition-transform block w-full">        
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


