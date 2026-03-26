import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { useWebsiteData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";

const Footer = () => {
  const { data: website } = useWebsiteData();
  const themeConfig = website?.themeConfig || {};
  const fc = themeConfig.footerContent || {};
  
  // Use only DB-provided values; avoid hardcoded defaults
  const siteName = website?.name || "";
  const address = website?.address || "";
  const phone = website?.phone || "";
  const email = website?.email || "";

  const desc = fc.description || "";
  const copyright = fc.copyright || "";

  return (
    <footer className="bg-secondary text-secondary-foreground mt-0.5">
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-2">
              <img
                src="https://api.digitechai.in/uploads/footerlogo.png"
                alt="Arvind Gupta & Associates"
                className="w-14 h-14 object-contain p-1 rounded-md bg-transparent mb-2"
              />
              <div>
                <span className="font-heading font-bold text-lg block leading-none">Arvind Gupta & Associates</span>
                <span className="text-xs uppercase tracking-[0.08em] opacity-60">Chartered Accountants</span>
              </div>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-6">
              {desc}
            </p>
            <div className="flex gap-2">
              {fc.linkedin && (
                <a href={fc.linkedin} target="_blank" rel="noopener" className="w-9 h-9 rounded-xl bg-secondary-foreground/8 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {fc.twitter && (
                <a href={fc.twitter} target="_blank" rel="noopener" className="w-9 h-9 rounded-xl bg-secondary-foreground/8 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {fc.facebook && (
                <a href={fc.facebook} target="_blank" rel="noopener" className="w-9 h-9 rounded-xl bg-secondary-foreground/8 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {fc.instagram && (
                <a href={fc.instagram} target="_blank" rel="noopener" className="w-9 h-9 rounded-xl bg-secondary-foreground/8 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {fc.youtube && (
                <a href={fc.youtube} target="_blank" rel="noopener" className="w-9 h-9 rounded-xl bg-secondary-foreground/8 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {(!fc.linkedin && !fc.twitter && !fc.facebook && !fc.instagram && !fc.youtube) && [Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-secondary-foreground/8 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Team", "Services", "Career", "Contact"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-1 text-sm text-secondary-foreground/60 hover:text-accent hover:translate-x-1 transition-all group">
                  {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <div className="space-y-3">
                {["Bookkeeping", "GST Filing", "Payroll", "Tax Planning", "Audit Services"].map((s) => (
                  <Link key={s} to={`/services`} className="flex items-center gap-1 text-sm text-secondary-foreground/60 hover:text-accent hover:translate-x-1 transition-all group">
                    {s} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-4 text-sm text-secondary-foreground/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>{email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/8">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary-foreground/40">
          <span>{copyright}</span>
          <div>
            Powered By{' '}
            <a href="https://webcafe.co.in/" target="_blank" rel="noopener" className="hover:text-accent hover:underline no-underline">Webcafe Pvt. Ltd.</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
