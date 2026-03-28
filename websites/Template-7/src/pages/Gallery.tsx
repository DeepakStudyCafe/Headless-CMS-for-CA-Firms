import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getPageData, getWebsiteData } from '@/lib/api';
import { findSection, sectionContent } from '@/lib/sectionHelpers';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function Gallery() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const loadData = useCallback(() => {
    Promise.all([getPageData('gallery'), getWebsiteData()]).then(([page, site]) => {
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
  const gallerySec = sectionContent(findSection(pageData, 'gallery', 'grid', 'gallery-grid'));
  const items: any[] = gallerySec.items || [];
  const rawCategories: string[] = gallerySec.categories || [...new Set(items.map((i: any) => i.category).filter(Boolean))];
  const categories = ['All', ...rawCategories];
  const filtered = activeCategory === 'All' ? items : items.filter((i: any) => i.category === activeCategory);

  return (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }} className="font-body">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: '#2D2D2D', minHeight: '340px' }}>
        {hero.image && <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${hero.image}')` }} />}
        <div className="absolute inset-0" style={{ background: 'rgba(45,45,45,0.88)' }} />
        <div className="container mx-auto px-6 lg:px-[8%] relative z-10 py-20">
          <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: '#C8A96E' }}>{hero.label || 'OUR GALLERY'}</span>
          <h1 className="font-display font-semibold mb-3" style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: 1.08, color: '#FAF8F3' }}>
            {hero.heading || hero.title || 'Gallery'}
          </h1>
          {hero.subheading && <p className="font-body font-light text-base max-w-xl leading-relaxed" style={{ color: 'rgba(250,248,243,0.6)' }}>{hero.subheading}</p>}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="container mx-auto px-6 lg:px-[8%] py-4 flex items-center gap-2" style={{ borderBottom: '1px solid #E8E2D9' }}>
        <Link to="/" className="font-body text-xs" style={{ color: '#C8A96E' }}>Home</Link>
        <span className="font-body text-xs" style={{ color: '#6B6B6B' }}>/ Gallery</span>
      </div>

      {/* GALLERY */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8%]">
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="font-body text-[12px] font-medium px-4 py-2 rounded-full transition-all"
                  style={activeCategory === cat
                    ? { background: '#2D2D2D', color: '#FAF8F3' }
                    : { background: '#FFFFFF', color: '#6B6B6B', border: '1px solid #E8E2D9' }
                  }>
                  {cat}
                </button>
              ))}
            </div>
          )}
          {filtered.length === 0 ? (
            <p className="text-center font-body py-16" style={{ color: '#6B6B6B' }}>No images yet.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filtered.map((img: any, i: number) => (
                <FadeIn key={i} delay={i * 0.04}>
                  <div className="rounded-xl overflow-hidden break-inside-avoid transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src={img.src || img.image || img.url} alt={img.alt || img.title || 'Gallery'} className="w-full object-cover" style={{ display: 'block' }} />
                    {img.title && (
                      <div className="px-4 py-3" style={{ background: '#FFFFFF', borderTop: '1px solid #E8E2D9' }}>
                        <p className="font-display font-semibold text-[13px]" style={{ color: '#2D2D2D' }}>{img.title}</p>
                        {img.category && <p className="font-body text-[11px] mt-0.5" style={{ color: '#C8A96E' }}>{img.category}</p>}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
}
