import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const quickLinks = ["Home", "About", "Team", "Gallery", "Career", "Contact"];
const services = [
  "Tax Planning & Filing",
  "GST Returns",
  "Audit & Assurance",
  "Company Formation",
  "Business Advisory",
  "Compliance & Legal",
];

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.18_0.015_260)] text-[oklch(0.9_0.005_85)] pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="h-12 w-auto object-contain mb-5"
            loading="lazy"
          />
          <p className="text-sm text-white/60 leading-relaxed mb-6">
            A premier Chartered Accountancy firm offering audit, taxation,
            advisory and compliance services to businesses across India since
            2008.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="p-2.5 rounded-full bg-white/5 hover:bg-gold hover:text-foreground transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-5 text-white">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-white/60 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  {l}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-5 text-white">Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm text-white/60 hover:text-gold transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-5 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li>401, Trade Centre, BKC,<br />Mumbai 400051, India</li>
            <li>+91 22 4000 1234</li>
            <li>partners@abcassociates.in</li>
            <li>Mon – Fri · 9:30 AM – 6:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>© {new Date().getFullYear()} ABC &amp; Associates, Chartered Accountants. All rights reserved.</p>
        <p>Crafted with precision · ICAI Member Firm</p>
      </div>
    </footer>
  );
}