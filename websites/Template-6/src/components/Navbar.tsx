import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-10 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(13,13,13,0.96)" : "rgba(13,13,13,0.7)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: `1px solid rgba(224,140,46,${scrolled ? 0.2 : 0.12})`,
        }}
      >
        {/* Logo + Company Name */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="xyz & Associates Logo"
            className="h-8 transition-all duration-300"
            style={{
              filter: `drop-shadow(0 0 ${scrolled ? '10px' : '6px'} rgba(224,140,46,${scrolled ? 0.5 : 0.35}))`,
            }}
          />
          <span className="hidden md:flex flex-col font-bold text-base leading-tight tracking-wide select-none text-linen">
            xyz & Associates
            <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
          </span>
        </div>

        {/* Center nav links - desktop */}
        <div className="hidden lg:flex items-center gap-1 mx-auto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-heading text-[13px] font-medium tracking-[0.5px] px-3 py-1.5 rounded transition-all duration-200"
              style={{
                color: hoveredLink === item.label ? "#E08C2E" : "rgba(245,240,232,0.7)",
                background: hoveredLink === item.label ? "rgba(224,140,46,0.07)" : "transparent",
              }}
              onMouseEnter={() => setHoveredLink(item.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.label}
              {/* Underline */}
              <span
                className="absolute bottom-0 left-3 right-3 h-px bg-amber2 transition-transform duration-250 origin-left"
                style={{
                  transform: hoveredLink === item.label ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-amber2 animate-pulse-dot" />
          <span className="font-mono text-[11px] text-amber2 tracking-wide">
            OPEN FOR CONSULTATION
          </span>
          <a
            href="#contact"
            className="btn-shimmer font-heading text-[13px] font-semibold bg-amber2 text-charcoal-void px-5 py-2.5 rounded hover:bg-amber2-hot hover:-translate-y-px transition-all duration-250"
            style={{
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.boxShadow = "0 0 20px rgba(224,140,46,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.boxShadow = "none";
            }}
          >
            Connect →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-linen" />
          <span className="block w-4 h-px bg-amber2" />
          <span className="block w-6 h-px bg-linen" />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col justify-center px-8"
            style={{ background: "#0D0D0D" }}
          >
            <motion.button
              className="absolute top-5 right-6 text-amber2 text-3xl font-light"
              onClick={() => setMobileOpen(false)}
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              aria-label="Close menu"
            >
              ✕
            </motion.button>

            <div className="flex flex-col items-center mb-8">
              <img
                src="https://api.digitechai.in/uploads/logo.png"
                alt="xyz & Associates Logo"
                className="h-12 mb-1"
              />
              <span className="font-bold text-linen text-lg tracking-wide select-none flex flex-col items-center">
                xyz & Associates
                <span className="font-normal text-xs tracking-normal -mt-1">Chartered Accountants</span>
              </span>
            </div>
            <div className="space-y-5">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="block font-heading font-bold text-3xl text-linen hover:text-amber2 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="font-mono text-sm text-amber2 mr-3">
                    {String(i + 1).padStart(2, "0")}_
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-8 left-8 font-mono text-xs text-linen/40 space-y-1">
              <p>hello@digitechca.in</p>
              <p>+91 98765 43210</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
