import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-12 w-auto mb-6"
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              A boutique chartered accountancy practice helping founders, family enterprises and
              growing businesses navigate finance with quiet confidence.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 hover:bg-brass hover:border-brass hover:text-primary transition-all"
                  aria-label="Social link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="label-eyebrow mb-4">Explore</div>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/team", "Team"],
                ["/gallery", "Gallery"],
                ["/career", "Career"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-brass transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow mb-4">Services</div>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75">
              {[
                "Audit & Assurance",
                "Tax Advisory",
                "GST Compliance",
                "Business Advisory",
                "Corporate Law",
                "Virtual CFO",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-brass transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li className="flex gap-3">
                <MapPin size={15} className="mt-0.5 text-brass shrink-0" />
                <span>4th Floor, Heritage Chambers,<br/>M.G. Road, Mumbai 400001</span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-brass shrink-0" />
                <span>+91 22 4000 1234</span>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-brass shrink-0" />
                <span>hello@abcassociates.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/55">
          <div>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brass">Privacy</a>
            <a href="#" className="hover:text-brass">Terms</a>
            <a href="#" className="hover:text-brass">ICAI Membership</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
