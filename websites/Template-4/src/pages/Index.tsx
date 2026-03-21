import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Star, Quote, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import Layout from "@/components/Layout";
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";
import { IconByName } from "@/components/IconByName";

const Index = () => {
  const [current, setCurrent] = useState(0);
  const { getSection, isLoading } = usePageData('home');

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % (getSection('hero-slider')?.textContent?.slides?.length || 3)), 5000);
    return () => clearInterval(timer);
  }, [getSection]);

  if (isLoading) {
    return <Layout><div className="h-screen flex items-center justify-center">Loading...</div></Layout>;
  }

  const heroSlider = getSection('hero-slider')?.textContent;
  const slides = heroSlider?.slides || [];

  const servicesGrid = getSection('services-grid')?.textContent;
  const services = servicesGrid?.items || [];

  const aboutOverview = getSection('about-overview')?.textContent;
  const aboutStats = aboutOverview?.stats || [];

  const industriesSec = getSection('industries')?.textContent;
  const industries = industriesSec?.items || [];

  const testimonialsSec = getSection('testimonials')?.textContent;
  const testimonials = testimonialsSec?.items || [];

  const ctaSec = getSection('cta')?.textContent;

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-[#06142b]">
        {slides.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img src={getImageUrl(slides[current].image)} alt={slides[current].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 hero-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-secondary/20" />
            </motion.div>
          </AnimatePresence>
        )}

        <div className="relative z-10 container h-full flex items-center pt-24 pb-12">
          <div className="max-w-3xl">
            {slides.length > 0 && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 backdrop-blur-sm border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-8"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {slides[current].badge}
                  </motion.span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6 whitespace-pre-line">
                    {slides[current].title}
                  </h1>
                  <p className="text-base md:text-xl text-primary-foreground/70 mb-10 max-w-xl leading-relaxed">
                    {slides[current].subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="group px-7 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                      Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/services" className="px-7 py-4 rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/10 backdrop-blur-sm transition-all">
                      Our Services
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Slider indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-8">
            <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="w-11 h-11 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/20 transition-all">
              <ChevronLeft className="w-5 h-5 text-primary-foreground" />
            </button>
            <div className="flex gap-3">
              {slides.map((_: any, i: number) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-accent" : "w-3 bg-primary-foreground/30"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="w-11 h-11 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/20 transition-all">
              <ChevronRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        )}
      </section>

      {/* Services */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container relative">
          <SectionHeading label={servicesGrid?.label} title={servicesGrid?.title} description={servicesGrid?.description} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <Link to={service.href || '#'} className="group block p-6 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-primary/10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-subtle flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconByName name={service.icon} className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">{aboutOverview?.badge}</span>
              <div className="section-divider mt-3 mb-5" />
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-foreground leading-tight mb-6">{aboutOverview?.heading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{aboutOverview?.description1}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{aboutOverview?.description2}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {aboutOverview?.tags?.map((tag: string) => (
                  <span key={tag} className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-subtle text-primary text-sm font-medium">
                    <CheckCircle className="w-4 h-4" /> {tag}
                  </span>
                ))}
              </div>
              <Link to="/about" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {aboutStats.map((stat: any, i: number) => (
                  <AnimatedCounter key={i} end={Number(stat.end) || Number(stat.value)} suffix={stat.suffix || ''} label={stat.label} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading label={industriesSec?.label} title={industriesSec?.title} description={industriesSec?.description} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="text-center p-6 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 group cursor-default border border-transparent hover:border-primary/10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-subtle mx-auto flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconByName name={ind.icon} className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-heading font-bold text-sm text-foreground block">{ind.name}</span>
                  <span className="text-xs text-muted-foreground mt-1 block">{ind.desc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container relative">
          <SectionHeading label={testimonialsSec?.label} title={testimonialsSec?.title} description={testimonialsSec?.description} light />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-secondary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border border-secondary-foreground/8 hover:border-accent/30 transition-all duration-300 group">
                  <Quote className="w-8 h-8 text-accent/50 mb-5 group-hover:text-accent transition-colors" />
                  <p className="text-secondary-foreground/80 leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />)}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-primary-foreground font-heading font-bold text-sm">{t.name?.[0]}</span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-secondary-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-secondary-foreground/50">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 border border-primary-foreground/30 rounded-full" />
          <div className="absolute bottom-10 left-10 w-96 h-96 border border-primary-foreground/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full" />
        </div>
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-6">
              {ctaSec?.badge}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight whitespace-pre-line">
              {ctaSec?.heading}
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {ctaSec?.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                {ctaSec?.buttonText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-xl border-2 border-primary-foreground/20 text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-all">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
