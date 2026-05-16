import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";
import { Camera, Users, Calendar, MapPin } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('gallery'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);



  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-paper flex flex-col">
        <CustomCursor />
        <Navbar websiteData={websiteData} />
        <main className="flex-grow"></main>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const heroSection = pageData?.sections?.find(s => s.type === 'hero');
  const gallerySection = pageData?.sections?.find(s => s.type === 'gallery');
  const statsSection = pageData?.sections?.find(s => s.type === 'stats');

  const galleryCategories = gallerySection?.textContent?.categories || [];
  const galleryImagesData = gallerySection?.textContent?.items || [];
  
  const dynamicStatsData = statsSection?.textContent?.stats?.map((s: any) => {
    let icon = Calendar;
    if (s.icon === 'Users' || s.label.toLowerCase().includes('attendee')) icon = Users;
    if (s.icon === 'MapPin' || s.label.toLowerCase().includes('location')) icon = MapPin;
    if (s.icon === 'Camera' || s.label.toLowerCase().includes('memories')) icon = Camera;
    return { ...s, icon };
  }) || [];

  const filteredImages = activeCategory === "All"
    ? galleryImagesData
    : galleryImagesData.filter((img: any) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <CustomCursor />
      <Navbar websiteData={websiteData} />

      {/* Page Hero */}
      {heroSection && (
        <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
          <div className="absolute inset-0 gold-grain" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold inline-block mb-4"
            >
              {heroSection.textContent?.label || "Life at the Firm"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4"
            >
              {heroSection.textContent?.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-white/50 text-base md:text-lg max-w-2xl mx-auto"
            >
              {heroSection.textContent?.subheading}
            </motion.p>
          </div>
        </section>
      )}

      {/* Filterable Gallery */}
      {gallerySection && (
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
          <div className="absolute inset-0 noise-texture" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <SectionHeading label={gallerySection.textContent?.label || "Visual Stories"} title={gallerySection.textContent?.heading || "Moments & Milestones"} />

          {/* Filter Buttons */}
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
                className={`font-sans text-[11px] uppercase tracking-[0.15em] px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-charcoal font-bold shadow-md"
                    : "border border-gold/30 text-charcoal hover:border-gold/60 hover:bg-gold/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img: any) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-gold/10 hover:border-gold/30 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      loading="lazy"
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <div>
                      <span className="inline-block font-sans text-[9px] uppercase tracking-[0.2em] text-gold font-bold mb-1">{img.category}</span>
                      <p className="font-sans text-white text-sm leading-snug">{img.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    )}

      {/* Stats Band */}
      {dynamicStatsData.length > 0 && (
        <section className="bg-charcoal py-16 px-6 lg:px-8 relative border-t-2 border-gold/30">
          <div className="absolute inset-0 gold-grain" />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {dynamicStatsData.map((stat: any, i: number) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-display text-3xl md:text-4xl text-gold">{stat.value}</span>
                <span className="font-sans text-white/50 text-xs uppercase tracking-[0.15em] mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <CTASection />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Gallery;
