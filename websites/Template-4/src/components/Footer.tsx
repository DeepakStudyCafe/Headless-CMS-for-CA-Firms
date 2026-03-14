import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground mt-0.5">
    <div className="container py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="Sharma & Co. footer logo"
              className="w-14 h-14 object-contain p-1 rounded-md bg-transparent"
            />
            <div>
              <span className="font-heading font-bold text-lg block leading-none">Sharma & Co.</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Chartered Accountants</span>
            </div>
          </div>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-6">
            A leading Chartered Accountancy firm delivering excellence in financial services, audit, and business advisory since 2005.
          </p>
          <div className="flex gap-2">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
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
              <Link key={item} to={`/${item.toLowerCase()}`} className="flex items-center gap-1 text-sm text-secondary-foreground/60 hover:text-accent hover:translate-x-1 transition-all group">
                {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
          <div className="space-y-3">
            {["Bookkeeping", "GST Filing", "Payroll", "Tax Planning", "Audit Services"].map((s) => (
              <Link key={s} to={`/services/${s.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center gap-1 text-sm text-secondary-foreground/60 hover:text-accent hover:translate-x-1 transition-all group">
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
              <span>123 Financial District, BKC, Mumbai, India 400051</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent" />
              <span>+91 22 1234 5678</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent" />
              <span>info@sharmaco.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/8">
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary-foreground/40">
        <span>© 2025 Sharma & Co. Chartered Accountants. All rights reserved.</span>
        <div>
          Powered By{' '}
          <a href="https://automationcafe.in/" target="_blank" rel="noopener" className="hover:text-accent hover:underline no-underline">Automationcafe Pvt. Ltd.</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
