import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-hairline shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-20">
          {/* Left menu (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] text-foreground/80">
            {links.slice(0, 3).map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Logo center */}
          <a href="#top" className="flex items-center justify-start lg:justify-center gap-2.5">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-9 w-auto object-contain"
            />
            <span className="font-display text-[17px] leading-none text-foreground tracking-tight">
              ABC <span className="text-gold-deep">&</span> Associates
            </span>
          </a>

          {/* Right menu + CTA (desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-8 text-[14px] text-foreground/80">
            {links.slice(3).map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-[13px] font-medium transition-colors hover:bg-gold-deep"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile burger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden justify-self-end h-10 w-10 rounded-md border border-hairline flex items-center justify-center text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-hairline bg-background"
          >
            <ul className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block py-3 text-[15px] text-foreground border-b border-hairline last:border-0"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
