import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services", dropdown: ["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration"] },
  { label: "Query", href: "#contact" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-soft" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <img src="https://api.digitechai.in/uploads/logo.png" alt="ABC & Associates" className="h-12 w-auto" />
          <span className="hidden sm:block font-display font-bold text-navy text-lg leading-tight">
            ABC & Associates
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-navy">
          {links.map((l) => (
            <li key={l.label} className="relative group">
              <a href={l.href} className="nav-link inline-flex items-center gap-1">
                {l.label}
                {l.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
              {l.dropdown && (
                <ul className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[220px]">
                  <div className="bg-white shadow-elegant rounded-lg overflow-hidden border border-border">
                    {l.dropdown.map((d) => (
                      <li key={d}>
                        <a href="#services" className="block px-4 py-2.5 text-sm hover:bg-pink-light hover:text-pink transition-colors">
                          {d}
                        </a>
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full gradient-pink text-white text-sm font-semibold shadow-pink hover:scale-105 transition-transform"
        >
          Get a Quote
        </a>

        <button className="lg:hidden text-navy" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-navy font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#contact" className="inline-flex px-5 py-2.5 rounded-full gradient-pink text-white text-sm font-semibold">Get a Quote</a>
          </ul>
        </div>
      )}
    </nav>
  );
}
