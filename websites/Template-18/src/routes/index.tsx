import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IntroBlock, FeatureStrip } from "@/components/sections/IntroFeatures";
import { AboutStats } from "@/components/sections/AboutStats";
import { ServicesSplit } from "@/components/sections/ServicesSplit";
import { ProcessTimeline, WhyChooseUs } from "@/components/sections/ProcessWhy";
import { TeamScroller, ContactSplit } from "@/components/sections/TeamContact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants | Audit, Tax & Advisory" },
      {
        name: "description",
        content:
          "ABC & Associates is a chartered accountancy firm offering audit, taxation, GST, compliance and advisory services for businesses across India.",
      },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      {
        property: "og:description",
        content: "Partner-led audit, taxation and advisory for founders, family businesses and enterprises.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <IntroBlock />
        <FeatureStrip />
        <AboutStats />
        <ServicesSplit />
        <ProcessTimeline />
        <WhyChooseUs />
        <TeamScroller />
        <ContactSplit />
      </main>
      <SiteFooter />
    </div>
  );
}
