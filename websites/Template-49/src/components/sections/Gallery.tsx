import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import { useReveal } from "@/hooks/useReveal";

const ITEMS = [
  { src: g1, h: "row-span-2", caption: "Annual board review" },
  { src: g2, h: "", caption: "Engagement signing" },
  { src: g3, h: "", caption: "Bengaluru reception" },
  { src: g4, h: "", caption: "Quarterly closing" },
  { src: g5, h: "row-span-2", caption: "Advisory in motion" },
  { src: g6, h: "", caption: "The studio" },
];

export function Gallery() {
  const ref = useReveal();
  return (
    <section ref={ref as never} className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <div data-reveal className="text-xs tracking-[0.3em] uppercase text-[var(--forest)] mb-5">◇ Inside the Studio</div>
            <h2 data-reveal className="font-display text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] max-w-3xl text-balance">
              Where the
              <span className="italic text-[var(--moss)]"> quiet </span>
              work gets done.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-4">
          {ITEMS.map((it, i) => (
            <figure
              key={i}
              data-reveal
              className={`relative overflow-hidden rounded-2xl group ${it.h}`}
            >
              <img
                src={it.src}
                alt={it.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/60 transition-colors" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[var(--cream)] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--sage)]">— 0{i + 1}</span>
                <div className="font-display text-lg">{it.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
