import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services", dropdown: ["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"] },
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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-luxe py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="https://api.digitechai.in/uploads/logo.png" alt="CA Firm logo" className="h-10 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label} className="relative group">
              <a href={l.href} className="link-underline text-sm font-medium text-ink hover:text-gold transition-colors flex items-center gap-1">
                {l.label}
                {l.dropdown && <ChevronDown size={14} />}
              </a>
              {l.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="glass rounded-xl shadow-luxe py-3 min-w-[220px]">
                    {l.dropdown.map((d) => (
                      <a key={d} href="#services" className="block px-5 py-2 text-sm text-ink-soft hover:text-gold hover:bg-cream-deep transition">
                        {d}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full gold-gradient text-white text-sm font-semibold shadow-luxe hover:scale-105 transition-transform"
        >
          Get a Quote
        </a>

        <button className="lg:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass mx-4 mt-2 rounded-2xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-ink font-medium hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 text-center px-6 py-2.5 rounded-full gold-gradient text-white text-sm font-semibold">
              Get a Quote
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
