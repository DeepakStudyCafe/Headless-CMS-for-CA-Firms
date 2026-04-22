import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src="https://api.digitechai.in/uploads/footerlogo.png" alt="ABC & Associates" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A chartered accountancy firm built on precision, discretion and uncompromising standards. Trusted by founders, families and institutions.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-px w-10 bg-brand" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Since 1998</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/team" className="hover:text-foreground">Team</Link></li>
              <li><Link to="/career" className="hover:text-foreground">Career</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Audit & Assurance</li>
              <li>Direct Tax</li>
              <li>GST & Indirect Tax</li>
              <li>Corporate Advisory</li>
              <li>Transaction Services</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>contact@abcassociates.in</li>
              <li>+91 98765 43210</li>
              <li>14th Floor, Trident Tower,<br/>Bandra Kurla Complex, Mumbai</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 hairline" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ABC & Associates. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">Audit · Tax · Advisory</p>
        </div>
      </div>
    </footer>
  );
}
