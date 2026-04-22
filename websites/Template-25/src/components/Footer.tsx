export default function Footer() {
  return (
    <footer className="bg-primary-deeper text-white/80 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 blueprint opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="md:col-span-5">
            <img src="https://api.digitechai.in/uploads/footerlogo.png" alt="ABC & Associates" className="h-12 w-auto" />
            <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
              ABC &amp; Associates is a chartered accountancy firm advising founders, family offices and growing enterprises across India.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-accent-gold">Practice</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white">Audit &amp; Assurance</a></li>
              <li><a href="#services" className="hover:text-white">Direct &amp; Indirect Tax</a></li>
              <li><a href="#services" className="hover:text-white">Strategic Advisory</a></li>
              <li><a href="#services" className="hover:text-white">Virtual CFO</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-accent-gold">Firm</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#process" className="hover:text-white">Process</a></li>
              <li><a href="#trust" className="hover:text-white">Trust</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-accent-gold">Reach</div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Nariman Point<br />Mumbai 400021</li>
              <li>+91 22 4000 0000</li>
              <li>partners@abcassociates.in</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">ICAI Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
