import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Users, Calendar, MapPin, LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC & Associates" },
      { name: "description", content: "Explore moments and milestones from ABC & Associates." },
    ],
  }),
  component: GalleryPage,
});

const iconMap: Record<string, LucideIcon> = {
  Calendar, Users, MapPin, Camera
};

function GalleryPage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    Promise.all([getPageData('gallery'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-primary"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <SiteLayout>
        <main className="flex-grow"></main>
      </SiteLayout>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === 'hero');
  const gallerySection = pageData.sections?.find(s => s.type === 'gallery-grid');
  const statsSection = pageData.sections?.find(s => s.type === 'stats');
  const ctaSection = pageData.sections?.find(s => s.type === 'cta');

  const galleryCategories = gallerySection?.textContent?.categories || ["All"];
  const galleryImages = gallerySection?.textContent?.items || [];

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img: any) => img.category === activeCategory);

  return (
    <SiteLayout websiteData={websiteData}>
      {heroSection && (
        <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Life at the Firm</p>
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{heroSection.textContent.heading}</h1>
              <p className="mt-6 text-lg text-subtle">{heroSection.textContent.subheading}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* FILTERABLE GALLERY */}
      {gallerySection && (
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={gallerySection.textContent.subheading || "Visual Stories"} title={gallerySection.textContent.heading || "Our Gallery"} />

            {/* Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {galleryCategories.map((cat: string) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border border-border bg-surface text-foreground/70 hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((img: any) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={getImageUrl(img.src || img.image)}
                        alt={img.alt || img.caption}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div>
                        <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary">{img.category}</span>
                        <p className="text-sm font-medium text-foreground">{img.alt || img.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      )}

      {/* STATS */}
      {statsSection && statsSection.textContent.stats && (
        <section className="border-t border-border bg-foreground py-16 text-background">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
            {statsSection.textContent.stats.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Camera;
              return (
                <Reveal key={stat.label || i} delay={i * 0.1}>
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</span>
                    <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-background/70">{stat.label}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}
      {/* CTA */}
      {ctaSection && (
        <section className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Get Started</span>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl text-foreground">{ctaSection.textContent.heading}</h2>
              <p className="mt-4 text-base text-subtle max-w-xl mx-auto mb-8">
                {ctaSection.textContent.subheading}
              </p>
              <Button size="lg" onClick={() => window.location.href = '/contact'} className="bg-primary text-primary-foreground hover:bg-secondary">
                {ctaSection.textContent.cta || "Contact Us"}
              </Button>
            </Reveal>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
