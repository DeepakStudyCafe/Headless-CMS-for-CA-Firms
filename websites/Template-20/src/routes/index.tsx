import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero";
import { HighlightsSection } from "@/components/sections/highlights";
import { ServicesSection } from "@/components/sections/services";
import { AboutStatsSection } from "@/components/sections/about-stats";
import { ProcessSection } from "@/components/sections/process";
import { TeamSection } from "@/components/sections/team";
import { ContactSection } from "@/components/sections/contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <HighlightsSection />
        <ServicesSection />
        <AboutStatsSection />
        <ProcessSection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
