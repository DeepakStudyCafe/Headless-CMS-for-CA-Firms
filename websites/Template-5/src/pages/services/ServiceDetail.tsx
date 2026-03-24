import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import SectionDivider from "@/components/SectionDivider";
import MagneticCard from "@/components/MagneticCard";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, HelpCircle, BookOpen, RefreshCw, BarChart3, Cloud, FileText, TrendingUp, FileCheck, ClipboardCheck, Receipt, Search, AlertTriangle, Calculator, Wallet, Shield, UserCheck, User, Building2, Landmark, Globe, FileSearch, Building, Users, Award, Cog, Calendar, ClipboardList, DollarSign, Rocket, GitMerge } from "lucide-react";

import { useState, useEffect } from "react";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

const iconMap: Record<string, React.ElementType> = {
  BookOpen, RefreshCw, BarChart3, Cloud, FileText, TrendingUp, FileCheck, ClipboardCheck,
  Receipt, Search, AlertTriangle, Calculator, Wallet, Shield, UserCheck, User, Building2,
  Landmark, Globe, FileSearch, Building, Users, Award, Cog, Calendar, ClipboardList,
  DollarSign, Rocket, GitMerge, CheckCircle, ArrowRight,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    Promise.all([getPageData(slug), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-display mb-4">Service Not Found</h1>
        <Link to="/services" className="text-gold hover:underline">Return to Services</Link>
      </div>
    );
  }

  const heroSection = pageData.sections?.find((s) => s.type === 'hero');
  const textImageSection = pageData.sections?.find((s) => s.type === 'text-image');
  const processSection = pageData.sections?.find((s) => s.type === 'process');
  const pricingSection = pageData.sections?.find((s) => s.type === 'pricing');
  const faqsSection = pageData.sections?.find((s) => s.type === 'faqs');

  const title = heroSection?.textContent?.heading || "Service";
  const tagline = heroSection?.textContent?.subheading || "";
  const heroImage = heroSection?.imageUrl || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600";
  
  const description = textImageSection?.textContent?.description || "";
  const features = textImageSection?.textContent?.features || [];
  
  const processSteps = processSection?.textContent?.items || [];
  const pricingTiers = pricingSection?.textContent?.items || [];
  const faqs = faqsSection?.textContent?.items || [];

  // Related services logic (fallback to first 3 if none specific logic)
  const relatedServices = SERVICES.filter(s => !s.href.includes(slug || '')).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <CustomCursor />
      <Navbar websiteData={websiteData} />

      {/* Page Hero */}
      <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="absolute inset-0 gold-grain" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2 text-white/40 font-sans text-xs mb-6"
          >
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold">{title}</span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold inline-block mb-4"
          >
            {tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-white/50 text-base md:text-lg max-w-2xl mx-auto"
          >
            {description.split("\n")[0]}
          </motion.p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="Overview" title={title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {description.split("\n\n").map((para: string, i: number) => (
                <p key={i} className="text-charcoal/80 font-sans text-base leading-relaxed mb-5 last:mb-0">
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
                src={heroImage.replace("w=1600", "w=800")}
                alt={title}
                className="rounded-2xl w-full h-80 object-cover relative z-10"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      {features.length > 0 && (
        <>
          <SectionDivider to="white" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
            <div className="absolute inset-0 gold-grid opacity-[0.02]" />
            <div className="relative z-10 max-w-7xl mx-auto">
              <SectionHeading label="Key Benefits" title={`Why Choose Our ${title}`} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature: any, i: number) => {
                  const Icon = iconMap[feature.icon] || CheckCircle;
                  return (
                    <MagneticCard key={feature.title} index={i}>
                      <div className="bg-paper p-8 rounded-2xl border border-gold/10 h-full">
                        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="font-display text-xl text-charcoal mb-3">{feature.title}</h3>
                        <p className="text-warm-gray font-sans text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </MagneticCard>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Process Steps */}
      {processSteps.length > 0 && (
        <>
          <SectionDivider to="dark" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-charcoal relative">
            <div className="absolute inset-0 gold-grain" />
            <div className="relative z-10 max-w-7xl mx-auto">
              <SectionHeading label="Our Process" title="How It Works" light />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px border-t-2 border-dashed border-gold/30" />
                {processSteps.map((step: any, i: number) => (
                  <motion.div
                    key={step.step || step.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center relative"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mx-auto mb-5 relative z-10">
                      <span className="font-sans text-charcoal text-sm font-bold">{i + 1}</span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-3">{step.title}</h3>
                    <p className="font-sans text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Pricing Tiers */}
      {pricingTiers.length > 0 && (
        <>
          <SectionDivider to="paper" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
            <div className="absolute inset-0 diagonal-stripes opacity-[0.02]" />
            <div className="absolute inset-0 noise-texture" />
            <div className="relative z-10 max-w-7xl mx-auto">
              <SectionHeading label="Packages" title="Choose Your Plan" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier: any, i: number) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.6 }}
                    className={`bg-white rounded-2xl p-8 relative ${
                      tier.highlighted
                        ? "border-2 border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                        : "border border-gold/10"
                    }`}
                  >
                    {tier.highlighted && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal font-sans text-xs px-4 py-1 hover:bg-gold">
                        Recommended
                      </Badge>
                    )}
                    <h3 className="font-display text-2xl text-charcoal mb-1">{tier.name}</h3>
                    <p className="font-sans text-warm-gray text-xs mb-4">{tier.description}</p>
                    <div className="mb-6">
                      <span className="font-sans text-charcoal/40 text-sm">{tier.priceCurrency || "INR"} </span>
                      <span className="font-display text-4xl text-gold">{tier.price}</span>
                      <span className="font-sans text-charcoal/40 text-sm">/{tier.pricePeriod || "month"}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`block text-center py-3 rounded-lg font-sans text-xs uppercase tracking-widest font-bold transition-colors ${
                        tier.highlighted
                          ? "shimmer-btn text-charcoal"
                          : "border border-gold/30 text-charcoal hover:bg-gold/5"
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <>
          <SectionDivider to="white" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
            <div className="absolute inset-0 gold-grid opacity-[0.02]" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <SectionHeading label="Questions" title="Frequently Asked" />
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq: any, i: number) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-gold/20 rounded-xl px-6 bg-white data-[state=open]:border-gold/40 transition-colors">
                    <AccordionTrigger className="font-display text-lg text-charcoal hover:no-underline py-5">
                      <span className="flex items-center gap-3 text-left">
                        <HelpCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-warm-gray text-sm leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </>
      )}

      {/* Related Services */}
      <SectionDivider to="paper" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="Explore" title="Related Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, i) => (
              service && (
                <MagneticCard key={service.title} index={i}>
                  <Link to={service.href} className="block bg-white p-8 rounded-2xl border border-gold/10 h-full group hover:border-gold/30 transition-colors">
                    <h3 className="font-display text-xl text-charcoal mb-3">{service.title}</h3>
                    <p className="text-warm-gray font-sans text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </MagneticCard>
              )
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default ServiceDetail;
