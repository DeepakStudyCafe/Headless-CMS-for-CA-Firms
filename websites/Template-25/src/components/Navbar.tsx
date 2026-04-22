import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Firm", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Trust", href: "#trust" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-18 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="ABC & Associates"
            className="h-10 w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base text-primary-deeper tracking-tight">ABC &amp; Associates</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Chartered Accountants</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-foreground/80 hover:text-primary-deeper transition-colors group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary-deeper scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary-deeper text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors"
          >
            Book Consultation
            <span className="inline-block">→</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-border"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-5 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden border-t border-border bg-background"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-foreground/80">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center bg-primary-deeper text-primary-foreground px-5 py-3 rounded-full text-sm">
              Book Consultation
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
