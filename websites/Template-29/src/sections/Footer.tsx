import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-primary-foreground"
            style={{ background: "linear-gradient(180deg, oklch(0.18 0.04 265), oklch(0.12 0.035 265))" }}>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-20 blur-3xl"
           style={{ background: "oklch(0.78 0.14 75)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10">
        <div className="text-center">
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="mx-auto h-14 w-auto"
            loading="lazy"
          />
          <h3 className="mt-8 font-display text-4xl sm:text-5xl max-w-3xl mx-auto leading-[1.05]">
            Numbers tell stories. <span className="italic gold-text">We help you write yours.</span>
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/70">
            {["Home", "About", "Services", "Team", "Gallery", "Career", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link hover:text-[var(--gold)] transition-colors">
                {l}
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-3">
            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-primary-foreground/80 hover:bg-[var(--gold)] hover:text-primary hover:border-transparent transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--gold)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">Terms</a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
