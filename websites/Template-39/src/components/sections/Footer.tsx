import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="https://api.digitechai.in/uploads/footerlogo.png" alt="ABC & Associates" className="h-14 mb-4" />
          <p className="text-sm leading-relaxed text-white/70">
            ABC & Associates — a premier Chartered Accountant firm delivering trusted financial,
            tax, and advisory services across India for over 20 years.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-lg">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {["Home", "About", "Team", "Gallery", "Career", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-pink transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-lg">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-pink transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-lg">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-pink flex-shrink-0 mt-0.5" /> 12, Business Park, Andheri East, Mumbai 400069</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-pink flex-shrink-0 mt-0.5" /> +91 99999 99999</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-pink flex-shrink-0 mt-0.5" /> info@abcassociates.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 gap-2">
          <p>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</p>
          <p>Designed with precision · Built for trust</p>
        </div>
      </div>
    </footer>
  );
}
