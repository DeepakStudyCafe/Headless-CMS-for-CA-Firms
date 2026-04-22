import { Link, useLocation } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          paddingTop: scrolled ? 12 : 20,
          paddingBottom: scrolled ? 12 : 20,
        }}
        className={`fixed left-0 right-0 top-0 z-30 lg:left-[88px] transition-colors ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3 lg:hidden">
            <img src="https://api.digitechai.in/uploads/logo.png" alt="ABC" className="h-8 w-auto" />
            <span className="font-display text-sm font-semibold tracking-tight">ABC & Associates</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <span className="font-display text-[15px] font-semibold tracking-tight">
              ABC <span className="text-brand">&</span> Associates
            </span>
            <span className="ml-3 rounded-full border border-border px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Chartered Accountants
            </span>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3 py-2 text-sm transition ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {l.label}
                  {active && (
                    <motion.span layoutId="topnav-underline" className="absolute inset-x-3 -bottom-0.5 h-px bg-brand" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-brand-deep sm:inline-flex"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-0 top-[68px] z-30 border-y border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col p-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base text-foreground hover:bg-surface">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium">
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}
