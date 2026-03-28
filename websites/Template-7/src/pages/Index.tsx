import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { getPageData, getWebsiteData } from '@/lib/api';

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
    <>
      <CustomCursor />
      <Navbar websiteData={websiteData} />
      <main>
        <HeroSection data={findSection('hero')} />
        <StatsSection data={findSection('stats')} />
        <ServicesSection data={findSection('services')} />
        <WhyChooseUsSection data={findSection('why-choose-us')} />
        <TestimonialsSection data={findSection('testimonials')} />
        <CTASection data={findSection('cta')} websiteData={websiteData} />
      </main>
      <Footer websiteData={websiteData} />
    </>
  );
};

export default Index;
