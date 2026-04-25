import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { img: t1, name: "Arvind Bhattacharya", role: "Managing Partner · FCA", bio: "Direct tax strategist with 22 years across listed entities and family offices." },
  { img: t2, name: "Priya Mahadevan", role: "Partner · Audit & Assurance", bio: "Ex-Deloitte. Leads our statutory audit, internal audit and IFC practice." },
  { img: t3, name: "Rohan Kothari", role: "Senior Manager · GST & Indirect Tax", bio: "Specialist in GST refunds, anti-profiteering and e-commerce taxation." },
  { img: t4, name: "Ananya Iyer", role: "Manager · Transactions & Valuations", bio: "Advises founders on fundraising, ESOPs, due diligence and exit structuring." },
];

export function Team() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: root.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-6px)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <section id="team" ref={root} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)] font-medium">
              The people
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
              Partners who <span className="italic text-[color:var(--wine)]">obsess</span><br />over your numbers.
            </h2>
          </div>
          <p className="max-w-sm text-[color:var(--ink)]/70 text-sm leading-relaxed">
            Hand-picked specialists — every one of them ICAI qualified, Big-4 trained
            and personally accountable for your file.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div
              key={m.name}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="team-card group relative rounded-3xl overflow-hidden bg-[color:var(--ink)] transition-transform duration-300 will-change-transform shadow-[var(--shadow-soft)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[color:var(--cream)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl leading-tight">{m.name}</h3>
                    <div className="text-xs text-[color:var(--rose)] mt-1">{m.role}</div>
                  </div>
                  <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[color:var(--rose)] hover:text-[color:var(--ink)] transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-3 text-xs text-[color:var(--cream)]/75 leading-relaxed max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500">
                  {m.bio}
                </p>
                <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--cream)]/40">
                  0{i + 1} / 0{team.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
