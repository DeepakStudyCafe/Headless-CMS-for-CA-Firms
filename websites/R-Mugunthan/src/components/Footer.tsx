const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { title: "Bookkeeping", href: "/services/bookkeeping" },
  { title: "GST Filing", href: "/services/gst-filing" },
  { title: "Payroll", href: "/services/payroll" },
  { title: "Tax Planning", href: "/services/tax-planning" },
  { title: "Company Formation", href: "/services/company-formation" },
  
];
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer({ websiteData }: { websiteData?: any }) {
  const logo = websiteData?.logo || "https://api.digitechai.in/uploads/footerlogo.png";
  const name = websiteData?.name || "abc & Associates";
  const description = websiteData?.themeConfig?.footerContent?.description || "Architects of Fiscal Integrity. Trusted by 500+ businesses across India for audit, tax, and advisory excellence.";
  const copyrightText = websiteData?.themeConfig?.footerContent?.copyright || `© ${new Date().getFullYear()} ${name} Chartered Accountants. All rights reserved.`;
  const address = websiteData?.address || "123 Financial District,\nMumbai, Maharashtra 400001";
  const phone = websiteData?.phone || "+91 99999 99999";
  const email = websiteData?.email || "info@abcassociates.in";
  const hours = websiteData?.workingHours || "Mon–Sat: 9:00 AM – 6:00 PM";

  return (
    <footer className="bg-[hsl(0,0%,7%)] relative">
      {/* Gold top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt={`${name} Logo`}
                className="h-9"
              />
              <span className="flex flex-col font-bold text-white text-base leading-tight tracking-wide select-none">
                {name}
                <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
              </span>
            </div>
            <p className="font-sans text-white/50 text-sm leading-relaxed">
              {description}
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-gold/20 flex items-center justify-center text-white/40 hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Quick Links</h4>
            <div className="w-8 h-[1px] bg-gold/30 mb-4" />
            <ul className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-sans text-white/40 text-sm hover:text-gold hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Services</h4>
            <div className="w-8 h-[1px] bg-gold/30 mb-4" />
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <Link to={s.href} className="font-sans text-white/40 text-sm hover:text-gold hover:pl-1 transition-all duration-300 inline-block">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Contact Info</h4>
            <div className="w-8 h-[1px] bg-gold/30 mb-4" />
            <div className="flex flex-col gap-3 font-sans text-white/40 text-sm whitespace-pre-wrap">
              <p>{address}</p>
              <p>{phone}</p>
              <p>{email}</p>
              <p>{hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-sans text-white/30 text-xs">
            {copyrightText}
          </p>
          <p className="font-sans text-white/30 text-xs">
           Powered By <a href="https://webcafe.co.in/" target="_blank" rel="noopener noreferrer" className="underline">Webcafe</a> a Product of Studycafe Pvt Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
