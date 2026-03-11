import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-dark">
      <div className="container-wide mx-auto section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-transparent flex items-center justify-center p-1">
                <img
                  src="https://api.digitechai.in/uploads/footerlogo.png"
                  alt="Apex & Associates logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-bold text-lg" style={{ color: 'hsl(var(--secondary-foreground))' }}>Apex & Associates</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--secondary-foreground) / 0.7)' }}>
              A premier chartered accountancy firm delivering world-class financial services with integrity, precision, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: 'hsl(var(--secondary-foreground))' }}>Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Team', 'Services', 'Career', 'Contact'].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="flex items-center gap-2 text-sm transition-colors hover:translate-x-1 duration-200" style={{ color: 'hsl(var(--secondary-foreground) / 0.7)' }}>
                  <ArrowRight size={14} /> {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: 'hsl(var(--secondary-foreground))' }}>Services</h4>
            <div className="space-y-2">
              {['Bookkeeping', 'GST Filing', 'Tax Planning', 'Audit Services', 'Financial Advisory'].map((s) => (
                <Link key={s} to={`/services/${s.toLowerCase().replace(/ /g, '-')}`} className="block text-sm transition-colors" style={{ color: 'hsl(var(--secondary-foreground) / 0.7)' }}>
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: 'hsl(var(--secondary-foreground))' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm" style={{ color: 'hsl(var(--secondary-foreground) / 0.7)' }}>
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>123 Financial District, Mumbai, Maharashtra 400001</span>
              </div>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm" style={{ color: 'hsl(var(--secondary-foreground) / 0.7)' }}>
                <Phone size={16} /> +91 123 456 7890
              </a>
              <a href="mailto:info@apexca.com" className="flex items-center gap-3 text-sm" style={{ color: 'hsl(var(--secondary-foreground) / 0.7)' }}>
                <Mail size={16} /> info@apexca.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-6" style={{ borderColor: 'hsl(var(--secondary-foreground) / 0.15)' }}>
          <p className="text-center text-sm" style={{ color: 'hsl(var(--secondary-foreground) / 0.5)' }}>
            © {new Date().getFullYear()} Apex & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
