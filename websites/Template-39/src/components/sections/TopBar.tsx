import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-navy text-white/90 text-xs">
      <div className="container mx-auto px-6 flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-pink transition-colors">
            <Phone className="h-3.5 w-3.5" /> +91 99999 99999
          </a>
          <a href="mailto:info@abcassociates.com" className="flex items-center gap-2 hover:text-pink transition-colors">
            <Mail className="h-3.5 w-3.5" /> info@abcassociates.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="hover:text-pink transition-colors">
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
