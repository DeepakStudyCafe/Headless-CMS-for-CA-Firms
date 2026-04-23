import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Query", href: "#contact" },
  { label: "Career", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const serviceItems = [
  "Tax Planning",
  "GST Services",
  "Audit & Assurance",
  "Company Registration",
  "Business Consulting",
  "Compliance Services",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="CA Firm logo"
            className="h-10 w-auto"
            loading="eager"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <div key={l.label} className="relative group">
              <a
                href={l.href}
                className="nav-link text-sm font-medium text-foreground/80 inline-flex items-center gap-1"
              >
                {l.label}
                {l.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
              {l.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="glass shadow-soft rounded-xl py-3 min-w-[230px]">
                    {serviceItems.map((s) => (
                      <a
                        key={s}
                        href="#services"
                        className="block px-5 py-2 text-sm text-foreground/80 hover:text-gold hover:bg-gold/5 transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex btn-gold px-6 py-2.5 rounded-full text-sm font-semibold"
        >
          Get a Quote
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass mt-3 mx-4 rounded-2xl p-6 shadow-soft animate-fade-in">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/85 font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold text-center px-6 py-3 rounded-full text-sm font-semibold mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
