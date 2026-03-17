import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-paper">
      <CustomCursor />
      <Navbar />
      <HeroBanner />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
