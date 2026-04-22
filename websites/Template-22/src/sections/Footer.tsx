export function Footer() {
  return (
    <footer className="bg-section border-t border-border px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="h-12 w-auto object-contain mb-4"
          />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            A boutique chartered accountancy practice — quietly trusted since 2008.
          </p>
        </div>

        <FooterCol title="Quick Links" items={["Home", "About", "Team", "Career", "Contact"]} />
        <FooterCol
          title="Services"
          items={["Tax Planning", "Audit & Assurance", "GST Compliance", "Advisory", "Bookkeeping"]}
        />
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-secondary mb-5">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>+91 98765 43210</li>
            <li>hello@abc-associates.in</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</p>
        <p>Crafted with care.</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.25em] text-secondary mb-5">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors gold-underline">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
