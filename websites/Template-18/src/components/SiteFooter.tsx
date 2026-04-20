import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-navy)] text-white/80">
      <div className="container-tight py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4 space-y-5">
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="h-12 w-auto"
            loading="lazy"
          />
          <p className="text-sm leading-relaxed text-white/70 max-w-sm">
            ABC &amp; Associates is a chartered accountancy firm delivering audit, tax, and advisory
            services to businesses building for the long term.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 hover:border-[var(--color-accent)] hover:text-white transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/about", l: "About" },
              { to: "/services", l: "Services" },
              { to: "/team", l: "Team" },
              { to: "/career", l: "Career" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-white transition-colors">{i.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {["Audit & Assurance", "Direct Taxation", "GST Advisory", "Corporate Compliance", "Business Advisory", "Outsourced Accounting"].map((s) => (
              <li key={s} className="hover:text-white transition-colors cursor-default">{s}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0" /><span>4th Floor, Trade Centre,<br />Bandra Kurla Complex, Mumbai 400051</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0" /><span>+91 12345 67890</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0" /><span>contact@abcassociates.in</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
