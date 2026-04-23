import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const FOOTER_LOGO = "https://api.digitechai.in/uploads/footerlogo.png";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-4 gap-10">
        <div>
          <img src={FOOTER_LOGO} alt="ABC & Associates" className="h-12 w-auto" loading="lazy" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            ABC & Associates — your trusted Chartered Accountant firm for taxation, audit and advisory.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-primary-deep flex items-center justify-center transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {["Home", "About", "Team", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-white hover:translate-x-1 inline-block transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Compliance"].map((l) => (
              <li key={l}>
                <a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5" /> 123 Finance Tower, MG Road, Bengaluru 560001</li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0 mt-0.5" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0 mt-0.5" /> contact@abcassociates.in</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</p>
          <p>Crafted with precision · Premium CA Services</p>
        </div>
      </div>
    </footer>
  );
}
