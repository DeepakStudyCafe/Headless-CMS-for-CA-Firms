import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import servicesHero from "@/assets/services-hero.jpg";
import { CheckCircle, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";

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
    desc: "End-to-end business incorporation services for Private Limited, LLP, OPC, and Partnership firms including all statutory registrations.",
    benefits: ["Expert guidance on entity type", "Hassle-free documentation", "Quick incorporation process", "Post-incorporation compliance", "Dedicated relationship manager"],
    steps: ["Name selection & approval", "DSC & DIN application", "MOA & AOA drafting", "Incorporation filing", "PAN/TAN & other registrations"],
    faqs: [
      { q: "How long does it take to register a private limited company?", a: "Typically 10-15 working days, subject to document readiness and ROC approvals." },
      { q: "Do I need physical office space for registration?", a: "You need a registered office address. This can be a residential property or a virtual office used solely for registration purposes." },
    ],
  },
  compliance: {
    title: "Compliance Management",
    desc: "Comprehensive regulatory compliance services including ROC filings, annual returns, and ongoing statutory requirements.",
    benefits: ["Avoiding penalties and late fees", "Peace of mind for directors", "Maintained company good standing", "Timely reminder system", "Expert advisory"],
    steps: ["Compliance health check", "Timeline mapping", "Document preparation", "Filing & submission", "Ongoing monitoring"],
    faqs: [
      { q: "What happens if I miss an ROC filing deadline?", a: "Missing deadlines typically results in late fees and penalties. In severe cases, it can lead to director disqualification." },
      { q: "Can you help regularize past compliance defaults?", a: "Yes, we handle regularization of past defaults taking advantage of conditional immunity schemes when available." },
    ],
  },
  "audit-services": {
    title: "Audit Services",
    desc: "Thorough statutory, internal, tax, and special purpose audit services delivering deep insights into your financial operations.",
    benefits: ["Enhanced financial credibility", "Risk identification & mitigation", "Process improvement insights", "Regulatory compliance", "Stakeholder trust"],
    steps: ["Audit planning & strategy", "Risk assessment", "Fieldwork & testing", "Issue identification & discussion", "Final audit report"],
    faqs: [
      { q: "Is a statutory audit mandatory for all companies?", a: "Yes, all registered private limited and public limited companies in India must undergo statutory audit regardless of turnover." },
      { q: "What is the difference between statutory and internal audit?", a: "Statutory audits are legally required and externally reported, while internal audits are voluntary management tools to improve operations and controls." },
    ],
  },
  "financial-advisory": {
    title: "Financial Advisory",
    desc: "Expert guidance for business valuation, due diligence, fundraising support, and strategic financial planning to accelerate growth.",
    benefits: ["Strategic growth mapping", "Optimized capital structure", "Enhanced business valuation", "Successful fundraising", "Data-driven decision making"],
    steps: ["Initial consultation & need analysis", "Data collection & analysis", "Strategy formulation", "Implementation guidance", "Performance review"],
    faqs: [
      { q: "Do you assist with raising capital?", a: "Yes, we provide end-to-end support including pitch deck preparation, valuation, and connecting with potential investors." },
      { q: "When should a business seek valuation services?", a: "Valuation is needed during fund raising, mergers & acquisitions, ESOP issuances, or shareholder restructuring." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { getWebsiteData, getSection, isLoading } = usePageData('service-' + slug);
  const siteData = getWebsiteData();

  const ctaSec = getSection('hero')?.textContent;
  const benefitsSec = getSection('benefits')?.textContent;
  const stepsSec = getSection('steps')?.textContent;
  const faqsSec = getSection('faqs')?.textContent;

  const defaultService = serviceData[slug as string];

  if (!defaultService && !ctaSec && !isLoading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </div>
      </Layout>
    );
  }

  const service = {
    title: ctaSec?.title || defaultService?.title || "Service Details",
    desc: ctaSec?.description || defaultService?.desc || "",
    benefits: benefitsSec?.items || defaultService?.benefits || [],
    steps: stepsSec?.items || defaultService?.steps || [],
    faqs: faqsSec?.items || defaultService?.faqs || [],
  };

  const heroImage = (ctaSec?.image) ? getImageUrl(ctaSec.image) : servicesHero;

  return (
    <Layout>
      <PageHero 
        title={service.title} 
        subtitle={service.desc} 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} 
        image={heroImage} 
      />

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionHeading label="Overview" title="What You Get" centered={true} />
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{service.desc}</p>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {service.benefits.map((b: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border/50">
                  <div className="w-10 h-10 rounded-full bg-emerald-subtle flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {typeof b === 'string' ? b : b.title || b}
                    </h3>
                  </div>
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
            {service.steps.map((s: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative pl-10 md:pl-16">
                  <div className="absolute -left-6 md:-left-6 top-1 w-12 h-12 rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <span className="text-primary-foreground font-heading font-bold text-base">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20 flex flex-col justify-center">
                    <h3 className="text-primary font-semibold text-sm tracking-wider uppercase mb-1">Step {i + 1}</h3>
                    <p className="text-foreground font-medium text-lg md:text-xl">
                      {typeof s === 'string' ? s : s.title || s}
                    </p>
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
            {service.faqs.map((faq: any, i: number) => (
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