import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  {
    label: "Services",
    href: "#services",
    children: ["Audit & Assurance", "Taxation", "Advisory", "Compliance", "Corporate Law", "Outsourcing"],
  },
  { label: "Query", href: "#contact" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`glass flex items-center justify-between rounded-full border border-border/60 px-4 sm:px-6 py-3 transition-shadow duration-500 ${
            scrolled ? "shadow-[0_10px_40px_-15px_rgba(15,23,42,0.18)]" : ""
          }`}
        >
          {/* Logo left */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-9 w-auto"
              loading="eager"
            />
            <span className="hidden sm:block font-display text-lg leading-none">
              ABC <span className="gold-text">&</span> Associates
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {NAV.map((item) => (
              <div key={item.label} className="relative group">
                <a href={item.href} className="nav-link inline-flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors">
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </a>
                {item.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-60 rounded-2xl border border-border bg-card p-2 shadow-xl">
                      {item.children.map((c) => (
                        <a
                          key={c}
                          href="#services"
                          className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
                        >
                          {c}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="btn-gold hidden sm:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Get a Quote
            </a>
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl border border-border p-4 animate-in fade-in slide-in-from-top-2">
            <nav className="grid gap-1">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold">
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
