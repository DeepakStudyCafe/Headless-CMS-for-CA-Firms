import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import SectionDivider from "@/components/SectionDivider";
import MagneticCard from "@/components/MagneticCard";
import CTASection from "@/components/CTASection";
import { SERVICES, PROCESS_STEPS, INDUSTRIES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Receipt, Users, Calculator, Building, Shield, FileSearch, TrendingUp, Factory, Monitor, Stethoscope, Building2, ShoppingCart, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

const serviceIconMap: Record<string, React.ElementType> = {
  book: BookOpen, gst: Receipt, users: Users, tax: Calculator,
  registration: Building, shield: Shield, audit: FileSearch, advisory: TrendingUp,
};

const industryIconMap: Record<string, React.ElementType> = {
  Factory, Monitor, Stethoscope, Building2, ShoppingCart, Rocket,
};

const Services = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('services'), getWebsiteData()]).then(([page, site]) => {
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
  const servicesSection = pageData?.sections?.find(s => s.type === 'services');
  const processSection = pageData?.sections?.find(s => s.type === 'process');
  const industriesSection = pageData?.sections?.find(s => s.type === 'industries');

  const servicesData = servicesSection?.textContent?.items || SERVICES;
  const processData = processSection?.textContent?.items || PROCESS_STEPS;
  const industriesData = industriesSection?.textContent?.items || INDUSTRIES;

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
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            {heroSection?.textContent?.heading || "Our Services"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-white/50 text-base md:text-lg max-w-2xl mx-auto"
          >
            {heroSection?.textContent?.subheading || "Comprehensive financial solutions tailored for modern businesses across every stage of growth."}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="Expertise" title="Our Core Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service: any, i: number) => {
              const Icon = serviceIconMap[service.icon] || Calculator;
              return (
                <MagneticCard key={service.title} index={i}>
                  <div className="bg-white p-8 rounded-2xl border border-gold/10 h-full flex flex-col group hover:border-gold/30 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:rotate-[360deg] transition-transform duration-700">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-display text-xl text-charcoal mb-3">{service.title}</h3>
                    <p className="text-warm-gray font-sans text-sm leading-relaxed mb-5 flex-1">{service.description}</p>
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </MagneticCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <SectionDivider from="paper" to="white" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 gold-grid opacity-[0.02]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="Our Process" title="How We Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px border-t-2 border-dashed border-gold/30" />
            {processData.map((step: any, i: number) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center relative"
              >
                <div className="relative z-10">
                  <span className="font-display text-6xl text-gold/15 leading-none">{step.step}</span>
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mx-auto -mt-5 mb-5 relative z-10">
                    <span className="font-sans text-charcoal text-sm font-bold">{i + 1}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl text-charcoal mb-3">{step.title}</h3>
                <p className="font-sans text-warm-gray text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <SectionDivider from="white" to="dark" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-charcoal relative">
        <div className="absolute inset-0 gold-grain" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="Industries" title="Sectors We Serve" light />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industriesData.map((industry: any, i: number) => {
              const Icon = industryIconMap[industry.icon] || Building2;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <span className="font-sans text-white/70 text-sm">{industry.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Services;
