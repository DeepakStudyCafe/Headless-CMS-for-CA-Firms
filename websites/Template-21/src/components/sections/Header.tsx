import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Twitter, Facebook, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div
        className={`hidden md:block transition-all duration-500 ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100"
        } bg-primary text-primary-foreground`}
      >
        <div className="mx-auto max-w-[1400px] h-full px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-accent-soft transition-colors">
              <Phone className="h-3.5 w-3.5" /> +91 99999 99999
            </a>
            <a href="mailto:hello@abc-associates.in" className="flex items-center gap-2 hover:text-accent-soft transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>hello@abc-associates.in</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="h-3.5 w-3.5 hover:text-accent-soft cursor-pointer transition-colors" />
            <Twitter className="h-3.5 w-3.5 hover:text-accent-soft cursor-pointer transition-colors" />
            <Facebook className="h-3.5 w-3.5 hover:text-accent-soft cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(250,250,249,0.92)" : "rgba(250,250,249,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          borderColor: scrolled ? "var(--color-border)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
        className="border-b"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-md bg-primary text-primary-foreground grid place-items-center font-display text-lg font-semibold">
              A
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold text-primary tracking-tight">ABC &amp; Associates</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-subtext">Chartered Accountants</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-secondary underline-grow hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Schedule Consultation
              <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
            </a>
            <button
              className="lg:hidden text-primary"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-secondary py-1" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  );
}
