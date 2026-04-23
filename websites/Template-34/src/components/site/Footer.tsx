export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-12 gap-8 pb-16 border-b border-border">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-3xl text-heading">ABC</span>
              <span className="text-xs uppercase tracking-[0.25em] text-body">
                &amp; Associates
              </span>
            </div>
            <p className="text-body max-w-sm leading-relaxed">
              Chartered accountants offering audit, taxation and corporate
              advisory to growing businesses across India.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-heading mb-5">
              Practice
            </p>
            <ul className="space-y-3 text-sm text-body">
              <li><a href="#services" className="hover:text-primary transition-colors">Audit</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Taxation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Advisory</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Compliance</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-heading mb-5">
              Firm
            </p>
            <ul className="space-y-3 text-sm text-body">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">People</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-heading mb-5">
              Offices
            </p>
            <ul className="space-y-3 text-sm text-body">
              <li>Mumbai · Nariman Point</li>
              <li>Bengaluru · UB City</li>
              <li>Delhi · Connaught Place</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-body">
          <p>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">ICAI Reg. No. 012345W</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
