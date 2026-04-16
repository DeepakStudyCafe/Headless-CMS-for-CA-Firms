import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { 
    label: "Services", 
    href: "/services",
    subItems: [
      { label: "Bookkeeping", href: "/services/bookkeeping", description: "Accurate financial record keeping" },
      { label: "GST Filing", href: "/services/gst-filing", description: "Timely GST compliance & returns" },
      { label: "Payroll", href: "/services/payroll", description: "End-to-end payroll management" },
      { label: "Tax Planning", href: "/services/tax-planning", description: "Strategic tax optimization" },
      { label: "Company Formation", href: "/services/company-formation", description: "Business incorporation services" },
      { label: "Compliance", href: "/services/compliance", description: "Regulatory compliance support" },
      { label: "Audit Services", href: "/services/audit-services", description: "Comprehensive audit solutions" },
      { label: "Financial Advisory", href: "/services/financial-advisory", description: "Expert financial guidance" },
    ]
  },
  { label: "Query", href: "/query" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];
import { Menu, X, ChevronDown, BookOpen, FileText, Users, Calculator, Building, ShieldCheck, Search, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const iconMap: Record<string, any> = {
  "Bookkeeping": BookOpen,
  "GST Filing": FileText,
  "Payroll": Users,
  "Tax Planning": Calculator,
  "Company Formation": Building,
  "Compliance": ShieldCheck,
  "Audit Services": Search,
  "Financial Advisory": TrendingUp
};

export default function Navbar({ websiteData }: { websiteData?: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const logo = websiteData?.logo || "https://api.digitechai.in/uploads/logo.png";
  const name = websiteData?.name || "abc & Associates";

  useEffect(() => {
    // Check initial scroll position
    setScrolled(window.scrollY > 50 || location.pathname !== "/");
    
    // Auto-scroll to top when route changes
    window.scrollTo(0, 0);

    const onScroll = () => {
      if (location.pathname === "/") {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true); // Always scrolled state on other pages for visibility
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt={`${name} Logo`}
              className="h-10 md:h-9 transition-transform duration-500 rounded bg-white p-1"
              animate={{ scale: scrolled ? 0.9 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <span
              className={`hidden md:flex flex-col font-bold text-lg tracking-wide select-none transition-colors duration-500 text-white`}
            >
              {name}
              <span className="font-normal text-xs tracking-normal -mt-1 text-gold">Chartered Accountants</span>
            </span>
          </Link>

          <div className="hidden lg:flex gap-8 items-center">
            {NAV_ITEMS.map((item, i) => {
              if (item.subItems) {
                return (
                  <div key={item.label} className="relative group">
                    <Link
                      to={item.href}
                      className={`font-sans text-[13px] flex items-center gap-1 font-medium transition-all duration-300 text-white hover:text-gold py-4`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </Link>
                    
                    {/* Two-column Dropdown based on the image */}
                    <div className="absolute top-[80%] -left-[140%] mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[600px] pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-[#CFD4D8] rounded-2xl shadow-2xl border border-white/20 mt-2 overflow-hidden">
                        <div className="grid grid-cols-2 gap-4 p-6">
                            {item.subItems.map(subItem => {
                              const Icon = iconMap[subItem.label] || BookOpen;
                              return (
                                <Link
                                  key={subItem.label}
                                  to={subItem.href}
                                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/40 transition-colors group/item"
                                >
                                  <div className="mt-0.5 text-[#2A3B36]">
                                    <Icon size={24} strokeWidth={1.5} />
                                  </div>
                                  <div>
                                    <div className="font-bold text-[#2A3B36] text-[15px] group-hover/item:text-[#1F2C28]">{subItem.label}</div>
                                    <div className="text-[#5B6D67] text-[13px] leading-tight mt-1">{subItem.description}</div>
                                  </div>
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-sans text-[13px] font-medium transition-all duration-300 text-white hover:text-gold`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="bg-[#2A3B36] text-white px-6 py-2.5 rounded hover:bg-[#1F2C28] font-sans text-[13px] font-medium transition-all"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden text-white`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-paper z-[100] lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Dark Header inside Mobile Menu */}
            <div className="bg-charcoal relative flex items-center justify-between p-4 px-6 shadow-md shrink-0 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt={`${name} Logo`}
                  className="h-10 transition-transform duration-500 rounded bg-white p-1"
                />
                <span
                  className="flex flex-col font-bold text-[17px] tracking-wide select-none text-white leading-tight"
                >
                  {name}
                  <span className="font-semibold text-[8px] tracking-[0.15em] text-gold uppercase">Chartered Accountants</span>
                </span>
              </div>
              
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-gold transition-colors p-1"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col gap-1 w-full p-6 pb-12 overflow-y-auto">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.label} className="w-full">
                  <Link
                    to={item.href}
                    onClick={() => !item.subItems && setMobileOpen(false)}
                    className="font-sans text-[15px] font-semibold text-charcoal hover:text-gold transition-colors py-3 block w-full"
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="flex flex-col gap-1 mt-1 mb-4">
                      {item.subItems.map(subItem => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-charcoal/70 hover:text-charcoal pl-6 text-[14.5px] font-medium transition-colors py-1.5 block w-full"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-charcoal text-gold px-8 py-3.5 w-full text-center block rounded-md font-bold uppercase tracking-wider text-sm hover:bg-gold hover:text-charcoal transition-colors border border-transparent hover:border-charcoal/10 shadow-md"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
