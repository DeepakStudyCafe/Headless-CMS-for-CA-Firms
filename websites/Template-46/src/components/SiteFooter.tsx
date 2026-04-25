import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-[var(--ink)] text-[var(--cream)]">
      <div
        aria-hidden
        className="absolute -top-px left-0 right-0 h-12 -translate-y-full"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, var(--ink) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-10 w-auto"
              width={160}
              height={40}
              loading="lazy"
            />
            <p className="mt-6 max-w-md font-display text-2xl leading-snug text-[var(--cream)]/90">
              A boutique chartered accountancy practice — built on craft,
              candour and quiet diligence.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[var(--cream)]/60">
              Trusted by founders, family businesses and listed enterprises
              across India for audit, tax, and advisory mandates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <FooterCol
              title="Explore"
              links={[
                { to: "/about", label: "About" },
                { to: "/team", label: "Team" },
                { to: "/gallery", label: "Gallery" },
                { to: "/career", label: "Career" },
              ]}
            />
            <FooterCol
              title="Practice"
              links={[
                { to: "/services", label: "Audit & Assurance" },
                { to: "/services", label: "Direct Tax" },
                { to: "/services", label: "GST & Indirect Tax" },
                { to: "/services", label: "Advisory" },
              ]}
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--sage-light)]">
                Office
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--cream)]/80">
                204, Maple Heights<br />
                Civil Lines, New Delhi 110054<br />
                India
              </p>
              <p className="mt-4 text-sm text-[var(--cream)]/80">
                <a href="tel:+911140000000" className="hover:text-[var(--sage-light)]">+91 11 4000 0000</a><br />
                <a href="mailto:hello@abcassociates.in" className="hover:text-[var(--sage-light)]">hello@abcassociates.in</a>
              </p>
              <div className="mt-5 flex gap-2">
                {["LI", "IG", "X", "FB"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full border border-[var(--cream)]/15 text-[11px] text-[var(--cream)]/70 transition hover:bg-[var(--sage)] hover:text-[var(--cream)]"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--cream)]/10 pt-6 text-xs text-[var(--cream)]/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ABC & Associates, Chartered Accountants. All rights reserved.</p>
          <p>Designed as a boutique editorial practice.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--sage-light)]">{title}</p>
      <ul className="mt-4 space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              to={l.to}
              className="text-sm text-[var(--cream)]/80 transition hover:text-[var(--sage-light)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
