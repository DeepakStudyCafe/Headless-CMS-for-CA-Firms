import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    q: "They became the single source of truth for our finance function during a complex cross-border restructuring. Calm, exacting, and never theatrical.",
    name: "Vikram Sethi",
    role: "Group CFO",
    company: "Listed manufacturing group",
  },
  {
    q: "We've worked with three of the Big Four. ABC's partner attention and turnaround on technical opinions is, candidly, in a different league.",
    name: "Anita Rao",
    role: "Founder & CEO",
    company: "Series C SaaS",
  },
  {
    q: "Their forensic team handled a delicate internal investigation with extraordinary discretion. The board still references their report two years on.",
    name: "Justice (Retd.) M. Iyer",
    role: "Independent Director",
    company: "Banking institution",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-surface/50">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">— Word of the room</div>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.05] tracking-tight">
              What clients say,<br />
              <span className="italic font-light text-secondary">when no one is selling.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative bg-background border border-border rounded-sm p-8 md:p-10 flex flex-col ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <Quote className="h-7 w-7 text-accent mb-6" strokeWidth={1.5} />
              <blockquote className="font-display text-lg md:text-xl text-primary leading-snug tracking-tight mb-8 flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="border-t border-border pt-5">
                <div className="font-display text-base text-primary">{t.name}</div>
                <div className="text-xs text-subtext mt-1">{t.role} · {t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
