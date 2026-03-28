import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { getPageData, getWebsiteData } from "@/lib/api";
import AboutHero from "@/components/sections/AboutHero";
import AboutHeritage from "@/components/sections/AboutHeritage";
import AboutMissionVision from "@/components/sections/AboutMissionVision";
import AboutCoreValues from "@/components/sections/AboutCoreValues";
import AboutCTA from "@/components/sections/AboutCTA";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

const About = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("about"), getWebsiteData()]).then(([page, site]) => {
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
      <div className="min-h-screen bg-surface font-body text-on-surface">
        <Navbar data={websiteData} />
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl text-on-surface">Page Content Not Found</h1>
            <p className="mt-3 text-on-surface-variant">
              This route is not published yet in CMS. Open /admin and publish or create sections for this page.
            </p>
          </div>
        </section>
        <Footer data={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, "hero"));
  const heritage = sectionContent(findSection(pageData, "heritage", "text-image"));
  const mission = sectionContent(findSection(pageData, "mission", "features"));
  const valuesSection = sectionContent(findSection(pageData, "values", "core-values", "text-image"));
  const cta = sectionContent(findSection(pageData, "cta"));

  const valuesData = {
    ...valuesSection,
    values: valuesSection.values || valuesSection.items || [],
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar data={websiteData} />

      <main className="pt-20">
        <AboutHero data={hero} />
        <AboutHeritage data={heritage} />
        <AboutMissionVision data={mission} />
        <AboutCoreValues data={valuesData} />
        <AboutCTA data={cta} />
      </main>

      <Footer data={websiteData} />
    </div>
  );
};

export default About;
