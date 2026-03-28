import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getPageData, getWebsiteData } from '@/lib/api';
import { findSection, sectionContent } from '@/lib/sectionHelpers';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.15);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function Services() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData('services'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  if (!pageData) {
    return (
      <div style={{ background: '#FAF8F3', minHeight: '100vh' }}>
        <Navbar websiteData={websiteData} />
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="font-display text-3xl font-semibold" style={{ color: '#2D2D2D' }}>Page Not Found</p>
          <p className="font-body text-sm mt-3" style={{ color: '#6B6B6B' }}>This page is not published in CMS yet.</p>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, 'hero'));
  const gridSec = sectionContent(findSection(pageData, 'grid', 'services-grid', 'services'));
  const ctaSec = sectionContent(findSection(pageData, 'cta'));
  const services = gridSec.services || gridSec.items || [];

  return (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }} className="font-body">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: '#2D2D2D', minHeight: '360px' }}>
        {hero.image && <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${hero.image}')` }} />}
        <div className="absolute inset-0" style={{ background: 'rgba(45,45,45,0.85)' }} />
        <div className="container mx-auto px-6 lg:px-[8%] relative z-10 py-20">
          <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: '#C8A96E' }}>{hero.label || 'PRACTICE AREAS'}</span>
          <h1 className="font-display font-semibold mb-3" style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: 1.08, color: '#FAF8F3' }}>
            {hero.heading || hero.title || 'Our Services'}
          </h1>
          {hero.subheading && <p className="font-body font-light text-base max-w-xl leading-relaxed" style={{ color: 'rgba(250,248,243,0.6)' }}>{hero.subheading}</p>}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="container mx-auto px-6 lg:px-[8%] py-4 flex items-center gap-2" style={{ borderBottom: '1px solid #E8E2D9' }}>
        <Link to="/" className="font-body text-xs" style={{ color: '#C8A96E' }}>Home</Link>
        <span className="font-body text-xs" style={{ color: '#6B6B6B' }}>/ Services</span>
      </div>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8%]">
          {services.length === 0 ? (
            <p className="font-body text-center py-12" style={{ color: '#6B6B6B' }}>No services listed yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc: any, i: number) => {
                const slug = svc.slug || svc.href?.replace('/services/', '') || svc.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                return (
                  <FadeIn key={i} delay={i * 0.06}>
                    <div className="rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,45,45,0.08)]" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                      <span className="font-display font-bold text-5xl mb-4 leading-none block" style={{ color: 'rgba(200,169,110,0.2)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#2D2D2D' }}>{svc.title}</h3>
                      {svc.description && <p className="font-body text-[13px] leading-relaxed flex-1 mb-6" style={{ color: '#6B6B6B' }}>{svc.description}</p>}
                      <Link to={`/services/${slug}`} className="font-body text-[12px] font-semibold inline-flex items-center gap-1 mt-auto" style={{ color: '#C8A96E' }}>
                        Learn More →
                      </Link>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#2D2D2D' }}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-4" style={{ color: '#C8A96E' }}>{ctaSec.label || "GET STARTED"}</span>
            <h2 className="font-display font-semibold mx-auto mb-5" style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', color: '#FAF8F3', maxWidth: '520px' }}>
              {ctaSec.heading || ctaSec.title || 'Ready to Get Expert Guidance?'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="font-body text-[13px] font-semibold px-8 py-3.5 rounded-md" style={{ background: '#FAF8F3', color: '#2D2D2D' }}>
                {ctaSec.cta || 'Book Consultation'}
              </Link>
              <Link to="/query" className="font-body text-[13px] font-medium px-8 py-3.5 rounded-md" style={{ border: '1.5px solid rgba(250,248,243,0.3)', color: 'rgba(250,248,243,0.8)' }}>
                Submit a Query
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
}
