import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { getPageData, getWebsiteData } from "@/lib/api";

import GalleryPageHero from "@/components/sections/GalleryPageHero";
import GalleryPageGrid from "@/components/sections/GalleryPageGrid";
import GalleryPageStats from "@/components/sections/GalleryPageStats";
import { findSection, normalizeStats, sectionContent } from "@/lib/sectionHelpers";

const Gallery = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("gallery"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [loadData]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col items-center pt-32">
        <Navbar data={websiteData} />
        <section className="py-24 text-center">
          <h1 className="font-display text-4xl text-on-surface">Page Content Not Found</h1>
          <p className="mt-3 text-on-surface-variant">
            This route is not published yet in CMS. Open /admin and publish or create sections for this page.
          </p>
        </section>
        <Footer data={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, "hero"));
  const gridSection = sectionContent(findSection(pageData, "grid", "gallery-grid", "gallery"));
  const statsSection = sectionContent(findSection(pageData, "stats", "gallery-stats"));

  const gridData = {
    ...gridSection,
    items: gridSection.items || [],
    categories: gridSection.categories || [],
  };

  const statsData = {
    ...statsSection,
    stats: normalizeStats(statsSection.stats),
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar data={websiteData} />

      <main className="pt-32 pb-24">
        <GalleryPageHero data={hero} />
        <GalleryPageGrid data={gridData} />
        <GalleryPageStats data={statsData} />
      </main>

      <Footer data={websiteData} />
    </div>
  );
};

export default Gallery;