import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import SectionDivider from "@/components/SectionDivider";
import MagneticCard from "@/components/MagneticCard";
import CTASection from "@/components/CTASection";
import { CORE_VALUES, COMPANY_TIMELINE, CERTIFICATIONS, WHY_CHOOSE_US } from "@/lib/constants";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Heart, Lightbulb, Users, Scale, BadgeCheck, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Shield, Award, Heart, Lightbulb, Users, Scale };

import { useState, useEffect } from "react";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

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

  const heroSection = pageData?.sections?.find(s => s.type === 'hero');
  const valuesSection = pageData?.sections?.find(s => s.type === 'text-image' && s.textContent?.heading === 'Our Values');
  const timelineSection = pageData?.sections?.find(s => s.type === 'timeline');
  const certSection = pageData?.sections?.find(s => s.type === 'certifications');
  const edgeSection = pageData?.sections?.find(s => s.type === 'text-image' && s.textContent?.heading === 'Our Edge');

  const valuesData = valuesSection?.textContent?.items || CORE_VALUES;
  const timelineData = timelineSection?.textContent?.items || COMPANY_TIMELINE;
  const certData = certSection?.textContent?.items || CERTIFICATIONS;
  const edgeData = edgeSection?.textContent?.features || WHY_CHOOSE_US;
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <CustomCursor />
      <Navbar websiteData={websiteData} />

      {/* Page Hero */}
      <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="absolute inset-0 gold-grain" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold inline-block mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            {heroSection?.textContent?.heading || "Architects of Fiscal Integrity"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-white/50 text-base md:text-lg max-w-2xl mx-auto"
          >
            {heroSection?.textContent?.subheading || "Since 2005, we have been building trust through expertise, integrity, and an unwavering commitment to our clients' financial success."}
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="Who We Are" title="Our Legacy" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-charcoal/80 font-sans text-base leading-relaxed mb-5">
                Founded in 2005 by a group of visionary Chartered Accountants, our firm was born from a simple belief: that businesses deserve financial partners who combine deep expertise with genuine care. What started as a boutique audit practice has grown into a full-service financial solutions firm trusted by over 500 clients globally.
              </p>
              <p className="text-charcoal/80 font-sans text-base leading-relaxed mb-5">
                Over nearly two decades, we have navigated our clients through major regulatory shifts — from the Companies Act 2013 transition to GST implementation and evolving international tax frameworks. Our ability to stay ahead of change while maintaining personalized service is what sets us apart.
              </p>
              <p className="text-charcoal/80 font-sans text-base leading-relaxed">
                Today, our team of 20+ professionals serves clients across manufacturing, IT, healthcare, real estate, and startups, delivering solutions that range from day-to-day bookkeeping to complex M&A advisory. We remain guided by the same values that founded this firm: integrity, excellence, and client-first thinking.
              </p>
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="Our Office"
                className="rounded-2xl w-full h-80 lg:h-96 object-cover relative z-10 kenburns"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionDivider from="paper" to="white" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 gold-grid opacity-[0.02]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading label="Our Purpose" title="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To empower businesses and individuals with accurate, timely, and strategic financial services that drive growth, ensure compliance, and create lasting value. We are committed to being more than service providers — we are trusted financial partners." },
              { icon: Eye, title: "Our Vision", text: "To be recognized as India's most trusted and client-centric Chartered Accountancy firm, setting the gold standard in financial services through innovation, integrity, and an unrelenting pursuit of excellence across every engagement." },
            ].map((card, i) => (
              <MagneticCard key={card.title} index={i}>
                <div className="bg-paper p-8 md:p-10 rounded-2xl border-t-4 border-gold h-full">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-4">{card.title}</h3>
                  <p className="text-warm-gray font-sans text-sm leading-relaxed">{card.text}</p>
                </div>
              </MagneticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <SectionDivider from="white" to="paper" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 diagonal-stripes opacity-[0.02]" />
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="Our Foundation" title="Core Values" />
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

      {/* Timeline / Milestones */}
      <SectionDivider from="paper" to="dark" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-charcoal relative">
        <div className="absolute inset-0 gold-grain" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionHeading label="Our Journey" title="Milestones That Define Us" light />
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

      {/* Certifications */}
      <SectionDivider from="dark" to="white" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 gold-grid opacity-[0.02]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading label="Credentials" title="Certifications & Affiliations" />
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

      {/* Why Choose Us */}
      <SectionDivider from="white" to="paper" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionHeading label="Our Edge" title="Why Choose Us" />
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

      <CTASection />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default About;
