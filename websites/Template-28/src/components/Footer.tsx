export function Footer() {
  const cols = [
    { h: "Firm", l: ["About", "Team", "Careers", "Press"] },
    { h: "Services", l: ["Audit", "Taxation", "GST", "Advisory"] },
    { h: "Resources", l: ["Insights", "Compliance Calendar", "Downloads", "FAQs"] },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src="https://api.digitechai.in/uploads/footerlogo.png" alt="ABC & Associates" className="h-12 w-auto" loading="lazy" />
            <p className="mt-6 text-sm text-background/60 max-w-sm leading-relaxed">
              ABC & Associates · Chartered Accountants. A boutique practice serving founders, family offices and enterprises since 2004.
            </p>
            <div className="mt-8 flex gap-3">
              {["in", "tw", "ig", "@"].map((s) => (
                <a key={s} href="#" className="h-10 w-10 grid place-items-center rounded-full ring-1 ring-background/20 text-background/80 hover:bg-gold hover:text-foreground hover:ring-gold transition text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h} className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{c.h}</div>
              <ul className="mt-5 space-y-3 text-sm text-background/70">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="nav-link">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Office</div>
            <p className="mt-5 text-sm text-background/70 leading-relaxed">
              BKC, Mumbai<br />400051, India
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">ICAI Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
