import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Boutique Chartered Accountants in Mumbai" },
      {
        name: "description",
        content:
          "Reliable financial guidance for growing businesses. Audit, tax, advisory, virtual CFO and corporate law services from a partner-led practice in Mumbai.",
      },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Reliable financial guidance for growing businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <TeamSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
