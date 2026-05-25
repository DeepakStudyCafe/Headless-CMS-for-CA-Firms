import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from '@tanstack/react-router';
import { getWebsiteData } from '@/lib/api';

const menuLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'Bookkeeping', path: '/services/bookkeeping' },
      { name: 'GST Filing', path: '/services/gst-filing' },
      { name: 'Payroll', path: '/services/payroll' },
      { name: 'Tax Planning', path: '/services/tax-planning' },
      { name: 'Company Formation', path: '/services/company-formation' },
      { name: 'Compliance', path: '/services/compliance' },
      { name: 'Audit Services', path: '/services/audit-services' },
      { name: 'Financial Advisory', path: '/services/financial-advisory' },
    ],
  },
  { name: 'Query', path: '/query' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const location = useLocation();

  useEffect(() => {
    getWebsiteData().then(setWebsiteData);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoUrl = websiteData?.logo || '';
  const siteName = websiteData?.name || '';

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`w-full max-w-7xl rounded-full border bg-background/70 backdrop-blur-xl transition-all duration-500 ${scrolled ? 'border-border/80 shadow-float py-2' : 'border-border/50 shadow-soft py-3'}`}
      >
        <div className="flex items-center justify-between pl-4 pr-2 md:pl-6 md:pr-3">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            {logoUrl && (
              <img
                src={logoUrl}
                alt="Logo"
                className="h-8 md:h-9 w-auto object-contain"
              />
            )}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm md:text-base font-semibold text-foreground">{siteName}</span>
              <span className="text-xs md:text-sm text-muted-foreground tracking-[0.2em]">
                Chartered Accountants
              </span>
            </div>
          </Link>
          <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {menuLinks.map((l) => {
              const isActive = l.path === '/' ? location.pathname === '/' : location.pathname.startsWith(l.path);
              if (l.dropdown) {
                return (
                  <li key={l.name} className="relative group">
                    <Link
                      to={l.path}
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-full ${isActive ? 'text-foreground font-medium' : 'text-foreground/75 hover:text-foreground'
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          className="absolute inset-0 rounded-full bg-accent/70"
                        />
                      )}
                      <span className="relative z-10">{l.name}</span>
                      <ChevronDown size={14} className="relative z-10 opacity-70 group-hover:rotate-180 transition-transform" />
                    </Link>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                      <div className="bg-background border border-border shadow-float rounded-2xl p-2 w-56 flex flex-col gap-1">
                        {l.dropdown.map(d => (
                          <Link
                            key={d.name}
                            to={d.path}
                            className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent rounded-xl transition-colors"
                          >
                            {d.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className={`relative px-3 py-2 text-sm transition-colors rounded-full flex items-center ${isActive ? 'text-foreground font-medium' : 'text-foreground/75 hover:text-foreground'}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-accent/70"
                      />
                    )}
                    <span className="relative z-10">{l.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground text-background pl-5 pr-4 py-2.5 text-sm font-medium transition-all hover:bg-secondary hover:shadow-lift"
            >
              Get a Quote
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <button
            className="lg:hidden p-2 text-foreground"
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden mt-3 px-5 pb-4 flex flex-col gap-1"
            >
              {menuLinks.map((l, i) => (
                <div key={l.name}>
                  <Link
                    to={l.path}
                    onClick={() => !l.dropdown && setOpen(false)}
                    className="block text-sm text-foreground/80 py-2.5 px-3 rounded-lg hover:bg-accent/60"
                  >
                    {l.name}
                  </Link>
                  {l.dropdown && (
                    <div className="pl-4 flex flex-col gap-1 border-l ml-3 border-border/50">
                      {l.dropdown.map(d => (
                        <Link
                          key={d.name}
                          to={d.path}
                          onClick={() => setOpen(false)}
                          className="block text-sm text-foreground/70 py-2 px-3 rounded-lg hover:bg-accent/60"
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-foreground text-background px-5 py-3 text-sm text-center font-medium"
              >
                Get a Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}