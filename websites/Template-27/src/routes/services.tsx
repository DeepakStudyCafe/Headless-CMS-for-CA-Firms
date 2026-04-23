import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Services } from "@/sections/Services";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Premier CA Firm" },
      { name: "description", content: "Tax planning, GST, audit, company registration, business consulting and compliance." },
      { property: "og:title", content: "Services — Premier CA Firm" },
      { property: "og:description", content: "Comprehensive chartered accountancy services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Services" title="Everything finance, in one firm" subtitle="From compliance to strategy — covered end-to-end." />
      <Services />
    </Layout>
  );
}
