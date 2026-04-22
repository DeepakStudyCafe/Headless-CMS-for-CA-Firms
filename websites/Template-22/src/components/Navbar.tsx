import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = ["Home", "About", "Services", "Team", "Career", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = links.map((l) => (l === "Home" ? "hero" : l.toLowerCase()));
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const slug = (s: string) => (s === "Home" ? "hero" : s.toLowerCase());

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`w-full max-w-6xl rounded-full border bg-background/70 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "border-border/80 shadow-float py-2"
            : "border-border/50 shadow-soft py-3"
        }`}
      >
        <div className="flex items-center justify-between pl-4 pr-2 md:pl-6 md:pr-3">
          {/* Left: Logo */}
          <a href="#hero" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-9 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Center: Menu */}
          <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const id = slug(l);
              const isActive = active === id;
              return (
                <li key={l}>
                  <a
                    href={`#${id}`}
                    className="relative px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors rounded-full"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-accent/70"
                      />
                    )}
                    <span className={`relative ${isActive ? "text-foreground font-medium" : ""}`}>
                      {l}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground text-background pl-5 pr-4 py-2.5 text-sm font-medium transition-all hover:bg-secondary hover:shadow-lift"
            >
              Get a Quote
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden overflow-hidden mt-3 px-5 pb-4 flex flex-col gap-1"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  href={`#${slug(l)}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-foreground/80 py-2.5 px-3 rounded-lg hover:bg-accent/60"
                >
                  {l}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-foreground text-background px-5 py-3 text-sm text-center font-medium"
              >
                Get a Quote
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
