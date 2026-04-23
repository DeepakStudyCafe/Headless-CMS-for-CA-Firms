import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroTrust } from "@/sections/hero-trust";
import { FeatureHighlights } from "@/sections/feature-highlights";
import { Services } from "@/sections/services";
import { AboutStats } from "@/sections/about-stats";
import { Process } from "@/sections/process";
import { Team } from "@/sections/team";
import { Contact } from "@/sections/contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants in New Delhi" },
      {
        name: "description",
        content:
          "Boutique chartered accountancy firm offering audit, taxation, GST, advisory and NRI services. Partner-led engagements since 1999.",
      },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      {
        property: "og:description",
        content:
          "Quietly precise. Boldly accountable. Audit, tax & advisory for founders, family offices and growing enterprises.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroTrust />
        <FeatureHighlights />
        <Services />
        <AboutStats />
        <Process />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
