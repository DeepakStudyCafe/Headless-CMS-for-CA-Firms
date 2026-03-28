import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, Shield, Award, TrendingUp, CheckCircle, ArrowRight, Users, Lightbulb } from 'lucide-react';
import { getPageData, getWebsiteData, getImageUrl } from '@/lib/api';

const iconMap: Record<string, any> = { Target, Eye, Heart, Shield, Award, TrendingUp, Users, Lightbulb, CheckCircle };

const About = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    Promise.all([getPageData('about'), getWebsiteData()]).then(([p, w]) => {
      setPageData(p);
      setWebsiteData(w);
    });
  }, []);

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const allFeatureSections = pageData?.sections?.filter((s: any) => s.type === 'features') || [];
  const featuresSection = allFeatureSections[0] || null;  // Mission & Vision
  const whyChooseSection = allFeatureSections[1] || null; // Why Choose Us (second features section)
  const valuesSection = pageData?.sections?.find((s: any) => s.type === 'text-image');
  const timelineSection = pageData?.sections?.find((s: any) => s.type === 'timeline');
  const ctaSection = pageData?.sections?.find((s: any) => s.type === 'cta');

  const missionVision = featuresSection?.textContent?.items || [];
  const values = valuesSection?.textContent?.items || [];
  const timeline = timelineSection?.textContent?.items || [];
  const whyChooseItems = whyChooseSection?.textContent?.items || [];

  return (
    <Layout>
      {heroSection && (
        <PageHero
          title={heroSection.textContent?.titleMain || heroSection.textContent?.heading || ''}
          highlight={heroSection.textContent?.highlight || heroSection.textContent?.titleHighlight || ''}
          subtitle={heroSection.textContent?.subheading || ''}
          image={heroSection.imageUrl ? getImageUrl(heroSection.imageUrl) : ''}
          breadcrumb={[{ label: 'About Us' }]}
        />
      )}

      {/* Mission & Vision */}
      {featuresSection && missionVision.length > 0 && (
        <section className="section-padding">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{featuresSection.textContent?.label || 'Who We Are'}</span>
                <h2 className="heading-lg text-foreground mt-2">{featuresSection.textContent?.heading}</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12">
              {missionVision.map((item: any, i: number) => {
                const Icon = iconMap[item.icon] || Target;
                return (
                  <ScrollReveal key={item.title || i} delay={i * 0.15}>
                    <div className="card-premium p-10">
                      <div className={`w-14 h-14 rounded-xl ${i === 0 ? 'bg-accent/10' : 'bg-gold/10'} flex items-center justify-center mb-6`}>
                        <Icon className={`w-7 h-7 ${i === 0 ? 'text-accent' : 'text-gold'}`} />
                      </div>
                      <h3 className="heading-md text-foreground mb-4 font-sans">{item.title}</h3>
                      <p className="text-body text-sm">{item.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Core Values */}
      {valuesSection && values.length > 0 && (
        <section className="section-padding gradient-subtle">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{valuesSection.textContent?.label || 'Our Foundation'}</span>
                <h2 className="heading-lg text-foreground mt-2">{valuesSection.textContent?.heading}</h2>
                {valuesSection.textContent?.description && <p className="text-body mt-4 max-w-2xl mx-auto">{valuesSection.textContent.description}</p>}
              </div>
            </ScrollReveal>
            {/* Show section image if uploaded */}
            {valuesSection.imageUrl && (
              <ScrollReveal>
                <div className="mb-14 rounded-2xl overflow-hidden max-h-80">
                  <img src={getImageUrl(valuesSection.imageUrl)} alt={valuesSection.textContent?.heading || 'Core Values'} className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v: any, i: number) => {
                const Icon = iconMap[v.icon] || Shield;
                return (
                  <ScrollReveal key={v.title || i} delay={i * 0.1}>
                    <div className="card-premium p-8 text-center h-full">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 font-sans">{v.title}</h4>
                      <p className="text-sm text-muted-foreground">{v.description || v.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">Our Journey</span>
              <h2 className="heading-lg text-foreground mt-2">{timelineSection?.textContent?.heading || 'Milestones'}</h2>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto relative mt-8">
            {/* Center Line */}
            <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-border md:-translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-24">
              {timeline.map((item: any, i: number) => {
                const isEven = i % 2 === 0;
                return (
                  <ScrollReveal key={item.year || i} delay={i * 0.1}>
                    <div className={`relative flex flex-col md:flex-row md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      
                      {/* Content side */}
                      <div className={`w-full md:w-1/2 pl-[80px] md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} pt-2 md:pt-0`}>
                        <h4 className="font-semibold text-foreground font-sans text-xl">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-2">{item.description || item.desc}</p>
                      </div>

                      {/* Center Node Circle */}
                      <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-background flex items-center justify-center z-10">
                        <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                          {item.year}
                        </div>
                      </div>

                      {/* Empty side spacer for Desktop layout */}
                      <div className="hidden md:block w-1/2" />
                      
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {whyChooseSection && whyChooseItems.length > 0 && (
        <section className="section-padding gradient-navy">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="heading-lg text-primary-foreground">{whyChooseSection.textContent?.heading}</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {whyChooseItems.map((item: any, i: number) => {
                const text = typeof item === 'string' ? item : item.title || item.description || '';
                return (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="flex items-start gap-3 p-4">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-primary-foreground/80">{text}</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSection && (
        <section className="section-padding text-center">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <h2 className="heading-lg text-foreground mb-4">{ctaSection.textContent?.heading}</h2>
              <p className="text-body max-w-xl mx-auto mb-8">{ctaSection.textContent?.subheading}</p>
              <Button variant="navy" size="lg" asChild>
                <Link to={ctaSection.textContent?.ctaLink || "/contact"}>{ctaSection.textContent?.cta || 'Get in Touch'} <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default About;
