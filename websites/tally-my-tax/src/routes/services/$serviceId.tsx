import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TiltCard } from "@/components/site/TiltCard";
import { getPageData, getWebsiteData } from "@/lib/api";

export const Route = createFileRoute("/services/$serviceId")({
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { serviceId } = useParams({ from: "/services/$serviceId" });
  
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      getPageData(serviceId),
      getWebsiteData()
    ]).then(([page, website]) => {
      setPageData(page);
      setWebsiteData(website);
      setLoading(false);
    });
  }, [serviceId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
      </div>
    );
  }

  const relatedServices = (websiteData?.services || []).filter((s: any) => (s.slug || s.id) !== serviceId).slice(0, 3);

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const overviewSection = pageData?.sections?.find((s: any) => s.type === 'overview');
  const featuresSection = pageData?.sections?.find((s: any) => s.type === 'features');
  const processSection = pageData?.sections?.find((s: any) => s.type === 'process');
  const faqsSection = pageData?.sections?.find((s: any) => s.type === 'faqs');

  const title = heroSection?.textContent?.heading || pageData?.title || "";
  const tagline = heroSection?.textContent?.subheading || "";
  const description = heroSection?.textContent?.description || "";
  
  const overviewHeading = overviewSection?.textContent?.heading || "Overview";
  const overviewTitle = overviewSection?.textContent?.title || title;
  const overviewDesc = overviewSection?.textContent?.description || "";
  const overviewImage = overviewSection?.imageUrl || "https://images.unsplash.com/photo-1604328698692-f76ea9498e76";

  const featuresHeading = featuresSection?.textContent?.heading || "Key Benefits";
  const featuresTitle = featuresSection?.textContent?.title || `Why Choose Our ${title}`;
  const features = featuresSection?.textContent?.items || [];

  const processHeading = processSection?.textContent?.heading || "Our Process";
  const processTitle = processSection?.textContent?.title || "How It Works";
  const processSteps = processSection?.textContent?.items || [];

  const faqsHeading = faqsSection?.textContent?.heading || "Questions";
  const faqsTitle = faqsSection?.textContent?.title || "Frequently Asked";
  const faqs = faqsSection?.textContent?.items || [];

  return (
    <div className="">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.03]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-muted-foreground text-xs mb-6 font-medium"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary">{title}</span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase inline-block mb-4"
          >
            {tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-secondary/30">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{overviewHeading}</span>
            <h2 className="mt-3 text-3xl font-bold">{overviewTitle}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {overviewDesc.split('\n\n').map((para: string, i: number) => (
                <p key={i} className="text-muted-foreground text-base leading-relaxed mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-xl rounded-3xl" />
              <img
                src={overviewImage}
                alt={title}
                className="relative rounded-3xl w-full h-80 object-cover shadow-card border border-border/50"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      {features && features.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-background border-t border-border/50">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{featuresHeading}</span>
              <h2 className="mt-3 text-3xl font-bold">{featuresTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature: any, i: number) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass p-8 rounded-2xl border border-border/50 shadow-soft h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-secondary/30">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{processHeading}</span>
              <h2 className="mt-3 text-3xl font-bold">{processTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px border-t border-dashed border-primary/30" />
              {processSteps.map((step: any, i: number) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="text-center relative"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto mb-5 relative z-10 shadow-glow">
                    <span className="text-primary-foreground text-sm font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-background relative border-t border-border/50">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{faqsHeading}</span>
              <h2 className="mt-3 text-3xl font-bold">{faqsTitle}</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq: any, i: number) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors">
                    <AccordionTrigger className="text-base font-bold hover:no-underline py-5">
                      <span className="flex items-center gap-3 text-left">
                        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-secondary/30">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Explore</span>
              <h2 className="mt-3 text-3xl font-bold">Related Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service: any, i: number) => (
                <motion.div
                  key={service.id || service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link to={`/services/${service.slug || service.id}`} className="block h-full">
                    <TiltCard className="group h-full">
                      <div className="bg-background p-8 rounded-2xl border border-border/50 shadow-soft group-hover:border-primary/50 group-hover:shadow-glow transition-all h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title || service.name}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description || service.shortDescription}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-primary font-bold group-hover:gap-3 transition-all">
                          Explore <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

