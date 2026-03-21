import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-md overflow-hidden bg-transparent flex items-center justify-center p-1">
                <img
                  src="https://api.digitechai.in/uploads/footerlogo.png"
                  alt="Apex & Associates logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg">Apex & Associates</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Delivering exceptional financial services with integrity, precision, and a commitment to your success since 2005.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
            <div className="gold-accent-line mb-4" />
            <ul className="space-y-2.5">
              {['About', 'Team', 'Services', 'Career', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Services</h4>
            <div className="gold-accent-line mb-4" />
            <ul className="space-y-2.5">
              {['Bookkeeping', 'GST Filing', 'Tax Planning', 'Audit Services', 'Financial Advisory'].map((item) => (
                <li key={item}>
                  <Link to={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contact Us</h4>
            <div className="gold-accent-line mb-4" />
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">123 Financial District, Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">+91 22 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">info@apexassociates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">© 2025 Apex & Associates. All rights reserved.</p>
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
