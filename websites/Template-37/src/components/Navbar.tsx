import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
      "Compliance Services",
    ],
  },
  { label: "Query", href: "#contact" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="CA Firm Logo"
            className="h-10 w-auto object-contain"
            loading="eager"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) =>
            l.children ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="underline-gold flex items-center gap-1 text-sm font-medium text-foreground/90 hover:text-primary transition">
                  {l.label} <ChevronDown className="h-4 w-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    <div className="glass-card rounded-xl p-3 min-w-[230px] shadow-elegant">
                      {l.children.map((c) => (
                        <a
                          key={c}
                          href="#services"
                          className="block px-4 py-2 text-sm rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition"
                        >
                          {c}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="underline-gold text-sm font-medium text-foreground/90 hover:text-primary transition"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold hover:scale-105 transition"
        >
          Book Consultation
        </a>

        <button
          className="lg:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/90 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
