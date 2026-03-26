import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import SVGDivider from "@/components/ui/SVGDivider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { getPageData, getWebsiteData } from "@/lib/api";

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

    const onFocus = () => loadData();
    const interval = window.setInterval(loadData, 30000);
    window.addEventListener("focus", onFocus);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", onFocus);
    };
  }, [loadData]);

  const findSection = (type: string) => pageData?.sections?.find((s: any) => s.type === type);

  return (
    <div className="min-h-screen bg-ca-bg">
      <ScrollProgress />
      <Navbar websiteData={websiteData} />
      <HeroBanner data={findSection("hero")} />
      <StatsSection data={findSection("stats")} />
      <SVGDivider variant="dark-to-light" />
      <ServicesSection data={findSection("services")} />
      <WhyChooseUs data={findSection("text-image")} />
      <Testimonials data={findSection("testimonials")} />
      <SVGDivider variant="dark-to-light" />
      <CTASection data={findSection("cta")} websiteData={websiteData} />
      <SVGDivider variant="dark-to-light" />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Index;
