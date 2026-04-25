import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass border-border/40 shadow-[0_10px_40px_-20px_rgba(84,107,65,0.35)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-8 w-auto"
              width={120}
              height={32}
            />
            <span className="hidden font-display text-base text-foreground sm:inline">
              ABC <span className="text-primary">&</span> Associates
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative rounded-full px-3 py-1.5 text-[13px] font-medium text-foreground/80 transition hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-[13px] font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Book a consult
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/60"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-foreground transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-px bg-foreground transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl glass p-4 lg:hidden">
            <div className="grid grid-cols-2 gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-foreground/80 hover:bg-secondary/60"
                  activeProps={{ className: "bg-secondary text-primary" }}
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
