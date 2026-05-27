import { Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react";

export function TopBar({ websiteData }: { websiteData?: any }) {
  if (!websiteData) return null;

  return (
    <div className="hidden md:block border-b border-white/40 bg-gradient-deep text-xs text-white/90 relative z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-10">
        <div className="flex items-center gap-7">
          {websiteData.phone && (
            <a href={`tel:${websiteData.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center gap-2 hover:text-accent-cyan transition-colors">
              <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
              <span>{websiteData.phone}</span>
            </a>
          )}
          {websiteData.email && (
            <a href={`mailto:${websiteData.email}`} className="group flex items-center gap-2 hover:text-accent-cyan transition-colors">
              <Mail className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
              <span>{websiteData.email}</span>
            </a>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline mr-2 text-white/60">Follow us</span>
          {[
            { icon: Linkedin, url: websiteData.themeConfig?.socialLinks?.linkedin || '#' },
            { icon: Facebook, url: websiteData.themeConfig?.socialLinks?.facebook || '#' },
            { icon: Twitter, url: websiteData.themeConfig?.socialLinks?.twitter || '#' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.url}
              aria-label="social"
              className="h-7 w-7 grid place-items-center rounded-full bg-white/10 hover:bg-accent-cyan hover:text-dark transition-all hover:-translate-y-0.5"
            >
              <item.icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
