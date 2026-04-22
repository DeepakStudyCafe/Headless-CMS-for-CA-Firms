import { motion } from "framer-motion";
import { LinkedInIcon } from "@/components/social-icons";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

const team = [
  { name: "Anil Bansal", role: "Managing Partner", img: t1 },
  { name: "Priya Chowdhury", role: "Head of Tax Advisory", img: t2 },
  { name: "Rahul Mehta", role: "Audit Partner", img: t3 },
  { name: "Sneha Kapoor", role: "Risk & Compliance Lead", img: t4 },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-background py-20 lg:py-28">
      <div className="container-pro">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            The Partners
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-semibold text-primary leading-tight">
            Senior practitioners. <br /> <span className="italic">Personally engaged.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-white overflow-hidden hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-primary">{m.name}</h3>
                  <p className="text-xs text-subtext mt-0.5">{m.role}</p>
                </div>
                <a
                  href="#"
                  aria-label={`${m.name} LinkedIn`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-subtext hover:border-accent hover:text-accent transition"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
