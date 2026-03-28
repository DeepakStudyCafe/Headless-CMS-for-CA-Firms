import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getPageData, getWebsiteData, getImageUrl } from '@/lib/api';
import { findSection } from '@/lib/sectionHelpers';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.15);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    Promise.all([getPageData(`services/${slug}`), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    }).catch(() => setLoading(false));
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div style={{ background: '#FAF8F3', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 48, height: 48, border: '2px solid #E8E2D9', borderTopColor: '#C8A96E', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      </div>
    );
  }

  const heroSec = findSection(pageData, 'hero');
  const overviewSec = findSection(pageData, 'text-image');
  const processSec = findSection(pageData, 'process');
  const faqsSec = findSection(pageData, 'faqs');
  const ctaSec = findSection(pageData, 'cta');

  const hero = heroSec?.textContent || {};
  const overview = overviewSec?.textContent || {};
  const features: string[] = overview.points || overview.features || [];
  const processSteps: any[] = processSec?.textContent?.steps || processSec?.textContent?.items || [];
  const faqs: any[] = faqsSec?.textContent?.items || [];
  const cta = ctaSec?.textContent || {};
  const serviceTitle = hero.heading || slug?.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()) || '';
  const heroImage = heroSec?.imageUrl ? getImageUrl(heroSec.imageUrl) : '';

  const allServices = websiteData?.themeConfig?.services || [];
  const relatedServices = allServices.filter((s: any) => (s.slug || s.href?.replace('/services/', '')) !== slug).slice(0, 3);

  if (!pageData) {
    return (
      <div style={{ background: '#FAF8F3', minHeight: '100vh' }}>
        <Navbar websiteData={websiteData} />
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="font-display text-3xl font-semibold mb-4" style={{ color: '#2D2D2D' }}>Service Not Found</p>
          <Link to="/services" className="font-body text-sm font-semibold" style={{ color: '#C8A96E' }}>← Back to Services</Link>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  return (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }} className="font-body">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: '#2D2D2D', minHeight: '480px' }}>
        {heroImage && (
          <>
            <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('${heroImage}')` }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(45,45,45,0.95) 50%, rgba(45,45,45,0.65))' }} />
          </>
        )}
        <div className="container mx-auto px-6 lg:px-[8%] relative z-10 pb-16 pt-32">
          <Link to="/services" className="font-body text-xs font-semibold inline-flex items-center gap-1 mb-8" style={{ color: '#C8A96E' }}>← All Services</Link>
          <h1 className="font-display font-semibold mb-4" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.06, color: '#FAF8F3' }}>{serviceTitle}</h1>
          {hero.subheading && <p className="font-body font-light text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(250,248,243,0.65)' }}>{hero.subheading}</p>}
        </div>
      </section>

      {/* OVERVIEW + FEATURES */}
      {overviewSec && (
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-[8%] grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-4" style={{ color: '#C8A96E' }}>{hero.label || 'Service Overview'}</span>
              <h2 className="font-display font-semibold mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', lineHeight: 1.2, color: '#2D2D2D' }}>
                {overview.heading || overview.title || `Our ${serviceTitle} Service`}
              </h2>
              {(overview.body || overview.description) && <p className="font-body font-light text-base leading-relaxed mb-8" style={{ color: '#6B6B6B' }}>{overview.body || overview.description}</p>}
              <Link to="/contact" className="font-body text-[13px] font-semibold px-7 py-3 rounded-md inline-block" style={{ background: '#2D2D2D', color: '#FAF8F3' }}>
                Get Started Today →
              </Link>
            </FadeIn>
            {features.length > 0 && (
              <FadeIn delay={0.1}>
                <h3 className="font-display font-semibold text-base mb-5" style={{ color: '#2D2D2D' }}>What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                      <span style={{ color: '#C8A96E', marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span className="font-body text-sm leading-snug" style={{ color: '#3D3D3D' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      )}

      {/* HOW WE WORK */}
      {processSteps.length > 0 && (
        <section className="py-20" style={{ background: '#F2EDE4' }}>
          <div className="container mx-auto px-6 lg:px-[8%]">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-2" style={{ color: '#C8A96E' }}>Our Approach</span>
                <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', color: '#2D2D2D' }}>How We Deliver</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((p: any, i: number) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="relative text-center p-8 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg mx-auto mb-5" style={{ background: '#2D2D2D', color: '#FAF8F3' }}>{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-display font-semibold text-[15px] mb-2" style={{ color: '#2D2D2D' }}>{p.title}</h3>
                    <p className="font-body text-[13px] leading-relaxed" style={{ color: '#6B6B6B' }}>{p.description || p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-[8%] max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-display font-semibold text-center mb-12" style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', color: '#2D2D2D' }}>Frequently Asked Questions</h2>
            </FadeIn>
            <div className="space-y-3">
              {faqs.map((faq: any, i: number) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ border: '1px solid #E8E2D9' }}>
                  <button className="w-full px-6 py-5 flex items-center justify-between text-left gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ background: '#FFFFFF' }}>
                    <span className="font-display font-semibold text-[15px]" style={{ color: '#2D2D2D' }}>{faq.question || faq.q}</span>
                    <span style={{ color: '#C8A96E', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 font-body text-sm leading-relaxed" style={{ color: '#6B6B6B', background: '#FAFAFA', borderTop: '1px solid #E8E2D9' }}>
                      {faq.answer || faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="py-16" style={{ background: '#F2EDE4' }}>
          <div className="container mx-auto px-6 lg:px-[8%]">
            <h2 className="font-display font-semibold mb-8" style={{ fontSize: '24px', color: '#2D2D2D' }}>Related Services</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((svc: any, i: number) => {
                const s = svc.slug || svc.href?.replace('/services/', '');
                return (
                  <Link key={i} to={`/services/${s}`} className="p-6 rounded-xl flex items-center justify-between transition-all hover:-translate-y-1 hover:shadow-md" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                    <span className="font-display font-semibold text-[15px]" style={{ color: '#2D2D2D' }}>{svc.title}</span>
                    <span style={{ color: '#C8A96E' }}>→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSec && (
        <section className="py-20" style={{ background: '#C8A96E' }}>
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', color: '#FAF8F3' }}>
              {cta.heading || cta.title || `Ready to Get Started with ${serviceTitle}?`}
            </h2>
            <p className="font-body font-light text-base max-w-xl mx-auto mb-8" style={{ color: 'rgba(250,248,243,0.85)' }}>
              {cta.subheading || cta.description || 'Schedule a free consultation with our team.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="font-body text-[13px] font-semibold px-8 py-3.5 rounded-md" style={{ background: '#FAF8F3', color: '#2D2D2D' }}>
                {cta.cta || 'Book a Free Consultation'}
              </Link>
              <Link to="/query" className="font-body text-[13px] font-medium px-8 py-3.5 rounded-md" style={{ border: '1.5px solid rgba(250,248,243,0.5)', color: '#FAF8F3' }}>
                Submit a Query
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
}
