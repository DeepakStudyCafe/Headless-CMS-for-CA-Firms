import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Gallery } from "@/components/sections/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC & Associates" },
      { name: "description", content: "Inside the studio at ABC & Associates — the spaces, moments and craft of a boutique CA practice." },
      { property: "og:title", content: "Inside the Studio — ABC & Associates" },
      { property: "og:description", content: "A visual look at our practice." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Inside" italic="the studio." />
      <Gallery />
    </>
  );
}
