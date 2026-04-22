import { ArrowUpRight } from "lucide-react";
import { LinkedInIcon, TwitterIcon, FacebookIcon } from "@/components/social-icons";

const cols = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Career", href: "#career" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Audit & Assurance", href: "#services" },
      { label: "Direct Taxation", href: "#services" },
      { label: "GST Advisory", href: "#services" },
      { label: "Business Advisory", href: "#services" },
      { label: "Virtual CFO", href: "#services" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "+91 12345 67890", href: "tel:+911234567890" },
      { label: "contact@abcassociates.com", href: "mailto:contact@abcassociates.com" },
      { label: "Bandra Kurla Complex, Mumbai", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20" aria-hidden />
      <div className="container-pro relative pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <img
              src="https://api.digitechai.in/uploads/footerlogo.png"
              alt="ABC & Associates"
              className="h-14 w-auto object-contain"
              loading="lazy"
            />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
              ABC & Associates is a multi-disciplinary firm of Chartered Accountants
              delivering audit, taxation and advisory services across India and beyond.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[LinkedInIcon, TwitterIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-accent hover:text-accent transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft">
                  {c.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ABC & Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
