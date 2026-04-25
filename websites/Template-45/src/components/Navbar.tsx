import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  {
    label: "Services",
    href: "#services",
    children: [
      "Tax Planning",
      "GST Services",
      "Audit & Assurance",
      "Company Registration",
      "Business Consulting",
      "Compliance",
    ],
  },
  { label: "Query", href: "#query" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-9 w-auto object-contain"
            />
            <span className="hidden sm:inline font-display text-lg font-semibold tracking-tight">
              ABC <span className="text-[color:var(--wine)]">&</span> Associates
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <div key={l.label} className="relative group">
                <a
                  href={l.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.label}
                  {l.children && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
                {l.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="glass rounded-xl p-2 min-w-56 shadow-[var(--shadow-soft)]">
                      {l.children.map((c) => (
                        <a
                          key={c}
                          href="#services"
                          className="block px-3 py-2 rounded-lg text-sm hover:bg-[color:var(--mint)] transition-colors"
                        >
                          {c}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#query"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] px-5 py-2.5 text-sm font-medium hover:bg-[color:var(--wine)] transition-colors"
            >
              Get Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 shadow-[var(--shadow-soft)]">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-[color:var(--mint)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#query"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center rounded-xl bg-[color:var(--ink)] text-[color:var(--cream)] px-4 py-3 text-sm font-medium"
            >
              Get Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
