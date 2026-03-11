import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import servicesHero from "@/assets/services-hero.jpg";
import { CheckCircle, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceData: Record<string, { title: string; desc: string; benefits: string[]; steps: string[]; faqs: { q: string; a: string }[] }> = {
  bookkeeping: {
    title: "Bookkeeping",
    desc: "Our bookkeeping services ensure your financial records are accurate, up-to-date, and compliant. We manage your day-to-day accounting so you can focus on running your business.",
    benefits: ["Accurate financial records", "Real-time financial visibility", "Tax-ready books year-round", "Reduced accounting errors", "Cost-effective solution"],
    steps: ["Initial assessment of current records", "Setup of chart of accounts", "Daily transaction recording", "Monthly reconciliation", "Financial report delivery"],
    faqs: [
      { q: "How often will my books be updated?", a: "We update your books on a daily or weekly basis depending on transaction volume." },
      { q: "Do you use cloud-based software?", a: "Yes, we use leading cloud accounting platforms for real-time access and collaboration." },
    ],
  },
  "gst-filing": {
    title: "GST Filing",
    desc: "Stay compliant with India's GST regulations with our end-to-end GST filing services. We handle registration, return filing, reconciliation, and advisory.",
    benefits: ["Timely return filing", "Input tax credit optimization", "Error-free compliance", "GST audit support", "Expert advisory"],
    steps: ["GST registration/review", "Invoice data collection", "Return preparation", "Filing & submission", "Reconciliation & reporting"],
    faqs: [
      { q: "Which GST returns do you handle?", a: "We handle GSTR-1, GSTR-3B, GSTR-9, and all other applicable returns." },
      { q: "Can you help with GST refund claims?", a: "Absolutely. We assist with all types of GST refund claims and follow-ups." },
    ],
  },
  payroll: {
    title: "Payroll",
    desc: "Complete payroll management including salary computation, statutory compliance, and employee self-service solutions.",
    benefits: ["Accurate salary processing", "Statutory compliance (PF, ESI, TDS)", "Employee self-service portal", "Payslip generation", "Year-end tax planning"],
    steps: ["Payroll setup & configuration", "Monthly data collection", "Salary computation", "Statutory filings", "Payslip distribution"],
    faqs: [
      { q: "Do you handle PF and ESI filings?", a: "Yes, all statutory filings including PF, ESI, Professional Tax, and TDS are covered." },
      { q: "Can employees access their payslips online?", a: "Yes, we provide a self-service portal for employees to access payslips and tax documents." },
    ],
  },
  "tax-planning": {
    title: "Tax Planning",
    desc: "Strategic tax planning services to minimize your tax liability while ensuring full compliance with tax laws and regulations.",
    benefits: ["Tax liability reduction", "Investment planning guidance", "Advance tax computation", "Tax audit preparation", "International tax advisory"],
    steps: ["Financial review", "Tax analysis & projections", "Strategy development", "Implementation support", "Quarterly review & adjustment"],
    faqs: [
      { q: "Is tax planning only for high-income individuals?", a: "No, tax planning benefits everyone. We create strategies tailored to your specific financial situation." },
      { q: "How early should I start tax planning?", a: "Ideally at the beginning of the financial year for maximum benefit." },
    ],
  },
  "company-formation": {
    title: "Company Formation",
    desc: "End-to-end business incorporation services. We handle all aspects from name approval to certificate of incorporation.",
    benefits: ["Quick incorporation", "Compliance-ready setup", "Expert guidance on structure", "Post-incorporation support", "All documentation handled"],
    steps: ["Consultation & structure selection", "Name reservation", "Documentation preparation", "Filing with authorities", "Certificate & compliance setup"],
    faqs: [
      { q: "How long does incorporation take?", a: "Typically 7-15 working days depending on the type of entity and government processing." },
      { q: "What structure is best for my business?", a: "We'll guide you based on your business goals, liability preferences, and tax implications." },
    ],
  },
  compliance: {
    title: "Compliance",
    desc: "Stay ahead of regulatory requirements with our comprehensive compliance management services covering all statutory obligations.",
    benefits: ["Zero penalty guarantee", "Automated compliance calendar", "Regular status updates", "Expert regulatory guidance", "Annual compliance review"],
    steps: ["Compliance audit", "Calendar setup", "Document preparation", "Filing & submission", "Review & reporting"],
    faqs: [
      { q: "What compliances do you cover?", a: "ROC filings, annual returns, statutory audits, labor law compliance, and more." },
      { q: "Do you provide compliance reminders?", a: "Yes, we maintain a comprehensive compliance calendar with automated reminders." },
    ],
  },
  "audit-services": {
    title: "Audit Services",
    desc: "Comprehensive audit solutions including statutory audit, internal audit, tax audit, and special purpose audits.",
    benefits: ["Thorough examination", "Risk identification", "Process improvement insights", "Regulatory compliance", "Stakeholder confidence"],
    steps: ["Planning & scoping", "Risk assessment", "Fieldwork & testing", "Findings & recommendations", "Final report delivery"],
    faqs: [
      { q: "How long does an audit take?", a: "Duration varies based on company size, typically 2-6 weeks for standard statutory audits." },
      { q: "Do you provide management letters?", a: "Yes, we provide detailed management letters with actionable recommendations." },
    ],
  },
  "financial-advisory": {
    title: "Financial Advisory",
    desc: "Expert financial advisory services including business valuation, due diligence, fundraising support, and strategic financial planning.",
    benefits: ["Data-driven insights", "Customized strategies", "Risk mitigation", "Growth acceleration", "Expert guidance"],
    steps: ["Needs assessment", "Data analysis", "Strategy formulation", "Implementation roadmap", "Ongoing advisory support"],
    faqs: [
      { q: "What industries do you advise?", a: "We work across all major industries including technology, manufacturing, real estate, and healthcare." },
      { q: "Can you help with fundraising?", a: "Yes, we assist with pitch preparation, financial modeling, and investor connect." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) return <Layout><div className="container py-40 text-center"><h1 className="text-2xl font-heading font-bold">Service not found</h1><Link to="/services" className="text-primary mt-4 inline-block">Back to Services</Link></div></Layout>;

  return (
    <Layout>
      <PageHero title={service.title} subtitle="Tailored solutions for your business needs" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} image={servicesHero} />

      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <SectionHeading label="Advantages" title="Key Benefits" centered={false} />
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-center gap-3 p-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading label="Methodology" title="Our Process" centered={false} />
          <div className="space-y-4">
            {service.steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-5 p-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-primary-foreground font-heading font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="text-foreground font-medium">{s}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <SectionHeading label="Questions" title="Frequently Asked" centered={false} />
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden card-shadow">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                    <span className="flex items-center gap-3 font-semibold text-foreground">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0" /> {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <p className="px-6 pb-6 text-muted-foreground pl-14 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Need {service.title} Services?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Get in touch with our experts for a complimentary consultation.</p>
          <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 transition-all">
            Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
