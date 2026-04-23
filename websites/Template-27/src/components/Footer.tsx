import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 pt-20 pb-10 relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="Firm logo"
              className="h-12 w-auto mb-5"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-white/60">
              A premier chartered accountancy firm delivering trusted financial,
              tax and advisory services to growing businesses.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                  aria-label="social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", to: "/" as const },
                { label: "About", to: "/about" as const },
                { label: "Team", to: "/team" as const },
                { label: "Gallery", to: "/gallery" as const },
                { label: "Career", to: "/career" as const },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-primary-glow transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Tax Planning",
                "GST Services",
                "Audit & Assurance",
                "Company Registration",
                "Business Consulting",
                "Compliance Services",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-primary-glow transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary-glow shrink-0 mt-0.5" />
                <span>204, Trade Tower, MG Road, Mumbai 400001, India</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-primary-glow shrink-0" />
                <a href="tel:+919999999999" className="hover:text-primary-glow">+91 99999 99999</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-primary-glow shrink-0" />
                <a href="mailto:hello@firm.com" className="hover:text-primary-glow">hello@firm.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} CA Firm. All rights reserved.</p>
          <p>Crafted with precision for modern enterprises.</p>
        </div>
      </div>
    </footer>
  );
}
