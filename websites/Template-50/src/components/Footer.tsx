import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream/85 mt-24">
      {/* decorative blobs */}
      <div className="blob bg-blue/40 w-[420px] h-[420px] -top-32 -left-24" />
      <div className="blob bg-blue-light/25 w-[360px] h-[360px] -bottom-32 right-0" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-10">
        {/* CTA strip */}
        <div className="glass-dark rounded-3xl p-8 md:p-12 mb-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="eyebrow !text-blue-light mb-3">Begin a conversation</p>
            <h3 className="font-display text-3xl md:text-4xl text-cream-soft leading-tight">
              An introduction is the simplest first step.
            </h3>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link to="/contact" className="btn-outline">
              Write to us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-14 w-auto mb-6 opacity-95"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-cream/65 max-w-xs">
              A boutique chartered accountancy practice quietly building trust with founders, families and forward-thinking enterprises since 2008.
            </p>
            <div className="flex gap-3 mt-6">
              {["in", "tw", "ig"].map((s) => (
                <a key={s} href="#" aria-label={s} className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-xs uppercase tracking-wider hover:bg-cream/10 hover:border-cream/40 transition">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow !text-blue-light mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-light transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-light transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-blue-light transition-colors">Team</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-light transition-colors">Gallery</Link></li>
              <li><Link to="/career" className="hover:text-blue-light transition-colors">Career</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow !text-blue-light mb-5">Practice Areas</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>Audit &amp; Assurance</li>
              <li>Direct &amp; Indirect Tax</li>
              <li>Advisory &amp; Valuation</li>
              <li>Compliance &amp; Risk</li>
              <li>Forensic &amp; Family Office</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow !text-blue-light mb-5">Reach Us</p>
            <address className="not-italic text-sm leading-relaxed text-cream/70 space-y-2">
              <p>Suite 402, Lotus Heights<br />MG Road, Bengaluru 560001</p>
              <p className="hover:text-cream transition"><a href="tel:+918045678900">+91 80 4567 8900</a></p>
              <p className="hover:text-cream transition"><a href="mailto:hello@abcassociates.in">hello@abcassociates.in</a></p>
            </address>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/50">© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</p>
          <p className="text-xs text-cream/50 tracking-widest uppercase">Boutique Advisory · Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
