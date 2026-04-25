import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-wine opacity-30 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-plum opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-16 w-auto object-contain mb-8"
            />
            <p className="font-display text-3xl leading-tight max-w-md">
              Numbers tell stories.
              <span className="block text-wine">We help you write yours.</span>
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-6">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "Team", "Gallery"].map((l) => (
                <li key={l}>
                  <Link
                    to={`/${l === "Home" ? "" : l.toLowerCase()}`}
                    className="hover:text-wine transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-6">Reach Us</h4>
            <address className="not-italic text-sm leading-relaxed text-white/80 space-y-3">
              <p>301, Heritage Tower, MG Road<br />Bengaluru, Karnataka 560001</p>
              <p>+91 80 4123 5678</p>
              <p>contact@abcassociates.in</p>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} ABC & Associates. Chartered Accountants. ICAI FRN 012345N.</p>
          <p className="tracking-[0.2em] uppercase">Precision · Compliance · Growth</p>
        </div>
      </div>
    </footer>
  );
}
