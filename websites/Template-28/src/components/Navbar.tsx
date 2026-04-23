import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const services = [
  "Audit & Assurance",
  "Taxation",
  "GST Advisory",
  "Company Formation",
  "Bookkeeping",
  "FEMA & RBI Compliance",
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [services_open, setServicesOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
    { label: "Services", href: "#services", dropdown: true },
    { label: "Query", href: "#query" },
    { label: "Career", href: "#career" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={ref}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between gap-6 rounded-full glass shadow-luxe pl-4 pr-2 py-2 transition-all ${
            scrolled ? "ring-gold" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-9 w-auto"
              loading="eager"
            />
            <span className="font-display text-lg leading-none hidden sm:block">
              ABC <span className="gradient-text-gold">&</span> Associates
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
            {items.map((it) =>
              it.dropdown ? (
                <li
                  key={it.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a href={it.href} className="nav-link">
                    {it.label}
                  </a>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all ${
                      services_open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="w-72 rounded-3xl glass shadow-luxe p-3 ring-1 ring-border">
                      {services.map((s) => (
                        <a
                          key={s}
                          href="#services"
                          className="block px-4 py-2.5 rounded-2xl text-sm hover:bg-secondary transition"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={it.label}>
                  <a href={it.href} className="nav-link">
                    {it.label}
                  </a>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-foreground transition shadow-luxe"
            >
              Get a Quote
              <span className="text-gold">→</span>
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[600px] mt-3" : "max-h-0"
          }`}
        >
          <div className="rounded-3xl glass shadow-luxe p-4 ring-1 ring-border">
            <ul className="grid gap-1">
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-2xl hover:bg-secondary text-sm font-medium"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block text-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
