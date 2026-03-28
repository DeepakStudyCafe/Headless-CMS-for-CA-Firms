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
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("about"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-ink font-body text-cream">
        <Navbar websiteData={websiteData} />
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="font-display text-3xl font-semibold text-cream">Page Not Found</p>
          <p className="font-body text-sm mt-3 text-mist">This page is not published in CMS yet. Visit /admin to add content.</p>
          <Link to="/" className="mt-6 shimmer-btn px-5 py-2.5 rounded-sm font-body text-sm font-medium text-primary-foreground">← Home</Link>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, "hero"));
  const heritage = sectionContent(findSection(pageData, "heritage", "text-image"));
  const mission = sectionContent(findSection(pageData, "mission", "features", "why-choose-us"));
  const values = sectionContent(findSection(pageData, "values", "core-values"));
  const cta = sectionContent(findSection(pageData, "cta"));
  const features = mission.items || heritage.items || [];
  const coreValues = values.items || values.values || [];

  return (
    <div className="bg-ink min-h-screen font-body text-cream">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative min-h-[440px] flex items-end overflow-hidden bg-ink pt-20">
        {hero.image && (
          <>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.image}')`, opacity: 0.2 }} />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{hero.label || "Our Story"}</span>
          <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-tight mb-4" style={{ maxWidth: 700 }}>
            {hero.heading || hero.title || "A Legacy of Trust"}
          </h1>
          {hero.subheading && <p className="font-body text-lg text-mist max-w-xl leading-relaxed">{hero.subheading}</p>}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center gap-2 border-b border-gold/20">
        <Link to="/" className="font-body text-xs text-gold">Home</Link>
        <span className="font-body text-xs text-mist">/ About Us</span>
      </div>

      {/* HERITAGE */}
      {(heritage.heading || heritage.description) && (
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{heritage.label || "Our Heritage"}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-cream mb-6" style={{ lineHeight: 1.1 }}>
                {heritage.heading || heritage.title}
              </h2>
              <p className="font-body text-lg text-mist leading-relaxed mb-6">{heritage.description || heritage.subheading}</p>
              {heritage.cta && (
                <Link to="/contact" className="font-body text-sm font-medium text-gold flex items-center gap-2 hover:gap-3 transition-all">{heritage.cta} →</Link>
              )}
            </FadeIn>
            <FadeIn delay={0.1}>
              {heritage.image ? (
                <div className="relative rounded-lg overflow-hidden" style={{ height: 420 }}>
                  <img src={heritage.image} alt="Heritage" className="w-full h-full object-cover" />
                  {heritage.badge && (
                    <div className="absolute bottom-6 left-6 px-5 py-3 rounded-lg bg-gold">
                      <span className="font-display font-bold text-2xl block leading-none text-ink">{heritage.badge}</span>
                      <span className="font-body text-xs text-ink/80">Est.</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {[{ n: "500+", l: "Clients Served" }, { n: "18+", l: "Years Active" }, { n: "12", l: "Expert Team" }, { n: "98%", l: "Retention Rate" }].map((s) => (
                    <div key={s.l} className="rounded-lg p-6 text-center bg-deep border border-gold/20">
                      <span className="font-display font-bold text-3xl text-gold block">{s.n}</span>
                      <span className="font-body text-xs text-mist">{s.l}</span>
                    </div>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {features.length > 0 && (
        <section className="py-20 bg-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-3">{mission.label || "Why Choose Us"}</span>
                <h2 className="font-display text-4xl font-semibold text-cream">{mission.heading || mission.title || "Our Commitments"}</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f: any, i: number) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="rounded-lg p-7 h-full bg-surface border border-gold/15 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
                    <span className="font-display font-bold text-5xl block mb-4 leading-none" style={{ color: "rgba(200,169,110,0.15)" }}>0{i + 1}</span>
                    <h3 className="font-display font-semibold text-base text-cream mb-2">{f.title}</h3>
                    <p className="font-body text-sm text-mist leading-relaxed">{f.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CORE VALUES */}
      {coreValues.length > 0 && (
        <section className="py-20 bg-deep">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-3">{values.label || "Core Values"}</span>
                <h2 className="font-display text-4xl font-semibold text-cream">{values.heading || values.title || "What Drives Us"}</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-5">
              {coreValues.map((v: any, i: number) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="rounded-lg p-7 text-center bg-ink border border-gold/15 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-gold/10 border border-gold/25">
                      <span className="font-display font-bold text-lg text-gold">{String(v.title || "").charAt(0)}</span>
                    </div>
                    <h3 className="font-display font-semibold text-base text-cream mb-2">{v.title}</h3>
                    <p className="font-body text-sm text-mist leading-relaxed">{v.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920)" }} />
        <div className="absolute inset-0 bg-ink/[0.88]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{cta.label || "LET'S TALK"}</span>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold text-cream mb-6 leading-tight">
              {cta.heading || cta.title || "Ready to Work With Us?"}
            </h2>
            <p className="font-body text-lg text-mist mb-10 max-w-xl mx-auto">{cta.subheading || cta.description || "Schedule a free consultation with our expert team today."}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="shimmer-btn px-10 py-4 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] transition-transform">
                {cta.cta || "Book Consultation"}
              </Link>
              <Link to="/query" className="px-10 py-4 font-body text-sm font-medium text-cream border border-cream/30 rounded-sm hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300">
                {cta.secondaryCta || "Submit a Query"}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
}
