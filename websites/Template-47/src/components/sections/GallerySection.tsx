import { Reveal } from "@/components/Reveal";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";

const items = [
  { src: g1, label: "Reception", span: "md:col-span-2 md:row-span-2" },
  { src: g2, label: "Workspace", span: "md:col-span-2" },
  { src: g3, label: "Detail", span: "" },
  { src: g4, label: "Boardroom", span: "" },
  { src: g5, label: "Archive", span: "" },
  { src: g6, label: "Client Lounge", span: "md:col-span-2 md:row-span-2" },
];

export function GallerySection() {
  return (
    <section className="relative py-28 md:py-36 bg-mist/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <div className="label-eyebrow mb-5">Inside the Practice</div>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.1] text-balance max-w-2xl">
                A quiet place to make
                <span className="italic text-ocean"> careful decisions.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.06} className={`group relative overflow-hidden ${it.span}`}>
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/55 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-cream">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-brass">View</div>
                  <div className="font-display text-xl mt-1">{it.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
