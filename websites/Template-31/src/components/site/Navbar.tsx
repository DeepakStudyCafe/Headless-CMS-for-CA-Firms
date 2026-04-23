import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO = "https://api.digitechai.in/uploads/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services", dropdown: ["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"] },
  { label: "Query", href: "#query" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-cream shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={LOGO} alt="Sterling & Co. logo" className="h-10 w-auto" loading="eager" />
          <span className="hidden sm:block font-display text-xl font-semibold text-primary">
            Sterling <span className="text-gradient-gold">&amp; Co.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <div key={l.label} className="relative group">
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 relative
                after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-[1.5px] after:w-0 after:bg-gradient-to-r after:from-[var(--gold)] after:to-[var(--maroon)]
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
                {l.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
              {l.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 glass-cream rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2">
                  {l.dropdown.map((d) => (
                    <a key={d} href="#services" className="block px-4 py-2.5 text-sm rounded-md hover:bg-primary/10 hover:text-primary transition">
                      {d}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a
          href="#query"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-maroon text-primary-foreground text-sm font-medium shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5"
        >
          Get a Quote
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-primary"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-cream border-t border-gold/20 mt-2">
          <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-md hover:bg-primary/10 text-foreground/80 hover:text-primary transition">
                {l.label}
              </a>
            ))}
            <a href="#query" onClick={() => setOpen(false)} className="mt-3 inline-flex justify-center items-center px-5 py-3 rounded-full bg-gradient-maroon text-primary-foreground font-medium">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
