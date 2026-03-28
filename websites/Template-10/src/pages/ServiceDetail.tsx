import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft, CheckCircle2, Clock, Shield, Phone, ArrowRight, Award, ChevronDown, ChevronUp
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { getWebsiteData, getPageData, getImageUrl } from "@/lib/api";
import { findSection } from "@/lib/sectionHelpers";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    Promise.all([getPageData(slug), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    }).catch(() => setLoading(false));
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <LoadingScreen />;

  const heroSection = findSection(pageData, "hero");
  const textImageSection = findSection(pageData, "text-image");
  const processSection = findSection(pageData, "process");
  const pricingSection = findSection(pageData, "pricing");
  const faqsSection = findSection(pageData, "faqs");
  const ctaSection = findSection(pageData, "cta");

  const hero = heroSection?.textContent || {};
  const overview = textImageSection?.textContent || {};
  const features: string[] = overview.features || [];
  const processSteps: any[] = processSection?.textContent?.items || [];
  const pricingTiers: any[] = pricingSection?.textContent?.items || [];
  const faqs: any[] = faqsSection?.textContent?.items || [];
  const cta = ctaSection?.textContent || {};
  const serviceTitle = hero.heading || slug?.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()) || "";
  const heroImage = heroSection?.imageUrl ? getImageUrl(heroSection.imageUrl) : "";

  // Related services from themeConfig
  const allServices = websiteData?.themeConfig?.services || [];
  const relatedServices = allServices.filter((s: any) => s.slug !== slug).slice(0, 3);

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar data={websiteData} />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-32">
            <h1 className="text-4xl font-headline font-bold text-primary mb-4">Service Not Found</h1>
            <p className="text-on-surface-variant mb-6">This service page is not published yet in CMS.</p>
            <Link to="/services" className="text-secondary flex items-center justify-center gap-2 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
          </div>
        </main>
        <Footer data={websiteData} />
      </div>
    );
  }

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar data={websiteData} />

      {/* HERO */}
      {heroSection && (
        <section className="relative min-h-[580px] flex items-end overflow-hidden bg-primary pt-20">
          {heroImage && (
            <div
              className="absolute inset-0"
              style={{ backgroundImage: `url('${heroImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40"></div>
            </div>
          )}
          {!heroImage && <div className="absolute inset-0 bg-primary" />}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-20 pt-32 w-full">
            <Link to="/services" className="inline-flex items-center text-secondary-fixed mb-8 hover:text-white transition-colors text-sm font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" /> All Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tighter leading-none mb-5">
              {serviceTitle}
            </h1>
            {hero.subheading && (
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                {hero.subheading}
              </p>
            )}
          </div>
        </section>
      )}

      {/* OVERVIEW + FEATURES */}
      {textImageSection && (
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-xs tracking-widest uppercase mb-6">{hero.label || "Service Overview"}</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
                {overview.heading || `Why Our ${serviceTitle} Service Stands Apart`}
              </h2>
              {overview.description && (
                <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
                  {overview.description}
                </p>
              )}
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all shadow-lg shadow-primary/20">
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {features.length > 0 && (
              <div>
                <h3 className="text-xl font-headline font-bold text-primary mb-6">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10 hover:shadow-md transition-all">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-on-surface text-sm font-medium leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* HOW WE WORK */}
      {processSteps.length > 0 && (
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-xs tracking-widest uppercase mb-6">Our Approach</span>
              <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">{processSection?.textContent?.heading || `How We Deliver ${serviceTitle}`}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {processSteps.map((p: any, i: number) => (
                <div key={i} className="relative text-center p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-headline font-extrabold text-xl mx-auto mb-6">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-lg font-headline font-bold text-primary mb-3">{p.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{p.description || p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRICING */}
      {pricingTiers.length > 0 && (
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">{pricingSection?.textContent?.heading || "Transparent Pricing"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pricingTiers.map((tier: any, i: number) => (
                <div key={i} className={`p-8 rounded-2xl border bg-surface-container-lowest text-center flex flex-col ${i === 1 ? "border-secondary ring-2 ring-secondary/20 shadow-xl" : "border-outline-variant/10"}`}>
                  <h3 className="text-xl font-headline font-bold text-primary mb-2">{tier.title || tier.name}</h3>
                  <div className="text-3xl font-headline font-extrabold text-secondary mb-4">{tier.price}</div>
                  <p className="text-sm text-on-surface-variant mb-6">{tier.description}</p>
                  {Array.isArray(tier.features) && tier.features.length > 0 && (
                    <ul className="text-sm text-on-surface-variant space-y-2 mb-6 text-left flex-1">
                      {tier.features.map((f: string, fi: number) => (
                        <li key={fi} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to="/contact" className={`mt-auto py-3 rounded-xl font-bold text-sm ${i === 1 ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"} transition-colors`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-24 bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">{faqsSection?.textContent?.heading || "Frequently Asked Questions"}</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq: any, i: number) => (
                <div key={i} className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest overflow-hidden">
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-headline font-bold text-primary text-base leading-snug">{faq.question || faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-on-surface-variant flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                      {faq.answer || faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY US CARDS */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Why Businesses Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-7 h-7" />, title: "Always On Time", desc: "We never miss a statutory deadline. Our compliance calendar system ensures every filing is done ahead of time." },
              { icon: <Shield className="w-7 h-7" />, title: "Zero Penalty Guarantee", desc: "Our meticulous review process ensures your returns and filings are error-free, eliminating the risk of regulatory penalties." },
              { icon: <Award className="w-7 h-7" />, title: "Expert Team", desc: "Every engagement is overseen by a senior CA with 10+ years of domain-specific experience and a track record of excellence." },
            ].map((c, i) => (
              <div key={i} className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">{c.icon}</div>
                <h3 className="text-xl font-headline font-bold text-primary mb-3">{c.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-headline font-extrabold text-primary mb-10">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((svc: any, i: number) => (
                <Link to={`/services/${svc.slug || svc.href?.replace("/services/", "")}`} key={i} className="p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex items-center justify-between">
                  <span className="font-headline font-bold text-primary text-lg group-hover:text-secondary transition-colors">{svc.title}</span>
                  <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      {ctaSection && (
        <section className="py-24 bg-secondary">
          <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">
              {cta.heading || `Ready to Get Started with ${serviceTitle}?`}
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              {cta.subheading || "Schedule a free consultation with our team and discover how we can transform this area of your business."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all shadow-xl flex items-center gap-2">
                <Phone className="w-5 h-5" /> {cta.cta || "Book a Free Consultation"}
              </Link>
              <Link to="/query" className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                Submit a Query <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer data={websiteData} />
    </div>
  );
};

export default ServiceDetail;
