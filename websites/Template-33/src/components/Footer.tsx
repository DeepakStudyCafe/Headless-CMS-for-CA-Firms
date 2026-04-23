import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="https://api.digitechai.in/uploads/footerlogo.png" alt="CA Firm" className="h-12 mb-5" />
          <p className="text-sm text-cream/70 leading-relaxed">
            Premium chartered accountancy services — audit, tax, GST, and advisory — delivered with precision and integrity.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center hover:bg-gold hover:border-gold transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl mb-5 gold-text">Quick Links</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            {["Home", "About", "Team", "Gallery", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition link-underline">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl mb-5 gold-text">Services</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            {["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Compliance"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl mb-5 gold-text">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>123 Capital Tower, Nariman Point,<br />Mumbai, MH 400021</li>
            <li>+91 98200 00000</li>
            <li>hello@cafirm.in</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} CA Firm. All rights reserved.</p>
        <p>Crafted with precision · ICAI Registered</p>
      </div>
    </footer>
  );
}
