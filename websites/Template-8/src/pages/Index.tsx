import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroBanner from "@/components/sections/HeroBanner";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import { getPageData, getWebsiteData } from "@/lib/api";

const Index = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    Promise.all([getPageData('home'), getWebsiteData()]).then(([p, w]) => {
      setPageData(p);
      setWebsiteData(w);
    });
  }, []);

  const findSection = (type: string) => pageData?.sections?.find((s: any) => s.type === type);

  return (
    <div className="min-h-screen bg-ink">
      <Navbar websiteData={websiteData} />
      <HeroBanner data={findSection('hero')} />
      <StatsSection data={findSection('stats')} />
      <ServicesSection data={findSection('services')} />
      <AboutSection data={findSection('about')} />
      <TeamSection data={findSection('team')} />
      <TestimonialsSection data={findSection('testimonials')} />
      <InsightsSection data={findSection('insights')} />
      <CTASection data={findSection('cta')} websiteData={websiteData} />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Index;
