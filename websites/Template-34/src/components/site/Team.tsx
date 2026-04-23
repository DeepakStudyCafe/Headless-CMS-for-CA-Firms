import { motion } from "framer-motion";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

const team = [
  { img: t1, name: "Arvind Bhatia", role: "Managing Partner · Audit & Assurance" },
  { img: t2, name: "Priya Chandran", role: "Partner · Corporate Advisory" },
  { img: t3, name: "Rohan Mehta", role: "Partner · Taxation & Regulatory" },
];

export function Team() {
  return (
    <section id="team" className="py-32 lg:py-44">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow mb-6">05 — People</p>
            <h2 className="text-4xl lg:text-5xl text-heading leading-tight">
              The partners who'll sign your engagement.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-6">
            <p className="text-body leading-relaxed">
              Three partners, sixty professionals, three offices. Every client
              is led by one of the partners below — and they remain involved
              from kick-off through delivery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={768}
                  height={896}
                  loading="lazy"
                  className="w-full h-[420px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-display text-2xl text-heading">{p.name}</h3>
                <p className="text-sm text-body mt-2 tracking-wide">{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
