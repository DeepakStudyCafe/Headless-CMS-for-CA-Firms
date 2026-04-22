import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import t5 from "@/assets/team-5.jpg";

const team = [
  { img: t1, name: "Arjun Bhatia", role: "Managing Partner", years: "21 yrs" },
  { img: t2, name: "Rhea Chandran", role: "Partner — Audit", years: "16 yrs" },
  { img: t5, name: "Suresh Krishnan", role: "Partner — Tax", years: "28 yrs" },
  { img: t3, name: "Karan Mehta", role: "Director — Advisory", years: "11 yrs" },
  { img: t4, name: "Priya Sundaram", role: "Director — Forensic", years: "13 yrs" },
];

export function Team() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "l" | "r") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "l" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="team" className="py-28 md:py-36 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-accent-soft mb-4">— Partners &amp; principals</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              The people who sign<br />
              <span className="italic font-light text-primary-foreground/70">every page.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("l")}
              className="h-12 w-12 rounded-full border border-primary-foreground/20 grid place-items-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("r")}
              className="h-12 w-12 rounded-full border border-primary-foreground/20 grid place-items-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="scroll-hide flex gap-5 md:gap-6 overflow-x-auto pl-6 md:pl-[max(2rem,calc((100vw-1400px)/2+2rem))] pr-6 snap-x snap-mandatory"
      >
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative shrink-0 w-[78vw] sm:w-[55vw] md:w-[360px] snap-start"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary/40">
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                width={768}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute top-5 right-5 text-[10px] uppercase tracking-widest text-primary-foreground/70 bg-primary/40 backdrop-blur px-3 py-1 rounded-full border border-primary-foreground/10">
                {m.years}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="font-display text-2xl tracking-tight">{m.name}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{m.role}</div>
                <div className="mt-4 h-px w-0 group-hover:w-12 bg-accent transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        ))}
        <div className="shrink-0 w-6" />
      </div>
    </section>
  );
}
