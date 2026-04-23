import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, Linkedin, Facebook, Twitter, Instagram, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar — minimal */}
      <div className="hidden md:block border-b border-border/70 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2 text-[11px] tracking-wide">
          <div className="flex items-center gap-7">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition">
              <Phone className="h-3 w-3" />+91 12345 67890
            </a>
            <a href="mailto:hello@abcassociates.in" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition">
              <Mail className="h-3 w-3" />hello@abcassociates.in
            </a>
          </div>
          <div className="flex items-center gap-5">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                <Icon className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar — logo left, menu right */}
      <div
        className={`backdrop-blur transition-all ${
          scrolled ? "bg-white/95 border-b border-border" : "bg-white/85 border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          {/* logo left */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-9 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
              ABC <span className="text-accent">&</span> Associates
            </span>
          </Link>

          {/* menu right */}
          <nav className="hidden lg:flex items-center gap-9 text-[13px] font-medium text-foreground/80">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="nav-link transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-sm bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-secondary"
            >
              Get a Quote
            </a>
          </nav>

          {/* mobile burger */}
          <button
            className="lg:hidden p-2 text-foreground"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
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
              <div className="flex flex-col px-6 py-3">
                {NAV.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-3 text-sm font-medium text-foreground/80"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
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
