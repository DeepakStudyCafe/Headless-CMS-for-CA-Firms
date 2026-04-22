const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Income Tax Filing",
  "GST Registration & Filing",
  "Audit & Assurance",
  "Company Incorporation",
  "Business Advisory",
  "Compliance Services",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="https://api.digitechai.in/uploads/footerlogo.png"
                alt="ABC & Associates"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-lg text-background">
                ABC <span className="text-gold">&</span> Associates
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-background/60 max-w-xs">
              Chartered accountants offering taxation, audit, compliance and advisory services
              with integrity since 1998.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-background mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-background/65 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-background mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-background/65 hover:text-gold transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-background mb-5">Contact</h4>
            <address className="not-italic text-sm text-background/65 leading-relaxed space-y-3">
              <div>
                204, Pearl Heights,
                <br />
                Andheri West, Mumbai — 400053
              </div>
              <div>
                <a href="tel:+912240001234" className="hover:text-gold transition-colors">
                  +91 22 4000 1234
                </a>
              </div>
              <div>
                <a
                  href="mailto:contact@abcassociates.in"
                  className="hover:text-gold transition-colors"
                >
                  contact@abcassociates.in
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} ABC & Associates. All rights reserved.
          </p>
          <p className="text-xs text-background/50">
            Chartered Accountants · ICAI Registered Firm
          </p>
        </div>
      </div>
    </footer>
  );
}
