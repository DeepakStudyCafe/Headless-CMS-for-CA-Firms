import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { getWebsiteData } from '@/lib/api';

export function Footer() {
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    getWebsiteData().then(setWebsiteData);
  }, []);

  const logoUrl = websiteData?.logo || '';
  const siteName = websiteData?.name || '';
  const desc = websiteData?.themeConfig?.footerContent?.description || '';
  const phone = websiteData?.phone || '';
  const email = websiteData?.email || '';
  const address = websiteData?.address || '';
  const copyright = websiteData?.themeConfig?.footerContent?.copyright || '';

  return (
    <footer className="bg-section border-t border-border px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-start gap-2">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={siteName}
                className="h-9 mt-1 w-auto object-contain"
              />
            )}
            <div>
              <div className="text-l font-semibold text-foreground">{siteName}</div>
              <div className="text-xs text-muted-foreground">Chartered Accountants</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mt-4">
            {desc}
          </p>
        </div>

        <FooterCol title="Quick Links" links={[
          {name: "Home", path: "/"}, {name:"About", path:"/about"}, {name:"Team", path:"/team"}, {name:"Career", path:"/career"}, {name:"Contact", path:"/contact"}
        ]} />
        <FooterCol
          title="Services"
          links={[
            {name: "Tax Planning", path:"/services/tax-planning"}, 
            {name: "Audit Services", path: "/services/audit-services"}, 
            {name: "GST Filing", path: "/services/gst-filing"}, 
            {name: "Financial Advisory", path: "/services/financial-advisory"}, 
            {name: "Bookkeeping", path: "/services/bookkeeping"}
          ]}
        />
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-secondary mb-5">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {phone && <li>{phone}</li>}
            {email && <li>{email}</li>}
            {address && <li>{address}</li>}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
  <p>{copyright}</p>
  <p>
    Powered By{" "}
    <a
      href="https://webcafe.co.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-[#c6a575] text-sm"
    >
      Webcafe
    </a>{" "}
    a Product of Studycafe Pvt Ltd.
  </p>
</div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; items?: string[]; links?: {name: string, path: string}[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.25em] text-secondary mb-5">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links?.map((i) => (
          <li key={i.name}>
            <Link to={i.path} className="text-muted-foreground hover:text-primary transition-colors gold-underline">
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
