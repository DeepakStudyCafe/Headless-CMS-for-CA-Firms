import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { getPageData, getWebsiteData } from "@/lib/api";

import ServicesPageHero from "@/components/sections/ServicesPageHero";
import ServicesPageGrid from "@/components/sections/ServicesPageGrid";
import ServicesPageCTA from "@/components/sections/ServicesPageCTA";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

const Services = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("services"), getWebsiteData()]).then(([page, site]) => {
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
  const gridSection = sectionContent(findSection(pageData, "grid", "services-grid", "services"));
  const cta = sectionContent(findSection(pageData, "cta"));
  const gridData = {
    ...gridSection,
    services: gridSection.services || gridSection.items || [],
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar data={websiteData} />

      <main className="pt-20">
        <ServicesPageHero data={hero} />
        <ServicesPageGrid data={gridData} />
        <ServicesPageCTA data={cta} />
      </main>

      <Footer data={websiteData} />
    </div>
  );
};

export default Services;