import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { About } from "@/sections/About";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Premier CA Firm" },
      { name: "description", content: "Two decades of trusted financial expertise. Meet the firm behind your numbers." },
      { property: "og:title", content: "About — Premier CA Firm" },
      { property: "og:description", content: "Two decades of trusted financial expertise." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHeader eyebrow="About Us" title="A modern firm with classical values" subtitle="Independent. Insightful. Invested in your growth." />
      <About />
      <WhyChooseUs />
    </Layout>
  );
}
