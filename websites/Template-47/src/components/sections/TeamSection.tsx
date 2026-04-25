import { Reveal } from "@/components/Reveal";
import t1 from "@/assets/team1.jpg";
import t2 from "@/assets/team2.jpg";
import t3 from "@/assets/team3.jpg";
import t4 from "@/assets/team4.jpg";

const team = [
  {
    img: t1,
    name: "Arvind Bhatt",
    role: "Founding Partner · Audit",
    bio: "ICAI rank-holder with two decades leading statutory and internal audit engagements across listed companies.",
  },
  {
    img: t2,
    name: "Chitra Iyer",
    role: "Partner · Taxation",
    bio: "Specialist in direct tax litigation and international tax structuring, formerly with a Big Four firm.",
  },
  {
    img: t3,
    name: "Rohan Mehta",
    role: "Partner · Virtual CFO",
    bio: "Embeds with founder-led businesses to build financial discipline through fundraising and scale.",
  },
  {
    img: t4,
    name: "Saira Kapoor",
    role: "Partner · Advisory",
    bio: "Leads transaction advisory, due diligence and valuations for mid-market M&A and private equity clients.",
  },
];

export function TeamSection() {
  return (
    <section className="relative py-28 md:py-36 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <div className="label-eyebrow mb-5">The Partners</div>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.1] text-balance">
                Senior people.
                <span className="italic text-ocean"> No layers in between.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Offset cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} y={40}>
              <article
                className={`group ${i % 2 === 1 ? "md:translate-y-12" : ""}`}
              >
                <div className="relative overflow-hidden bg-mist aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-5 pl-1">
                  <div className="text-[11px] tracking-[0.25em] uppercase text-brass">{p.role}</div>
                  <h3 className="font-display text-2xl text-primary mt-2">{p.name}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed mt-2">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
