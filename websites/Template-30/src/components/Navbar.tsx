import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LOGO = "https://api.digitechai.in/uploads/logo.png";

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={NAV_LOGO} alt="ABC & Associates" className="h-10 w-auto" loading="eager" />
          <span className="hidden sm:block font-display font-semibold text-lg text-primary-deep">
            ABC <span className="text-muted-foreground font-normal">& Associates</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <li key={l.label} className="relative group">
              {l.children ? (
                <>
                  <button
                    className="nav-link flex items-center gap-1 hover:text-primary"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {l.label} <ChevronDown size={14} />
                  </button>
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-60 transition-all ${
                      servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="bg-card rounded-xl shadow-elegant border border-border p-2">
                      {l.children.map((c) => (
                        <a
                          key={c}
                          href="#services"
                          className="block px-3 py-2 rounded-lg text-sm hover:bg-accent hover:text-primary-deep transition"
                        >
                          {c}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={l.href} className="nav-link hover:text-primary">
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium shadow-elegant hover:scale-[1.03] transition"
        >
          Book Consultation
        </a>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mx-5 mt-3 rounded-2xl bg-card border border-border shadow-elegant p-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent hover:text-primary-deep"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-2 bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}
