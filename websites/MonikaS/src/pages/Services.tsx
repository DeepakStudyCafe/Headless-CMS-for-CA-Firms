import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase, ArrowRight } from 'lucide-react';
import { getPageData, getWebsiteData, getImageUrl } from '@/lib/api';

const iconMap: Record<string, any> = { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase };

const Services = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    Promise.all([getPageData('services'), getWebsiteData()]).then(([p, w]) => {
      setPageData(p);
      setWebsiteData(w);
    });
  }, []);

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const servicesSection = pageData?.sections?.find((s: any) => s.type === 'services');
  const processSection = pageData?.sections?.find((s: any) => s.type === 'process');
  const ctaSection = pageData?.sections?.find((s: any) => s.type === 'cta');

  const services = servicesSection?.textContent?.items || websiteData?.themeConfig?.services || [];
  const processSteps = processSection?.textContent?.items || [];

  return (
    <Layout>
      {heroSection && (
        <PageHero
          title={heroSection.textContent?.titleMain || heroSection.textContent?.heading || ''}
          highlight={heroSection.textContent?.highlight || heroSection.textContent?.titleHighlight || ''}
          subtitle={heroSection.textContent?.subheading || ''}
          image={heroSection.imageUrl ? getImageUrl(heroSection.imageUrl) : ''}
          breadcrumb={[{ label: 'Services' }]}
        />
      )}

      {services.length > 0 && (
        <section className="section-padding">
          <div className="container-max mx-auto">
            {servicesSection?.textContent?.heading && (
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="heading-lg text-foreground mt-2">{servicesSection.textContent.heading}</h2>
                  {servicesSection.textContent?.subheading && <p className="text-body max-w-2xl mx-auto mt-4">{servicesSection.textContent.subheading}</p>}
                </div>
              </ScrollReveal>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s: any, i: number) => {
                const Icon = iconMap[s.icon] || Briefcase;
                return (
                  <ScrollReveal key={s.title || i} delay={i * 0.08}>
                    <Link to={s.href || `/services/${(s.title || '').toLowerCase().replace(/\\s+/g, '-')}`} className="card-premium p-8 flex gap-6 group h-full">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground font-sans mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.description}</p>
                        <span className="inline-flex items-center text-sm font-medium text-accent gap-1 group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {processSteps.length > 0 && (
        <section className="section-padding gradient-subtle">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{processSection?.textContent?.label || 'How We Work'}</span>
                <h2 className="heading-lg text-foreground mt-2">{processSection?.textContent?.heading}</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {processSteps.map((step: any, i: number) => (
                <ScrollReveal key={step.title || i} delay={i * 0.1}>
                  <div className="card-premium p-6 text-center">
                    <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-sm">
                      {i + 1}
                    </div>
                    <h4 className="font-semibold text-foreground font-sans mb-2">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSection && (
        <section className="section-padding gradient-navy text-center">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <h2 className="heading-lg text-primary-foreground mb-4">{ctaSection.textContent?.heading}</h2>
              <p className="text-lg text-primary-foreground/50 mb-8">{ctaSection.textContent?.subheading}</p>
              <Button variant="gold" size="lg" asChild>
                <Link to={ctaSection.textContent?.ctaLink || "/contact"}>{ctaSection.textContent?.cta || 'Get in Touch'} <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Services;
