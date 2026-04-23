import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const quick = ["Home", "About", "Team", "Gallery", "Career", "Contact"];
const services = ["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"];
const socials = [Facebook, Twitter, Linkedin, Instagram];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-14 w-auto mb-5 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-sm text-cream/70 leading-relaxed mb-5">
              A trusted Chartered Accountancy firm delivering precision, integrity, and growth-focused financial solutions since 1998.
            </p>
            <div className="flex gap-3">
              {socials.map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quick.map((q) => (
                <li key={q}>
                  <a href={`#${q.toLowerCase()}`} className="text-sm text-cream/70 hover:text-primary-foreground hover:translate-x-1 inline-block transition-smooth">
                    {q}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-cream/70 hover:text-primary-foreground hover:translate-x-1 inline-block transition-smooth">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary-foreground flex-shrink-0" /> 302, Heritage Tower, MG Road, New Delhi 110001</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary-foreground flex-shrink-0" /> +91 98765 43210</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary-foreground flex-shrink-0" /> info@abcassociates.in</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-cream/60">
          <div>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
