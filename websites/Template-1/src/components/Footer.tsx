import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container-max mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-transparent flex items-center justify-center p-1">
                <img
                  src="https://api.digitechai.in/uploads/footerlogo.png"
                  alt="Sterling & Co. logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="font-serif font-bold text-lg">Sterling & Co.</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Chartered Accountants</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Trusted financial advisors delivering excellence in accounting, taxation, and business advisory services since 1995.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Services</h4>
            <ul className="space-y-2">
              {['Bookkeeping', 'GST Filing', 'Tax Planning', 'Audit Services', 'Financial Advisory'].map((s) => (
                <li key={s}>
                  <Link to={`/services/${s.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {s}
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
              <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> +91 123 456 7890
              </a>
              <a href="mailto:info@sterlingco.in" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" /> info@sterlingco.in
              </a>
              <p className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 42, Business Park, Mumbai, India 400001
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">© 2026 Sterling & Co. Chartered Accountants. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
