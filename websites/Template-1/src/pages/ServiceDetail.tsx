import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase } from 'lucide-react';
import { useState } from 'react';

const serviceData: Record<string, {
  title: string;
  icon: any;
  overview: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  bookkeeping: {
    title: 'Bookkeeping',
    icon: BookOpen,
    overview: 'Our bookkeeping services ensure your financial records are accurate, organized, and always audit-ready. We handle day-to-day transaction recording, bank reconciliations, and financial statement preparation.',
    benefits: ['Accurate financial records', 'Timely bank reconciliation', 'Monthly financial reports', 'Audit-ready documentation', 'Cloud-based access'],
    process: [
      { step: 'Assessment', desc: 'We evaluate your current financial record-keeping processes.' },
      { step: 'Setup', desc: 'Configure accounting systems tailored to your business.' },
      { step: 'Recording', desc: 'Systematic daily transaction recording and categorization.' },
      { step: 'Reporting', desc: 'Monthly and quarterly financial statements and insights.' },
    ],
    faqs: [
      { q: 'How often will my books be updated?', a: 'We update your books on a daily or weekly basis depending on transaction volume.' },
      { q: 'What software do you use?', a: 'We work with Tally, QuickBooks, Zoho Books, and other industry-standard platforms.' },
      { q: 'Can you handle multiple entities?', a: 'Yes, we manage bookkeeping for multiple entities and consolidate reports.' },
    ],
  },
  'gst-filing': {
    title: 'GST Filing',
    icon: FileText,
    overview: 'Comprehensive GST compliance services including return filing, input tax credit reconciliation, and advisory on GST implications for your business transactions.',
    benefits: ['Timely GSTR filing', 'ITC optimization', 'E-way bill management', 'GST audit support', 'Advisory on GST implications'],
    process: [
      { step: 'Data Collection', desc: 'Gather sales, purchase, and expense data for the period.' },
      { step: 'Reconciliation', desc: 'Match data with GSTR-2A/2B for ITC claims.' },
      { step: 'Filing', desc: 'Prepare and file GSTR-1, GSTR-3B, and annual returns.' },
      { step: 'Review', desc: 'Post-filing review and compliance verification.' },
    ],
    faqs: [
      { q: 'Which GST returns do you handle?', a: 'We handle GSTR-1, GSTR-3B, GSTR-9, GSTR-9C, and all applicable returns.' },
      { q: 'Can you help with GST registration?', a: 'Yes, we assist with new registrations, amendments, and cancellations.' },
      { q: 'Do you handle GST audits?', a: 'Yes, our team prepares and supports GST audit processes.' },
    ],
  },
  payroll: {
    title: 'Payroll',
    icon: Users,
    overview: 'End-to-end payroll management including salary processing, statutory compliance (PF, ESI, PT), TDS on salary, and employee self-service solutions.',
    benefits: ['Accurate salary processing', 'Statutory compliance', 'TDS management', 'Pay slip generation', 'Full & Final settlements'],
    process: [
      { step: 'Setup', desc: 'Configure payroll structure, components, and compliance.' },
      { step: 'Processing', desc: 'Monthly payroll computation and verification.' },
      { step: 'Disbursement', desc: 'Salary disbursement and pay slip generation.' },
      { step: 'Compliance', desc: 'PF, ESI, PT returns and TDS filing.' },
    ],
    faqs: [
      { q: 'How many employees can you manage?', a: 'We handle payroll for businesses of all sizes, from 5 to 5,000+ employees.' },
      { q: 'Do you handle statutory compliance?', a: 'Yes, including PF, ESI, Professional Tax, and TDS.' },
      { q: 'Can employees access their pay slips online?', a: 'Yes, we provide employee self-service portals.' },
    ],
  },
  'tax-planning': {
    title: 'Tax Planning',
    icon: Calculator,
    overview: 'Strategic tax planning services that help businesses and individuals minimize tax liability through legal tax-saving instruments, structuring, and proactive advisory.',
    benefits: ['Tax liability reduction', 'Investment planning', 'Advance tax computation', 'Tax-efficient structuring', 'Compliance assurance'],
    process: [
      { step: 'Analysis', desc: 'Review current tax position and identify opportunities.' },
      { step: 'Strategy', desc: 'Develop customized tax optimization strategy.' },
      { step: 'Implementation', desc: 'Execute tax-saving measures and investments.' },
      { step: 'Monitoring', desc: 'Ongoing monitoring and quarterly adjustments.' },
    ],
    faqs: [
      { q: 'Is tax planning legal?', a: 'Absolutely. Tax planning uses legitimate provisions of the Income Tax Act.' },
      { q: 'When should I start tax planning?', a: 'Ideally at the beginning of the financial year for maximum benefit.' },
      { q: 'Do you handle NRI taxation?', a: 'Yes, we specialize in NRI tax planning and DTAA benefits.' },
    ],
  },
  'company-formation': {
    title: 'Company Formation',
    icon: Building2,
    overview: 'Complete business registration and incorporation services including Private Limited, LLP, OPC, and partnership firm registrations with post-incorporation compliance.',
    benefits: ['Quick incorporation', 'Legal structuring advice', 'Documentation handling', 'Post-incorporation compliance', 'Annual filing support'],
    process: [
      { step: 'Consultation', desc: 'Understand your business needs and recommend structure.' },
      { step: 'Documentation', desc: 'Prepare and file incorporation documents.' },
      { step: 'Registration', desc: 'Complete registration with MCA and other authorities.' },
      { step: 'Post-Setup', desc: 'Bank account, GST, and compliance setup.' },
    ],
    faqs: [
      { q: 'How long does incorporation take?', a: 'Typically 7-15 working days depending on the structure.' },
      { q: 'What structure is best for my business?', a: 'We assess your needs and recommend the optimal legal structure.' },
      { q: 'Do you provide registered office address?', a: 'Yes, we can arrange registered office facilities.' },
    ],
  },
  compliance: {
    title: 'Compliance',
    icon: Shield,
    overview: 'Comprehensive regulatory compliance services covering ROC filings, FEMA compliance, labor law compliance, and industry-specific regulatory requirements.',
    benefits: ['ROC compliance', 'FEMA advisory', 'Labor law compliance', 'Secretarial services', 'Penalty prevention'],
    process: [
      { step: 'Audit', desc: 'Assess current compliance status and gaps.' },
      { step: 'Calendar', desc: 'Create compliance calendar with all deadlines.' },
      { step: 'Execution', desc: 'Prepare and file required documents timely.' },
      { step: 'Monitoring', desc: 'Continuous monitoring and updates on regulatory changes.' },
    ],
    faqs: [
      { q: 'What happens if compliance deadlines are missed?', a: 'We ensure proactive tracking to prevent any penalties or legal issues.' },
      { q: 'Do you cover industry-specific regulations?', a: 'Yes, including SEBI, RBI, and sector-specific requirements.' },
      { q: 'Can you handle multi-state compliance?', a: 'Absolutely. We manage compliance across all Indian states.' },
    ],
  },
  'audit-services': {
    title: 'Audit Services',
    icon: Search,
    overview: 'Comprehensive audit services including statutory audits, internal audits, tax audits, and forensic audits conducted with the highest standards of professional diligence.',
    benefits: ['Statutory audit', 'Internal audit', 'Tax audit', 'Forensic audit', 'Management audit'],
    process: [
      { step: 'Planning', desc: 'Define audit scope, timeline, and methodology.' },
      { step: 'Fieldwork', desc: 'Execute audit procedures and gather evidence.' },
      { step: 'Reporting', desc: 'Prepare audit findings and recommendations.' },
      { step: 'Follow-up', desc: 'Monitor implementation of audit recommendations.' },
    ],
    faqs: [
      { q: 'What types of audits do you perform?', a: 'Statutory, internal, tax, GST, forensic, and concurrent audits.' },
      { q: 'How long does an audit take?', a: 'Duration depends on scope, typically 2-6 weeks.' },
      { q: 'Do you provide management letters?', a: 'Yes, with detailed findings and improvement recommendations.' },
    ],
  },
  'financial-advisory': {
    title: 'Financial Advisory',
    icon: Briefcase,
    overview: 'Expert financial advisory services covering business valuations, M&A advisory, fundraising support, financial restructuring, and strategic planning.',
    benefits: ['Business valuation', 'M&A advisory', 'Fundraising support', 'Financial restructuring', 'Due diligence'],
    process: [
      { step: 'Discovery', desc: 'Understand business objectives and challenges.' },
      { step: 'Analysis', desc: 'Deep financial analysis and market assessment.' },
      { step: 'Strategy', desc: 'Develop actionable strategic recommendations.' },
      { step: 'Execution', desc: 'Support implementation and transaction closure.' },
    ],
    faqs: [
      { q: 'Do you help with fundraising?', a: 'Yes, we assist with investor presentations, valuations, and negotiation.' },
      { q: 'What valuation methods do you use?', a: 'DCF, comparable analysis, asset-based, and other recognized methods.' },
      { q: 'Can you support cross-border transactions?', a: 'Yes, we have experience with international M&A and structuring.' },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ''];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-lg text-foreground mb-4">Service Not Found</h1>
            <Button variant="navy" asChild><Link to="/services">View All Services</Link></Button>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      <section className="gradient-navy pt-32 pb-20">
        <div className="container-max mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Link to="/services" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors mb-4 inline-block">← All Services</Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h1 className="heading-xl text-primary-foreground">{service.title}</h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-max mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="heading-md text-foreground mb-6 font-sans">Overview</h2>
            <p className="text-body text-lg">{service.overview}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding gradient-subtle">
        <div className="container-max mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="heading-md text-foreground mb-8 font-sans">Key Benefits</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.08}>
                <div className="flex items-center gap-3 p-4 card-premium">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-max mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="heading-md text-foreground mb-8 font-sans">Our Process</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className="card-premium p-6 text-center">
                  <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-sm">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-foreground font-sans mb-2">{p.step}</h4>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding gradient-subtle">
        <div className="container-max mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-md text-foreground mb-8 font-sans">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-premium overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm font-medium text-foreground">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-center">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <h2 className="heading-lg text-primary-foreground mb-4">Need {service.title} Services?</h2>
            <p className="text-lg text-primary-foreground/50 mb-8">Let our experts help you with tailored solutions.</p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get a Free Consultation <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
