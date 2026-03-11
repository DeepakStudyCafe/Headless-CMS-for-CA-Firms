import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  { name: "Bookkeeping", slug: "bookkeeping", icon: BookOpen, desc: "Comprehensive financial record keeping including ledger management, reconciliation, and financial reporting." },
  { name: "GST Filing", slug: "gst-filing", icon: FileText, desc: "End-to-end GST compliance including registration, return filing, reconciliation, and input tax credit advisory." },
  { name: "Payroll", slug: "payroll", icon: Users, desc: "Complete payroll processing including salary computation, statutory deductions, PF/ESI compliance." },
  { name: "Tax Planning", slug: "tax-planning", icon: Calculator, desc: "Strategic tax planning and optimization for individuals and businesses to minimize tax liability." },
  { name: "Company Formation", slug: "company-formation", icon: Building2, desc: "End-to-end company incorporation including private limited, LLP, OPC, and partnership firm." },
  { name: "Compliance", slug: "compliance", icon: Shield, desc: "Comprehensive regulatory compliance including ROC filings, annual returns, and statutory audit." },
  { name: "Audit Services", slug: "audit-services", icon: Search, desc: "Statutory, internal, tax, and special purpose audit services conducted with thoroughness." },
  { name: "Financial Advisory", slug: "financial-advisory", icon: TrendingUp, desc: "Business valuation, due diligence, fundraising support, and strategic financial planning." },
];

const Services = () => (
  <Layout>
    <PageHero title="Our Services" subtitle="Comprehensive financial solutions for your business" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} image={servicesHero} />

    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="What We Do" title="Comprehensive Financial Solutions" description="From compliance to strategic advisory, we offer the full spectrum of financial services." />
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 0.08}>
              <Link to={`/services/${s.slug}`} className="group flex gap-5 p-7 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-subtle flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{s.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
