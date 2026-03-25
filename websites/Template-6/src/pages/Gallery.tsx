import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

const Gallery = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    Promise.all([getPageData("gallery"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
        <div className="w-14 h-14 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(224,140,46,0.2)", borderTopColor: "#E08C2E" }} />
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#0D0D0D" }}>
        <Navbar websiteData={websiteData} />
        <main className="flex-grow" />
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === "hero");
  const gallerySection = pageData.sections?.find(s => s.type === "gallery");

  const categories: string[] = gallerySection?.textContent?.categories || [];
  const allImages: any[] = gallerySection?.textContent?.items || [];
  const filtered = activeCategory === "All" ? allImages : allImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0D0D0D" }}>
      <Navbar websiteData={websiteData} />

      {/* Hero */}
      {heroSection && (
        <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#111111" }}>
          {heroSection.imageUrl && (
            <img src={getImageUrl(heroSection.imageUrl)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, #111111)" }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            {heroSection.textContent?.label && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                className="font-mono text-[10px] tracking-[3px] uppercase block mb-4" style={{ color: "#E08C2E" }}>
                // {heroSection.textContent.label}
              </motion.span>
            )}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
              className="font-heading font-bold mb-4" style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "#F5F0E8", lineHeight: 1.05 }}>
              {heroSection.textContent?.heading}
            </motion.h1>
            {heroSection.textContent?.subheading && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
                className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(245,240,232,0.5)" }}>
                {heroSection.textContent.subheading}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      {gallerySection && (
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Category filters */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                {Array.from(new Set(["All", ...categories])).map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className="px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all"
                    style={{
                      background: activeCategory === cat ? "#E08C2E" : "rgba(255,255,255,0.05)",
                      color: activeCategory === cat ? "#0D0D0D" : "rgba(245,240,232,0.6)",
                      border: `1px solid ${activeCategory === cat ? "#E08C2E" : "rgba(255,255,255,0.08)"}`,
                    }}>
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Grid */}
            <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div key={img.src || i}
                    layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: 0.04 * (i % 9) }}
                    className="break-inside-avoid rounded-xl overflow-hidden group cursor-pointer relative">
                    <img src={getImageUrl(img.src)} alt={img.alt || img.title || "Gallery image"}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy" />
                    {(img.alt || img.caption || img.category) && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end"
                        style={{ background: "linear-gradient(to top, rgba(13,13,13,0.8), transparent)" }}>
                        <div className="p-4">
                          {(img.alt || img.caption) && <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>{img.caption || img.alt}</p>}
                          {img.category && <p className="text-xs font-mono" style={{ color: "#E08C2E" }}>{img.category}</p>}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-20" style={{ color: "rgba(245,240,232,0.4)" }}>No images in this category yet.</div>
            )}
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Gallery;
