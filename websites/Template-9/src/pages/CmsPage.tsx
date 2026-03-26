/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getImageUrl, getPageData, getWebsiteData, PageData } from "@/lib/api";

type CmsPageProps = {
  slug?: string;
};

function Hero({ section }: { section: any }) {
  if (!section) return null;
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#111111" }}>
      {section.imageUrl && (
        <img src={getImageUrl(section.imageUrl)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      )}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, #111111)" }} />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {section.textContent?.label && (
          <span className="font-label text-[10px] text-surface/40 tracking-[4px] mb-4 block">{section.textContent.label}</span>
        )}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-surface leading-tight">
          {section.textContent?.heading || section.title}
        </h1>
        {section.textContent?.subheading && (
          <p className="mt-5 text-base sm:text-lg text-surface/60 max-w-2xl mx-auto">{section.textContent.subheading}</p>
        )}
      </div>
    </section>
  );
}

function SectionBlock({ section, websiteData }: { section: any; websiteData?: any }) {
  const tc = section?.textContent || {};

  const renderSectionTitle = (fallback: string) => (
    <h2 className="font-display text-3xl sm:text-5xl text-text-main mb-8">{tc.heading || fallback}</h2>
  );

  if (section.type === "services" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-5xl text-text-main mb-8">{tc.heading || "Services"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tc.items.map((item: any, i: number) => (
              <div key={i} className="bg-white rounded-lg border border-primary/10 p-6">
                <h3 className="font-body text-lg font-semibold text-text-main">{item.title || item.name}</h3>
                {item.description && <p className="mt-2 text-sm text-text-muted-custom">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "team" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-5xl text-text-main mb-8">{tc.heading || "Our Team"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tc.items.map((item: any, i: number) => (
              <div key={i} className="bg-surface rounded-lg border border-primary/10 overflow-hidden">
                {item.image && <img src={getImageUrl(item.image)} alt={item.name || ""} className="w-full h-52 object-cover" />}
                <div className="p-4">
                  <h3 className="font-body text-base font-semibold text-text-main">{item.name || item.title}</h3>
                  {item.designation && <p className="text-sm text-text-muted-custom">{item.designation}</p>}
                  {item.bio && <p className="text-xs text-text-muted-custom mt-2">{item.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "gallery" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-5xl text-text-main mb-8">{tc.heading || "Gallery"}</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {tc.items.map((item: any, i: number) => (
              <img key={i} src={getImageUrl(item.src || item.image)} alt={item.alt || ""} className="w-full rounded-lg break-inside-avoid" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "text-image") {
    const features = Array.isArray(tc.features) ? tc.features : [];
    const paragraphs = Array.isArray(tc.paragraphs) ? tc.paragraphs : [];
    const items = Array.isArray(tc.items) ? tc.items : [];
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl text-text-main">{tc.heading || "Overview"}</h2>
            {tc.description && <p className="mt-4 text-text-muted-custom">{tc.description}</p>}
            {paragraphs.length > 0 && (
              <div className="mt-4 space-y-3">
                {paragraphs.map((p: string, i: number) => (
                  <p key={i} className="text-text-muted-custom text-sm leading-7">{p}</p>
                ))}
              </div>
            )}
            {features.length > 0 && (
              <ul className="mt-5 space-y-2">
                {features.map((f: any, i: number) => (
                  <li key={i} className="text-sm text-text-main">
                    {(f.title || f.name || f).toString()}
                  </li>
                ))}
              </ul>
            )}
            {items.length > 0 && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item: any, i: number) => (
                  <div key={i} className="bg-surface rounded-lg border border-primary/10 p-3">
                    <p className="text-sm font-semibold text-text-main">{item.title || item.name || `Item ${i + 1}`}</p>
                    {item.description && <p className="text-xs text-text-muted-custom mt-1">{item.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
          {section.imageUrl && <img src={getImageUrl(section.imageUrl)} alt="" className="w-full rounded-xl" />}
        </div>
      </section>
    );
  }

  if (section.type === "features" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6">
          {renderSectionTitle("Key Highlights")}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tc.items.map((item: any, i: number) => (
              <div key={i} className="bg-surface rounded-lg border border-primary/10 p-5">
                <h3 className="font-body text-base font-semibold text-text-main">{item.title || item.name || `Feature ${i + 1}`}</h3>
                {item.description && <p className="mt-2 text-sm text-text-muted-custom">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "timeline" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6">
          {renderSectionTitle("Our Journey")}
          <div className="relative border-l border-primary/20 pl-6 space-y-6">
            {tc.items.map((item: any, i: number) => (
              <div key={i} className="relative">
                <span className="absolute -left-[31px] top-0 h-3 w-3 rounded-full bg-ca-accent-2" />
                <p className="text-xs text-ca-accent-2 font-semibold">{item.year || item.date || `Year ${i + 1}`}</p>
                <p className="text-base text-text-main font-semibold">{item.title || item.name}</p>
                {item.description && <p className="text-sm text-text-muted-custom mt-1">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "certifications" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          {renderSectionTitle("Certifications")}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tc.items.map((item: any, i: number) => (
              <div key={i} className="rounded-lg border border-primary/10 p-5">
                <p className="font-body text-base font-semibold text-text-main">{item.title || item.name || `Certification ${i + 1}`}</p>
                {item.issuer && <p className="text-xs text-ca-accent-2 mt-1">{item.issuer}</p>}
                {item.description && <p className="text-sm text-text-muted-custom mt-2">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "stats" && Array.isArray(tc.stats)) {
    return (
      <section className="py-14 bg-deep text-surface">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tc.stats.map((s: any, i: number) => (
            <div key={i} className="text-center">
              <p className="font-display text-4xl text-ca-accent-2">{s.value ?? s.number}{s.suffix || ""}</p>
              <p className="text-surface/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if ((section.type === "testimonials" || section.type === "faqs") && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-deep text-surface">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-5xl mb-8">{tc.heading || "Testimonials"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tc.items.map((item: any, i: number) => (
              <div key={i} className="bg-surface/5 border border-surface/10 rounded-lg p-5">
                <p className="text-sm text-surface/80">{item.text || item.review || item.question || item.title}</p>
                {(item.name || item.author) && <p className="mt-3 text-xs text-ca-accent-2">{item.name || item.author}</p>}
                {item.answer && <p className="mt-2 text-xs text-surface/70">{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "pricing" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6">
          {renderSectionTitle("Pricing")}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tc.items.map((item: any, i: number) => (
              <div key={i} className="bg-surface rounded-lg border border-primary/10 p-5">
                <p className="font-body text-base font-semibold text-text-main">{item.title || item.name || `Plan ${i + 1}`}</p>
                <p className="text-2xl font-display text-ca-accent-2 mt-2">{item.price || item.value || "Custom"}</p>
                {item.description && <p className="text-sm text-text-muted-custom mt-2">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "cta") {
    return (
      <section className="py-16 bg-deep text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-5xl text-surface">{tc.heading}</h2>
          {tc.subheading && <p className="mt-4 text-surface/60">{tc.subheading}</p>}
        </div>
      </section>
    );
  }

  if (section.type === "process" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-5xl text-text-main mb-8">{tc.heading || "Process"}</h2>
          <div className="space-y-4">
            {tc.items.map((p: any, i: number) => (
              <div key={i} className="p-4 rounded-lg border border-primary/15 bg-surface">
                <p className="font-body font-semibold text-text-main">{p.title || `Step ${i + 1}`}</p>
                {p.description && <p className="text-sm text-text-muted-custom mt-1">{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "contact") {
    const contactContent = websiteData?.themeConfig?.contactContent || {};
    const info = {
      ...(tc.info || {}),
      phone: (tc.info || {}).phone || websiteData?.phone || contactContent.phone || "-",
      email: (tc.info || {}).email || websiteData?.email || contactContent.email || "-",
      address: (tc.info || {}).address || websiteData?.address || contactContent.address || "-",
      hours: (tc.info || {}).hours || (tc.info || {}).workingHours || websiteData?.workingHours || contactContent.workingHours || "-",
      phone2: (tc.info || {}).phone2 || contactContent.phone2 || "",
      email2: (tc.info || {}).email2 || contactContent.email2 || "",
    };
    const faqs = Array.isArray(tc.faqs) ? tc.faqs : [];
    const heading = tc.heading || contactContent.heroTitle || "Contact Details";
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface rounded-xl border border-primary/10 p-6">
            <h3 className="font-display text-2xl text-text-main">{heading}</h3>
            <div className="mt-4 space-y-2 text-sm text-text-muted-custom">
              <p><span className="text-text-main font-semibold">Phone:</span> {info.phone || "-"}</p>
              {info.phone2 && <p><span className="text-text-main font-semibold">Phone 2:</span> {info.phone2}</p>}
              <p><span className="text-text-main font-semibold">Email:</span> {info.email || "-"}</p>
              {info.email2 && <p><span className="text-text-main font-semibold">Email 2:</span> {info.email2}</p>}
              <p><span className="text-text-main font-semibold">Address:</span> {info.address || "-"}</p>
              <p><span className="text-text-main font-semibold">Hours:</span> {typeof info.hours === "object" ? Object.values(info.hours).filter(Boolean).join(" | ") : (info.hours || "-")}</p>
              {contactContent.mapUrl && (
                <a href={contactContent.mapUrl} target="_blank" rel="noreferrer" className="inline-block mt-2 text-ca-accent-2 hover:underline">
                  Open Map
                </a>
              )}
            </div>
          </div>
          <div className="bg-surface rounded-xl border border-primary/10 p-6">
            <h3 className="font-display text-2xl text-text-main">{contactContent.heroSubtitle ? "FAQs & Support" : "FAQs"}</h3>
            {contactContent.heroSubtitle && <p className="text-xs text-text-muted-custom mt-2">{contactContent.heroSubtitle}</p>}
            <div className="mt-4 space-y-3">
              {faqs.slice(0, 5).map((f: any, i: number) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-text-main">{f.question || f.title}</p>
                  <p className="text-sm text-text-muted-custom">{f.answer || ""}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "career") {
    const benefits = Array.isArray(tc.benefits) ? tc.benefits : [];
    const positions = Array.isArray(tc.positions) ? tc.positions : [];
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-3xl text-text-main">{tc.benefitsHeading || "Benefits & Perks"}</h3>
            <div className="mt-4 space-y-3">
              {benefits.map((b: any, i: number) => (
                <div key={i} className="bg-surface rounded-lg border border-primary/10 p-4">
                  <p className="font-semibold text-text-main text-sm">{b.title || b.name || `Benefit ${i + 1}`}</p>
                  {b.description && <p className="text-xs text-text-muted-custom mt-1">{b.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-3xl text-text-main">{tc.positionsHeading || "Open Positions"}</h3>
            <div className="mt-4 space-y-3">
              {positions.map((p: any, i: number) => (
                <div key={i} className="bg-surface rounded-lg border border-primary/10 p-4">
                  <p className="font-semibold text-text-main text-sm">{p.title || `Role ${i + 1}`}</p>
                  <p className="text-xs text-ca-accent-2 mt-1">{p.location || "India"} {p.type ? `• ${p.type}` : ""}</p>
                  {p.description && <p className="text-xs text-text-muted-custom mt-1">{p.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "query-form") {
    const types = Array.isArray(tc.queryTypes) ? tc.queryTypes : [];
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-surface rounded-xl border border-primary/10 p-8">
            <h3 className="font-display text-3xl text-text-main">{tc.formHeading || "Submit Your Query"}</h3>
            {tc.formSubheading && <p className="mt-2 text-sm text-text-muted-custom">{tc.formSubheading}</p>}
            <div className="mt-5 flex flex-wrap gap-2">
              {types.map((t: any, i: number) => (
                <span key={i} className="px-3 py-1 rounded-full border border-primary/15 text-xs text-text-main bg-ca-bg">{t.label || t.value}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "industries" && Array.isArray(tc.items)) {
    return (
      <section className="py-16 bg-ca-bg">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-5xl text-text-main mb-8">{tc.heading || "Industries"}</h2>
          <div className="flex flex-wrap gap-3">
            {tc.items.map((ind: any, i: number) => (
              <span key={i} className="px-4 py-2 rounded-full bg-surface border border-primary/15 text-sm text-text-main">
                {ind.title || ind.name || ind}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default function CmsPage({ slug }: CmsPageProps) {
  const params = useParams();
  const targetSlug = slug || params.slug || "home";
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    const [page, site] = await Promise.all([getPageData(targetSlug), getWebsiteData()]);
    let resolvedPage = page;
    // If slug comes as /services/foo style, fallback to just foo
    if (!resolvedPage && targetSlug.includes("/")) {
      const maybeLast = targetSlug.split("/").filter(Boolean).pop();
      if (maybeLast) {
        resolvedPage = await getPageData(maybeLast);
      }
    }
    setPageData(resolvedPage);
    setWebsiteData(site);
  }, [targetSlug]);

  useEffect(() => {
    setLoading(true);
    loadData()
      .finally(() => setLoading(false));

    const onFocus = () => {
      loadData();
    };
    const interval = window.setInterval(() => {
      loadData();
    }, 30000);
    window.addEventListener("focus", onFocus);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", onFocus);
    };
  }, [loadData]);

  const orderedSections = useMemo(
    () => (pageData?.sections || []).slice().sort((a, b) => a.order - b.order),
    [pageData]
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
        <div className="w-14 h-14 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(224,140,46,0.2)", borderTopColor: "#E08C2E" }} />
      </div>
    );
  }

  const hero = orderedSections.find((s) => s.type === "hero");
  const nonHero = orderedSections.filter((s) => s.type !== "hero");

  if (!pageData) {
    return (
      <div className="min-h-screen bg-ca-bg">
        <Navbar websiteData={websiteData} />
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl text-text-main">Page Content Not Found</h1>
            <p className="mt-3 text-text-muted-custom">
              This route is not published yet in CMS. Open /admin and publish or create sections for this page.
            </p>
          </div>
        </section>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ca-bg">
      <Navbar websiteData={websiteData} />
      <Hero section={hero} />
      {nonHero.map((section) => (
        <SectionBlock key={section.type + section.order} section={section} websiteData={websiteData} />
      ))}
      <Footer websiteData={websiteData} />
    </div>
  );
}
