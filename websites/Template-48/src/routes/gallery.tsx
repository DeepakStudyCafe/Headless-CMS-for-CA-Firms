import { createFileRoute } from "@tanstack/react-router";
import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery5.jpg";
import g6 from "../assets/gallery6.jpg";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC & Associates" },
      { name: "description", content: "A look inside ABC & Associates — our office, our people and our practice." },
      { property: "og:title", content: "Inside ABC & Associates" },
      { property: "og:description", content: "Glimpses from inside the firm." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: g1, alt: "Boardroom", caption: "The boardroom", span: "row-span-2" },
  { src: g2, alt: "Team meeting", caption: "Quarterly review", span: "" },
  { src: g3, alt: "Working desk", caption: "Filing season", span: "" },
  { src: g4, alt: "Reception", caption: "MG Road reception", span: "row-span-2" },
  { src: g5, alt: "Award ceremony", caption: "Annual partners' meet", span: "" },
  { src: g6, alt: "Annual reports", caption: "Audit dispatch", span: "" },
];

function GalleryPage() {
  useReveal();
  return (
    <div className="pt-32 lg:pt-40">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 reveal-up">— Inside the firm</p>
        <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[1.05] max-w-3xl text-balance reveal-up">
          Quiet rooms, long days, careful work.
        </h1>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-4">
            {items.map((it, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-secondary shadow-elegant hover:shadow-lift transition-shadow duration-500 reveal-up ${it.span}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute bottom-5 left-5 right-5 text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition duration-500">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">0{i + 1}</div>
                  <div className="font-display text-xl mt-1">{it.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
