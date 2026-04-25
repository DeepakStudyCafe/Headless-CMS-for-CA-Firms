import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services", dropdown: true },
  { href: "#query", label: "Query" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Tax Planning & Filing",
  "GST Registration & Returns",
  "Audit & Assurance",
  "Company Formation",
  "Business Advisory",
  "Compliance & Legal",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[var(--shadow-soft)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav("#home"); }} className="flex items-center gap-2">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="ABC & Associates"
            className="h-10 w-auto object-contain"
            loading="eager"
          />
          <span className="hidden sm:block font-display text-lg font-semibold tracking-tight">
            ABC <span className="text-gradient-gold">& Associates</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <div key={l.href} className="relative group">
              <button
                onClick={() => handleNav(l.href)}
                className="nav-underline text-sm font-medium text-foreground/80 hover:text-foreground inline-flex items-center gap-1"
              >
                {l.label}
                {l.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </button>
              {l.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
                  <div className="glass rounded-xl p-2 shadow-[var(--shadow-elegant)]">
                    {services.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleNav("#services")}
                        className="block w-full text-left px-4 py-2.5 text-sm rounded-lg hover:bg-secondary transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          onClick={() => handleNav("#query")}
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--shadow-gold)] transition-all"
        >
          Get a Quote
        </button>

        <button className="lg:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border mt-3">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left py-3 text-sm font-medium border-b border-border/50 last:border-0"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}