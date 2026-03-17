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

const Index = () => {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <HeroBanner />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
