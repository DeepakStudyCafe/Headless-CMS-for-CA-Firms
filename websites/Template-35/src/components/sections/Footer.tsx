import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/85 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        <div>
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="CA Firm"
            className="h-12 w-auto"
            loading="lazy"
          />
          <p className="mt-5 text-sm text-background/65 leading-relaxed">
            Your trusted partner for accounting, taxation, audit and advisory services. Committed
            to integrity, precision and growth.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="h-10 w-10 rounded-full border border-background/15 grid place-items-center hover:bg-gold hover:border-gold hover:text-foreground transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-background mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Team", "Gallery", "Career", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-background/70 hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-background mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"].map((l) => (
              <li key={l}>
                <a href="#services" className="text-background/70 hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-background mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-background/70">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>301, Premier Towers, Connaught Place, New Delhi 110001</span>
            </li>
            <li className="flex gap-3 text-background/70">
              <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3 text-background/70">
              <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>info@cafirm.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-background/10 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/55">
        <p>© {new Date().getFullYear()} CA Firm. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
