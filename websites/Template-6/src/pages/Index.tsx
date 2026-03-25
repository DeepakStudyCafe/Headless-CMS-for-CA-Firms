import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { getPageData, getWebsiteData } from "@/lib/api";

const Loader = ({ logo, onComplete }: { logo?: string; onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#0D0D0D" }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {logo && (
        <img
          src={logo}
          alt="Loading"
          className="h-10 mb-8"
          style={{
            filter: "drop-shadow(0 0 16px rgba(224,140,46,0.5))",
            animation: "pulseDot 2s infinite",
          }}
        />
      )}
      <div className="w-48 h-px bg-charcoal-mid overflow-hidden rounded-full">
        <div className="h-full bg-amber2" style={{ animation: "loadBar 1s ease-in-out forwards" }} />
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [page, website] = await Promise.all([
          getPageData('home'),
          getWebsiteData(),
        ]);
        setPageData(page);
        setWebsiteData(website);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };
    fetchData();
  }, []);

  const findSection = (type: string) => pageData?.sections?.find((s: any) => s.type === type);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader logo={websiteData?.logo} onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar websiteData={websiteData} />
          <main>
            <HeroBanner data={findSection('hero')} />
            <StatsSection data={findSection('stats')} />
            <ServicesSection data={findSection('services')} />
            <WhyChooseUs data={findSection('text-image')} />
            <Testimonials data={findSection('testimonials')} />
            <CTASection data={findSection('cta')} websiteData={websiteData} />
          </main>
          <Footer websiteData={websiteData} />
        </>
      )}
    </>
  );
};

export default Index;
