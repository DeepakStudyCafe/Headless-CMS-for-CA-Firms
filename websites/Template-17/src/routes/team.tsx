import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Link as LinkIcon, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — ABC & Associates" },
      { name: "description", content: "Meet the partners and senior team at ABC & Associates — experienced Chartered Accountants serving clients across India." },
      { property: "og:title", content: "Our Team — ABC & Associates" },
      { property: "og:description", content: "Experienced Chartered Accountants and advisors leading ABC & Associates." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('team'), getWebsiteData()]).then(([page, site]) => {
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

  const heroSection = pageData?.sections?.find(s => s.type === 'hero');
  const teamSection = pageData?.sections?.find(s => s.type === 'team-grid');
  const statsSection = pageData?.sections?.find(s => s.type === 'stats');
  const ctaSection = pageData?.sections?.find(s => s.type === 'cta');

  const teamMembers = teamSection?.textContent?.items || [];
  const leadership = teamMembers.filter((m: any) => m.designation?.toLowerCase().includes('partner') || m.designation?.toLowerCase().includes('director'));
  const members = teamMembers.filter((m: any) => !m.designation?.toLowerCase().includes('partner') && !m.designation?.toLowerCase().includes('director'));

  return (
    <SiteLayout websiteData={websiteData}>
      {heroSection && (
        <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Our People</p>
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{heroSection.textContent.heading}</h1>
              <p className="mt-6 text-lg text-subtle">{heroSection.textContent.subheading}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* LEADERSHIP */}
      {leadership.length > 0 && (
        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={teamSection.textContent.leadershipEyebrow || "Leadership"} title={teamSection.textContent.leadershipHeading || "Our Senior Partners"} />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((m: any, i: number) => (
                <Reveal key={m.name || i} delay={i * 0.1}>
                  <div className="group overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      <img
                        src={getImageUrl(m.image || m.img)}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          <LinkIcon className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-foreground">{m.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-primary">{m.designation || m.role}</p>
                      {m.bio && <p className="mt-3 text-sm leading-relaxed text-subtle">{m.bio}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TEAM MEMBERS */}
      {members.length > 0 && (
        <section className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={teamSection.textContent.teamEyebrow || "The Team"} title={teamSection.textContent.teamHeading || "Our Professionals"} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {members.map((m: any, i: number) => (
                <Reveal key={m.name || i} delay={i * 0.05}>
                  <div className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-secondary">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={getImageUrl(m.image || m.img)}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-3 right-3 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {m.linkedin && (
                          <a href={m.linkedin} className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <LinkIcon className="h-4 w-4" />
                          </a>
                        )}
                        <a href={`mailto:${m.name.toLowerCase().replace(" ", ".")}@abcassociates.in`} className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground">{m.name}</h3>
                      <p className="text-xs font-medium text-secondary">{m.designation || m.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STATS */}
      {statsSection && statsSection.textContent.stats && (
        <section className="border-b border-border bg-foreground py-16 text-background">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsSection.textContent.stats.map((stat: any, i: number) => (
              <Reveal key={stat.label || i} delay={i * 0.1}>
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  <Counter to={stat.value} />{stat.suffix}
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-background/70 font-semibold">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSection && (
        <section className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Careers</span>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl text-foreground">{ctaSection.textContent.heading}</h2>
              <p className="mt-4 text-base text-subtle max-w-xl mx-auto mb-8">
                {ctaSection.textContent.subheading}
              </p>
              <Link to="/career">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary">
                  {ctaSection.textContent.cta || "View Openings"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
