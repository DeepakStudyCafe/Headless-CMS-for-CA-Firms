import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/sections/Hero";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { TeamSection } from "@/sections/TeamSection";
import { GallerySection } from "@/sections/GallerySection";
import { ContactSection } from "@/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants | Audit, Tax, Advisory" },
      { name: "description", content: "Boutique chartered accountancy practice since 1998. Audit, taxation, GST, and virtual CFO services for growing businesses across India." },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Reliable financial guidance for growing businesses. Audit, tax and advisory by partner-led teams." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TeamSection />
      <GallerySection />
      <ContactSection />
    </SiteLayout>
  );
}
