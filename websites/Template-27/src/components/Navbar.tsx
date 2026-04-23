import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Team", to: "/team" as const },
  { label: "Gallery", to: "/gallery" as const },
];

const services = [
  { label: "Tax Planning", to: "/services" as const },
  { label: "GST Services", to: "/services" as const },
  { label: "Audit & Assurance", to: "/services" as const },
  { label: "Company Registration", to: "/services" as const },
  { label: "Business Consulting", to: "/services" as const },
  { label: "Compliance Services", to: "/services" as const },
];

const tail = [
  { label: "Query", to: "/query" as const },
  { label: "Career", to: "/career" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-20">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="Firm logo"
            className="h-10 w-auto"
            loading="eager"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-charcoal">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="nav-link"
                data-active={location.pathname === item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link
              to="/services"
              className="nav-link inline-flex items-center gap-1"
              data-active={location.pathname === "/services"}
            >
              Services <ChevronDown size={14} />
            </Link>
            {svcOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="glass rounded-xl shadow-elegant p-2 min-w-[240px]">
                  {services.map((s) => (
                    <Link
                      key={s.label}
                      to={s.to}
                      className="block px-4 py-2.5 rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
          {tail.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="nav-link"
                data-active={location.pathname === item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary-glow transition-colors shadow-soft"
        >
          Book Consultation
        </Link>

        <button
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {[...navItems, { label: "Services", to: "/services" as const }, ...tail].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="block py-3 text-charcoal hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
