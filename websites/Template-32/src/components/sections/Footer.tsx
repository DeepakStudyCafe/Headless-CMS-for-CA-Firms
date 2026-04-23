import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-section border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div>
            <img src="https://api.digitechai.in/uploads/footerlogo.png" alt="Logo" className="h-12 mb-5" loading="lazy" />
            <p className="text-sm text-muted-foreground leading-relaxed">Premium chartered accountancy services trusted by ambitious businesses across India.</p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-gold hover:border-gold/40 transition" aria-label="social">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["Home", "About", "Team", "Gallery", "Career", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"].map((l) => (
                <li key={l}><a href="#services" className="text-muted-foreground hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Maker Tower, Nariman Point, Mumbai 400021</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" /> +91 98765 43210</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" /> info@cafirm.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CA Firm. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-gold transition">Privacy</a><a href="#" className="hover:text-gold transition">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
