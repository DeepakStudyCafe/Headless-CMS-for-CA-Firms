import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const items = [
  { src: g1, label: "Boardroom", span: "lg:col-span-2 lg:row-span-2" },
  { src: g2, label: "Client Partnership" },
  { src: g3, label: "Financial Reporting" },
  { src: g6, label: "Our Office" },
  { src: g4, label: "Strategy Sessions", span: "lg:col-span-2" },
  { src: g5, label: "Recognition" },
];

export default function Gallery() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section ref={ref} id="gallery" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <span data-reveal className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Gallery
          </span>
          <h2 data-reveal className="mt-4 text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            A glimpse <span className="italic text-primary">inside our world</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              data-reveal
              className={`relative overflow-hidden rounded-2xl group ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.label}
                className="gallery-img absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-5 text-white">
                <div className="text-xs uppercase tracking-widest text-white/70">ABC & Associates</div>
                <div className="font-display text-lg">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
