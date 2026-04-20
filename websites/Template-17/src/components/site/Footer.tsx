import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.3-1.5 1.6-1.5H16V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.4H7.2V14H9.9v8H13z"/></svg>
);
const Twitter = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.74-6.2L4.8 22H2l7-8L2 2h6.91l4.29 5.67L18.244 2zm-1.19 18h1.86L7.06 4H5.07l11.984 16z"/></svg>
);
const Linkedin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9z"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="mb-4 h-12 w-auto brightness-0 invert"
          />
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            Trusted Chartered Accountants delivering audit, tax and advisory services
            with precision, integrity and care since 2005.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="rounded-md bg-white/10 p-2 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="rounded-md bg-white/10 p-2 hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="rounded-md bg-white/10 p-2 hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/team" className="hover:text-white">Our Team</Link></li>
            <li><Link to="/career" className="hover:text-white">Career</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Audit & Assurance</li>
            <li>Direct & Indirect Tax</li>
            <li>GST Advisory</li>
            <li>Company Compliance</li>
            <li>Business Advisory</li>
            <li>Bookkeeping</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> 12 Business Avenue, Mumbai, India 400001</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> +91 12345 67890</li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> contact@abcassociates.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-primary-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</p>
          <p>Chartered Accountants · ICAI Member Firm</p>
        </div>
      </div>
    </footer>
  );
}
