import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

const FOOTER_LOGO = "https://api.digitechai.in/uploads/footerlogo.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-maroon text-primary-foreground overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="container mx-auto px-5 lg:px-8 py-16 relative">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img src={FOOTER_LOGO} alt="Sterling & Co." className="h-14 w-auto" loading="lazy" />
            <p className="mt-5 text-sm opacity-75 leading-relaxed">
              Premium chartered accountancy delivered with discretion, precision and uncompromising standards since 1998.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full border border-[var(--gold)]/40 flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--maroon-deep)] hover:border-[var(--gold)] transition-all duration-300 hover:-translate-y-1">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={[
            ["Home", "#home"], ["About", "#about"], ["Team", "#team"],
            ["Gallery", "#gallery"], ["Career", "#career"], ["Contact", "#contact"]
          ]} />

          <FooterCol title="Services" items={[
            ["Tax Planning", "#services"], ["GST Services", "#services"],
            ["Audit & Assurance", "#services"], ["Company Registration", "#services"],
            ["Business Consulting", "#services"], ["Compliance", "#services"]
          ]} />

          <div>
            <h4 className="font-display text-xl mb-5 text-[var(--gold-soft)]">Contact</h4>
            <ul className="space-y-4 text-sm opacity-85">
              <li className="flex gap-3"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--gold)]" />12 Marine Drive, Mumbai 400 020, India</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--gold)]" />+91 98765 43210</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--gold)]" />hello@sterlingco.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-[var(--gold)]/20 flex flex-col md:flex-row justify-between items-center gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Sterling &amp; Co. Chartered Accountants. All rights reserved.</p>
          <p>Crafted with precision · ICAI Registered</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-xl mb-5 text-[var(--gold-soft)]">{title}</h4>
      <ul className="space-y-3 text-sm opacity-85">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="hover:text-[var(--gold)] transition-colors inline-block hover:translate-x-1 duration-300">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
