import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/constants";
import { navItemVariant } from "@/lib/animations";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );
    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/[0.92] backdrop-blur-xl border-b border-gold/25 py-4 px-6 lg:px-16"
            : "bg-transparent py-7 px-6 lg:px-16"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo + Company Name */}
          <motion.a
            href="#home"
            className="flex-shrink-0 flex items-center gap-2"
            style={{ transform: scrolled ? "scale(0.88)" : "scale(1)", transition: "transform 0.5s ease" }}
          >
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="xyz & Associates Logo"
              className="h-10 lg:h-9 w-auto"
            />
            <span className="hidden md:flex flex-col font-bold text-cream text-lg leading-tight tracking-wide select-none">
              xyz & Associates
              <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                custom={i}
                variants={navItemVariant}
                initial="hidden"
                animate="visible"
                className="relative font-body text-sm text-cream/90 hover:text-cream transition-all duration-300 tracking-wide group"
                style={{ letterSpacing: "0em" }}
                onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.04em")}
                onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "0em")}
              >
                {item.label}
                {/* Hover underline */}
                <span className="absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                {/* Active dot */}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            custom={navItems.length}
            variants={navItemVariant}
            initial="hidden"
            animate="visible"
            className="hidden lg:block shimmer-btn px-6 py-2.5 text-sm font-body font-medium text-primary-foreground rounded-sm hover:scale-[1.03] active:scale-[0.97] transition-transform"
          >
            Book Consultation
          </motion.a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-cream p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMobileOpen(false)} className="text-cream p-2" aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center px-12 gap-6 border-l-2 border-gold/30 ml-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl md:text-5xl text-cream hover:text-gold transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
