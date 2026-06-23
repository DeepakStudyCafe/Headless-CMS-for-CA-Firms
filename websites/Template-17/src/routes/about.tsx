import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Award, Users, Target, Eye, Shield, Heart, Lightbulb, Scale, BadgeCheck, CheckCircle, LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

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

const iconMap: Record<string, LucideIcon> = {
  Shield, Award, Target, Heart, Lightbulb, Scale, Users, Eye, CheckCircle, BadgeCheck
};

function AboutPage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('about'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-primary"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <SiteLayout>
        <main className="flex-grow"></main>
      </SiteLayout>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === 'hero');
  const valuesSection = pageData.sections?.find(s => s.type === 'text-image' && s.textContent?.heading?.includes('Values'));
  const timelineSection = pageData.sections?.find(s => s.type === 'timeline');
  const certificationsSection = pageData.sections?.find(s => s.type === 'certifications');

  return (
    <SiteLayout websiteData={websiteData}>
      {heroSection && (
        <PageHero title={heroSection.textContent.heading || "About Us"} subtitle={heroSection.textContent.subheading || ""} />
      )}

      {/* STORY & VALUES (Combined into text-image section in DB) */}
      {valuesSection && (
        <>
          <section className="border-b border-border bg-surface py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
              <Reveal>
                <img
                  src={getImageUrl(valuesSection.imageUrl || "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1100&q=80")}
                  alt="Our office"
                  className="aspect-[5/4] w-full rounded-2xl object-cover ring-1 ring-border"
                />
              </Reveal>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Our story"
                  title={valuesSection.textContent.heading || "Built on integrity, sharpened by expertise"}
                  description={valuesSection.textContent.description}
                />
              </div>
            </div>
          </section>

          <section className="border-b border-border bg-background py-20">
            <div className="mx-auto max-w-7xl px-6">
              <SectionHeading
                eyebrow="Our Foundation"
                title="The principles that guide us"
              />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {valuesSection.textContent.items?.map((value: any, i: number) => {
                  const Icon = iconMap[value.icon] || Shield;
                  return (
                    <Reveal key={value.title || i} delay={i * 0.05}>
                      <div className="h-full rounded-xl border border-border bg-surface p-6 shadow-sm hover:border-secondary transition-colors">
                        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-foreground">{value.title}</h3>
                        <p className="text-sm leading-relaxed text-subtle">{value.description || value.desc}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* TIMELINE */}
      {timelineSection && (
        <section className="border-b border-border bg-foreground py-20 text-background">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-12">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Our Journey</span>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{timelineSection.textContent.heading || "Milestones that define us"}</h2>
            </div>
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-primary/30 md:left-1/2 md:-translate-x-px" />
              {timelineSection.textContent.items?.map((item: any, i: number) => (
                <Reveal key={item.year} delay={i * 0.1}>
                  <div className={`relative mb-12 flex items-start gap-6 last:mb-0 md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1.5 rounded-full bg-primary ring-4 ring-foreground md:left-1/2 md:top-auto md:-translate-x-1.5" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                      <span className="font-display text-4xl font-bold text-primary/80">{item.year}</span>
                      <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-background/70">{item.description || item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CERTIFICATIONS */}
      {certificationsSection && (
        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeading
              eyebrow="Accreditations"
              title={certificationsSection.textContent.heading || "Our Certifications"}
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {certificationsSection.textContent.items?.map((cert: any, i: number) => (
                <Reveal key={cert.name || cert.title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 hover:border-primary transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <BadgeCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.name || cert.title}</h4>
                      <p className="mt-1 text-sm text-subtle">{cert.desc || cert.description}</p>
                      {cert.year && <p className="mt-2 text-xs font-semibold text-primary">Since {cert.year}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </SiteLayout>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Discover</p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-subtle">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
