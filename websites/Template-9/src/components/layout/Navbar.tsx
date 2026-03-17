import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "bg-surface/95 backdrop-blur-xl py-3 shadow-sm border-b border-primary/15"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.a href="#" className="flex items-center gap-2">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="xyz & Associates Logo"
              className="transition-transform duration-500"
              style={{ height: scrolled ? "32px" : "35px" }}
            />
            <span
              className={`hidden md:flex flex-col font-bold text-base leading-tight tracking-wide select-none transition-colors duration-500 ${scrolled ? "text-text-main" : "text-surface"}`}
            >
              xyz & Associates
              <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
            </span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                className={`relative text-sm font-body font-medium transition-all duration-300 hover:tracking-wider group ${
                  scrolled ? "text-text-main" : "text-surface"
                } hover:text-ca-accent`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-ca-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className={`hidden lg:inline-flex btn-shimmer px-5 py-2.5 text-sm font-body font-semibold rounded transition-all duration-300 ${
                scrolled
                  ? "bg-ca-accent text-surface hover:bg-transparent hover:text-ca-accent border border-ca-accent"
                  : "bg-ca-accent text-surface hover:bg-transparent hover:text-surface border border-transparent hover:border-surface"
              }`}
            >
              Book Consultation
            </motion.a>
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 ${scrolled ? "text-text-main" : "text-surface"}`}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-deep/97 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-surface"
            >
              <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X size={32} />
              </motion.div>
            </button>

            <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-10" viewBox="0 0 200 200">
              <path d="M 180 100 A 80 80 0 0 1 100 180" stroke="hsl(172, 46%, 45%)" strokeWidth="3" fill="none" />
            </svg>

            <div className="flex flex-col items-center mb-8">
              <img
                src="https://api.digitechai.in/uploads/logo.png"
                alt="xyz & Associates Logo"
                className="h-12 mb-1"
              />
              <span className="font-bold text-surface text-lg tracking-wide select-none flex flex-col items-center">
                xyz & Associates
                <span className="font-normal text-xs tracking-normal -mt-1">Chartered Accountants</span>
              </span>
            </div>
            <nav className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-surface font-display text-4xl font-semibold hover:text-ca-accent-2 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
