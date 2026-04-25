import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-primary text-primary-foreground grain">
      <div className="absolute inset-x-0 -top-px h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-12 w-auto object-contain mb-6"
              loading="lazy"
            />
            <p className="font-display text-2xl leading-snug text-balance text-primary-foreground/90 max-w-md">
              A boutique chartered accountancy practice built on judgement, discretion and long
              client relationships.
            </p>
            <div className="mt-8 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition hover:bg-accent hover:border-accent hover:text-accent-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75">
              <li><Link to="/about" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">About</Link></li>
              <li><Link to="/team" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">Team</Link></li>
              <li><Link to="/gallery" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">Gallery</Link></li>
              <li><Link to="/career" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">Career</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Practice</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75">
              <li><Link to="/services" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">Audit & Assurance</Link></li>
              <li><Link to="/services" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">Direct Tax</Link></li>
              <li><Link to="/services" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">GST Advisory</Link></li>
              <li><Link to="/services" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">Corporate Law</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Reach us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-accent shrink-0" />203, Pinnacle Heights, MG Road, Bengaluru 560001</li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-accent shrink-0" />+91 80 4123 7890</li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-accent shrink-0" />hello@abcassociates.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</p>
          <p>Crafted with care · ICAI Member Firm</p>
        </div>
      </div>
    </footer>
  );
}
