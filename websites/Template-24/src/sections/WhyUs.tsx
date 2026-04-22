import { motion } from "framer-motion";
import { Award, BadgeIndianRupee, Clock, Users, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experienced Chartered Accountants",
    desc: "A team of qualified CAs with deep domain expertise across taxation, audit and advisory.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    desc: "Clear, upfront fees with no hidden charges — you always know what to expect.",
  },
  {
    icon: Clock,
    title: "Timely Compliance",
    desc: "Strict adherence to deadlines so your business stays compliant and penalty-free.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    desc: "Tailored solutions that align with your business goals and personal financial needs.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    desc: "Year-round access to your dedicated advisor — not just at filing time.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-1">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-deep">Why Choose Us</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-[1.15] tracking-tight text-foreground">
              The right partner for your financial journey.
            </h2>
            <p className="mt-5 text-base text-subink leading-relaxed">
              Our work is built on trust, accuracy and timely delivery. Here's what sets us apart.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-4 py-6 border-b border-hairline"
              >
                <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-hairline text-gold-deep">
                  <r.icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">{r.title}</h3>
                  <p className="mt-1.5 text-sm text-subink leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
