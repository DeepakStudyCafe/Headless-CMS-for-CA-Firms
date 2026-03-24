import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

const Index = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('home'), getWebsiteData()]).then(([page, site]) => {
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

  const heroSection = pageData?.sections?.find(s => s.type === 'hero');
  const statsSection = pageData?.sections?.find(s => s.type === 'stats');
  const servicesSection = pageData?.sections?.find(s => s.type === 'services');
  const whyChooseUsSection = pageData?.sections?.find(s => s.type === 'text-image' && s.textContent?.heading === 'Why Choose Us');
  const testimonialsSection = pageData?.sections?.find(s => s.type === 'testimonials');

  return (
    <div className="min-h-screen bg-paper">
      <CustomCursor />
      <Navbar websiteData={websiteData} />
      <HeroBanner data={heroSection} />
      <StatsSection data={statsSection} />
      <ServicesSection data={servicesSection} />
      <WhyChooseUs data={whyChooseUsSection} />
      <Testimonials data={testimonialsSection} />
      <CTASection />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Index;
