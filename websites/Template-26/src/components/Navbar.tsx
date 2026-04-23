import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services", dropdown: [
    "Tax Planning", "GST Services", "Audit & Assurance",
    "Company Registration", "Business Consulting", "Compliance Services",
  ]},
  { label: "Query", href: "#contact" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-18 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="ABC & Associates"
            className="h-11 w-auto"
            loading="eager"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/85">
          {links.map((l) =>
            l.dropdown ? (
              <li
                key={l.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="nav-link inline-flex items-center gap-1">
                  {l.label} <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all ${
                    servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                  }`}
                >
                  <div className="w-64 rounded-2xl glass shadow-soft border border-border p-2">
                    {l.dropdown.map((s) => (
                      <a
                        key={s}
                        href="#services"
                        className="block px-4 py-2.5 rounded-xl text-sm hover:bg-primary/10 hover:text-primary transition"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={l.label}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            )
          )}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center h-11 px-5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:opacity-95 transition"
        >
          Get a Quote
        </a>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-5 pt-2 glass border-t border-border">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-xl text-foreground/90 hover:bg-primary/10 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center h-11 px-5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
