import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Team", id: "team" },
  { label: "Gallery", id: "gallery" },
  { label: "Services", id: "services", dropdown: ["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"] },
  { label: "Query", id: "contact" },
  { label: "Career", id: "career" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    setActive(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="flex items-center gap-3">
          <img src="https://api.digitechai.in/uploads/logo.png" alt="CA Firm" className="h-10 w-auto" loading="eager" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <div key={l.label} className="relative group">
              <button
                onClick={() => scrollTo(l.id)}
                data-active={active === l.id}
                className="nav-link text-sm font-medium text-foreground/80 hover:text-gold flex items-center gap-1"
              >
                {l.label}
                {l.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {l.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 glass rounded-xl p-2 shadow-2xl">
                  {l.dropdown.map((d) => (
                    <button
                      key={d}
                      onClick={() => scrollTo("services")}
                      className="block w-full text-left px-4 py-2 text-sm rounded-lg text-foreground/80 hover:bg-white/5 hover:text-gold transition"
                    >
                      {d}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden lg:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-gold-soft to-gold text-primary-foreground hover:shadow-[0_0_30px_oklch(0.82_0.13_85/0.4)] transition-all"
        >
          Get Consultation
        </button>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-4 mx-6 glass rounded-2xl p-4 space-y-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.id)}
              className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:bg-white/5 hover:text-gold transition"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
