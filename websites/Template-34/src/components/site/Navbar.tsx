import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Voices", href: "#voices" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-heading tracking-tight">
            ABC
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-body">
            &amp; Associates
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-body hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-heading/80 px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] text-heading hover:bg-heading hover:text-primary-foreground transition-all duration-300"
          >
            Schedule Consultation
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5"
          aria-label="Menu"
        >
          <span
            className={`block h-px w-6 bg-heading transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-heading transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-heading transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container-editorial py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-heading"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center border border-heading px-5 py-3 text-xs uppercase tracking-[0.2em] text-heading"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
