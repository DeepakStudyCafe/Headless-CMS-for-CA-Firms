import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock, Users2, Globe2 } from "lucide-react";
import illus from "@/assets/why-illustration.png";

const POINTS = [
  { icon: ShieldCheck, title: "Uncompromising Confidentiality", desc: "Every engagement is governed by strict data and ethical safeguards." },
  { icon: Clock, title: "On-time, Always", desc: "Predictable delivery cycles aligned to your statutory calendar." },
  { icon: Users2, title: "Partner-Led Teams", desc: "Senior chartered accountants stay involved from kickoff to closure." },
  { icon: Globe2, title: "Cross-Border Capability", desc: "Advisory across FEMA, transfer pricing and international tax." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-border-soft">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Reversed: illustration on the LEFT, content on the RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/8 to-transparent rounded-3xl" />
            <img src={illus} alt="Audit and growth illustration" className="relative h-full w-full object-contain p-8" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue">Why Choose Us</div>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">
            The discipline of a Big Four. The care of a partner.
          </h2>
          <p className="mt-4 text-subtext">
            We balance regulatory rigour with commercial pragmatism — so financial decisions stay defensible and forward-looking.
          </p>

          <ul className="mt-8 space-y-5">
            {POINTS.map((p) => (
              <li key={p.title} className="flex gap-4">
                <div className="h-10 w-10 shrink-0 grid place-items-center rounded-md bg-background border border-border-soft text-accent-blue">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-navy-deep flex items-center gap-2">
                    {p.title}
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent-blue" />
                  </div>
                  <p className="text-sm text-subtext mt-0.5">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
