import { useEffect, useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { LinkedInIcon, TwitterIcon, FacebookIcon } from "@/components/social-icons";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // active section detection
      const offsets = navItems.map((n) => {
        const el = document.querySelector(n.href);
        if (!el) return { href: n.href, top: Number.POSITIVE_INFINITY };
        const rect = (el as HTMLElement).getBoundingClientRect();
        return { href: n.href, top: Math.abs(rect.top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].href);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-secondary text-secondary-foreground/80 text-xs">
        <div className="container-pro flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 12345 67890</span>
            </a>
            <a href="mailto:contact@abcassociates.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition">
              <Mail className="h-3.5 w-3.5" />
              <span>contact@abcassociates.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><LinkedInIcon className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition"><TwitterIcon className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition"><FacebookIcon className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-[var(--shadow-soft)] border-b border-transparent" : "border-b border-border"
        }`}
      >
        <div className="container-pro flex h-20 items-center justify-between gap-6">
          {/* Left: Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-11 w-auto object-contain"
              loading="eager"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-primary tracking-tight">ABC &amp; Associates</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-subtext">Chartered Accountants</span>
            </div>
          </a>

          {/* Right: Nav + CTA */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              {navItems.map((n) => {
                const isActive = active === n.href;
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive ? "text-accent" : "text-foreground/75 hover:text-primary"
                    }`}
                  >
                    {n.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border bg-white"
            >
              <div className="container-pro flex flex-col gap-1 py-4">
                {navItems.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2.5 text-sm font-medium transition ${
                      active === n.href ? "bg-muted text-accent" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
