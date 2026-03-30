import { FullPageLoader } from '@/components/Loader';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase } from 'lucide-react';
import { getPageData, getWebsiteData, getImageUrl } from '@/lib/api';

const iconMap: Record<string, any> = { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase };

const ServiceDetail = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;
    Promise.all([getPageData(slug), getWebsiteData()]).then(([p, w]) => {
      setPageData(p);
      setWebsiteData(w);
    });
  }, [slug]);

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const textImageSection = pageData?.sections?.find((s: any) => s.type === 'text-image');
  const processSection = pageData?.sections?.find((s: any) => s.type === 'process');
  const pricingSection = pageData?.sections?.find((s: any) => s.type === 'pricing');
  const faqsSection = pageData?.sections?.find((s: any) => s.type === 'faqs');

  const serviceTitle = heroSection?.textContent?.heading || '';
  const serviceTagline = heroSection?.textContent?.subheading || '';
  const overview = textImageSection?.textContent?.description || '';
  const features = textImageSection?.textContent?.features || [];
  const processSteps = processSection?.textContent?.items || [];
  const pricingTiers = pricingSection?.textContent?.items || [];
  const faqs = faqsSection?.textContent?.items || [];

  if (!pageData) {
      if (!pageData || !websiteData) return <FullPageLoader />;

  return (
    <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4" />
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      {heroSection && (
        <section className="gradient-navy pt-32 pb-20">
          <div className="container-max mx-auto px-4 md:px-8">
            <ScrollReveal>
              <Link to="/services" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors mb-4 inline-block">← All Services</Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                  {(() => {
                    const svc = websiteData?.themeConfig?.services?.find((s: any) => s.href === `/services/${slug}`);
                    const Icon = iconMap[svc?.icon] || Briefcase;
                    return <Icon className="w-7 h-7 text-gold" />;
                  })()}
                </div>
                <div>
                  <h1 className="heading-xl text-primary-foreground">{serviceTitle}</h1>
                  {serviceTagline && <p className="text-primary-foreground/60 mt-1">{serviceTagline}</p>}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Overview & Features */}
      {textImageSection && (overview || features.length > 0) && (
        <section className="section-padding">
          <div className="container-max mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="heading-md text-foreground mb-6 font-sans">{textImageSection?.textContent?.heading || 'What We Offer'}</h2>
              {overview && <p className="text-body text-lg mb-8">{overview}</p>}
            </ScrollReveal>
            {features.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((b: string, i: number) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="flex items-center gap-3 p-4 card-premium">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm font-medium text-foreground">{b}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Process */}
      {processSteps.length > 0 && (
        <section className="section-padding gradient-subtle">
          <div className="container-max mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="heading-md text-foreground mb-8 font-sans">{processSection?.textContent?.heading || 'Our Process'}</h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((p: any, i: number) => (
                <ScrollReveal key={p.title || i} delay={i * 0.1}>
                  <div className="card-premium p-6 text-center">
                    <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-sm">
                      {i + 1}
                    </div>
                    <h4 className="font-semibold text-foreground font-sans mb-2">{p.title || p.step}</h4>
                    <p className="text-xs text-muted-foreground">{p.description || p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

     

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="section-padding gradient-subtle">
          <div className="container-max mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="heading-md text-foreground mb-8 font-sans">{faqsSection?.textContent?.heading || 'Frequently Asked Questions'}</h2>
            </ScrollReveal>
            <div className="space-y-3">
              {faqs.map((faq: any, i: number) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="card-premium overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="text-sm font-medium text-foreground">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {heroSection && serviceTitle && (
        <section className="section-padding gradient-navy text-center">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <h2 className="heading-lg text-primary-foreground mb-4">Need {serviceTitle} Services?</h2>
              <p className="text-lg text-primary-foreground/50 mb-8">Let our experts help you with tailored solutions.</p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Get a Free Consultation <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ServiceDetail;
