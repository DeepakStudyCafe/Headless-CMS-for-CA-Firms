import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "ABC has been our auditors for eleven years. Their judgement is the reason our board sleeps well — clear positions, documented thinking, no surprises.",
    name: "Rohan Mehta",
    role: "CFO, Lighthouse Industries",
  },
  {
    quote:
      "We moved to ABC after outgrowing a Big Four engagement. The depth of partner attention has been a different order of magnitude.",
    name: "Anita Subramanian",
    role: "Founder, Northbound SaaS",
  },
  {
    quote:
      "Their tax team navigated a transfer pricing review with quiet discipline. The assessment closed without an adjustment — and without drama.",
    name: "Karthik Iyer",
    role: "Group Controller, Halcyon Capital",
  },
];

export function Testimonials() {
  return (
    <section id="voices" className="py-32 lg:py-44">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow mb-6">01 — In their words</p>
            <h2 className="text-4xl lg:text-5xl text-heading leading-tight">
              The clients we serve, on the work we do.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:pt-6">
            <p className="text-body text-lg leading-relaxed">
              Long-standing relationships are the only meaningful measure of a
              chartered accountancy practice. These are voices from boardrooms
              we've worked alongside for the better part of a decade.
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-b border-border py-14 lg:py-20"
            >
              <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
                <div className="col-span-12 lg:col-span-1">
                  <span className="font-display text-3xl text-primary">
                    “
                  </span>
                </div>
                <blockquote className="col-span-12 lg:col-span-8 font-display text-2xl lg:text-3xl text-heading leading-snug">
                  {q.quote}
                </blockquote>
                <div className="col-span-12 lg:col-span-3 lg:pt-2">
                  <p className="font-display text-base text-heading">{q.name}</p>
                  <p className="text-sm text-body mt-1">{q.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
