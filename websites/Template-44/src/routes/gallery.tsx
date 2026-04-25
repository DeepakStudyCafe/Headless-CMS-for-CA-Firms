import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { GallerySection } from "@/sections/GallerySection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC & Associates" },
      { name: "description", content: "A look inside the offices and rooms where the work of ABC & Associates is done." },
      { property: "og:title", content: "Gallery — ABC & Associates" },
      { property: "og:description", content: "Quiet rooms, careful work — a visual tour of the practice." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Quiet rooms, careful work." subtitle="A glimpse of where, and how, we spend our days." />
      <GallerySection />
    </SiteLayout>
  ),
});
