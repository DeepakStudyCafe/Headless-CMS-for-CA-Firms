import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  { name: "Rajesh Sharma, FCA", role: "Managing Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Priya Verma, ACA", role: "Tax & Advisory Head", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Aman Khanna, CA", role: "Audit Partner", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" },
  { name: "Neha Gupta, CA", role: "GST & Compliance Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
];

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Our Team
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Meet the <span className="text-gradient">experts</span> behind your numbers
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* gradient ring on hover */}
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-primary blur" />

              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-90" />

                {/* social icons reveal */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {[Linkedin, Twitter, Mail].map((I, idx) => (
                    <a
                      key={idx}
                      href="#"
                      aria-label="social"
                      className="h-9 w-9 grid place-items-center rounded-full glass-strong text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-all"
                      style={{ transitionDelay: `${idx * 60}ms` }}
                    >
                      <I className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="font-bold text-base">{m.name}</div>
                <div className="text-xs text-white/80 mt-0.5">{m.role}</div>
                <div className="mt-3 h-0.5 w-10 bg-gradient-primary rounded-full group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
