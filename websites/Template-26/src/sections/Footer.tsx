import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.03_264)] text-white/80 pt-20 pb-8 mt-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="h-14 w-auto"
            loading="lazy"
          />
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            Premium chartered accountancy services for modern businesses.
            Trusted advisors for tax, audit, compliance and growth.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Team", "Gallery", "Career", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-primary transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-1 text-primary" /> 204, Business Hub, MG Road, Mumbai 400001</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-1 text-primary" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-1 text-primary" /> hello@abcassociates.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/55">
        <p>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</p>
        <p>Designed with precision · Built for performance</p>
      </div>
    </footer>
  );
}
