import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-[var(--ink)] text-[var(--cream)] overflow-hidden">
      <svg
        className="absolute -top-px left-0 right-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,64 C240,16 480,16 720,40 C960,64 1200,64 1440,32 L1440,0 L0,0 Z"
          fill="var(--cream)"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-12 w-auto object-contain mb-6"
              loading="lazy"
            />
            <p className="font-display text-2xl leading-snug max-w-md text-[var(--sage)]">
              A boutique chartered accountancy practice built on
              <span className="text-[var(--cream)]"> trust, precision and quiet diligence.</span>
            </p>
            <div className="mt-8 flex gap-3">
              {["LinkedIn", "Instagram", "X", "Mail"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="h-10 px-4 grid place-items-center rounded-full border border-[var(--moss)]/40 text-xs tracking-widest uppercase text-[var(--sage)] hover:bg-[var(--moss)] hover:text-[var(--ink)] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--moss)] mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/team", "Team"],
                ["/gallery", "Gallery"],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link to={to} className="text-[var(--sage)]/80 hover:text-[var(--cream)] transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--moss)] mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {["Audit & Assurance", "Direct Tax", "GST Advisory", "Corporate Law", "Virtual CFO"].map(
                (s) => (
                  <li key={s}>
                    <Link to="/services" className="text-[var(--sage)]/80 hover:text-[var(--cream)]">
                      {s}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--moss)] mb-4">Studio</h4>
            <address className="not-italic text-sm text-[var(--sage)]/80 leading-relaxed">
              4th Floor, Heritage Square,<br />
              MG Road, Bengaluru — 560001<br />
              <br />
              <a href="tel:+918000000000" className="hover:text-[var(--cream)]">+91 80 0000 0000</a><br />
              <a href="mailto:hello@abcassociates.in" className="hover:text-[var(--cream)]">
                hello@abcassociates.in
              </a>
            </address>
          </div>
        </div>

        <div className="hairline my-10 opacity-40" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--sage)]/60">
          <p>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</p>
          <p>Crafted with care · ICAI registered practice</p>
        </div>
      </div>
    </footer>
  );
}
