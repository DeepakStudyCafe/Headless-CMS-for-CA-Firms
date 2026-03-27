import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import heroGallery from '@/assets/hero-gallery.jpg';
import { getPageData, getImageUrl } from '@/lib/api';

const Gallery = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [active, setActive] = useState('All');

  useEffect(() => {
    getPageData('gallery').then(setPageData);
  }, []);

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const gallerySection = pageData?.sections?.find((s: any) => s.type === 'gallery');

  const categories: string[] = gallerySection?.textContent?.categories || ['All', 'Office', 'Events', 'Activities'];

  const images: any[] = gallerySection?.textContent?.items || [
    { src: 'https://picsum.photos/seed/mumbai-headquarters/1200/1200', category: 'Office', title: 'Mumbai Headquarters' },
    { src: 'https://picsum.photos/seed/conference-room/1200/1200', category: 'Office', title: 'Conference Room' },
    { src: 'https://picsum.photos/seed/annual-client-summit/1200/1200', category: 'Events', title: 'Annual Client Summit' },
    { src: 'https://picsum.photos/seed/tax-seminar-2024/1200/1200', category: 'Events', title: 'Tax Seminar 2024' },
    { src: 'https://picsum.photos/seed/team-building/1200/1200', category: 'Activities', title: 'Team Building' },
    { src: 'https://picsum.photos/seed/work-lounge/1200/1200', category: 'Office', title: 'Work Lounge' },
    { src: 'https://picsum.photos/seed/csr-initiative/1200/1200', category: 'Activities', title: 'CSR Initiative' },
    { src: 'https://picsum.photos/seed/awards-ceremony/1200/1200', category: 'Events', title: 'Awards Ceremony' },
  ];

  const filtered = active === 'All' ? images : images.filter(img => (img.category || img.cat) === active);

  return (
    <Layout>
      <PageHero
        title={heroSection?.textContent?.heading?.replace(/\s\S+\s\S+$/, '') || "A Glimpse Into"}
        highlight={heroSection?.textContent?.heading?.split(' ').slice(-2).join(' ') || "Our Gallery"}
        subtitle={heroSection?.textContent?.subheading || ''}
        image={heroSection?.imageUrl ? getImageUrl(heroSection.imageUrl) : heroGallery}
        breadcrumb={[{ label: 'Gallery' }]}
      />

      <section className="section-padding">
        <div className="container-max mx-auto">
          {gallerySection?.textContent?.heading && (
            <ScrollReveal>
              <h2 className="heading-lg text-foreground text-center mb-8">{gallerySection.textContent.heading}</h2>
            </ScrollReveal>
          )}
          <div className="flex justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
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
    </Layout>
  );
};

export default Gallery;
