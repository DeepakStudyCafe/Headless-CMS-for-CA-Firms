import { createFileRoute } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getPageData, getImageUrl } from '@/lib/api';

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
});

function GalleryPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    getPageData('gallery').then(setPageData);
  }, []);

  if (!pageData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const gallerySection = pageData?.sections?.find((s: any) => s.type === 'gallery');

  const content = heroSection?.textContent || {};
  const galleryContent = gallerySection?.textContent || {};
  const categories = galleryContent.categories || ['All'];
  const items = galleryContent.items || [];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-display mb-6">{content.heading}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{content.subheading}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((c: string) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-6 py-2 rounded-full border transition-all ${filter === c ? 'bg-primary border-primary text-primary-foreground' : 'border-border text-foreground hover:bg-muted'}`}>
                {c}
              </button>
            ))}
          </div>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {items.filter((i: any) => filter === 'All' || i.category === filter).map((item: any, index: number) => (
                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} key={index} className="aspect-square rounded-3xl overflow-hidden border border-border shadow-soft group relative">
                  <img src={getImageUrl(item.src)} alt={item.alt || item.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
