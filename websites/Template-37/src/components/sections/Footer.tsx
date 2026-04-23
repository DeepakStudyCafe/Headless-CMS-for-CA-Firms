import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border pt-20 pb-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="CA Firm"
            className="h-12 w-auto object-contain mb-5"
            loading="lazy"
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premier chartered accountancy firm delivering precision, integrity,
            and modern financial expertise.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-gradient-gold hover:border-transparent hover:text-primary-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {["Home", "About", "Team", "Gallery", "Career", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-primary transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-5">Contact Info</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary mt-1" /> 501, Premier Heights, MG Road, Mumbai 400001</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-primary mt-1" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-primary mt-1" /> contact@cafirm.com</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} CA Firm. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Terms</a>
        </div>
      </div>
    </footer>
  );
}
