import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase, TrendingUp, Award, Globe, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import { Button } from '@/components/ui/button';
import { getPageData, getWebsiteData } from '@/lib/api';

const iconMap: Record<string, any> = { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase, TrendingUp, Award, Globe };

const Index = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    Promise.all([getPageData('home'), getWebsiteData()]).then(([p, w]) => {
      setPageData(p);
      setWebsiteData(w);
    });
  }, []);

  const servicesSection = pageData?.sections?.find((s: any) => s.type === 'services');
  const statsSection = pageData?.sections?.find((s: any) => s.type === 'stats');
  const industriesSection = pageData?.sections?.find((s: any) => s.type === 'industries');
  const testimonialsSection = pageData?.sections?.find((s: any) => s.type === 'testimonials');
  const ctaSection = pageData?.sections?.find((s: any) => s.type === 'cta');

  const services = servicesSection?.textContent?.items || websiteData?.themeConfig?.services || [];
  const stats = statsSection?.textContent?.stats || [];
  const industries = industriesSection?.textContent?.items || [];
  const testimonials = testimonialsSection?.textContent?.items || [];
  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length <= 3) return;
    const id = setInterval(() => setTestIndex((i) => (i + 3) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, [testimonials]);

  const visibleTestimonials = (testimonials && testimonials.length > 0)
    ? (testimonials.length <= 3 ? testimonials : Array.from({ length: 3 }, (_, k) => testimonials[(testIndex + k) % testimonials.length]))
    : [];

  return (
    <Layout>
      <HeroSlider />

      {/* Services */}
      <section className="section-padding gradient-subtle">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">What We Offer</span>
              <h2 className="heading-lg text-foreground mt-2">{servicesSection?.textContent?.heading || 'Our Services'}</h2>
              <p className="text-body mt-4 max-w-2xl mx-auto">{servicesSection?.textContent?.subheading || 'Comprehensive financial solutions tailored to your business needs.'}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service: any, i: number) => {
              const Icon = iconMap[service.icon] || Briefcase;
              return (
                <ScrollReveal key={service.title || i} delay={i * 0.1}>
                  <Link to={service.href || `/services/${(service.title || '').toLowerCase().replace(/\s+/g, '-')}`} className="card-premium p-8 block group h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all gap-1">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-wider text-accent">About {websiteData?.name || 'Sterling & Co.'}</span>
              <h2 className="heading-lg text-foreground mt-2 mb-6">{statsSection?.textContent?.heading || 'Nearly Three Decades of Financial Excellence'}</h2>
              <p className="text-body mb-6">{statsSection?.textContent?.description || "Founded in 1995, Sterling & Co. has grown from a small practice to one of India's most respected chartered accountancy firms."}</p>
              <Button variant="navy" size="lg" asChild>
                <Link to="/about">Discover Our Story <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat: any) => (
                  <div key={stat.label} className="card-premium p-6 text-center">
                    <div className="heading-lg text-accent mb-1">
                      <AnimatedCounter end={Number(stat.value) || 0} suffix={stat.suffix || ''} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      {industries.length > 0 && (
        <section className="section-padding gradient-navy">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs font-medium uppercase tracking-wider text-gold">Expertise</span>
                <h2 className="heading-lg text-primary-foreground mt-2">{industriesSection?.textContent?.heading || 'Industries We Serve'}</h2>
                <p className="text-lg text-primary-foreground/50 mt-4 max-w-2xl mx-auto">{industriesSection?.textContent?.subheading || "Deep domain knowledge across India's key economic sectors."}</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((ind: any, i: number) => {
                const Icon = iconMap[ind.icon] || Building2;
                return (
                  <ScrollReveal key={ind.title || i} delay={i * 0.08}>
                    <div className="text-center p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group cursor-default">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-sm font-medium text-primary-foreground/80">{ind.title}</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="section-padding">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">Testimonials</span>
                <h2 className="heading-lg text-foreground mt-2">{testimonialsSection?.textContent?.heading || 'What Our Clients Say'}</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {visibleTestimonials.map((t: any, i: number) => (
                <ScrollReveal key={(t.name || '') + i} delay={i * 0.15}>
                  <div className="card-premium p-8 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-accent/30 mb-4" />
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{t.review || t.quote}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {(t.name || '?').charAt(0)}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground">{t.name}</span>
                        <span className="block text-xs text-muted-foreground">{t.designation || t.role}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {testimonials.length > 3 && (
              (() => {
                const pages = Math.ceil(testimonials.length / 3);
                const currentPage = Math.floor(testIndex / 3);
                return (
                  <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: pages }).map((_, p) => (
                      <button
                        key={p}
                        onClick={() => setTestIndex(p * 3)}
                        aria-label={`Show testimonials page ${p + 1}`}
                        className={`w-2 h-2 rounded-full transition-colors ${p === currentPage ? 'bg-accent' : 'bg-border'}`}
                      />
                    ))}
                  </div>
                );
              })()
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-primary-foreground mb-4">{ctaSection?.textContent?.heading || 'Ready to Transform Your Finances?'}</h2>
            <p className="text-lg text-primary-foreground/50 mb-10 max-w-xl mx-auto">{ctaSection?.textContent?.subheading || 'Let our experts craft a tailored strategy for your business growth.'}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">{ctaSection?.textContent?.cta || 'Get Started Today'} <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/query">{ctaSection?.textContent?.secondaryCta || 'Ask a Question'}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
