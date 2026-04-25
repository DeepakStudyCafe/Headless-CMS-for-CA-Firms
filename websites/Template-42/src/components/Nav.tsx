import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#query", label: "Query" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 transition-all duration-500 ${
          scrolled
            ? "glass rounded-full border border-border/60 shadow-[0_8px_30px_-12px_rgba(30,41,59,0.15)]"
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="https://api.digitechai.in/uploads/logo.png"
              alt="ABC & Associates"
              className="h-9 w-auto"
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-base text-foreground">ABC &amp; Associates</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                Chartered Accountants
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-foreground/75 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#query"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Book a Consultation
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-full border border-border bg-background/60"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-4 rounded-2xl glass border border-border p-5 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#query"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm"
            >
              Book a Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
