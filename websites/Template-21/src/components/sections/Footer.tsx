import { Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 pt-20 pb-10">
        {/* Top — large statement */}
        <div className="border-b border-primary-foreground/10 pb-14 mb-14">
          <div className="grid grid-cols-12 gap-6 items-end">
            <h3 className="col-span-12 md:col-span-8 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Considered counsel,<br />
              <span className="italic font-light text-primary-foreground/60">delivered with care.</span>
            </h3>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Schedule consultation
              </a>
            </div>
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-9 w-9 rounded-md bg-accent text-accent-foreground grid place-items-center font-display text-lg font-semibold">
                A
              </div>
              <div>
                <div className="font-display text-lg">ABC &amp; Associates</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">Chartered Accountants</div>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm">
              An independent chartered accountancy practice serving discerning
              businesses across India and the GCC since 2004.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40 mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              {["About", "Team", "Career", "Press", "ESG"].map((l) => (
                <li key={l}><a href="#" className="text-primary-foreground/80 hover:text-accent-soft transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40 mb-5">Services</div>
            <ul className="space-y-3 text-sm">
              {["Audit", "Tax", "Advisory", "Forensic", "vCFO"].map((l) => (
                <li key={l}><a href="#" className="text-primary-foreground/80 hover:text-accent-soft transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40 mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>+91 99999 99999</li>
              <li>hello@abc-associates.in</li>
              <li className="text-primary-foreground/50">12, Nariman Point<br />Mumbai 400 021</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-between pt-8 border-t border-primary-foreground/10 text-xs text-primary-foreground/40">
          <div>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Linkedin className="h-4 w-4 hover:text-accent-soft cursor-pointer transition-colors" />
            <Twitter className="h-4 w-4 hover:text-accent-soft cursor-pointer transition-colors" />
            <Facebook className="h-4 w-4 hover:text-accent-soft cursor-pointer transition-colors" />
          </div>
          <div>ICAI Reg. No. 010234C</div>
        </div>
      </div>
    </footer>
  );
}
