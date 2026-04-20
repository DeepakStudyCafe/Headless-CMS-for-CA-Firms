import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Target, Eye } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ABC & Associates" },
      { name: "description", content: "Learn about ABC & Associates — a Chartered Accountant firm with two decades of experience in audit, tax and advisory." },
      { property: "og:title", content: "About ABC & Associates" },
      { property: "og:description", content: "Two decades of trusted financial expertise serving businesses and individuals." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero title="About Us" subtitle="A trusted Chartered Accountant firm with over two decades of expertise." />

      <section className="border-b border-border bg-surface py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1100&q=80"
              alt="Our office"
              className="aspect-[5/4] w-full rounded-2xl object-cover ring-1 ring-border"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Built on integrity, sharpened by expertise"
              description="Founded in 2005, ABC & Associates began as a small practice with a singular focus: delivering honest, thoughtful financial guidance. Today we are a multi-partner firm serving over 500 clients across industries — from family-run businesses to listed companies."
            />
            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-subtle">
                Our partners and associates are members of the Institute of Chartered Accountants
                of India (ICAI), with deep specialization across audit, taxation, GST, corporate
                law and advisory services.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Target, title: "Our Mission", text: "To deliver clear, compliant and forward-looking financial services that help our clients grow with confidence." },
              { icon: Eye, title: "Our Vision", text: "To be the most trusted Chartered Accountancy partner for ambitious businesses across India." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-surface p-8">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary"><c.icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-surface p-8 md:grid-cols-4">
            {[
              { v: 20, l: "Years experience", icon: Award },
              { v: 500, l: "Clients served", icon: Users },
              { v: 1200, l: "Projects completed", icon: Target },
              { v: 12, l: "Expert team", icon: Eye },
            ].map((s) => (
              <Reveal key={s.l}>
                <div className="text-center">
                  <s.icon className="mx-auto h-6 w-6 text-secondary" />
                  <p className="mt-2 font-display text-3xl font-semibold text-primary"><Counter to={s.v} /></p>
                  <p className="mt-1 text-sm text-subtle">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-3 max-w-2xl text-base text-subtle">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
