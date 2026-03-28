import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { getPageData, getImageUrl } from '@/lib/api';

const Gallery = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [active, setActive] = useState('All');

  useEffect(() => {
    getPageData('gallery').then(setPageData);
  }, []);

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const gallerySection = pageData?.sections?.find((s: any) => s.type === 'gallery');

  const categories: string[] = gallerySection?.textContent?.categories || [];
  const images: any[] = gallerySection?.textContent?.items || [];

  const filtered = active === 'All' ? images : images.filter(img => (img.category || img.cat) === active);

  return (
    <Layout>
      {heroSection && (
        <PageHero
          title={heroSection.textContent?.heading?.replace(/\\s\\S+\\s\\S+$/, '') || ''}
          highlight={heroSection.textContent?.heading?.split(' ').slice(-2).join(' ') || ''}
          subtitle={heroSection.textContent?.subheading || ''}
          image={heroSection.imageUrl ? getImageUrl(heroSection.imageUrl) : ''}
          breadcrumb={[{ label: 'Gallery' }]}
        />
      )}

      {images.length > 0 && (
        <section className="section-padding">
          <div className="container-max mx-auto">
            {gallerySection?.textContent?.heading && (
              <ScrollReveal>
                <h2 className="heading-lg text-foreground text-center mb-8">{gallerySection.textContent.heading}</h2>
              </ScrollReveal>
            )}
            
            {categories.length > 0 && (
              <div className="flex justify-center flex-wrap gap-2 mb-12">
                <button
                  onClick={() => setActive('All')}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === 'All' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((img, i) => (
                <ScrollReveal key={`${img.title}-${i}`} delay={i * 0.05}>
                  <div className="group relative aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer">
                    <img src={img.src ? getImageUrl(img.src) : ''} alt={img.title || img.alt || ''} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 gradient-navy opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/80">
                      <span className="text-sm font-semibold text-primary-foreground">{img.title}</span>
                      <span className="text-xs text-primary-foreground/60 mt-1">{img.category || img.cat}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 group-hover:opacity-0 transition-opacity">
                      <span className="text-xs font-medium text-primary-foreground/80">{img.title}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Gallery;
