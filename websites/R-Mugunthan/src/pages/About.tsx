import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import SectionDivider from "@/components/SectionDivider";
import MagneticCard from "@/components/MagneticCard";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Heart, Lightbulb, Users, Scale, BadgeCheck, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Shield, Award, Heart, Lightbulb, Users, Scale };

import { useState, useEffect } from "react";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

const About = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('about'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-paper flex flex-col">
        <CustomCursor />
        <Navbar websiteData={websiteData} />
        <main className="flex-grow"></main>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const heroSection = pageData?.sections?.find(s => s.type === 'hero');
  const storySection = pageData?.sections?.find(s => s.type === 'text-image' && s.textContent?.label === 'Who We Are');
  const missionSection = pageData?.sections?.find(s => s.type === 'features' && s.textContent?.label === 'Our Purpose');
  const valuesSection = pageData?.sections?.find(s => s.type === 'text-image' && s.textContent?.label === 'Our Foundation');
  const timelineSection = pageData?.sections?.find(s => s.type === 'timeline');
  const certSection = pageData?.sections?.find(s => s.type === 'certifications');
  const edgeSection = pageData?.sections?.find(s => s.type === 'features' && s.textContent?.label === 'Our Edge');

  const storyData = storySection?.textContent?.paragraphs || [];
  const missionData = missionSection?.textContent?.items || [];
  const valuesData = valuesSection?.textContent?.items || [];
  const timelineData = timelineSection?.textContent?.items || [];
  const certData = certSection?.textContent?.items || [];
  const edgeData = edgeSection?.textContent?.items || [];
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <CustomCursor />
      <Navbar websiteData={websiteData} />

      {/* Page Hero */}
      {heroSection && (
        <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">          {heroSection.imageUrl && (
            <div className="absolute inset-0 z-0">
              <img 
                src={getImageUrl(heroSection.imageUrl)} 
                alt="Banner" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          )}          <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
          <div className="absolute inset-0 gold-grain" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold inline-block mb-4"
            >
              {heroSection.textContent?.label}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4"
            >
              {heroSection.textContent?.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-white/50 text-base md:text-lg max-w-2xl mx-auto"
            >
              {heroSection.textContent?.subheading}
            </motion.p>
          </div>
        </section>
      )}

      {/* Company Story */}
      {storySection && (
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
          <div className="absolute inset-0 noise-texture" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <SectionHeading label={storySection.textContent?.label} title={storySection.textContent?.heading} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {storyData.map((para: string, idx: number) => (
                  <p key={idx} className="text-charcoal/80 font-sans text-base leading-relaxed mb-5">
                    {para}
                  </p>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl" />
                <img
                  src={storySection.imageUrl || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"}
                  alt="Our Story"
                  className="rounded-2xl w-full h-80 lg:h-96 object-cover relative z-10 kenburns"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Mission & Vision */}
      {missionSection && (
        <>
          <SectionDivider from="paper" to="white" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
            <div className="absolute inset-0 gold-grid opacity-[0.02]" />
            <div className="relative z-10 max-w-5xl mx-auto">
              <SectionHeading label={missionSection.textContent?.label} title={missionSection.textContent?.heading} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {missionData.map((card: any, i: number) => {
                  const Icon = iconMap[card.icon] || Target;
                  return (
                    <MagneticCard key={card.title} index={i}>
                      <div className="bg-paper p-8 md:p-10 rounded-2xl border-t-4 border-gold h-full">
                        <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-gold" />
                        </div>
                        <h3 className="font-display text-2xl text-charcoal mb-4">{card.title}</h3>
                        <p className="text-warm-gray font-sans text-sm leading-relaxed">{card.description}</p>
                      </div>
                    </MagneticCard>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Core Values */}
      {valuesSection && (
        <>
          <SectionDivider from="white" to="paper" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
            <div className="absolute inset-0 diagonal-stripes opacity-[0.02]" />
            <div className="absolute inset-0 noise-texture" />
            <div className="relative z-10 max-w-7xl mx-auto">
              <SectionHeading label={valuesSection.textContent?.label} title={valuesSection.textContent?.heading} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {valuesData.map((value: any, i: number) => {
                  const Icon = iconMap[value.icon] || Shield;
                  return (
                    <MagneticCard key={value.title} index={i}>
                      <div className="bg-white p-8 rounded-2xl border border-gold/10 h-full">
                        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="font-display text-xl text-charcoal mb-3">{value.title}</h3>
                        <p className="text-warm-gray font-sans text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </MagneticCard>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Timeline / Milestones */}
      {timelineSection && (
        <>
          <SectionDivider from="paper" to="dark" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-charcoal relative">
            <div className="absolute inset-0 gold-grain" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <SectionHeading label={timelineSection.textContent?.label} title={timelineSection.textContent?.heading} light />
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-px" />
                {timelineData.map((item: any, i: number) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.6 }}
                    className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 md:-translate-x-1.5 top-2 z-10 ring-4 ring-charcoal" />
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                      <span className="font-display text-3xl text-gold">{item.year}</span>
                      <h3 className="font-display text-xl text-white mt-1 mb-2">{item.title}</h3>
                      <p className="font-sans text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Certifications */}
      {certSection && (
        <>
          <SectionDivider from="dark" to="white" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
            <div className="absolute inset-0 gold-grid opacity-[0.02]" />
            <div className="relative z-10 max-w-5xl mx-auto">
              <SectionHeading label={certSection.textContent?.label} title={certSection.textContent?.heading} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certData.map((cert: any, i: number) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="bg-paper p-6 rounded-2xl border border-gold/10 flex items-start gap-4 hover:border-gold/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-base text-charcoal mb-1">{cert.name}</h4>
                      <p className="font-sans text-warm-gray text-xs leading-relaxed">{cert.body}</p>
                      <p className="font-sans text-gold text-xs mt-1">Since {cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Why Choose Us */}
      {edgeSection && (
        <>
          <SectionDivider from="white" to="paper" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
            <div className="absolute inset-0 noise-texture" />
            <div className="relative z-10 max-w-5xl mx-auto">
              <SectionHeading label={edgeSection.textContent?.label} title={edgeSection.textContent?.heading} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {edgeData.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                    className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gold/10"
                  >
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-charcoal/80 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <CTASection />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default About;
