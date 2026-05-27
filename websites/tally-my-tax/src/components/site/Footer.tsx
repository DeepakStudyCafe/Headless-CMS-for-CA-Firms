import { getImageUrl } from '@/lib/api';
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer({ websiteData }: { websiteData?: any }) {
  const name = websiteData?.name || "Tally My Tax";
  const description = websiteData?.themeConfig?.footerContent?.description || "Your trusted business partner for growth and success.";
  const copyright = websiteData?.themeConfig?.footerContent?.copyright || `© ${new Date().getFullYear()} Tally My Tax. All rights reserved.`;

  return (
    <footer className="bg-[oklch(0.18_0.04_260)] text-white/80 py-12 px-4 md:px-16 lg:px-32 rounded-t-3xl shadow-2xl border-t border-white/10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        <div className="col-span-2 md:col-span-1 lg:col-span-1">
          <div className="flex items-center mb-5 gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-2xl shadow-md">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base">{name}</span>
              <span className="text-xs text-white/60">Smart Tax. Simple Life.</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            {description}
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Linkedin, url: websiteData?.themeConfig?.socialLinks?.linkedin || '#' },
              { icon: Facebook, url: websiteData?.themeConfig?.socialLinks?.facebook || '#' },
              { icon: Twitter, url: websiteData?.themeConfig?.socialLinks?.twitter || '#' },
            ].map((item, i) => (
              <a key={i} href={item.url} className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-primary transition-all hover:-translate-y-0.5">
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h4 className="text-white font-bold mb-5 md:ml-8 ml-0">Quick Links</h4>
          <ul className="space-y-2.5 text-sm md:ml-8 ml-0 ">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Team", href: "/team" },
              { label: "Gallery", href: "/gallery" },
              { label: "Career", href: "/career" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="hover:text-accent-cyan transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h4 className="text-white font-bold mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Tax Planning", href: "/services/tax-planning" },
              { label: "GST Filing", href: "/services/gst-filing" },
              { label: "Audit Services", href: "/services/audit-services" },
              { label: "Company Formation", href: "/services/company-formation" },
              { label: "Financial Advisory", href: "/services/financial-advisory" },
              { label: "Compliance", href: "/services/compliance" },
            ].map((l) => (
              <li key={l.label}><Link to={l.href} className="hover:text-accent-cyan transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 lg:col-span-1 mt-4 md:mt-0">
          <h4 className="text-white font-bold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            {websiteData?.address && (
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" /> {websiteData.address}</li>
            )}
            {websiteData?.phone && (
              <li className="flex gap-3"><Phone className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" /> {websiteData.phone}</li>
            )}
            {websiteData?.email && (
              <li className="flex gap-3"><Mail className="h-4 w-4 text-accent-cyan shrink-0 mt-0.5" /> {websiteData.email}</li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-4">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>{copyright}</div>
          <div className="flex gap-5">
            <a
              href="https://webcafe.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Powered By Webcafe, a Product of Studycafe Pvt Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

