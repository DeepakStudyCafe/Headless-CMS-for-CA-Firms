import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/sections/ServicesSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Audit, taxation, GST advisory, virtual CFO, transaction advisory, and forensic services." },
      { property: "og:title", content: "Services — ABC & Associates" },
      { property: "og:description", content: "Eight disciplines, delivered partner-led, for India's growing businesses." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Services" title="Eight disciplines, one ledger of trust." subtitle="Each engagement is led by a partner. Each delivery is reviewed twice." />
      <ServicesSection />
    </SiteLayout>
  ),
});
