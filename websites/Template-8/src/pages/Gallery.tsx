import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPageData, getWebsiteData } from "@/lib/api";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function Gallery() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const loadData = useCallback(() => {
    Promise.all([getPageData("gallery"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page); setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-ink font-body text-cream">
        <Navbar websiteData={websiteData} />
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="font-display text-3xl text-cream">Page Not Found</p>
          <p className="font-body text-sm mt-3 text-mist">This page is not published in CMS yet.</p>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, "hero"));
  const gallerySec = sectionContent(findSection(pageData, "gallery", "grid", "gallery-grid"));
  const items: any[] = gallerySec.items || [];
  const rawCategories: string[] = gallerySec.categories || [...new Set(items.map((i: any) => i.category).filter(Boolean))] as string[];
  const categories = ["All", ...rawCategories];
  const filtered = activeCategory === "All" ? items : items.filter((i: any) => i.category === activeCategory);

  return (
    <div className="bg-ink min-h-screen font-body text-cream">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative min-h-[360px] flex items-end bg-ink overflow-hidden pt-20">
        {hero.image && (
          <>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.image}')`, opacity: 0.2 }} />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{hero.label || "OUR GALLERY"}</span>
          <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-tight mb-4">{hero.heading || hero.title || "Gallery"}</h1>
          {hero.subheading && <p className="font-body text-lg text-mist max-w-xl">{hero.subheading}</p>}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center gap-2 border-b border-gold/20">
        <Link to="/" className="font-body text-xs text-gold">Home</Link>
        <span className="font-body text-xs text-mist">/ Gallery</span>
      </div>

      {/* GALLERY */}
      <section className="py-24 bg-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`font-body text-xs font-medium px-4 py-2 rounded-full transition-all ${activeCategory === cat ? "bg-gold text-ink" : "bg-ink border border-gold/25 text-mist hover:border-gold/50"}`}>
                  {cat}
                </button>
              ))}
            </div>
          )}
          {filtered.length === 0 ? (
            <p className="font-body text-center py-16 text-mist">No images yet.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((img: any, i: number) => (
                <FadeIn key={i} delay={i * 0.04}>
                  <div className="rounded-lg overflow-hidden break-inside-avoid hover:-translate-y-1 transition-all duration-300 border border-gold/10 hover:border-gold/30">
                    <img src={img.src || img.image || img.url} alt={img.alt || img.title || "Gallery"} className="w-full object-cover block" />
                    {img.title && (
                      <div className="px-4 py-3 bg-deep border-t border-gold/10">
                        <p className="font-display font-semibold text-sm text-cream">{img.title}</p>
                        {img.category && <p className="font-body text-xs text-gold mt-0.5">{img.category}</p>}
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
