import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import aboutImg from "../assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      { name: "description", content: "A boutique chartered accountancy practice founded in 1994. Read our story, our values, and the way we work." },
      { property: "og:title", content: "About — ABC & Associates" },
      { property: "og:description", content: "A boutique chartered accountancy practice — built on craft, candour and quiet diligence." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>A practice built on <em className="italic font-light text-primary">trust</em>, sustained by craft.</>}
        intro="ABC & Associates is a boutique chartered accountancy firm based in New Delhi. We work with founders, family-owned businesses and listed enterprises who value a steady hand and a partner who reads the file."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img src={aboutImg} alt="Reviewing accounts" width={1280} height={1600} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover" />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7 space-y-10">
            <Reveal>
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">Our story</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Founded in 1994 by CA Anil Bhatia and CA Chetan Sharma, the firm
                began as a two-partner practice serving a handful of trading
                houses in Old Delhi. Three decades later we remain deliberately
                small — five partners, twenty-odd associates — but the breadth
                of our practice has matured to include statutory audit,
                taxation, regulatory advisory and family-office work.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">How we work</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Every engagement is led by a partner. Every file is read
                end-to-end before a sign-off. Every recommendation is grounded
                in your business reality — not a template. It is, frankly, a
                slower way to practice. It is also why our oldest client has
                been with us for twenty-seven years.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
                {[
                  ["1994", "Founded"],
                  ["600+", "Clients"],
                  ["24", "Industries"],
                  ["5", "Partners"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display text-3xl text-primary">{v}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
