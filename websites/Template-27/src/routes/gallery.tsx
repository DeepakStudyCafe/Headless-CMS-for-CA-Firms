import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Gallery } from "@/sections/Gallery";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Premier CA Firm" },
      { name: "description", content: "A look inside our office, events and team moments." },
      { property: "og:title", content: "Gallery — Premier CA Firm" },
      { property: "og:description", content: "Inside our firm." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Gallery" title="Inside our firm" subtitle="A glimpse at the work, events and people." />
      <Gallery />
    </Layout>
  );
}
