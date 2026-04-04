import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-600 mt-[0.5px]">
      <div className="container-wide mx-auto section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center ">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
                <img
                  src="/vineet-taral.png"
                  alt="Vineet Taral & Associates logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-sm" style={{ color: 'hsl(var(--secondary-foreground))' }}>Vineet Taral & Associates</span>
                <div className="text-sm text-gray-300">Chartered Accountants</div>
              </div>
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
                <span>Shiv Shankar Nagar, Near Nirmal Vidhyalaya, Salt Pan Road, Wadala East, Mumbai - 400037</span>
              </div>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm" style={{ color: 'hsl(var(--secondary-foreground) / 0.7)' }}>
                <Phone size={16} /> +91 9773545123
              </a>
              <a href="mailto:vineettaral@gmail.com" className="flex items-center gap-3 text-sm" style={{ color: 'hsl(var(--secondary-foreground) / 0.7)' }}>
                <Mail size={16} /> vineettaral@gmail.com
              </a>
            </div>
          </div>
        </div>

            <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'hsl(var(--secondary-foreground) / 0.15)' }}>
              <p className="text-sm" style={{ color: 'hsl(var(--secondary-foreground) / 0.5)' }}>
                © {new Date().getFullYear()} Vineet Taral Chartered Accountant. All rights reserved.
              </p>
              <div className='text-gray-300 text-sm'>
                Powered By{' '}
                <a href="https://webcafe.co.in/" target="_blank" rel="noopener" style={{ color: 'hsl(var(--secondary-foreground) / 0.5)' }} className="hover:text-accent hover:underline no-underline"> Webcafe a Product of Studycafe Pvt Ltd.</a>
              </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
