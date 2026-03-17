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

const Index = () => {
  return (
    <div className="min-h-screen bg-ca-bg">
      <ScrollProgress />
      <Navbar />
      <HeroBanner />
      <StatsSection />
      <SVGDivider variant="dark-to-light" />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <SVGDivider variant="dark-to-light" />
      <CTASection />
      <SVGDivider variant="dark-to-light" />
      <Footer />
    </div>
  );
};

export default Index;
