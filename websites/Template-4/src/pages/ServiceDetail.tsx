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
    benefits: ["Timely return filing", "Input tax optimization", "Error-free compliance", "GST audit support", "Expert advisory", "Timely return filing",],
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

      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">{service.desc}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <SectionHeading label="Advantages" title="Key Benefits" centered={true} />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex flex-col h-full items-start gap-4 p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/30">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold text-lg">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <SectionHeading label="Methodology" title="Our Process" centered={true} />
          </div>
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-12">
            {service.steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative pl-10 md:pl-16">
                  <div className="absolute -left-6 md:-left-6 top-1 w-12 h-12 rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <span className="text-primary-foreground font-heading font-bold text-base">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20 flex flex-col justify-center">
                    <h3 className="text-primary font-semibold text-sm tracking-wider uppercase mb-1">Step {i + 1}</h3>
                    <p className="text-foreground font-medium text-lg md:text-xl">{s}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <SectionHeading label="Questions" title="Frequently Asked" centered={true} />
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`bg-card rounded-2xl overflow-hidden transition-all duration-300 border ${openFaq === i ? 'border-primary/30 shadow-md' : 'border-border/50 shadow-sm hover:border-primary/20'}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                    <span className="flex items-center gap-4 font-semibold text-foreground text-base md:text-lg">
                      <HelpCircle className={`w-6 h-6 shrink-0 transition-colors duration-300 ${openFaq === i ? 'text-primary' : 'text-muted-foreground'}`} /> 
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${openFaq === i ? 'bg-primary/10' : 'bg-muted'}`}>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="px-6 pb-6 text-muted-foreground md:text-lg pl-[4.5rem] leading-relaxed pt-1">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">Need {service.title} Services?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">Get in touch with our experts for a complimentary consultation.</p>
          <Link to="/contact" className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all text-lg">
            Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
