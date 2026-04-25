import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    img: t1,
    name: "Anand Bhatia, FCA",
    role: "Managing Partner",
    bio: "Three decades in tax and assurance. Anand leads the firm's largest audit and corporate advisory engagements and is a frequent speaker at ICAI study circles.",
    offset: "md:translate-y-0",
  },
  {
    img: t2,
    name: "Bhavna Chandra, ACA",
    role: "Partner — Advisory",
    bio: "Heads the firm's Virtual CFO and transaction advisory practice. Bhavna has led diligence on more than fifty mid-market transactions across SaaS, manufacturing and retail.",
    offset: "md:translate-y-16",
  },
  {
    img: t3,
    name: "Chirag Mehta, FCA",
    role: "Partner — Tax",
    bio: "Specialises in international tax, FEMA and transfer pricing. Chirag advises promoter families and Indian subsidiaries of global groups on cross-border structuring.",
    offset: "md:translate-y-6",
  },
];

export function Team() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-team-card]", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={root} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              (04) — The Partners
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance max-w-3xl">
              People you'll know by name. <span className="italic">And by number.</span>
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm">
            Three founding partners, twenty-eight associates, one principle —
            seniority on every file.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {team.map((m) => (
            <article
              key={m.name}
              data-team-card
              className={`group ${m.offset}`}
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5]">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-background/80 text-xs tracking-[0.3em] uppercase">{m.role}</div>
                  <div className="mt-1 font-display text-2xl text-background">{m.name}</div>
                </div>
              </div>
              <p className="mt-5 text-foreground/70 leading-relaxed text-[15px] max-w-sm">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
