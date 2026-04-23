import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  "Tax Planning",
  "GST Services",
  "Audit & Assurance",
  "Company Registration",
  "Business Consulting",
  "Compliance Services",
];

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Team", to: "/team" as const },
  { label: "Gallery", to: "/gallery" as const },
];

const moreLinks = [
  { label: "Query", to: "/query" as const },
  { label: "Career", to: "/career" as const },
  { label: "Contact", to: "/contact" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--cream)]/90 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="ABC & Associates"
            className="h-11 w-auto"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-semibold text-foreground">
              ABC <span className="text-primary">&amp;</span> Associates
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Chartered Accountants
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-underline" activeProps={{ className: "text-primary" }}>
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link to="/services" className="nav-underline inline-flex items-center gap-1">
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            {svcOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="w-64 bg-card border border-border rounded-xl shadow-[var(--shadow-elev)] overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s}
                      to="/services"
                      hash={s.toLowerCase().replace(/\s|&/g, "-")}
                      className="block px-5 py-3 text-sm hover:bg-muted hover:text-primary transition-colors"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {moreLinks.map((l) => (
            <Link key={l.to} to={l.to} className="nav-underline" activeProps={{ className: "text-primary" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex btn-primary px-5 py-2.5 rounded-full text-sm font-medium"
        >
          Book Consultation
        </Link>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[color:var(--cream)] border-t border-border">
          <div className="container-x py-4 flex flex-col gap-1">
            {[...links, { label: "Services", to: "/services" as const }, ...moreLinks].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-foreground border-b border-border/50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 btn-primary px-5 py-3 rounded-full text-center text-sm font-medium"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
