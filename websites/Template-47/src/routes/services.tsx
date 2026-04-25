import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      {
        name: "description",
        content:
          "Audit, direct & indirect taxation, virtual CFO, business advisory, corporate law, international tax and risk advisory — all delivered partner-led.",
      },
      { property: "og:title", content: "Services — ABC & Associates" },
      {
        property: "og:description",
        content: "Eight disciplines. One steady hand.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={<>Eight disciplines. <em className="italic text-ocean">One steady hand.</em></>}
        intro="From statutory audit to virtual CFO retainers, our services are organised around how growing businesses actually operate — not how a brochure thinks they should."
      />
      <ServicesSection />
    </>
  );
}
