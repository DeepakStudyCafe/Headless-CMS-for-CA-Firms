import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Phone, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Team", to: "/team" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block bg-navy-deep text-white/80 text-xs">
        <div className="container-px max-w-7xl mx-auto flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-white transition">
              <Phone className="h-3.5 w-3.5" /> +91 99999 99999
            </a>
            <a href="mailto:hello@abcassociates.in" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="h-3.5 w-3.5" /> hello@abcassociates.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-accent-light transition" aria-label="social">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-white transition-shadow ${scrolled ? "shadow-[0_1px_0_0_var(--border-soft),0_8px_24px_rgba(15,23,42,0.06)]" : "border-b border-border-soft"}`}
      >
        <div className="container-px max-w-7xl mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold text-navy-deep text-lg">ABC &amp; Associates</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-subtext">Chartered Accountants</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="nav-link text-sm font-medium text-navy-deep"
                data-active={pathname === n.to}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-md bg-accent-blue px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-navy-deep transition-colors"
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden p-2 text-navy-deep"
              onClick={() => setOpen((v) => !v)}
              aria-label="menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border-soft bg-white"
            >
              <div className="container-px max-w-7xl mx-auto py-4 flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="px-2 py-2.5 text-sm font-medium text-navy-deep hover:text-accent-blue"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
