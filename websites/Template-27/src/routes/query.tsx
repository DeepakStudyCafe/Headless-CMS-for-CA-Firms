import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/sections/ContactForm";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Submit a Query — Premier CA Firm" },
      { name: "description", content: "Have a tax, GST or compliance question? Send us your query." },
      { property: "og:title", content: "Submit a Query — Premier CA Firm" },
      { property: "og:description", content: "Send us your query." },
    ],
  }),
  component: QueryPage,
});

function QueryPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Query" title="Have a question?" subtitle="Drop your query below — a partner will personally respond." />
      <ContactForm />
    </Layout>
  );
}
