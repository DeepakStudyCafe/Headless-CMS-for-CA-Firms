import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Team } from "@/sections/Team";
import { Gallery } from "@/sections/Gallery";
import { ContactForm } from "@/sections/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premier CA Firm — Tax, Audit & Advisory" },
      { name: "description", content: "Premium chartered accountancy services: tax planning, GST, audit, company registration and business consulting." },
      { property: "og:title", content: "Premier CA Firm — Tax, Audit & Advisory" },
      { property: "og:description", content: "Trusted chartered accountants for modern businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Gallery />
      <ContactForm />
    </Layout>
  );
}
