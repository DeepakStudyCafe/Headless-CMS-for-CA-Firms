import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/query", label: "Query" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const left = links.slice(0, 4);
  const right = links.slice(4);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F3F4F4]/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Desktop left */}
        <ul className="hidden lg:flex flex-1 items-center gap-8 text-[13px] uppercase tracking-[0.18em]">
          {left.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`transition-colors hover:text-wine ${
                  scrolled ? "text-ink" : "text-white"
                }`}
                activeProps={{ className: "text-wine" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://api.digitechai.in/uploads/logo.png"
            alt="ABC & Associates"
            className={`h-12 w-auto object-contain transition-all ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop right */}
        <ul className="hidden lg:flex flex-1 items-center justify-end gap-8 text-[13px] uppercase tracking-[0.18em]">
          {right.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`transition-colors hover:text-wine ${
                  scrolled ? "text-ink" : "text-white"
                }`}
                activeProps={{ className: "text-wine" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-ink" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink text-white px-6 py-8 mt-3">
          <ul className="flex flex-col gap-5 text-sm uppercase tracking-[0.2em]">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className="hover:text-wine">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
