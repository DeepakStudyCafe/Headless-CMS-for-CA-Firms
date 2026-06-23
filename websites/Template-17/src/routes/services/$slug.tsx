import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, HelpCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Attempt to fetch by standard slug or prefixed slug depending on CMS structure
    Promise.all([getPageData(slug), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-primary"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <SiteLayout websiteData={websiteData}>
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">Service Not Found</h1>
            <Link to="/services" className="text-primary hover:underline">Return to Services</Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === 'hero');
  const overviewSection = pageData.sections?.find(s => s.type === 'overview');
  const featuresSection = pageData.sections?.find(s => s.type === 'features');
  const benefitsSection = pageData.sections?.find(s => s.type === 'benefits');
  const processSection = pageData.sections?.find(s => s.type === 'process');
  const whyChooseUsSection = pageData.sections?.find(s => s.type === 'why-choose-us');
  const faqSection = pageData.sections?.find(s => s.type === 'faq');
  const ctaSection = pageData.sections?.find(s => s.type === 'cta');
  const relatedSection = pageData.sections?.find(s => s.type === 'related-services');

  return (
    <SiteLayout websiteData={websiteData}>
      {/* HERO */}
      {heroSection && (
        <section className="relative overflow-hidden border-b border-border bg-foreground py-24 md:py-32 text-background">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <div className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-background/60">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-primary">Services</Link>
                <span>/</span>
                <span className="text-primary">{heroSection.textContent.heading}</span>
              </div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">{heroSection.textContent.subheading}</p>
              <h1 className="mb-6 font-display text-5xl font-bold md:text-6xl lg:text-7xl">{heroSection.textContent.heading}</h1>
              <p className="mx-auto max-w-2xl text-base text-background/70 md:text-lg">
                {heroSection.textContent.description}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* OVERVIEW */}
      {overviewSection && (
        <section className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={overviewSection.textContent.eyebrow || "Overview"} title={overviewSection.textContent.heading || "Overview"} />
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div className="space-y-5">
                  {overviewSection.textContent.description?.split("\n\n").map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-subtle">{para}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border-2 border-primary/20" />
                  <img
                    src={getImageUrl(overviewSection.imageUrl)}
                    alt="Overview"
                    className="relative z-10 h-80 w-full rounded-2xl object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {featuresSection && (
        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={featuresSection.textContent.eyebrow} title={featuresSection.textContent.heading} />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuresSection.textContent.items?.map((f: any, i: number) => (
                <Reveal key={f.title || i} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-surface p-8 shadow-sm transition-colors hover:border-primary">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-subtle">{f.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      {benefitsSection && benefitsSection.textContent.items?.length > 0 && (
        <section className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={benefitsSection.textContent.eyebrow} title={benefitsSection.textContent.heading} />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefitsSection.textContent.items?.map((b: any, i: number) => (
                <Reveal key={b.title || i} delay={i * 0.05}>
                  <div className="group rounded-2xl border border-border bg-background p-8 shadow-sm transition-colors hover:border-primary">
                    <h3 className="mb-3 font-display text-xl font-semibold text-foreground group-hover:text-primary">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-subtle">{b.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      {processSection && (
        <section className="border-b border-border bg-foreground py-20 text-background">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={processSection.textContent.eyebrow || "Our Process"} title={processSection.textContent.heading || "How It Works"} />
            <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-6 hidden h-px border-t-2 border-dashed border-primary/30 lg:block" />
              {processSection.textContent.items?.map((s: any, i: number) => (
                <Reveal key={s.title || i} delay={i * 0.1}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      {s.step || i + 1}
                    </div>
                    <h3 className="mb-3 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-background/70">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY CHOOSE US */}
      {whyChooseUsSection && whyChooseUsSection.textContent.items?.length > 0 && (
        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={whyChooseUsSection.textContent.eyebrow} title={whyChooseUsSection.textContent.heading} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUsSection.textContent.items?.map((w: any, i: number) => (
                <Reveal key={w.title || i} delay={i * 0.05}>
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-6">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{w.title}</h3>
                      {w.description && <p className="text-sm text-subtle">{w.description}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQS */}
      {faqSection && (
        <section className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading eyebrow={faqSection.textContent.eyebrow || "Questions"} title={faqSection.textContent.heading || "Frequently Asked"} />
            <div className="mt-12">
              <Accordion type="single" collapsible className="space-y-4">
                {faqSection.textContent.items?.map((faq: any, i: number) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-background px-6 transition-colors data-[state=open]:border-primary/50">
                    <AccordionTrigger className="py-5 font-display text-lg font-semibold text-foreground hover:no-underline hover:text-primary">
                      <span className="flex items-center gap-3 text-left">
                        <HelpCircle className="h-5 w-5 shrink-0 text-primary" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-subtle">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSection && (
        <section className="border-b border-border bg-gradient-to-b from-background to-surface py-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">{ctaSection.textContent.heading}</h2>
              <p className="mb-8 text-lg text-subtle">{ctaSection.textContent.subheading}</p>
              <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-secondary">
                {ctaSection.textContent.cta}
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      {relatedSection && (
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow={relatedSection.textContent.eyebrow || "Explore"} title={relatedSection.textContent.heading || "Related Services"} />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSection.textContent.items?.map((s: any, i: number) => (
                <Reveal key={s.title || i} delay={i * 0.1}>
                  <Link to={s.href || `/services/${s.title.toLowerCase().replace(/\s+/g, '-')}`} className="group block h-full rounded-2xl border border-border bg-surface p-8 shadow-sm transition-colors hover:border-primary">
                    <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-subtle">{s.description || s.desc}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary transition-all group-hover:gap-3">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
