import { motion } from "framer-motion";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import { Linkedin } from "lucide-react";

const TEAM = [
  { img: t1, name: "Anjali Mehta, FCA", role: "Managing Partner" },
  { img: t2, name: "Rajeev Sharma, FCA", role: "Partner — Audit & Assurance" },
  { img: t3, name: "Karan Iyer, ACA", role: "Partner — Direct Tax" },
  { img: t4, name: "Sneha Kulkarni, ACA", role: "Senior Associate — GST" },
];

export function Team() {
  return (
    <section id="team" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              The partners
            </p>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[44px]">
              People you'll actually work with.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14.5px] leading-[1.7] text-muted-foreground">
            Senior practitioners with decades of cumulative experience across
            assurance, taxation and corporate advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {TEAM.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group"
            >
              <div className="overflow-hidden border border-border bg-white">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={768}
                  height={896}
                  className="aspect-[4/5] w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[16px] font-semibold tracking-tight text-foreground">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {m.role}
                  </p>
                </div>
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="flex h-8 w-8 items-center justify-center border border-border text-foreground/60 transition hover:border-foreground/40 hover:text-foreground"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
