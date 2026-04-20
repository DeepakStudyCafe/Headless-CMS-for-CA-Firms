import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top thin bar */}
      <div className="bg-[var(--color-navy)] text-white/80 text-xs">
        <div className="container-tight flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+91 12345 67890</span>
            </a>
            <a href="mailto:contact@abcassociates.in" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">contact@abcassociates.in</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`bg-white border-b border-border transition-shadow ${
          scrolled ? "shadow-[0_4px_24px_oklch(0.2_0.04_260/0.06)]" : ""
        }`}
      >
        <div className="container-tight flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-10 w-auto"
              loading="eager"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-underline text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
                activeProps={{ "data-active": "true", className: "text-[var(--color-accent)]" } as never}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center rounded-md bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-navy-2)] transition-colors"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-[var(--color-primary)]"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="container-tight py-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
