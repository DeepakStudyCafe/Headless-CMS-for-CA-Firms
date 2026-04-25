import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { useGsapReveal } from "@/hooks/useGsap";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC & Associates" },
      { name: "description", content: "A look inside the offices, boardrooms and culture of ABC & Associates." },
      { property: "og:title", content: "Gallery — ABC & Associates" },
      { property: "og:description", content: "Inside the studio, boardrooms and craft of ABC & Associates." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: g1, label: "Bengaluru reception", h: "row-span-2" },
  { src: g2, label: "Engagement letters", h: "" },
  { src: g3, label: "Boardroom · MG Road", h: "" },
  { src: g4, label: "Statutory audit files", h: "" },
  { src: g5, label: "Partners' meeting", h: "row-span-2" },
  { src: g6, label: "Quarterly review desk", h: "" },
];

function GalleryPage() {
  useGsapReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Gallery"
        title="A quiet look behind the practice."
        intro="Offices in Bengaluru, Mumbai and Delhi. Boardrooms, partners and the small daily rituals of the firm."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[260px] gap-4 md:gap-6">
            {items.map((it, i) => (
              <figure
                key={i}
                data-reveal
                className={`group relative overflow-hidden ${it.h}`}
              >
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-500" />
                <figcaption className="absolute bottom-4 left-5 text-white text-xs uppercase tracking-[0.25em] translate-y-2 group-hover:translate-y-0 transition-transform">
                  {it.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
