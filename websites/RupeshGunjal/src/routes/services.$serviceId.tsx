import { createFileRoute, Link, useParams } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPageData } from '@/lib/api';

export const Route = createFileRoute('/services/$serviceId')({
  component: ServicePage,
});

function ServicePage() {
  const { serviceId } = useParams({ strict: false });
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    if (serviceId) {
      getPageData(serviceId).then(setPageData);
    }
  }, [serviceId]);

  if (!pageData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const textImageSection = pageData?.sections?.find((s: any) => s.type === 'text-image');
  const processSection = pageData?.sections?.find((s: any) => s.type === 'process');

  const heroContent = heroSection?.textContent || {};
  const overviewContent = textImageSection?.textContent || {};
  const processContent = processSection?.textContent || {};

  const overviewDescription = overviewContent.description || '';
  const features = overviewContent.features || [];
  const steps = processContent.items || processContent.steps || [];

  const ctaSection = pageData?.sections?.find((s: any) => s.type === 'cta');
  const ctaContent = ctaSection?.textContent || {};

  return (
    <div className="min-h-screen bg-background text-foreground pb-10">
      
      {/* 1. Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-foreground">
        <div className="absolute inset-0 opacity-[0.05] bg-black bg-grid-white" />
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-white/50 text-sm mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary">{heroContent.heading || pageData.title}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display mb-6 text-white">{heroContent.heading || pageData.title}</h1>
            <p className="text-xl text-white/70">{heroContent.subheading}</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-background relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Overview</span>
            <h2 className="text-3xl md:text-5xl font-display mt-2">{overviewContent.heading || 'Discover Our Approach'}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {overviewDescription.split('\n\n').map((para: string, i: number) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-6 last:mb-0">
                  {para}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20 rounded-3xl" />
              <img
                src={heroSection?.imageUrl || "https://images.unsplash.com/photo-1554224155-6726b3ff858f"}
                alt={heroContent.heading || "Service"}
                className="rounded-3xl w-full h-96 object-cover relative z-10 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Key Benefits */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-muted/30 relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Key Benefits</span>
            <h2 className="text-3xl md:text-5xl font-display mt-2">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scrollY: 20 }}
                whileInView={{ opacity: 1, scrollY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{feature.title || feature}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{feature.description || feature.desc || `Our ${feature.title || feature} ensures your business is always ahead.`}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Steps */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-foreground relative text-white">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-display mt-2 text-white">{processContent.heading || 'How It Works'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px border-t-2 border-dashed border-primary/30" />
            {steps.map((step: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
                className="text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                  <span className="font-sans text-primary-foreground text-lg font-bold">{i + 1}</span>
                </div>
                <h3 className="font-display text-xl text-white mb-3">{step.title}</h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      {ctaSection && (
        <section className="py-8 bg-background relative overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} className="bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-20">
              <h2 className="text-4xl md:text-5xl font-display mb-6">{ctaContent.heading}</h2>
              <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                {ctaContent.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to={ctaContent.ctaLink || "/contact"} className="px-8 py-4 bg-background text-foreground rounded-full font-medium hover:bg-muted transition flex items-center gap-2">
                  {ctaContent.ctaText || "Consult an Expert"} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
