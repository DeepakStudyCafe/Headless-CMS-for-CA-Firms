import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { useGsapReveal } from "@/hooks/useGsap";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      { name: "description", content: "Two decades of senior-led chartered accountancy work for founders, families and global businesses." },
      { property: "og:title", content: "About ABC & Associates" },
      { property: "og:description", content: "A boutique CA firm with twenty years of senior-led practice across India." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useGsapReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="About"
        title="A boutique practice with a long memory."
        intro="Twenty years, five cities and several hundred clients later, our craft remains unchanged: senior chartered accountants doing considered work."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-ink/80" data-reveal>
            <p>
              ABC & Associates was founded in 2004 by three Big Four alumni who believed Indian
              business deserved a different kind of chartered accountancy firm — one that felt closer
              to a private bank than a back-office. Two decades on, the firm has grown into a partner-led
              practice of forty-two professionals, but the philosophy has not moved.
            </p>
            <p>
              Our partners are ICAI fellows with deep specialisations across direct tax, indirect tax,
              statutory audit, transaction advisory and family-business governance. Every engagement is
              led by one of them and reviewed by another — a quiet form of insurance our clients have
              come to expect.
            </p>
            <p>
              We serve founder-led startups raising their first round, mid-market manufacturers
              navigating GST, family offices restructuring across generations, and listed groups
              opening Indian subsidiaries. The work varies. The standard does not.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img src={aboutImg} alt="Partners at work" loading="lazy" className="w-full aspect-[4/5] object-cover shadow-luxe" data-reveal />
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-4xl md:text-6xl mb-16 max-w-3xl" data-reveal>
            What we believe.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { t: "Senior by default", d: "Partners do the thinking. Always. No engagement is ever delegated below review level." },
              { t: "Plain language", d: "Tax law is complex. Our advice should not be. We translate first, file second." },
              { t: "Few clients, deeply served", d: "We cap the firm's intake every year. Depth is impossible at scale." },
              { t: "Long horizons", d: "We measure success in decades of relationship, not quarters of revenue." },
            ].map((b) => (
              <div key={b.t} data-reveal className="border-t border-white/20 pt-8">
                <h3 className="font-display text-3xl mb-3 text-wine">{b.t}</h3>
                <p className="text-white/75 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
