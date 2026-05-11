import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, getImageUrl } from '../lib/api';
import { FullPageLoader } from '../components/Loader';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const GalleryPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    getPageData('gallery').then((res) => setPageData(mapData(res))).catch(console.error);      
  }, []);

  // Wait for data and define `images` (from mapData etc., or whatever `images` resolves to)
  
  const rawImages = pageData?.sections?.find((s: any) => s.type === 'galleryImages')?.textContent?.items || [];
  const images = rawImages;
  const filtered = filter === 'All' ? images : images.filter((i: any) => i.category === filter);

  if (!pageData) return <FullPageLoader />;

  return (
    <div>
      <PageHero title="Gallery" breadcrumb="Gallery" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || getImageUrl('/uploads/gallery-hero.jpg')} />

      <SectionWrapper>
        <div className="text-center mb-8">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'gallery-header')?.textContent?.heading}</h2>
          <div className="flex justify-center gap-3 mt-6">
            {['All', 'Office', 'Events'].map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <motion.div
              key={img.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(img.src)}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-video"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-colors duration-300 flex items-center justify-center">
                <span className="font-heading font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)}>
              <X size={32} />
            </button>
            <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} src={selected} alt="Gallery" className="max-w-full max-h-[85vh] rounded-xl object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
