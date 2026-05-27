import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Users, Calendar, MapPin } from "lucide-react";
import { getPageData, getImageUrl } from "@/lib/api";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const iconMap: Record<string, any> = {
  Calendar, Users, MapPin, Camera
};

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPageData('gallery').then((data) => {
      setPageData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const gallerySection = pageData?.sections?.find((s: any) => s.type === 'gallery');
  const statsSection = pageData?.sections?.find((s: any) => s.type === 'stats');

  const heroTitle = heroSection?.textContent?.heading || "Life at the Firm";
  const heroSubtitle = heroSection?.textContent?.title || "Moments & Milestones";
  const heroDesc = heroSection?.textContent?.description || "Take a glimpse into our corporate culture, events, and the collaborative environment that drives our success.";

  const galleryCategories = gallerySection?.textContent?.categories || ["All", "Events", "Office", "Conferences", "Awards"];
  const galleryImagesData = gallerySection?.textContent?.items || [];
  const statsData = statsSection?.textContent?.items || [];

  const filteredImages = activeCategory === "All"
    ? galleryImagesData
    : galleryImagesData.filter((img: any) => img.category === activeCategory);

  return (
    <div className="">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.03]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-primary uppercase inline-block mb-4"
          >
            {heroTitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {heroSubtitle.split(' ').map((word: string, i: number, arr: any) => {
              if (i === arr.length - 1 || i === arr.length - 2) {
                 return <span key={i} className="text-gradient"> {word}</span>;
              }
              return <span key={i}> {word}</span>;
            })}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-secondary/30">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {galleryCategories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border/50 bg-background text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img: any, i: number) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden glass border border-border/50"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={getImageUrl(img.src || img.url || img.image)}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <div>
                      <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">{img.category}</span>
                      <p className="text-foreground text-sm font-medium">{img.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      {statsData.length > 0 && (
        <section className="bg-background py-16 px-6 lg:px-8 border-t border-border/50 relative">
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Calendar;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</span>
                  <span className="text-muted-foreground text-xs uppercase tracking-[0.1em] mt-2 font-medium">{stat.label}</span>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
