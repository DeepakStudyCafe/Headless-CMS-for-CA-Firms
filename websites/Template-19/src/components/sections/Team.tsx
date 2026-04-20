import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/SocialIcons";

const TEAM = [
  { name: "Anil Bhatia", role: "Managing Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop" },
  { name: "Priya Sharma", role: "Partner — Tax", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop" },
  { name: "Rohit Mehta", role: "Partner — Audit", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80&auto=format&fit=crop" },
  { name: "Sneha Kapoor", role: "Partner — Advisory", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop" },
];

export function Team() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-px max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue">Leadership</div>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">
            Senior partners who lead every engagement.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-2xl border border-border-soft overflow-hidden transition-all hover:border-accent-blue hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-background">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-navy-deep">{m.name}</h3>
                  <p className="text-sm text-subtext mt-0.5">{m.role}</p>
                </div>
                <a href="#" aria-label="linkedin" className="h-8 w-8 grid place-items-center rounded-md text-subtext hover:bg-navy-deep hover:text-white transition">
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
