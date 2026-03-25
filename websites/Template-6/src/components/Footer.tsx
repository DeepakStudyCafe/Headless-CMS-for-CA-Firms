import { Link } from "react-router-dom";

const NAVIGATE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Footer = ({ websiteData }: { websiteData?: any }) => {
  const logo = websiteData?.logo || "";
  const name = websiteData?.name || "";
  const address = websiteData?.address || "";
  const email = websiteData?.email || "";
  const phone = websiteData?.phone || "";
  const fc = websiteData?.themeConfig?.footerContent || {};
  const description = fc.description || "";
  const copyright = fc.copyright || (name ? `© ${new Date().getFullYear()} ${name}. All rights reserved.` : "");

  // Dynamic service links from API
  const servicesList: { title: string; href: string }[] = websiteData?.themeConfig?.services || [];

  // Dynamic social links from API
  const socialLinks = [
    { key: "linkedin", label: "Li", url: fc.linkedin },
    { key: "twitter", label: "Tw", url: fc.twitter },
    { key: "instagram", label: "In", url: fc.instagram },
    { key: "facebook", label: "Fb", url: fc.facebook },
    { key: "youtube", label: "Yt", url: fc.youtube },
  ].filter(s => s.url);

  return (
    <footer style={{ background: "#0D0D0D" }}>
      {/* Top amber rule */}
      <div
        className="h-[1.5px] bg-amber2"
        style={{ boxShadow: "0 0 16px rgba(224,140,46,0.35)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-[6%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {logo && (
                <img
                  src={logo}
                  alt={`${name} Logo`}
                  className="h-9"
                  style={{ filter: "drop-shadow(0 0 6px rgba(224,140,46,0.3))" }}
                />
              )}
              {name && (
                <span className="flex flex-col font-bold text-linen text-base leading-tight tracking-wide select-none">
                  {name}
                  <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
                </span>
              )}
            </div>
            {description && (
              <p className="font-body font-light text-sm text-linen/45 mb-3 leading-relaxed whitespace-pre-wrap">
                {description}
              </p>
            )}
            {address && (
              <span className="font-mono text-[10px] text-amber2 tracking-[2px] uppercase">
                {address.split(",").pop()?.trim() || address}
              </span>
            )}

            {/* Social icons */}
            {socialLinks.length > 0 && (
              <div className="flex gap-2 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[34px] h-[34px] flex items-center justify-center rounded border transition-all duration-200 font-mono text-[10px] text-linen/50 hover:text-amber2 hover:border-amber2 hover:bg-amber2/10"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.07)",
                    }}
                    aria-label={social.key}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-mono text-[10px] text-amber2 tracking-[2.5px] mb-6">
              NAVIGATE
            </h4>
            <ul className="space-y-3">
              {NAVIGATE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-linen/50 hover:text-linen hover:translate-x-[5px] inline-flex items-center gap-2 transition-all duration-200 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-amber2 text-xs transition-opacity duration-200">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {servicesList.length > 0 && (
            <div>
              <h4 className="font-mono text-[10px] text-amber2 tracking-[2.5px] mb-6">
                SERVICES
              </h4>
              <ul className="space-y-3">
                {servicesList.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      to={svc.href}
                      className="font-body text-sm text-linen/50 hover:text-linen hover:translate-x-[5px] inline-flex items-center gap-2 transition-all duration-200 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 text-amber2 text-xs transition-opacity duration-200">▸</span>
                      {svc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] text-amber2 tracking-[2.5px] mb-6">
              CONTACT
            </h4>
            <div className="space-y-4">
              {address && (
                <div className="flex items-start gap-3 group cursor-default">
                  <svg className="w-4 h-4 text-amber2 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="font-body text-sm text-linen/55 group-hover:text-linen/90 transition-colors whitespace-pre-wrap">
                    {address}
                  </span>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-3 group cursor-default">
                  <svg className="w-4 h-4 text-amber2 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="font-body text-sm text-linen/55 group-hover:text-linen/90 transition-colors">
                    {email}
                  </span>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-3 group cursor-default">
                  <svg className="w-4 h-4 text-amber2 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="font-body text-sm text-linen/55 group-hover:text-linen/90 transition-colors">
                    {phone}
                  </span>
                </div>
              )}
              <Link to="/contact" className="inline-block font-body text-sm text-amber2 hover:underline mt-2">
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-linen/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-[6%] py-5 flex flex-wrap items-center justify-between gap-2">
          <span className="font-body text-xs text-linen/25">
            {copyright}
          </span>
          <span className="font-mono text-xs text-amber2/40">◆</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
