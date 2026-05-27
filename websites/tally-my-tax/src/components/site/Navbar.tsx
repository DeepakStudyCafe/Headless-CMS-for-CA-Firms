import { getImageUrl } from '@/lib/api';
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight, BookOpen, FileText, Users, Calculator, Building, ShieldCheck, Search, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Services",
    href: "/services",
    children: [
      { name: "Bookkeeping", path: "/services/bookkeeping", icon: BookOpen },
      { name: "GST Filing", path: "/services/gst-filing", icon: FileText },
      { name: "Payroll", path: "/services/payroll", icon: Users },
      { name: "Tax Planning", path: "/services/tax-planning", icon: Calculator },
      { name: "Company Formation", path: "/services/company-formation", icon: Building },
      { name: "Compliance", path: "/services/compliance", icon: ShieldCheck },
      { name: "Audit Services", path: "/services/audit-services", icon: Search },
      { name: "Financial Advisory", path: "/services/financial-advisory", icon: TrendingUp },
    ],
  },
  { label: "Query", href: "/query" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ websiteData }: { websiteData?: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logo = websiteData?.logo || "https://api.digitechai.in/uploads/logo.png";
  const name = websiteData?.name || "Tally My Tax";

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${scrolled
          ? "glass-strong shadow-soft backdrop-saturate-150"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold text-xl shadow-md">
              T
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="flex items-center gap-1 font-bold text-base sm:text-lg tracking-tight">
              <span className="text-black">Tally</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400">&amp; My Tax</span>
            </span>
            <span className="text-[10px] sm:text-xs text-gray-600">Smart Tax. Simple Life.</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map((l) =>
            l.children ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setSvcOpen(true)}
                onMouseLeave={() => setSvcOpen(false)}
              >
                <button className="nav-link flex items-center gap-1">
                  {l.label} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${svcOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {svcOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-3 w-72"
                    >
                      <div className="glass-strong rounded-2xl shadow-elevated p-2 border border-white/40">
                        {l.children.map((c, i) => {
                          const Icon = c.icon;
                          return (
                            <motion.div key={c.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                              <Link
                                to={c.path}
                                onClick={() => setSvcOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-foreground hover:bg-gradient-primary hover:text-primary-foreground transition-all group"
                              >
                                <Icon className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                                <span className="flex-1">{c.name}</span>
                                <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={l.label} to={l.href} className="nav-link">
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:block">
            <MagneticButton className="md:inline-flex btn-premium text-sm">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </Link>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass-strong border-t border-border/60"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium border-b border-border/40 last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 mx-auto text-center bg-gradient-primary text-white rounded-md text-xs px-2 py-1 inline-block"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

