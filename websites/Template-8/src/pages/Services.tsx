import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPageData, getWebsiteData } from "@/lib/api";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

export default function Services() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("services"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page); setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-ink font-body text-cream">
        <Navbar websiteData={websiteData} />
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="font-display text-3xl text-cream">Page Not Found</p>
          <p className="font-body text-sm mt-3 text-mist">This page is not published in CMS yet.</p>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, "hero"));
  const gridSec = sectionContent(findSection(pageData, "grid", "services-grid", "services"));
  const ctaSec = sectionContent(findSection(pageData, "cta"));
  const services = gridSec.services || gridSec.items || [];

  return (
    <div className="bg-ink min-h-screen font-body text-cream">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative min-h-[400px] flex items-end bg-ink overflow-hidden pt-20">
        {hero.image && (
          <>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.image}')`, opacity: 0.2 }} />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{hero.label || "PRACTICE AREAS"}</span>
          <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-tight mb-4">{hero.heading || hero.title || "Our Services"}</h1>
          {hero.subheading && <p className="font-body text-lg text-mist max-w-xl leading-relaxed">{hero.subheading}</p>}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center gap-2 border-b border-gold/20">
        <Link to="/" className="font-body text-xs text-gold">Home</Link>
        <span className="font-body text-xs text-mist">/ Services</span>
      </div>

      {/* SERVICES GRID */}
      <section className="py-24 bg-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {services.length === 0 ? (
            <p className="font-body text-center py-16 text-mist">No services listed yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((svc: any, i: number) => {
                const slug = svc.slug || svc.href?.replace("/services/", "") || svc.title?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                return (
                  <FadeIn key={i} delay={i * 0.05}>
                    <div className="rounded-lg p-8 h-full flex flex-col bg-ink border border-gold/15 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 group">
                      <span className="font-display font-bold text-5xl block mb-4 leading-none" style={{ color: "rgba(200,169,110,0.15)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-display font-semibold text-lg text-cream mb-3">{svc.title}</h3>
                      {svc.description && <p className="font-body text-sm text-mist leading-relaxed flex-1 mb-6">{svc.description}</p>}
                      <Link to={`/services/${slug}`} className="font-body text-xs font-medium text-gold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                        Learn More →
                      </Link>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920)" }} />
        <div className="absolute inset-0 bg-ink/[0.88]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{ctaSec.label || "GET STARTED"}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-cream mb-6 leading-tight">
              {ctaSec.heading || ctaSec.title || "Ready to Get Expert Guidance?"}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="shimmer-btn px-10 py-4 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] transition-transform">
                {ctaSec.cta || "Book Consultation"}
              </Link>
              <Link to="/query" className="px-10 py-4 font-body text-sm font-medium text-cream border border-cream/30 rounded-sm hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300">
                Submit a Query
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
}
