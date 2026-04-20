import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Calculator, FileText, Briefcase, TrendingUp, BookOpen, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Audit, taxation, GST, compliance and advisory services delivered by experienced Chartered Accountants." },
      { property: "og:title", content: "Our Services — ABC & Associates" },
      { property: "og:description", content: "Comprehensive Chartered Accountant services for businesses and individuals." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory audits, internal audits, management audits and limited reviews carried out by experienced auditors with industry insight." },
  { icon: Calculator, title: "Direct & Indirect Tax", desc: "Income tax planning, return filing, TDS compliance and representation before tax authorities and tribunals." },
  { icon: FileText, title: "GST Advisory", desc: "GST registration, monthly and annual returns, GST audits, refunds and representation in GST proceedings." },
  { icon: Briefcase, title: "Company Compliance", desc: "Incorporation, ROC filings, secretarial compliance, FEMA, and ongoing regulatory support for companies and LLPs." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Financial modelling, valuations, due diligence, and strategic advisory for SMEs, startups and growing enterprises." },
  { icon: BookOpen, title: "Bookkeeping & Outsourcing", desc: "Cloud-based accounting, MIS reports, payroll processing and virtual CFO services tailored to your needs." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our Services</p>
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">A complete suite of CA services</h1>
            <p className="mt-4 text-base text-subtle">From routine compliance to strategic advisory — we cover every financial need under one roof.</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group h-full rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-md">
                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-subtle">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:flex-row md:text-left">
          <div className="text-primary-foreground">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">Need a customised engagement?</h3>
            <p className="mt-2 text-primary-foreground/80">We tailor our services to your industry, size and growth stage.</p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Talk to a Partner <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
