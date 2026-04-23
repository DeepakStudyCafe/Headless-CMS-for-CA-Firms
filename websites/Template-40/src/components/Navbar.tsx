import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Tax Planning",
  "GST Services",
  "Audit & Assurance",
  "Company Registration",
  "Business Consulting",
  "Compliance Services",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-card border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}>
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="ABC & Associates logo"
            className="h-12 w-auto object-contain"
            loading="eager"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-primary">ABC & Associates</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Chartered Accountants</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.slice(0, 4).map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="nav-link text-foreground/80 hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1 text-foreground/80 hover:text-primary">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                <div className="bg-card rounded-xl shadow-elegant border border-border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {SERVICES.map((s) => (
                    <a
                      key={s}
                      href="#services"
                      onClick={(e) => { e.preventDefault(); scrollTo("#services"); }}
                      className="block px-5 py-3 text-sm text-foreground/80 hover:bg-secondary hover:text-primary transition-smooth border-b border-border/50 last:border-0"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="nav-link text-foreground/80 hover:text-primary">Query</a>
          </li>
          {NAV_LINKS.slice(4).map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="nav-link text-foreground/80 hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-elegant transition-smooth"
        >
          Get Consultation
        </a>

        <button className="lg:hidden p-2 text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-soft">
          <ul className="px-6 py-4 space-y-1">
            {[...NAV_LINKS.slice(0, 4), { label: "Services", href: "#services" }, { label: "Query", href: "#contact" }, ...NAV_LINKS.slice(4)].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                  className="block py-3 text-foreground/80 hover:text-primary font-medium border-b border-border/40"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="block text-center px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold"
              >
                Get Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
