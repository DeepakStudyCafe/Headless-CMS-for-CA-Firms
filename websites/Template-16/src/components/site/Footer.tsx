import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_260)] text-white/80">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="h-12 w-auto mb-5"
          />
          <p className="text-sm leading-relaxed text-white/60">
            Trusted Chartered Accountants delivering tax, audit, and advisory excellence to
            ambitious businesses and individuals across India.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Facebook, Twitter].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-primary transition-all hover:-translate-y-0.5">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Team", "Gallery", "Career", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-accent-cyan transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-accent-cyan transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" /> 501, Corporate Tower, MG Road, Mumbai 400001</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" /> +91 XXXXX XXXXX</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" /> contact@abcassociates.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
