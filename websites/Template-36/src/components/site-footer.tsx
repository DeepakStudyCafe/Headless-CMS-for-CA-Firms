import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#041B11] text-white/80">
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[22px] font-semibold tracking-tight text-white">
              ABC <span className="text-soft-accent">&</span> Associates
            </p>
            <p className="mt-4 max-w-sm text-[13.5px] leading-[1.75] text-white/60">
              Chartered Accountants. Quietly precise advice for ambitious
              businesses since 1999.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/60 transition hover:border-white/40 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            className="lg:col-span-2"
            title="Navigate"
            links={[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Team", href: "#team" },
              { label: "Career", href: "#career" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            className="lg:col-span-2"
            title="Practice"
            links={[
              { label: "Audit & Assurance", href: "#services" },
              { label: "Direct Taxation", href: "#services" },
              { label: "GST Advisory", href: "#services" },
              { label: "Business Advisory", href: "#services" },
              { label: "NRI Services", href: "#services" },
            ]}
          />
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-soft-accent">
              Contact
            </h4>
            <ul className="mt-6 space-y-3 text-[13.5px] text-white/70">
              <li>+91 12345 67890</li>
              <li>hello@abcassociates.in</li>
              <li className="leading-relaxed">
                204, Greenfield House,
                <br />
                Connaught Place, New Delhi 110001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#" className="transition hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-soft-accent">
        {title}
      </h4>
      <ul className="mt-6 space-y-3 text-[13.5px] text-white/70">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
