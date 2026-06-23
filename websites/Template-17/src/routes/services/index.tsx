import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShieldCheck, Calculator, FileText, TrendingUp, BookOpen, ArrowRight, Users, Building, Search, Factory, Monitor, Stethoscope, Building2, ShoppingCart, Rocket, LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Audit, taxation, GST, compliance and advisory services delivered by experienced Chartered Accountants." },
    ],
  }),
  component: ServicesPage,
});

const iconMap: Record<string, LucideIcon> = {
  BookOpen, FileText, Users, Calculator, Building, ShieldCheck, Search, TrendingUp,
  Factory, Monitor, Stethoscope, Building2, ShoppingCart, Rocket
};

function ServicesPage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('services'), getWebsiteData()]).then(([page, site]) => {
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
  const servicesSection = pageData.sections?.find(s => s.type === 'services-grid' || s.type === 'services');
  const processSection = pageData.sections?.find(s => s.type === 'process');
  const industriesSection = pageData.sections?.find(s => s.type === 'industries');
  const ctaSection = pageData.sections?.find(s => s.type === 'cta');

  return (
    <SiteLayout websiteData={websiteData}>
      {heroSection && (
        <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</p>
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{heroSection.textContent.heading}</h1>
              <p className="mt-6 text-lg text-subtle">{heroSection.textContent.subheading}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* SERVICES GRID */}
      {servicesSection && (
        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Expertise" title={servicesSection.textContent.heading || "Our Core Services"} />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {servicesSection.textContent.items?.map((s: any, i: number) => {
                const Icon = iconMap[s.icon] || BookOpen;
                return (
                  <Reveal key={s.title || i} delay={i * 0.05}>
                    <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                      <div className="mb-6 inline-flex w-fit rounded-xl bg-primary/10 p-4 text-primary transition-transform duration-700 group-hover:rotate-[360deg]">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-subtle">{s.desc || s.description}</p>
                      <Link
                        to={s.href || `/services/${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary transition-all hover:gap-3"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* HOW WE WORK */}
      {processSection && (
        <section className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Our Process" title={processSection.textContent.heading || "How We Work"} />
            <div className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-12 hidden h-px border-t-2 border-dashed border-primary/30 lg:block" />
              {processSection.textContent.items?.map((step: any, i: number) => (
                <Reveal key={step.title || i} delay={i * 0.1}>
                  <div className="relative text-center">
                    <div className="relative z-10">
                      <span className="font-display text-7xl font-bold leading-none text-primary/10">0{i + 1}</span>
                      <div className="relative z-10 mx-auto -mt-6 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-lg">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-subtle">{step.desc || step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INDUSTRIES */}
      {industriesSection && (
        <section className="border-b border-border bg-foreground py-20 text-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Industries</span>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{industriesSection.textContent.heading || "Sectors We Serve"}</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {industriesSection.textContent.items?.map((industry: any, i: number) => {
                const Icon = iconMap[industry.icon] || Factory;
                return (
                  <Reveal key={industry.title || i} delay={i * 0.05}>
                    <div className="group text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-background/80">{industry.title}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSection && (
        <section className="bg-background py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">{ctaSection.textContent.heading}</h3>
              <p className="mt-2 text-subtle">{ctaSection.textContent.subheading}</p>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary">
                {ctaSection.textContent.cta || "Talk to a Partner"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
