import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp } from "lucide-react";

const serviceDropdown = [
  { name: "Bookkeeping", href: "/services/bookkeeping", icon: BookOpen, desc: "Accurate financial record keeping" },
  { name: "GST Filing", href: "/services/gst-filing", icon: FileText, desc: "Timely GST compliance & returns" },
  { name: "Payroll", href: "/services/payroll", icon: Users, desc: "End-to-end payroll management" },
  { name: "Tax Planning", href: "/services/tax-planning", icon: Calculator, desc: "Strategic tax optimization" },
  { name: "Company Formation", href: "/services/company-formation", icon: Building2, desc: "Business incorporation services" },
  { name: "Compliance", href: "/services/compliance", icon: Shield, desc: "Regulatory compliance support" },
  { name: "Audit Services", href: "/services/audit-services", icon: Search, desc: "Comprehensive audit solutions" },
  { name: "Financial Advisory", href: "/services/financial-advisory", icon: TrendingUp, desc: "Expert financial guidance" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Query", href: "/query" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-[0_1px_20px_-6px_hsla(220,20%,14%,0.1)] border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-1 group">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="xyz & Associates logo"
            className="w-14 h-14 object-contain p-1 mb-2 rounded-md bg-transparent"
          />
          <div className={`transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            <span className="font-heading font-bold text-lg leading-none block">xyz & Associates</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-medium">Chartered Accountants</span>
          </div>
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-center">
          <nav className="flex items-center gap-0.5">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all flex items-center gap-1 relative ${
                    location.pathname === item.href
                      ? scrolled ? "text-primary" : "text-accent"
                      : scrolled
                      ? "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />}
                  {location.pathname === item.href && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] glass-card rounded-2xl p-5 grid grid-cols-2 gap-1.5"
                      >
                        {serviceDropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-subtle transition-all group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg transition-all">
                              <service.icon className="w-4.5 h-4.5 text-primary group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{service.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{service.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/40 overflow-hidden"
          >
            <div className="container py-5 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-emerald-subtle transition-colors font-medium text-sm"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-6 space-y-0.5 mt-1">
                      {serviceDropdown.map((s) => (
                        <Link key={s.name} to={s.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="block mx-4 mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center font-semibold text-sm">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
