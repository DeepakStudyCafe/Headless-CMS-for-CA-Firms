import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, BadgeCheck, Target, Eye, Shield, Award, Heart, Lightbulb, Users, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

const iconMap: Record<string, React.ElementType> = { Shield, Award, Heart, Lightbulb, Users, Scale, Target, Eye };

const SectionLabel = ({ text }: { text: string }) => (
  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
    className="font-mono text-[10px] tracking-[3px] uppercase block mb-3" style={{ color: "#E08C2E" }}>
    // {text}
  </motion.span>
);

const SectionTitle = ({ text, light }: { text: string; light?: boolean }) => (
  <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="font-heading font-bold leading-[1.1] tracking-tight mb-4"
    style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: light ? "#F5F0E8" : "#1A1A1A" }}>
    {text}
  </motion.h2>
);

const About = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData("about"), getWebsiteData()]).then(([page, site]) => {
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
  const textImageSections = pageData.sections?.filter(s => s.type === "text-image") || [];
  const storySection = textImageSections[0];
  const valuesSection = textImageSections[1];

  const featuresSections = pageData.sections?.filter(s => s.type === "features") || [];
  const missionSection = featuresSections[0];
  const edgeSection = featuresSections[1];

  const timelineSection = pageData.sections?.find(s => s.type === "timeline");
  const certSection = pageData.sections?.find(s => s.type === "certifications");
  const ctaSection = pageData.sections?.find(s => s.type === "cta");

  const storyParagraphs = storySection?.textContent?.paragraphs || [];
  const missionItems = missionSection?.textContent?.items || [];
  const valuesItems = valuesSection?.textContent?.items || [];
  const timelineItems = timelineSection?.textContent?.items || [];
  const certItems = certSection?.textContent?.items || [];
  const edgeItems = edgeSection?.textContent?.items || [];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FAF7F2" }}>
      <Navbar websiteData={websiteData} />

      {/* Hero */}
      {heroSection && (
        <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#0D0D0D" }}>
          {heroSection.imageUrl && (
            <img src={getImageUrl(heroSection.imageUrl)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.6), #0D0D0D)" }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            {heroSection.textContent?.label && (
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="font-mono text-[10px] tracking-[3px] uppercase block mb-4" style={{ color: "#E08C2E" }}>
                // {heroSection.textContent.label}
              </motion.span>
            )}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold mb-4" style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "#F5F0E8", lineHeight: 1.05 }}>
              {heroSection.textContent?.heading}
            </motion.h1>
            {heroSection.textContent?.subheading && (
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
                className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(245,240,232,0.55)" }}>
                {heroSection.textContent.subheading}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* Company Story */}
      {storySection && (
        <section className="py-20 md:py-28 px-6 lg:px-12" style={{ background: "#FAF7F2" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionLabel text={storySection.textContent?.label} />
              <SectionTitle text={storySection.textContent?.heading} />
              {storyParagraphs.map((para: string, i: number) => (
                <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "rgba(26,26,26,0.72)" }}>{para}</p>
              ))}
            </motion.div>
            {storySection.imageUrl && (
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2" style={{ borderColor: "rgba(224,140,46,0.2)" }} />
                <img src={getImageUrl(storySection.imageUrl)} alt="Our Story" className="rounded-2xl w-full h-80 lg:h-96 object-cover relative z-10" loading="lazy" />
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Mission & Vision */}
      {missionSection && missionItems.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-12" style={{ background: "#F0EBE1" }}>
          <div className="max-w-5xl mx-auto">
            <SectionLabel text={missionSection.textContent?.label} />
            <SectionTitle text={missionSection.textContent?.heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {missionItems.map((card: any, i: number) => {
                const Icon = iconMap[card.icon] || Target;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.6 }}
                    className="rounded-2xl p-8 border-t-4" style={{ background: "#FAF7F2", borderTopColor: "#E08C2E" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(224,140,46,0.1)" }}>
                      <Icon className="w-6 h-6" style={{ color: "#E08C2E" }} />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "#1A1A1A" }}>{card.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.65)" }}>{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Core Values */}
      {valuesSection && valuesItems.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-12" style={{ background: "#FAF7F2" }}>
          <div className="max-w-7xl mx-auto">
            <SectionLabel text={valuesSection.textContent?.label} />
            <SectionTitle text={valuesSection.textContent?.heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {valuesItems.map((value: any, i: number) => {
                const Icon = iconMap[value.icon] || Shield;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.55 }}
                    className="rounded-2xl p-7 border" style={{ background: "#FFFFFF", borderColor: "rgba(224,140,46,0.12)" }}>
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(224,140,46,0.1)" }}>
                      <Icon className="w-5 h-5" style={{ color: "#E08C2E" }} />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2" style={{ color: "#1A1A1A" }}>{value.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.6)" }}>{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Timeline */}
      {timelineSection && timelineItems.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-12" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel text={timelineSection.textContent?.label} />
            <SectionTitle text={timelineSection.textContent?.heading} light />
            <div className="relative mt-12">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "rgba(224,140,46,0.3)" }} />
              {timelineItems.map((item: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 top-2 z-10 ring-4 ring-[#111111]" style={{ background: "#E08C2E" }} />
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <span className="font-heading text-3xl font-bold" style={{ color: "#E08C2E" }}>{item.year}</span>
                    <h3 className="font-heading text-lg font-semibold mt-1 mb-2" style={{ color: "#F5F0E8" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      {certSection && certItems.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-12" style={{ background: "#FAF7F2" }}>
          <div className="max-w-5xl mx-auto">
            <SectionLabel text={certSection.textContent?.label} />
            <SectionTitle text={certSection.textContent?.heading} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {certItems.map((cert: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="flex items-start gap-4 rounded-xl p-5 border" style={{ background: "#FFFFFF", borderColor: "rgba(224,140,46,0.12)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(224,140,46,0.1)" }}>
                    <BadgeCheck className="w-5 h-5" style={{ color: "#E08C2E" }} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm mb-1" style={{ color: "#1A1A1A" }}>{cert.name}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(26,26,26,0.6)" }}>{cert.body}</p>
                    {cert.year && <p className="text-xs mt-1 font-mono" style={{ color: "#E08C2E" }}>Since {cert.year}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {edgeSection && edgeItems.length > 0 && (
        <section className="py-20 md:py-24 px-6 lg:px-12" style={{ background: "#F0EBE1" }}>
          <div className="max-w-5xl mx-auto">
            <SectionLabel text={edgeSection.textContent?.label} />
            <SectionTitle text={edgeSection.textContent?.heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              {edgeItems.map((item: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-4 rounded-xl p-5 border" style={{ background: "#FFFFFF", borderColor: "rgba(224,140,46,0.1)" }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#E08C2E" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.78)" }}>{typeof item === "string" ? item : item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Strip */}
      {ctaSection && (
        <section className="py-16 px-6 text-center" style={{ background: "#0D0D0D" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: "#F5F0E8" }}>{ctaSection.textContent?.heading}</h2>
            <p className="mb-8 text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>{ctaSection.textContent?.subheading}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all"
              style={{ background: "#E08C2E", color: "#0D0D0D" }}>
              {ctaSection.textContent?.cta}
            </Link>
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default About;
