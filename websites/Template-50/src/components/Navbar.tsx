import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/career", label: "Career" },
  { to: "/query", label: "Query" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div
          className={`flex items-center justify-between h-16 md:h-18 px-5 md:px-7 rounded-full transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_8px_32px_-8px_oklch(0.3_0.05_240/0.18)]"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-blue flex items-center justify-center text-cream-soft font-display text-lg shadow-lg group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base md:text-lg text-navy font-semibold">ABC &amp; Associates</span>
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-blue font-mono">Chartered Accountants</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="nav-link text-sm font-medium text-navy/85 hover:text-navy"
                activeProps={{ className: "nav-link is-active text-sm font-medium text-navy" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-xs">
              Contact
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`h-0.5 w-6 bg-navy rounded transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy rounded transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy rounded transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-2 mx-4 glass rounded-3xl p-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-navy/85 font-medium py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
