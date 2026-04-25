import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/query", label: "Query" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="ABC & Associates"
            className="h-9 w-auto"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[15px] text-forest-1">ABC &amp; Associates</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-ink-soft">Chartered Accountants</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] tracking-wide text-ink-soft hover:text-forest-3 transition-colors relative group"
              activeProps={{ className: "text-forest-3" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-forest-3 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase border border-forest-2 text-forest-2 px-5 py-3 hover:bg-forest-2 hover:text-cream transition-all"
        >
          Book Consult
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-forest-1 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-ink border-b border-border/50 last:border-0"
                activeProps={{ className: "text-forest-3" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
