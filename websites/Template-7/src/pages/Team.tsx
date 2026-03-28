import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getPageData, getWebsiteData } from '@/lib/api';
import { findSection, sectionContent } from '@/lib/sectionHelpers';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.12);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function Team() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData('team'), getWebsiteData()]).then(([page, site]) => {
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
  const teamSec = sectionContent(findSection(pageData, 'team', 'leaders'));
  const ctaSec = sectionContent(findSection(pageData, 'cta'));
  const members = teamSec.items || teamSec.leaders || [];

  return (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }} className="font-body">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: '#2D2D2D', minHeight: '360px' }}>
        {hero.image && <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${hero.image}')` }} />}
        <div className="absolute inset-0" style={{ background: 'rgba(45,45,45,0.88)' }} />
        <div className="container mx-auto px-6 lg:px-[8%] relative z-10 py-20">
          <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: '#C8A96E' }}>{hero.label || 'MEET THE TEAM'}</span>
          <h1 className="font-display font-semibold mb-3" style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: 1.08, color: '#FAF8F3' }}>
            {hero.heading || hero.title || 'Our Expert Team'}
          </h1>
          {hero.subheading && <p className="font-body font-light text-base max-w-xl leading-relaxed" style={{ color: 'rgba(250,248,243,0.6)' }}>{hero.subheading}</p>}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="container mx-auto px-6 lg:px-[8%] py-4 flex items-center gap-2" style={{ borderBottom: '1px solid #E8E2D9' }}>
        <Link to="/" className="font-body text-xs" style={{ color: '#C8A96E' }}>Home</Link>
        <span className="font-body text-xs" style={{ color: '#6B6B6B' }}>/ Our Team</span>
      </div>

      {/* TEAM GRID */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8%]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-2" style={{ color: '#C8A96E' }}>{teamSec.label || 'Our Professionals'}</span>
              <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#2D2D2D' }}>{teamSec.heading || teamSec.title || 'The People Behind Your Success'}</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member: any, i: number) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,45,45,0.08)]" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                  <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
                    <img
                      src={member.image || member.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name || 'Team')}&background=2D2D2D&color=FAF8F3&size=400`}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-display font-semibold text-[15px]" style={{ color: '#2D2D2D' }}>{member.name}</p>
                    <p className="font-body text-[12px] mt-0.5" style={{ color: '#C8A96E' }}>{member.role || member.designation}</p>
                    {member.bio && <p className="font-body text-[12px] mt-2 leading-relaxed" style={{ color: '#6B6B6B' }}>{member.bio}</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#2D2D2D' }}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display font-semibold mx-auto mb-5" style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', color: '#FAF8F3', maxWidth: '520px' }}>
              {ctaSec.heading || ctaSec.title || 'Work With Our Expert Team'}
            </h2>
            <Link to="/contact" className="font-body text-[13px] font-semibold px-8 py-3.5 rounded-md inline-block" style={{ background: '#C8A96E', color: '#FAF8F3' }}>
              {ctaSec.cta || 'Book Consultation'}
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
}
