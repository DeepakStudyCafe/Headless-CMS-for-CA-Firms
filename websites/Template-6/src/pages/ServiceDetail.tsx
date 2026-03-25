import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;
    Promise.all([getPageData(slug), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
        <div className="w-14 h-14 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(224,140,46,0.2)", borderTopColor: "#E08C2E" }} />
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#0D0D0D" }}>
        <Navbar websiteData={websiteData} />
        <main className="flex-grow" />
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === "hero");
  const textSection = pageData.sections?.find(s => s.type === "text-image");
  const processSection = pageData.sections?.find(s => s.type === "process");
  const pricingSection = pageData.sections?.find(s => s.type === "pricing");
  const faqSection = pageData.sections?.find(s => s.type === "faqs");

  const features: any[] = textSection?.textContent?.features || [];
  const processSteps: any[] = processSection?.textContent?.items || [];
  const pricingTiers: any[] = pricingSection?.textContent?.items || [];
  const faqs: any[] = faqSection?.textContent?.items || [];

  // Features can be strings OR objects {icon, title, description} depending on seed
  const renderFeature = (f: any): string =>
    typeof f === 'string' ? f : (f?.title || f?.description || JSON.stringify(f));

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0D0D0D" }}>
      <Navbar websiteData={websiteData} />

      {/* Hero */}
      {heroSection && (
        <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#111111" }}>
          {heroSection.imageUrl && (
            <img src={getImageUrl(heroSection.imageUrl)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, #111111)" }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
              <Link to="/services" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider hover:opacity-70 transition-opacity"
                style={{ color: "#E08C2E" }}>
                <ArrowLeft className="w-3.5 h-3.5" /> All Services
              </Link>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
              className="font-heading font-bold mb-4" style={{ fontSize: "clamp(32px, 5vw, 64px)", color: "#F5F0E8", lineHeight: 1.05 }}>
              {heroSection.textContent?.heading}
            </motion.h1>
            {heroSection.textContent?.subheading && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(245,240,232,0.55)" }}>
                {heroSection.textContent.subheading}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* Description + Features */}
      {textSection && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#0D0D0D" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-5" style={{ color: "#F5F0E8" }}>
                {textSection.textContent?.heading || "What We Offer"}
              </h2>
              {textSection.textContent?.description && (
                <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
                  {textSection.textContent.description}
                </p>
              )}
            </div>
            {features.length > 0 && (
              <div className={features.some(f => typeof f === 'object') ? "lg:col-span-2 mt-0" : ""}>
                {features.some(f => typeof f === 'object') ? (
                  // Object features: render as 3-column card grid
                  <div>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8" style={{ color: "#F5F0E8" }}>
                      {textSection.textContent?.featureHeading || "Key Features"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {features.map((feat: any, i: number) => (
                        <motion.div key={i}
                          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          transition={{ delay: 0.06 * i, duration: 0.5 }}
                          className="rounded-xl border p-5" style={{ background: "#111111", borderColor: "rgba(224,140,46,0.12)" }}>
                          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3" style={{ background: "rgba(224,140,46,0.1)" }}>
                            <CheckCircle className="w-4 h-4" style={{ color: "#E08C2E" }} />
                          </div>
                          <h4 className="font-heading font-semibold text-sm mb-1.5" style={{ color: "#F5F0E8" }}>{feat.title}</h4>
                          <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>{feat.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // String features: render as checklist
                  <div className="rounded-2xl p-7 border" style={{ background: "#111111", borderColor: "rgba(224,140,46,0.12)" }}>
                    <h3 className="font-heading font-semibold text-base mb-5" style={{ color: "#F5F0E8" }}>
                      {textSection.textContent?.featureHeading || "Key Features"}
                    </h3>
                    <ul className="space-y-3">
                      {features.map((feat: any, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#E08C2E" }} />
                          <span className="text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>{renderFeature(feat)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* How It Works */}
      {processSteps.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12" style={{ color: "#F5F0E8" }}>
              {processSection?.textContent?.heading}
            </h2>
            <div className="space-y-4">
              {processSteps.map((step: any, i: number) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="flex gap-5 items-start p-5 rounded-xl border"
                  style={{ background: "#0D0D0D", borderColor: "rgba(224,140,46,0.1)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                    style={{ background: "#E08C2E", color: "#0D0D0D" }}>{i + 1}</div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1" style={{ color: "#F5F0E8" }}>{step.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {pricingTiers.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#0D0D0D" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12" style={{ color: "#F5F0E8" }}>
              {pricingSection?.textContent?.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier: any, i: number) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.55 }}
                  className="rounded-2xl p-7 border relative flex flex-col"
                  style={{ background: ((tier.popular || tier.highlighted) || tier.highlighted) ? "#E08C2E" : "#111111", borderColor: ((tier.popular || tier.highlighted) || tier.highlighted) ? "#E08C2E" : "rgba(224,140,46,0.12)" }}>
                  {((tier.popular || tier.highlighted) || tier.highlighted) && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-mono font-bold"
                      style={{ background: "#0D0D0D", color: "#E08C2E" }}>Most Popular</span>
                  )}
                  <h3 className="font-heading font-bold text-lg mb-1" style={{ color: (tier.popular || tier.highlighted) ? "#0D0D0D" : "#F5F0E8" }}>{tier.name}</h3>
                  <p className="font-heading font-bold text-3xl mb-2" style={{ color: (tier.popular || tier.highlighted) ? "#0D0D0D" : "#E08C2E" }}>{tier.price}</p>
                  {tier.period && <p className="text-xs mb-5" style={{ color: (tier.popular || tier.highlighted) ? "rgba(13,13,13,0.7)" : "rgba(245,240,232,0.4)" }}>{tier.period}</p>}
                  <ul className="space-y-2 flex-grow mb-6">
                    {(tier.features || []).map((f: any, fi: number) => (
                      <li key={fi} className="flex items-start gap-2 text-sm" style={{ color: (tier.popular || tier.highlighted) ? "rgba(13,13,13,0.85)" : "rgba(245,240,232,0.65)" }}>
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: (tier.popular || tier.highlighted) ? "#0D0D0D" : "#E08C2E" }} />
                        {renderFeature(f)}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="text-center py-2.5 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: (tier.popular || tier.highlighted) ? "#0D0D0D" : "#E08C2E", color: (tier.popular || tier.highlighted) ? "#E08C2E" : "#0D0D0D" }}>
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#111111" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10" style={{ color: "#F5F0E8" }}>
              {faqSection?.textContent?.heading}
            </h2>
            <div className="space-y-3">
              {faqs.map((faq: any, i: number) => (
                <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(224,140,46,0.1)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left flex items-center justify-between p-5"
                    style={{ background: "#0D0D0D" }}>
                    <span className="font-heading font-semibold text-sm pr-4" style={{ color: "#F5F0E8" }}>{faq.question}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "#E08C2E" }} />
                      : <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "#E08C2E" }} />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-0" style={{ background: "#0D0D0D" }}>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default ServiceDetail;
