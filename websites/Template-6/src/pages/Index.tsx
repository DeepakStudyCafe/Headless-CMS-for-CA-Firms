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
import CustomCursor from "@/components/CustomCursor";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
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
      <img
        src="https://api.digitechai.in/uploads/logo.png"
        alt="Loading"
        className="h-10 mb-8"
        style={{
          filter: "drop-shadow(0 0 16px rgba(224,140,46,0.5))",
          animation: "pulseDot 2s infinite",
        }}
      />
      <div className="w-48 h-px bg-charcoal-mid overflow-hidden rounded-full">
        <div className="h-full bg-amber2" style={{ animation: "loadBar 1s ease-in-out forwards" }} />
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <HeroBanner />
            <StatsSection />
            <ServicesSection />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
