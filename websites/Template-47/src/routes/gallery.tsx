import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GallerySection } from "@/components/sections/GallerySection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC & Associates" },
      {
        name: "description",
        content:
          "A look inside the practice — our Mumbai office, boardroom and the spaces where careful financial decisions are made.",
      },
      { property: "og:title", content: "Inside the Practice — ABC & Associates" },
      {
        property: "og:description",
        content: "A quiet place to make careful decisions.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Inside the <em className="italic text-ocean">practice.</em></>}
        intro="A small visual tour of our Mumbai office — the rooms, the routines and the unseen care that goes into what we do."
      />
      <GallerySection />
    </>
  );
}
