import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPageData, getWebsiteData, getImageUrl } from "@/lib/api";
import { findSection } from "@/lib/sectionHelpers";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    Promise.all([getPageData(`services/${slug}`), getWebsiteData()]).then(([page, site]) => {
      setPageData(page); setWebsiteData(site); setLoading(false);
    }).catch(() => setLoading(false));
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="w-12 h-12 border-2 rounded-full animate-spin border-gold/20 border-t-gold" />
      </div>
    );
  }

  const heroSec = findSection(pageData, "hero");
  const overviewSec = findSection(pageData, "text-image");
  const processSec = findSection(pageData, "process");
  const faqsSec = findSection(pageData, "faqs");
  const ctaSec = findSection(pageData, "cta");

  const hero = heroSec?.textContent || {};
  const overview = overviewSec?.textContent || {};
  const features: string[] = overview.points || overview.features || [];
  const processSteps: any[] = processSec?.textContent?.steps || processSec?.textContent?.items || [];
  const faqs: any[] = faqsSec?.textContent?.items || [];
  const cta = ctaSec?.textContent || {};
  const serviceTitle = hero.heading || slug?.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()) || "";
  const heroImage = heroSec?.imageUrl ? getImageUrl(heroSec.imageUrl) : "";

  const allServices = websiteData?.themeConfig?.services || [];
  const relatedServices = allServices.filter((s: any) => (s.slug || s.href?.replace("/services/", "")) !== slug).slice(0, 3);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-ink font-body text-cream flex flex-col">
        <Navbar websiteData={websiteData} />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-32">
            <h1 className="font-display text-4xl font-semibold text-cream mb-4">Service Not Found</h1>
            <p className="font-body text-mist mb-6">This service page is not published yet in CMS.</p>
            <Link to="/services" className="font-body text-sm text-gold flex items-center justify-center gap-2 hover:underline">← Back to Services</Link>
          </div>
        </main>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  return (
    <div className="bg-ink min-h-screen font-body text-cream">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      {heroSec && (
        <section className="relative min-h-[560px] flex items-end overflow-hidden bg-ink pt-20">
          {heroImage && (
            <>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')`, opacity: 0.25 }} />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/50" />
            </>
          )}
          {!heroImage && <div className="absolute inset-0 bg-ink" />}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-20 pt-32 w-full">
            <Link to="/services" className="font-body text-xs font-medium text-gold flex items-center gap-1 mb-8 hover:text-cream transition-colors">← All Services</Link>
            <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-tight mb-5">{serviceTitle}</h1>
            {hero.subheading && <p className="font-body text-xl text-mist max-w-2xl leading-relaxed">{hero.subheading}</p>}
          </div>
        </section>
      )}

      {/* OVERVIEW + FEATURES */}
      {overviewSec && (
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-5">{hero.label || "Service Overview"}</span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-cream mb-6">{overview.heading || overview.title || `Our ${serviceTitle} Service`}</h2>
              {(overview.body || overview.description) && <p className="font-body text-lg text-mist leading-relaxed mb-8">{overview.body || overview.description}</p>}
              <Link to="/contact" className="shimmer-btn inline-block px-8 py-3.5 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] transition-transform">
                Get Started Today →
              </Link>
            </FadeIn>
            {features.length > 0 && (
              <FadeIn delay={0.1}>
                <h3 className="font-display font-semibold text-lg text-cream mb-5">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-ink border border-gold/15 hover:border-gold/30 transition-all">
                      <span className="text-gold flex-shrink-0 mt-0.5">✓</span>
                      <span className="font-body text-sm text-cream/85 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      )}

      {/* HOW WE WORK */}
      {processSteps.length > 0 && (
        <section className="py-24 bg-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-3">Our Approach</span>
                <h2 className="font-display text-4xl font-semibold text-cream">{processSec?.textContent?.heading || `How We Deliver ${serviceTitle}`}</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-5">
              {processSteps.map((p: any, i: number) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="relative text-center p-8 rounded-lg bg-surface border border-gold/15 hover:border-gold/35 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg mx-auto mb-5 bg-gold text-ink">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display font-semibold text-base text-cream mb-2">{p.title}</h3>
                    <p className="font-body text-sm text-mist leading-relaxed">{p.description || p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-24 bg-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <FadeIn>
              <h2 className="font-display text-4xl font-semibold text-cream text-center mb-12">{faqsSec?.textContent?.heading || "Frequently Asked Questions"}</h2>
            </FadeIn>
            <div className="space-y-3">
              {faqs.map((faq: any, i: number) => (
                <div key={i} className="rounded-lg overflow-hidden border border-gold/15">
                  <button className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 bg-ink hover:bg-surface transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-display font-semibold text-[15px] text-cream">{faq.question || faq.q}</span>
                    <span className="text-gold flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 pt-3 font-body text-sm text-mist leading-relaxed bg-deep border-t border-gold/10">{faq.answer || faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="font-display text-3xl font-semibold text-cream mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((svc: any, i: number) => {
                const s = svc.slug || svc.href?.replace("/services/", "");
                return (
                  <Link key={i} to={`/services/${s}`} className="p-6 rounded-lg flex items-center justify-between bg-surface border border-gold/15 hover:border-gold/35 transition-all hover:-translate-y-1 group">
                    <span className="font-display font-semibold text-base text-cream group-hover:text-gold transition-colors">{svc.title}</span>
                    <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      {ctaSec && (
        <section className="py-24 bg-gold">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-6">{cta.heading || cta.title || `Ready to Get Started with ${serviceTitle}?`}</h2>
            <p className="font-body text-lg text-ink/70 mb-10 max-w-2xl mx-auto">{cta.subheading || cta.description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-ink text-cream px-8 py-4 rounded-sm font-body text-sm font-medium hover:-translate-y-1 transition-all shadow-xl flex items-center gap-2">
                {cta.cta || "Book a Free Consultation"}
              </Link>
              <Link to="/query" className="border border-ink/30 text-ink px-8 py-4 rounded-sm font-body text-sm font-medium hover:bg-ink/10 transition-all flex items-center gap-2">
                Submit a Query →
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
}
