import { Link } from "react-router-dom";

export default function Footer({ data }: { data?: any }) {
  const fallbackServiceLinks = [
    { title: "Bookkeeping", href: "/services/bookkeeping" },
    { title: "GST Filing", href: "/services/gst-filing" },
    { title: "Payroll", href: "/services/payroll" },
    { title: "Tax Planning", href: "/services/tax-planning" },
    { title: "Company Formation", href: "/services/company-formation" },
    { title: "Compliance", href: "/services/compliance" },
    { title: "Audit Services", href: "/services/audit-services" },
    { title: "Financial Advisory", href: "/services/financial-advisory" },
  ];

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const normalizeServiceHref = (href?: string, title?: string) => {
    const safeHref = (href || "").trim();

    if (safeHref.startsWith("/services/")) return safeHref;
    if (safeHref === "/services") return safeHref;

    if (safeHref.startsWith("/")) {
      return `/services/${safeHref.replace(/^\/+/, "")}`;
    }

    if (safeHref && safeHref !== "#") {
      return `/services/${safeHref.replace(/^\/+/, "")}`;
    }

    const derivedSlug = title ? slugify(title) : "";
    return derivedSlug ? `/services/${derivedSlug}` : "/services";
  };

  const getFirmName = (rawName?: string) => {
    if (!rawName) return "Arvind Gupta & Associates";
    if (rawName.includes("Template")) return "Arvind Gupta & Associates";
    return rawName;
  };

  const brandName = getFirmName(data?.name);
  const address = data?.address || data?.contact?.address || "Tower A, 5th Floor, Business Central Park, New Delhi, 110001";
  const email = data?.email || data?.contact?.email || "contact@agassociates.com";
  const phone = data?.phone || "+91 11 4567 8900";

  const rawServices = Array.isArray(data?.themeConfig?.services) ? data.themeConfig.services : [];
  const servicesList: { title: string; href: string }[] =
    rawServices.length > 0
      ? rawServices
          .map((service: any) => ({
            title: service?.title || service?.name || service?.label || "Service",
            href: normalizeServiceHref(service?.href || service?.path, service?.title || service?.name || service?.label),
          }))
          .filter((service: { title: string; href: string }) => Boolean(service.title && service.href))
      : fallbackServiceLinks;

  const primaryServices = servicesList.slice(0, 4);
  const secondaryServices = servicesList.slice(4, 8);

  return (
    <footer className="w-full py-16 border-t border-outline-variant/20 bg-surface-container-lowest font-manrope text-sm leading-relaxed text-on-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <span className="text-xl font-bold text-on-surface mb-4 block font-headline">
            {brandName}
          </span>
          <p className="text-on-surface-variant mb-6 max-w-xs">
            Architecting fiscal excellence since 1998. Your trusted partner in auditing, taxation, and corporate compliance.
          </p>
          <div className="flex gap-4">
            <Link to="/" className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-lg">public</span>
            </Link>
            <Link to="/contact" className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-lg">share</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold font-headline text-on-surface mb-6 uppercase tracking-widest text-[10px]">
            Services
          </h4>
          <div className="flex flex-col gap-3">
            {primaryServices.map((service, index) => (
              <Link key={index} to={service.href} className="text-on-surface-variant hover:text-primary transition-all">{service.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold font-headline text-on-surface mb-6 uppercase tracking-widest text-[10px]">
            Solutions
          </h4>
          <div className="flex flex-col gap-3">
            {secondaryServices.map((service, index) => (
              <Link key={index} to={service.href} className="text-on-surface-variant hover:text-primary transition-all">{service.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold font-headline text-on-surface mb-6 uppercase tracking-widest text-[10px]">
            Office
          </h4>
          <div className="flex flex-col gap-3 text-on-surface-variant">
            <p>{address}</p>
            <a href={`mailto:${email}`} className="mt-2 font-bold text-primary hover:underline">{email}</a>
            <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="font-semibold text-primary hover:underline">{phone}</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-xs">
        <p> {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/query" className="hover:text-primary transition-colors">Submit Query</Link>
        </div>
      </div>
    </footer>
  );
}



