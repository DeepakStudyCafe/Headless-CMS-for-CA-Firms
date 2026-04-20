import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/75">
      <div className="container-px max-w-7xl mx-auto py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="h-12 w-auto mb-5"
          />
          <p className="text-sm leading-relaxed text-white/60 max-w-xs">
            A premier chartered accountancy firm delivering audit, tax and advisory excellence to forward-thinking businesses.
          </p>
          <div className="flex gap-3 mt-6">
            {[FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:border-accent-light hover:text-white transition"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "About Us", to: "/about" },
              { label: "Our Team", to: "/team" },
              { label: "Career", to: "/career" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent-light transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {["Audit & Assurance", "Direct & Indirect Tax", "GST Advisory", "Corporate Compliance", "Business Advisory"].map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-accent-light transition">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent-light shrink-0" /> 12th Floor, Corporate Tower, Mumbai 400001</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent-light shrink-0" /> +91 99999 99999</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent-light shrink-0" /> hello@abcassociates.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px max-w-7xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</p>
          <p>ICAI Registered · Chartered Accountants</p>
        </div>
      </div>
    </footer>
  );
}
