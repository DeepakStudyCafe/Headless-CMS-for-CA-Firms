import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/sections/ContactForm";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Premier CA Firm" },
      { name: "description", content: "Talk to a partner. We respond within 24 hours." },
      { property: "og:title", content: "Contact — Premier CA Firm" },
      { property: "og:description", content: "Get in touch with our partners." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Speak to a partner" subtitle="We respond within 24 business hours." />
      <ContactForm />
    </Layout>
  );
}
