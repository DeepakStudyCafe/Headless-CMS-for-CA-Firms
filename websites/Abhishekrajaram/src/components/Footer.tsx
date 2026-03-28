import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, X } from 'lucide-react';
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
    { key: 'linkedin', icon: Linkedin, url: fc.linkedin || '#' },
    { key: 'twitter', icon: X, url: fc.twitter || '#' },
    { key: 'facebook', icon: Facebook, url: fc.facebook || '#' },
    { key: 'instagram', icon: Instagram, url: fc.instagram || '#' },
    { key: 'youtube', icon: Youtube, url: fc.youtube || '#' },
    
  ];

  return (
    <footer className="gradient-navy text-primary-foreground mt-[0.1rem]">
      <div className="container-max mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
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
            <div className="flex gap-3 mt-6">
              {socials.map(({ key, icon: Icon, url }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs ">{copyright}</p>
          <div className='text-xs'>
            Powered By{' '}
            <a href="https://webcafe.co.in/" target="_blank" rel="noopener" className="hover:text-primary-foreground/60 hover:underline no-underline ">Webcafe a Product of Studycafe Pvt Ltd.</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
