import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-background pt-20 pb-10 overflow-hidden">
      <div
        className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10 pb-16 border-b border-background/15">
          <div className="col-span-12 md:col-span-5 space-y-6">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-10 w-auto"
            />
            <p className="text-background/65 leading-relaxed max-w-sm">
              A boutique chartered accountancy practice, est. 2003. We help
              promoters, founders and finance teams build durable businesses
              through honest counsel and disciplined execution.
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-background/20 grid place-items-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-xs tracking-[0.3em] uppercase text-background/50 mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {["About", "Team", "Gallery", "Career", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-background/80 hover:text-background transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-xs tracking-[0.3em] uppercase text-background/50 mb-4">Services</div>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Direct Tax</li>
              <li>GST & Indirect</li>
              <li>Audit & Assurance</li>
              <li>Virtual CFO</li>
              <li>Transaction Advisory</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="text-xs tracking-[0.3em] uppercase text-background/50 mb-4">Contact</div>
            <div className="text-sm text-background/80 space-y-2 font-display">
              <div>Level 12, Maker Maxity</div>
              <div>Nariman Point, Mumbai 400 021</div>
              <div className="pt-2">+91 22 4001 2210</div>
              <div>partners@abc-associates.in</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} ABC &amp; Associates · ICAI FRN 014729W. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
