import { navItems, services } from "@/lib/constants";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#060A12]">
      {/* Top gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Newsletter */}
        <div className="text-center mb-16 pb-12 border-b border-gold/10">
          <h3 className="font-display text-2xl text-cream mb-4">Stay Informed on Tax & Compliance</h3>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-surface border border-gold/20 rounded-sm font-body text-sm text-cream placeholder:text-mist/50 focus:border-gold focus:outline-none transition-colors"
            />
            <button className="shimmer-btn px-6 py-3 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] active:scale-[0.97] transition-transform">
              Subscribe
            </button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://api.digitechai.in/uploads/footerlogo.png"
                alt="xyz & Associates Logo"
                className="h-9"
              />
              <span className="flex flex-col font-bold text-cream text-base leading-tight tracking-wide select-none">
                xyz & Associates
                <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
              </span>
            </div>
            <p className="font-body text-sm text-mist leading-relaxed mb-6">
              Your trusted partner for comprehensive financial solutions and regulatory compliance since 2005.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
                >
                  <s.icon size={14} className="text-mist group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-body text-sm font-semibold text-cream mb-4 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="font-body text-sm text-mist hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-body text-sm font-semibold text-cream mb-4 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.num}>
                  <a href="#services" className="font-body text-sm text-mist hover:text-gold transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-body text-sm font-semibold text-cream mb-4 tracking-wide uppercase">Contact</h4>
            <div className="space-y-3 font-body text-sm text-mist">
              <p>123 Financial District, <br />Mumbai, Maharashtra 400001</p>
              <p>
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 98765 43210</a>
              </p>
              <p>
                <a href="mailto:info@precisionfinancial.in" className="hover:text-gold transition-colors">info@precisionfinancial.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-mist/60">© 2025 Precision Financial. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="font-body text-xs text-mist/60 hover:text-gold transition-colors">Privacy Policy</a>
            <span className="text-gold/20">·</span>
            <a href="#" className="font-body text-xs text-mist/60 hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
