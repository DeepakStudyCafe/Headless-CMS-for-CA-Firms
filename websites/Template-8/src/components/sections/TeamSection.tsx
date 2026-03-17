import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { teamMembers } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Linkedin } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-24 bg-deep overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920)" }}
      />

      <div ref={ref} className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase">Meet The Team</span>
          <div className="flex items-start gap-4 mt-3">
            <div className="w-1 h-14 bg-gold mt-1" />
            <h2 className="font-display text-4xl lg:text-6xl text-cream font-semibold">Our Expert Team</h2>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={fadeUp}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-transparent group-hover:border-gold/50 transition-all duration-500">
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-600"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="font-display text-xl text-cream">{member.name}</span>
                  <span className="font-body text-sm text-gold">{member.role}</span>
                  <a href="#" aria-label={`${member.name} LinkedIn`} className="mt-3 w-8 h-8 border border-gold/40 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                    <Linkedin size={14} className="text-cream group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-body text-sm text-cream">{member.name}</p>
                <p className="font-body text-xs text-gold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
