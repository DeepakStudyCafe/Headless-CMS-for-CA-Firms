import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import heroGallery from '@/assets/hero-gallery.jpg';

const categories = ['All', 'Office', 'Events', 'Activities'];

const images = [
  { src: 'https://picsum.photos/seed/mumbai-headquarters/1200/1200', cat: 'Office', title: 'Mumbai Headquarters' },
  { src: 'https://picsum.photos/seed/conference-room/1200/1200', cat: 'Office', title: 'Conference Room' },
  { src: 'https://picsum.photos/seed/annual-client-summit/1200/1200', cat: 'Events', title: 'Annual Client Summit' },
  { src: 'https://picsum.photos/seed/tax-seminar-2024/1200/1200', cat: 'Events', title: 'Tax Seminar 2024' },
  { src: 'https://picsum.photos/seed/team-building/1200/1200', cat: 'Activities', title: 'Team Building' },
  { src: 'https://picsum.photos/seed/work-lounge/1200/1200', cat: 'Office', title: 'Work Lounge' },
  { src: 'https://picsum.photos/seed/csr-initiative/1200/1200', cat: 'Activities', title: 'CSR Initiative' },
  { src: 'https://picsum.photos/seed/awards-ceremony/1200/1200', cat: 'Events', title: 'Awards Ceremony' },
  { src: 'https://picsum.photos/seed/delhi-office/1200/1200', cat: 'Office', title: 'Delhi Office' },
  { src: 'https://picsum.photos/seed/annual-retreat/1200/1200', cat: 'Activities', title: 'Annual Retreat' },
  { src: 'https://picsum.photos/seed/industry-conference/1200/1200', cat: 'Events', title: 'Industry Conference' },
  { src: 'https://picsum.photos/seed/client-meeting-space/1200/1200', cat: 'Office', title: 'Client Meeting Space' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? images : images.filter(img => img.cat === active);

  return (
    <Layout>
      <PageHero
        title="A Glimpse Into"
        highlight="Sterling & Co."
        image={heroGallery}
        breadcrumb={[{ label: 'Gallery' }]}
      />

      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="flex justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
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
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 gradient-navy opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/80">
                      <span className="text-sm font-semibold text-primary-foreground">{img.title}</span>
                      <span className="text-xs text-primary-foreground/60 mt-1">{img.cat}</span>
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
