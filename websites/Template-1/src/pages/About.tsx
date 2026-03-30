import { FullPageLoader } from '@/components/Loader';
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
  const featuresSection = pageData?.sections?.find((s: any) => s.type === 'features' && s.order <= 3);
  const valuesSection = pageData?.sections?.find((s: any) => s.type === 'text-image');
  const timelineSection = pageData?.sections?.find((s: any) => s.type === 'timeline');
  const whyChooseSection = pageData?.sections?.find((s: any) => s.type === 'features' && s.order > 3);
  const ctaSection = pageData?.sections?.find((s: any) => s.type === 'cta');

  const missionVision = featuresSection?.textContent?.items || [];
  const values = valuesSection?.textContent?.items || [];
  const timeline = timelineSection?.textContent?.items || [];
  const whyChooseItems = whyChooseSection?.textContent?.items || [];

    if (!pageData || !websiteData) return <FullPageLoader />;

  return (
    <Layout>
      {heroSection && (
        <PageHero
          title={heroSection.textContent?.heading?.replace(/\\s\\S+\\s\\S+$/, '') || ''}
          highlight={heroSection.textContent?.heading?.split(' ').slice(-2).join(' ') || ''}
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
                      <p className="text-body">{item.description}</p>
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
              </div>
            </ScrollReveal>
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
      {timelineSection && timeline.length > 0 && (
        <section className="section-padding">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{timelineSection.textContent?.label || 'Our Journey'}</span>
                <h2 className="heading-lg text-foreground mt-2">{timelineSection.textContent?.heading}</h2>
              </div>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-0">
              {timeline.map((item: any, i: number) => (
                <ScrollReveal key={item.year || i} delay={i * 0.1}>
                  <div className="flex gap-6 pb-10 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0 z-10">
                        {item.year}
                      </div>
                      {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                    </div>
                    <div className="pt-2">
                      <h4 className="font-semibold text-foreground font-sans">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description || item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
