import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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

export function SiteHeader() {
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
          ? "backdrop-blur-xl bg-[oklch(0.97_0.012_100/0.78)] border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="ABC & Associates"
            className="h-9 w-auto object-contain"
            loading="eager"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg text-[var(--ink)]">ABC &amp; Associates</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--forest)]">
              Chartered Accountants
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative px-3 py-2 text-sm text-[var(--ink)]/75 hover:text-[var(--ink)] transition-colors"
              activeProps={{ className: "text-[var(--ink)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
              <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-[var(--forest)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--cream)] px-5 py-2.5 text-sm hover:bg-[var(--forest)] transition-colors"
          >
            Book a consultation
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          aria-label="Menu"
          className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-[var(--ink)] transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-[var(--ink)] transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-[var(--ink)] transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--cream)] border-t border-border">
          <nav className="px-6 py-6 grid gap-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-[var(--ink)]"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
