import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--cream)]/80 mt-20">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="https://api.digitechai.in/uploads/footerlogo.png"
            alt="ABC & Associates"
            className="h-14 w-auto mb-5 brightness-0 invert opacity-90"
            loading="lazy"
          />
          <p className="text-sm leading-relaxed">
            ABC &amp; Associates is a premier chartered accountancy firm delivering trusted
            financial, tax and advisory services to ambitious businesses across India.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-white/15 inline-flex items-center justify-center hover:bg-[color:var(--brand)] hover:border-[color:var(--brand)] transition-colors"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-base font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Team", "Gallery", "Career", "Contact"].map((l) => (
              <li key={l}>
                <Link to={l === "Home" ? "/" : (`/${l.toLowerCase()}` as "/about")} className="hover:text-[color:var(--cream)] transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-base font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Tax Planning",
              "GST Services",
              "Audit & Assurance",
              "Company Registration",
              "Business Consulting",
              "Compliance Services",
            ].map((s) => (
              <li key={s} className="hover:text-[color:var(--cream)] transition-colors cursor-pointer">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-base font-semibold mb-5">Reach Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-[color:var(--brand-soft)] shrink-0" />
              <span>2nd Floor, Heritage Tower,<br />MG Road, Bengaluru 560001</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="h-5 w-5 text-[color:var(--brand-soft)] shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="h-5 w-5 text-[color:var(--brand-soft)] shrink-0" />
              <span>contact@abcassociates.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} ABC &amp; Associates. All rights reserved.</p>
          <p className="text-[color:var(--cream)]/60">Built with precision. Backed by trust.</p>
        </div>
      </div>
    </footer>
  );
}
