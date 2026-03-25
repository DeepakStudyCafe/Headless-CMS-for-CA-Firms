import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

const Services = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData("services"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

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
  const servicesSection = pageData.sections?.find(s => s.type === "services");
  const processSection = pageData.sections?.find(s => s.type === "process");
  const industriesSection = pageData.sections?.find(s => s.type === "industries");
  const ctaSection = pageData.sections?.find(s => s.type === "cta");

  const servicesData: any[] = servicesSection?.textContent?.items || [];
  const processData: any[] = processSection?.textContent?.items || [];
  const industriesData: any[] = industriesSection?.textContent?.items || [];

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
            {heroSection?.textContent?.label && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                className="font-mono text-[10px] tracking-[3px] uppercase block mb-4" style={{ color: "#E08C2E" }}>
                // {heroSection.textContent.label}
              </motion.span>
            )}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
              className="font-heading font-bold mb-4" style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "#F5F0E8", lineHeight: 1.05 }}>
              {heroSection.textContent?.heading}
            </motion.h1>
            {heroSection.textContent?.subheading && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
                className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(245,240,232,0.5)" }}>
                {heroSection.textContent.subheading}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* Services Grid */}
      {servicesData.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#0D0D0D" }}>
          <div className="max-w-7xl mx-auto">
            {servicesSection?.textContent?.heading && (
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12" style={{ color: "#F5F0E8" }}>
                {servicesSection.textContent.heading}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {servicesData.map((svc: any, i: number) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.06 * i, duration: 0.55 }}
                  className="group rounded-2xl p-6 border flex flex-col transition-all hover:shadow-lg"
                  style={{ background: "#111111", borderColor: "rgba(224,140,46,0.12)" }}>
                  {svc.icon && (
                    <div className="text-2xl mb-4">{svc.icon}</div>
                  )}
                  <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: "#F5F0E8" }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: "rgba(245,240,232,0.5)" }}>{svc.description}</p>
                  <Link to={svc.href || `/services/${svc.title?.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider transition-colors group-hover:gap-2"
                    style={{ color: "#E08C2E" }}>
                    Learn More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process */}
      {processData.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#111111" }}>
          <div className="max-w-5xl mx-auto">
            {processSection?.textContent?.label && (
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="font-mono text-[10px] tracking-[3px] uppercase block mb-2" style={{ color: "#E08C2E" }}>
                // {processSection.textContent.label}
              </motion.span>
            )}
            {processSection?.textContent?.heading && (
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12" style={{ color: "#F5F0E8" }}>
                {processSection.textContent.heading}
              </h2>
            )}
            <div className="space-y-6">
              {processData.map((step: any, i: number) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.55 }}
                  className="flex gap-6 items-start rounded-xl p-6 border"
                  style={{ background: "#0D0D0D", borderColor: "rgba(224,140,46,0.1)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold"
                    style={{ background: "#E08C2E", color: "#0D0D0D" }}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-base mb-1" style={{ color: "#F5F0E8" }}>{step.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries */}
      {industriesData.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#0D0D0D" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12" style={{ color: "#F5F0E8" }}>
              {industriesSection?.textContent?.heading || "Industries We Serve"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {industriesData.map((ind: any, i: number) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                  className="flex flex-col items-center p-5 rounded-xl border text-center"
                  style={{ background: "#111111", borderColor: "rgba(224,140,46,0.1)" }}>
                  {ind.icon && <span className="text-2xl mb-3">{ind.icon}</span>}
                  <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>{ind.title || ind.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSection && (
        <section className="py-16 px-6 text-center" style={{ background: "#111111", borderTop: "1px solid rgba(224,140,46,0.1)" }}>
          <div className="max-w-3xl mx-auto">
            {ctaSection.textContent?.heading && (
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: "#F5F0E8" }}>
                {ctaSection.textContent.heading}
              </h2>
            )}
            {ctaSection.textContent?.subheading && (
              <p className="text-sm mb-8" style={{ color: "rgba(245,240,232,0.5)" }}>
                {ctaSection.textContent.subheading}
              </p>
            )}
            {ctaSection.textContent?.cta && (
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all"
                style={{ background: "#E08C2E", color: "#0D0D0D" }}>
                {ctaSection.textContent.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Services;
