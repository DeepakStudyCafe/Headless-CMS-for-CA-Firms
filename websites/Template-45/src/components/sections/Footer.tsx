import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--ink)] text-[color:var(--cream)] overflow-hidden">
      <div className="blob -top-32 left-1/3 h-80 w-80 bg-[color:var(--wine)]/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-6 text-sm text-[color:var(--cream)]/70 max-w-sm leading-relaxed">
              ABC & Associates · Chartered Accountants. A modern advisory firm helping
              founders and enterprises grow with clarity, compliance and conviction.
            </p>

            <a href="#query" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--rose)] text-[color:var(--ink)] px-6 py-3 text-sm font-medium hover:bg-[color:var(--cream)] transition-colors">
              Book a consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol title="Quick Links" links={["Home", "About", "Team", "Gallery", "Career", "Contact"]} />
            <FooterCol title="Services" links={["Tax Planning", "GST Services", "Audit & Assurance", "Company Registration", "Business Consulting", "Compliance"]} />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--rose)]">Contact</div>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--cream)]/70">
                <li>Level 8, One BKC Tower</li>
                <li>BKC, Mumbai 400051</li>
                <li>+91 98200 12345</li>
                <li>hello@abcca.in</li>
              </ul>
              <div className="mt-6 flex gap-2">
                {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[color:var(--wine)] transition-colors"
                    aria-label="social"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[color:var(--cream)]/50">
          <div>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[color:var(--rose)]">Privacy</a>
            <a href="#" className="hover:text-[color:var(--rose)]">Terms</a>
            <a href="#" className="hover:text-[color:var(--rose)]">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--rose)]">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-[color:var(--cream)]/70 hover:text-[color:var(--rose)] transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
