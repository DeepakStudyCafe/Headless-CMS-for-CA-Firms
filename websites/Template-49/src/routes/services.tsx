import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/sections/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Audit, Tax & Advisory | ABC & Associates" },
      { name: "description", content: "Audit, direct tax, GST, corporate law, virtual CFO and transaction advisory — partner-led across six practice areas." },
      { property: "og:title", content: "Services — ABC & Associates" },
      { property: "og:description", content: "Six disciplines, one partner-led standard." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Six disciplines,"
        italic="one standard."
        intro="From statutory audit to virtual CFO retainers — every engagement is led by a partner."
      />
      <Services />
    </>
  );
}
