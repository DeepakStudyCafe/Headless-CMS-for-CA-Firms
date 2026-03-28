import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import Testimonials from "@/components/sections/Testimonials";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { getPageData, getWebsiteData } from "@/lib/api";
import { findSection, normalizeStats, sectionContent } from "@/lib/sectionHelpers";

const Index = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("home"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [loadData]);

  const hero = pageData ? findSection(pageData, "hero") : null;
  const services = pageData ? findSection(pageData, "services", "services-grid") : null;
  const stats = pageData ? findSection(pageData, "stats", "gallery-stats") : null;
  const testimonials = pageData ? findSection(pageData, "testimonials") : null;
  const cta = pageData ? findSection(pageData, "cta") : null;

  const heroData = hero ? sectionContent(hero) : null;
  const servicesData = services ? {
    ...sectionContent(services),
    services: sectionContent(services).services || sectionContent(services).items || [],
  } : null;
  const statsData = stats ? {
    ...sectionContent(stats),
    stats: normalizeStats(sectionContent(stats).stats),
  } : null;
  const ctaData = cta ? sectionContent(cta) : null;

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar data={websiteData} />
      
      <main className="pt-20">
        {heroData && <HeroBanner data={heroData} />}
        {servicesData && <ServicesSection data={servicesData} />}
        {statsData && <StatsSection data={statsData} />}
        {testimonials && <Testimonials data={testimonials} />}
        {ctaData && <CTASection data={ctaData} />}
      </main>

      <Footer data={websiteData} />
    </div>
  );
};
export default Index;