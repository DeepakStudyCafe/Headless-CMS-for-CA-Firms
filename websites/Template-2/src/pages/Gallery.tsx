import { useState } from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import office1 from '@/assets/office-1.jpg';
import event1 from '@/assets/event-1.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import aboutTeam from '@/assets/about-team.jpg';

const categories = ['All', 'Office', 'Events', 'Professional'];

const images = [
  { src: office1, category: 'Office', title: 'Modern Workspace' },
  { src: event1, category: 'Events', title: 'Annual Conference' },
  { src: heroBg, category: 'Office', title: 'Executive Suite' },
  { src: aboutTeam, category: 'Professional', title: 'Team Meeting' },
  { src: office1, category: 'Professional', title: 'Client Presentation' },
  { src: event1, category: 'Events', title: 'Industry Summit' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? images : images.filter(i => i.category === active);

  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Gallery</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Life at <span className="text-gradient-gold">Apex</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">A glimpse into our workspace, events, and professional activities.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium font-body transition-all ${
                  active === cat
                    ? 'bg-navy text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-primary-foreground font-display font-semibold">{img.title}</p>
                      <p className="text-primary-foreground/70 text-xs">{img.category}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
