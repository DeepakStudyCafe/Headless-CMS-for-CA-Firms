import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const DEFAULT_NAV = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services", subItems: [] as { label: string; href: string }[] },
  { label: "TEAM", href: "/team" },
  { label: "GALLERY", href: "/gallery" },
  { label: "QUERY", href: "/query" },
  { label: "CAREER", href: "/career" },
  { label: "CONTACT", href: "/contact" },
];

const Navbar = ({ websiteData }: { websiteData?: any }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logo = websiteData?.logo || "";
  const name = websiteData?.name || "";
  const email = websiteData?.email || "";
  const phone = websiteData?.phone || "";

  // Build nav items with dynamic services from API
  const NAV_ITEMS = useMemo(() => {
    const servicesList: { title: string; href: string }[] = websiteData?.themeConfig?.services || [];
    return DEFAULT_NAV.map((item) => {
      if (item.label === "SERVICES" && servicesList.length > 0) {
        return {
          ...item,
          subItems: servicesList.map((s) => ({ label: s.title, href: s.href })),
        };
      }
      return item;
    });
  }, [websiteData]);

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
          <Link to="/" className="flex items-center gap-2">
            {logo && (
              <img
                src={logo}
                alt={`${name} Logo`}
                className="h-8 transition-all duration-300"
                style={{
                  filter: `drop-shadow(0 0 ${scrolled ? '10px' : '6px'} rgba(224,140,46,${scrolled ? 0.5 : 0.35}))`,
                }}
              />
            )}
            {name && (
              <span className="hidden md:flex flex-col font-bold text-base leading-tight tracking-wide select-none text-linen">
                {name}
                <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
              </span>
            )}
          </Link>
        </div>

        {/* Center nav links - desktop */}
        <div className="hidden lg:flex items-center gap-1 mx-auto relative">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => { setHoveredLink(item.label); if (item.subItems?.length) setServicesOpen(true); }}
              onMouseLeave={() => { setHoveredLink(null); setServicesOpen(false); }}
            >
              <Link
                to={item.href}
                className="relative font-heading text-[13px] font-medium tracking-[0.5px] px-3 py-1.5 rounded transition-all duration-200 flex items-center gap-1"
                style={{
                  color: hoveredLink === item.label || location.pathname.startsWith(item.href) && item.href !== '/' || location.pathname === item.href ? "#E08C2E" : "rgba(245,240,232,0.7)",
                  background: hoveredLink === item.label ? "rgba(224,140,46,0.07)" : "transparent",
                }}
              >
                {item.label}
                {item.subItems && item.subItems.length > 0 && <span className="text-[10px] ml-0.5">▾</span>}
                {/* Underline */}
                <span
                  className="absolute bottom-0 left-3 right-3 h-px bg-amber2 transition-transform duration-250 origin-left"
                  style={{
                    transform: hoveredLink === item.label ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>

              {/* Services dropdown */}
              {item.subItems && item.subItems.length > 0 && servicesOpen && hoveredLink === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-1 py-2 w-52 rounded-lg z-[100]"
                  style={{
                    background: "rgba(13,13,13,0.96)",
                    border: "1px solid rgba(224,140,46,0.2)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      className="block px-4 py-2 font-body text-[13px] text-linen/70 hover:text-amber2 hover:bg-amber2/5 transition-colors"
                    >
                      ▸ {sub.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link
            to="/contact"
            className="btn-shimmer font-heading text-[13px] font-semibold bg-amber2 text-charcoal-void px-5 py-2.5 rounded hover:bg-amber2-hot hover:-translate-y-px transition-all duration-250"
            style={{ boxShadow: "none" }}
          >
            Connect →
          </Link>
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
            className="fixed inset-0 z-[60] flex flex-col pt-24 pb-12 px-8 overflow-y-auto"
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
              {logo && <img src={logo} alt={`${name} Logo`} className="h-12 mb-1" />}
              {name && (
                <span className="font-bold text-linen text-lg tracking-wide select-none flex flex-col items-center">
                  {name}
                  <span className="font-normal text-xs tracking-normal -mt-1">Chartered Accountants</span>
                </span>
              )}
            </div>
            <div className="space-y-4">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={item.href}
                      className="block font-heading font-bold text-3xl text-linen hover:text-amber2 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="font-mono text-sm text-amber2 mr-3">
                        {String(i + 1).padStart(2, "0")}_
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                  {item.subItems && item.subItems.length > 0 && (
                    <div className="pl-10 mt-2 space-y-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block font-body text-sm text-linen/50 hover:text-amber2 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          › {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 mb-8 font-mono text-xs text-linen/40 space-y-1">
              {email && <p>{email}</p>}
              {phone && <p>{phone}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
