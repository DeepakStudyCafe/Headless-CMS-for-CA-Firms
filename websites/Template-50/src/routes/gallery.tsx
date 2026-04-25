import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useFadeIn } from "@/hooks/useFadeIn";
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
      { name: "description", content: "Moments and spaces from inside the practice of ABC & Associates." },
      { property: "og:title", content: "Gallery — ABC & Associates" },
      { property: "og:description", content: "A quiet look inside our boutique advisory practice." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: g1, cap: "The boardroom", h: "h-[520px]" },
  { img: g2, cap: "Signing of the engagement letter", h: "h-[360px]" },
  { img: g3, cap: "Reception, ground floor", h: "h-[440px]" },
  { img: g4, cap: "A working session", h: "h-[380px]" },
  { img: g5, cap: "The reading room", h: "h-[560px]" },
  { img: g6, cap: "Recognition, 2023", h: "h-[400px]" },
];

function GalleryPage() {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <PageShell>
      <div ref={ref}>
        <PageHeader
          eyebrow="Inside the practice"
          title="Moments, quietly captured."
          subtitle="A few unhurried frames from our spaces, our work and the occasional recognition."
        />

        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {items.map((it, i) => (
              <figure
                key={i}
                data-fade
                className="break-inside-avoid mb-6 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all duration-500">
                  <img
                    src={it.img}
                    alt={it.cap}
                    className={`w-full ${it.h} object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="eyebrow !text-blue-light mb-1">FIG. {String(i + 1).padStart(2, "0")}</p>
                    <p className="font-display text-xl text-cream-soft">{it.cap}</p>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
