import { Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block border-b border-white/40 bg-gradient-deep text-xs text-white/90 relative z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-10">
        <div className="flex items-center gap-7">
          <a href="tel:+910000000000" className="group flex items-center gap-2 hover:text-accent-cyan transition-colors">
            <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
            <span>+91 XXXXX XXXXX</span>
          </a>
          <a href="mailto:contact@abcassociates.com" className="group flex items-center gap-2 hover:text-accent-cyan transition-colors">
            <Mail className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
            <span>contact@abcassociates.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline mr-2 text-white/60">Follow us</span>
          {[Linkedin, Facebook, Twitter].map((I, i) => (
            <a
              key={i}
              href="#"
              aria-label="social"
              className="h-7 w-7 grid place-items-center rounded-full bg-white/10 hover:bg-accent-cyan hover:text-dark transition-all hover:-translate-y-0.5"
            >
              <I className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
