import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { getWebsiteData } from '@/lib/api';

const Footer = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getWebsiteData().then(setData);
  }, []);

  const fc = data?.themeConfig?.footerContent || {};
  const services = data?.themeConfig?.services || [];
  const phone = data?.phone || '+91 123 456 7890';
  const email = data?.email || 'info@sterlingco.in';
  const address = data?.address || '42, Business Park, Mumbai, India 400001';
  const description = fc.description || 'Trusted financial advisors delivering excellence in accounting, taxation, and business advisory services since 1995.';
  const copyright = fc.copyright || '© 2026 Sterling & Co. Chartered Accountants. All rights reserved.';
  const logoUrl = data?.logo || 'https://api.digitechai.in/uploads/footerlogo.png';
  const firmName = data?.name || 'Sterling & Co.';

  const socials = [
    { key: 'facebook', icon: Facebook, url: fc.facebook },
    { key: 'twitter', icon: Twitter, url: fc.twitter },
    { key: 'linkedin', icon: Linkedin, url: fc.linkedin },
    { key: 'instagram', icon: Instagram, url: fc.instagram },
    { key: 'youtube', icon: Youtube, url: fc.youtube },
  ].filter(s => s.url);

  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container-max mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-transparent flex items-center justify-center p-1">
                <img src={logoUrl} alt={`${firmName} logo`} className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <span className="font-serif font-bold text-lg">{firmName}</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Chartered Accountants</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">{description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Services</h4>
            <ul className="space-y-2">
              {(services.length > 0 ? services.slice(0, 5) : [
                { title: 'Bookkeeping', href: '/services/bookkeeping' },
                { title: 'GST Filing', href: '/services/gst-filing' },
                { title: 'Tax Planning', href: '/services/tax-planning' },
                { title: 'Audit Services', href: '/services/audit-services' },
                { title: 'Financial Advisory', href: '/services/financial-advisory' },
              ]).map((s: any) => (
                <li key={s.title}>
                  <Link to={s.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Company</h4>
            <ul className="space-y-2">
              {[['About', '/about'], ['Team', '/team'], ['Career', '/career'], ['Gallery', '/gallery'], ['Contact', '/contact']].map(([name, href]) => (
                <li key={name}>
                  <Link to={href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Contact</h4>
            <div className="space-y-3">
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" /> {email}
              </a>
              <p className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {address}
              </p>
            </div>
            {socials.length > 0 && (
              <div className="flex gap-3 mt-6">
                {socials.map(({ key, icon: Icon, url }) => (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
            {socials.length === 0 && (
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Twitter className="w-4 h-4" /></a>
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">{copyright}</p>
          <div>
            Powered By{' '}
            <a href="https://webcafe.co.in/" target="_blank" rel="noopener" className="hover:text-primary-foreground/60 hover:underline no-underline">Webcafe Pvt. Ltd.</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
