import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  {
    label: "Services",
    href: "#services",
    children: [
      "Tax Planning",
      "GST Services",
      "Audit & Assurance",
      "Company Registration",
      "Business Consulting",
      "Compliance Services",
    ],
  },
  { label: "Query", href: "#contact" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-soft backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 blur-md transition-opacity" />
            <img src="https://api.digitechai.in/uploads/logo.png" alt="ABC & Associates" className="relative h-10 w-auto" />
          </div>
          <span className="hidden sm:block font-bold text-base tracking-tight">
            ABC <span className="text-gradient">& Associates</span>
          </span>
        </a>

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
                        {l.children.map((c, i) => (
                          <motion.a
                            key={c}
                            href="#services"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-foreground hover:bg-gradient-primary hover:text-primary-foreground transition-all group"
                          >
                            <span>{c}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a key={l.label} href={l.href} className="nav-link">
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton href="#contact" className="hidden md:inline-flex btn-premium text-sm">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
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
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium border-b border-border/40 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 text-center btn-premium"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
