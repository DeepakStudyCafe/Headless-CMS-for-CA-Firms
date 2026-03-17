import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl backdrop-saturate-[180%] shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b-2 border-gold py-2"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3">
            <motion.img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="xyz & Associates Logo"
              className="h-10 md:h-9 transition-transform duration-500"
              animate={{ scale: scrolled ? 0.85 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <span
              className={`hidden md:flex flex-col font-bold text-lg tracking-wide select-none transition-colors duration-500 ${scrolled ? "text-charcoal" : "text-white"}`}
            >
              xyz & Associates
              <span className="font-normal text-xs tracking-normal -mt-1">Chartered Accountants</span>
            </span>
          </a>

          <div className="hidden lg:flex gap-8 items-center">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className={`font-sans text-[11px] uppercase tracking-[0.12em] font-medium transition-all duration-300 relative group ${
                  scrolled ? "text-charcoal" : "text-white"
                } hover:text-gold hover:tracking-[0.18em]`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gold origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
            <a
              href="#contact"
              className="shimmer-btn px-6 py-2.5 text-charcoal font-sans text-[10px] uppercase tracking-[0.12em] font-bold transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Get Consultation
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${scrolled ? "text-charcoal" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-charcoal z-40 lg:hidden flex flex-col justify-center items-center"
          >
            {/* Gold accent lines */}
            <div className="absolute top-0 left-8 w-[1px] h-full bg-gold/10" />
            <div className="absolute top-0 right-8 w-[1px] h-full bg-gold/10" />

            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://api.digitechai.in/uploads/logo.png"
                  alt="xyz & Associates Logo"
                  className="h-12 mb-1"
                />
                <span className="font-bold text-white text-lg tracking-wide select-none flex flex-col items-center">
                  xyz & Associates
                  <span className="font-normal text-xs tracking-normal -mt-1">Chartered Accountants</span>
                </span>
              </div>
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="font-display text-2xl text-white hover:text-gold transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="shimmer-btn px-8 py-3 text-charcoal font-sans text-xs uppercase tracking-[0.12em] font-bold mt-4"
              >
                Get Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
