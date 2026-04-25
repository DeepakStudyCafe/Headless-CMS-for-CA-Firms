import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery5.jpg";
import g6 from "../assets/gallery6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC & Associates" },
      { name: "description", content: "Inside the studio: a quiet look at the rooms, rituals and people behind ABC & Associates." },
      { property: "og:title", content: "Gallery — ABC & Associates" },
      { property: "og:description", content: "Inside the studio of a boutique chartered accountancy firm." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { src: g1, h: "tall", caption: "Quarterly partners' review" },
  { src: g2, h: "short", caption: "Year-end ledger reconciliation" },
  { src: g3, h: "med", caption: "Reception, Civil Lines office" },
  { src: g4, h: "short", caption: "A new client onboarding" },
  { src: g5, h: "tall", caption: "Signing off on a statutory audit" },
  { src: g6, h: "med", caption: "The library, est. 1994" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Inside the <em className="italic font-light text-primary">studio</em>.</>}
        intro="A quiet look at the rooms, rituals and people behind the practice."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {ITEMS.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07}>
              <figure className="group relative mb-5 overflow-hidden rounded-sm break-inside-avoid">
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-110 ${
                    it.h === "tall" ? "aspect-[3/4]" : it.h === "med" ? "aspect-square" : "aspect-[4/3]"
                  }`}
                />
                <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[var(--ink)]/70 via-transparent to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--cream)]">{it.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
