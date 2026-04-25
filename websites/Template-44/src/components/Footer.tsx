import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Instagram, Facebook, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-forest-1 text-cream/80 grain">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
          <div className="lg:col-span-5">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-12 w-auto mb-8"
              loading="lazy"
            />
            <p className="font-display text-2xl md:text-3xl text-cream leading-snug max-w-md text-balance">
              Ledgers, audits, and advisory — handled with quiet precision since 1998.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 text-[12px] tracking-[0.25em] uppercase border-b border-cream/40 pb-1 hover:border-cream hover:text-cream transition-colors"
            >
              Start a conversation <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.25em] uppercase text-cream/40 mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-cream">About</Link></li>
              <li><Link to="/team" className="hover:text-cream">Team</Link></li>
              <li><Link to="/gallery" className="hover:text-cream">Gallery</Link></li>
              <li><Link to="/career" className="hover:text-cream">Career</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.25em] uppercase text-cream/40 mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-cream">Audit & Assurance</Link></li>
              <li><Link to="/services" className="hover:text-cream">Taxation</Link></li>
              <li><Link to="/services" className="hover:text-cream">GST Advisory</Link></li>
              <li><Link to="/services" className="hover:text-cream">Compliance</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] tracking-[0.25em] uppercase text-cream/40 mb-5">Contact</p>
            <address className="not-italic text-sm space-y-3 leading-relaxed">
              <p>14, Heritage Chambers,<br />Civil Lines, New Delhi 110054</p>
              <p>+91 11 4032 8800</p>
              <p>hello@abcassociates.in</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
          <p className="text-xs text-cream/40">© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</p>
          <div className="flex items-center gap-5 text-cream/60">
            <a href="#" aria-label="LinkedIn" className="hover:text-cream"><Linkedin size={16} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-cream"><Twitter size={16} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-cream"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-cream"><Facebook size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
