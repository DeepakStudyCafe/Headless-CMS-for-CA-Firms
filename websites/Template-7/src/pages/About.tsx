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
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData('about'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  const notFound = (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }}>
      <Navbar websiteData={websiteData} />
      <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
        <p className="font-display text-3xl font-semibold" style={{ color: '#2D2D2D' }}>Page Not Found</p>
        <p className="font-body text-sm mt-3 mb-6" style={{ color: '#6B6B6B' }}>This page is not published in CMS yet. Visit /admin to add content.</p>
        <Link to="/" className="font-body text-sm font-semibold px-5 py-2.5 rounded-md" style={{ background: '#2D2D2D', color: '#FAF8F3' }}>← Home</Link>
      </div>
      <Footer websiteData={websiteData} />
    </div>
  );

  if (!pageData) return notFound;

  const hero = sectionContent(findSection(pageData, 'hero'));
  const heritage = sectionContent(findSection(pageData, 'heritage', 'text-image'));
  const mission = sectionContent(findSection(pageData, 'mission', 'features', 'why-choose-us'));
  const values = sectionContent(findSection(pageData, 'values', 'core-values'));
  const cta = sectionContent(findSection(pageData, 'cta'));
  const features = mission.items || heritage.items || [];
  const coreValues = values.items || values.values || [];

  return (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }} className="font-body">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: '#2D2D2D', minHeight: '420px' }}>
        {hero.image && (
          <>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.image}')`, opacity: 0.25 }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(45,45,45,0.95) 50%, rgba(45,45,45,0.6))' }} />
          </>
        )}
        <div className="container mx-auto px-6 lg:px-[8%] relative z-10 py-20">
          <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-4" style={{ color: '#C8A96E' }}>{hero.label || 'Our Story'}</span>
          <h1 className="font-display font-semibold mb-4" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.08, color: '#FAF8F3', maxWidth: '700px' }}>
            {hero.heading || hero.title || 'A Legacy of Trust & Precision'}
          </h1>
          {hero.subheading && (
            <p className="font-body font-light text-lg max-w-[520px] leading-relaxed" style={{ color: 'rgba(250,248,243,0.65)' }}>{hero.subheading}</p>
          )}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="container mx-auto px-6 lg:px-[8%] py-4 flex items-center gap-2" style={{ borderBottom: '1px solid #E8E2D9' }}>
        <Link to="/" className="font-body text-xs" style={{ color: '#C8A96E' }}>Home</Link>
        <span className="font-body text-xs" style={{ color: '#6B6B6B' }}>/ About Us</span>
      </div>

      {/* HERITAGE / STORY */}
      {(heritage.heading || heritage.description) && (
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-[8%]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: '#C8A96E' }}>{heritage.label || 'Our Heritage'}</span>
                <h2 className="font-display font-semibold mb-6" style={{ fontSize: 'clamp(26px, 3vw, 42px)', lineHeight: 1.12, color: '#2D2D2D' }}>
                  {heritage.heading || heritage.title}
                </h2>
                <p className="font-body font-light text-[16px] leading-[1.8] mb-6" style={{ color: '#6B6B6B' }}>{heritage.description || heritage.subheading}</p>
                {heritage.cta && (
                  <Link to="/contact" className="font-body text-[13px] font-semibold inline-flex items-center gap-2" style={{ color: '#C8A96E' }}>
                    {heritage.cta} →
                  </Link>
                )}
              </FadeIn>
              <FadeIn delay={0.1}>
                {heritage.image ? (
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px' }}>
                    <img src={heritage.image} alt="Heritage" className="w-full h-full object-cover" />
                    {heritage.badge && (
                      <div className="absolute bottom-6 left-6 px-5 py-3 rounded-xl" style={{ background: '#C8A96E' }}>
                        <span className="font-display font-bold text-2xl block leading-none" style={{ color: '#FAF8F3' }}>{heritage.badge}</span>
                        <span className="font-body text-xs" style={{ color: 'rgba(250,248,243,0.8)' }}>Est.</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {[{ n: '500+', l: 'Clients Served' }, { n: '18+', l: 'Years Active' }, { n: '12', l: 'Expert Team' }, { n: '98%', l: 'Retention Rate' }].map((s) => (
                      <div key={s.l} className="rounded-xl p-6 text-center" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                        <span className="font-display font-bold text-3xl block" style={{ color: '#2D2D2D' }}>{s.n}</span>
                        <span className="font-body text-xs" style={{ color: '#6B6B6B' }}>{s.l}</span>
                      </div>
                    ))}
                  </div>
                )}
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* MISSION / FEATURES */}
      {features.length > 0 && (
        <section className="py-20" style={{ background: '#F2EDE4' }}>
          <div className="container mx-auto px-6 lg:px-[8%]">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-2" style={{ color: '#C8A96E' }}>{mission.label || 'Why Choose Us'}</span>
                <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: '#2D2D2D' }}>{mission.heading || mission.title || 'Our Commitments'}</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f: any, i: number) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="rounded-xl p-7 h-full" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                    <span className="font-display font-bold text-5xl block mb-4 leading-none" style={{ color: 'rgba(200,169,110,0.25)' }}>0{i + 1}</span>
                    <h3 className="font-display font-semibold text-base mb-2" style={{ color: '#2D2D2D' }}>{f.title}</h3>
                    <p className="font-body text-[13px] leading-relaxed" style={{ color: '#6B6B6B' }}>{f.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VALUES */}
      {coreValues.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-[8%]">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-2" style={{ color: '#C8A96E' }}>{values.label || 'Core Values'}</span>
                <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: '#2D2D2D' }}>{values.heading || values.title || 'What Drives Us'}</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {coreValues.map((v: any, i: number) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="rounded-xl p-7 text-center" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                    <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(200,169,110,0.12)' }}>
                      <span className="font-display font-bold text-lg" style={{ color: '#C8A96E' }}>{String(v.title || '').charAt(0)}</span>
                    </div>
                    <h3 className="font-display font-semibold text-base mb-2" style={{ color: '#2D2D2D' }}>{v.title}</h3>
                    <p className="font-body text-[13px] leading-relaxed" style={{ color: '#6B6B6B' }}>{v.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#2D2D2D' }}>
        <div className="container mx-auto px-6 lg:px-[8%] relative z-10 text-center">
          <FadeIn>
            <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-4" style={{ color: '#C8A96E' }}>{cta.label || "LET'S TALK"}</span>
            <h2 className="font-display font-semibold mx-auto mb-5" style={{ fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.12, color: '#FAF8F3', maxWidth: '560px' }}>
              {cta.heading || cta.title || 'Ready to Work With Us?'}
            </h2>
            <p className="font-body font-light text-base max-w-[440px] mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(250,248,243,0.6)' }}>
              {cta.subheading || cta.description || 'Schedule a free consultation with our expert team today.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="font-body text-[13px] font-semibold px-8 py-3.5 rounded-md" style={{ background: '#FAF8F3', color: '#2D2D2D' }}>
                {cta.cta || 'Book Consultation'}
              </Link>
              <Link to="/query" className="font-body text-[13px] font-medium px-8 py-3.5 rounded-md" style={{ border: '1.5px solid rgba(250,248,243,0.3)', color: 'rgba(250,248,243,0.8)' }}>
                {cta.secondaryCta || 'Submit a Query'}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
}
