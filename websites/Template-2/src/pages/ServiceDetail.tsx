import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { useState } from 'react';

const serviceData: Record<string, { name: string; icon: any; overview: string; benefits: string[]; steps: string[]; faqs: { q: string; a: string }[] }> = {
  bookkeeping: {
    name: 'Bookkeeping',
    icon: BookOpen,
    overview: 'Our bookkeeping services ensure accurate, timely financial records that give you a clear picture of your business health. From daily transaction recording to monthly reconciliations, we handle it all so you can focus on growth.',
    benefits: ['Accurate financial records', 'Monthly reconciliation reports', 'Cash flow visibility', 'Tax-ready financials', 'Dedicated bookkeeper'],
    steps: ['Initial assessment & setup', 'Data migration & integration', 'Daily transaction recording', 'Monthly review & reporting'],
    faqs: [
      { q: 'How often will I receive financial reports?', a: 'We provide monthly financial statements and can customize reporting frequency based on your needs.' },
      { q: 'Do you support cloud accounting software?', a: 'Yes, we work with Tally, QuickBooks, Zoho Books, and other major platforms.' },
    ],
  },
  'gst-filing': {
    name: 'GST Filing',
    icon: FileText,
    overview: 'Stay compliant with India\'s GST regulations with our comprehensive filing services. We handle GSTR-1, GSTR-3B, annual returns, and GST audits with precision and timeliness.',
    benefits: ['Timely return filing', 'Input tax credit optimization', 'GST audit support', 'Compliance monitoring', 'Expert advisory'],
    steps: ['Data collection & verification', 'Return preparation', 'Review & filing', 'Confirmation & compliance tracking'],
    faqs: [
      { q: 'What GST returns do you file?', a: 'We handle GSTR-1, GSTR-3B, GSTR-9, GSTR-9C, and all other applicable returns.' },
      { q: 'Can you help with GST registration?', a: 'Yes, we handle new GST registrations, amendments, and cancellations.' },
    ],
  },
  payroll: {
    name: 'Payroll',
    icon: Users,
    overview: 'Our payroll services cover everything from salary processing to statutory compliance, ensuring your employees are paid accurately and on time, every time.',
    benefits: ['Accurate salary processing', 'PF/ESI compliance', 'TDS deduction & filing', 'Payslip generation', 'Leave management integration'],
    steps: ['Payroll setup & configuration', 'Monthly data collection', 'Processing & validation', 'Disbursement & reporting'],
    faqs: [
      { q: 'How many employees can you handle?', a: 'We manage payroll for firms ranging from 5 to 5,000+ employees.' },
      { q: 'Do you handle statutory compliance?', a: 'Yes, including PF, ESI, Professional Tax, and TDS compliance.' },
    ],
  },
  'tax-planning': {
    name: 'Tax Planning',
    icon: Calculator,
    overview: 'Maximize your tax efficiency with our strategic tax planning services. We analyze your financial position and create customized strategies to minimize tax liability while remaining fully compliant.',
    benefits: ['Tax liability reduction', 'Investment planning advice', 'Advance tax computation', 'Capital gains optimization', 'Deduction maximization'],
    steps: ['Financial analysis', 'Strategy development', 'Implementation plan', 'Ongoing monitoring & adjustments'],
    faqs: [
      { q: 'Is tax planning legal?', a: 'Absolutely. Tax planning involves using legitimate provisions of the tax code to optimize your liability.' },
      { q: 'When should I start tax planning?', a: 'Ideally at the beginning of the financial year, but it\'s never too late to start.' },
    ],
  },
  'company-formation': {
    name: 'Company Formation',
    icon: Building2,
    overview: 'From selecting the right business structure to complete incorporation, we make starting your business seamless. Our experts handle all regulatory requirements and documentation.',
    benefits: ['Structure advisory', 'Name approval', 'Incorporation filing', 'License & permits', 'Post-incorporation compliance'],
    steps: ['Business structure consultation', 'Document preparation', 'Registration filing', 'Certificate issuance & setup'],
    faqs: [
      { q: 'How long does incorporation take?', a: 'Typically 10-15 business days for a Private Limited Company.' },
      { q: 'What structures do you support?', a: 'Private Limited, LLP, OPC, Partnership, Proprietorship, and Section 8 Companies.' },
    ],
  },
  compliance: {
    name: 'Compliance',
    icon: Shield,
    overview: 'Navigate the complex regulatory landscape with confidence. Our compliance services ensure your business meets all statutory requirements, avoiding penalties and maintaining good standing.',
    benefits: ['ROC compliance', 'Annual filing management', 'Regulatory monitoring', 'Penalty prevention', 'Board meeting support'],
    steps: ['Compliance health check', 'Calendar setup', 'Ongoing monitoring', 'Timely filings & reporting'],
    faqs: [
      { q: 'What happens if we miss a compliance deadline?', a: 'Delays can result in penalties. We set up advance reminders to prevent this.' },
      { q: 'Do you handle industry-specific compliance?', a: 'Yes, including FEMA, SEBI, RBI, and sector-specific regulations.' },
    ],
  },
  'audit-services': {
    name: 'Audit Services',
    icon: Search,
    overview: 'Our audit practice delivers independent, objective assurance that enhances the credibility of your financial information and strengthens stakeholder confidence.',
    benefits: ['Statutory audit', 'Internal audit', 'Tax audit', 'Special purpose audits', 'Management letter insights'],
    steps: ['Planning & risk assessment', 'Fieldwork & testing', 'Review & quality control', 'Report issuance'],
    faqs: [
      { q: 'Is statutory audit mandatory?', a: 'Yes, for companies registered under the Companies Act and businesses exceeding prescribed turnover limits.' },
      { q: 'How long does an audit take?', a: 'Typically 2-4 weeks depending on the size and complexity of the organization.' },
    ],
  },
  'financial-advisory': {
    name: 'Financial Advisory',
    icon: TrendingUp,
    overview: 'Our financial advisory team provides expert guidance for critical business decisions, including mergers & acquisitions, valuations, due diligence, and strategic financial planning.',
    benefits: ['M&A advisory', 'Business valuation', 'Due diligence', 'Fundraising support', 'Strategic planning'],
    steps: ['Needs assessment', 'Analysis & modeling', 'Strategy formulation', 'Implementation support'],
    faqs: [
      { q: 'Do you assist with fundraising?', a: 'Yes, we help prepare pitch decks, financial models, and connect you with potential investors.' },
      { q: 'What valuation methods do you use?', a: 'DCF, comparable companies, precedent transactions, and asset-based approaches as appropriate.' },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ''];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary-premium text-sm">View All Services</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link to="/services" className="text-accent text-sm font-body hover:underline mb-4 inline-block">← All Services</Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">{service.name}</h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
            <div className="gold-accent-line mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg">{service.overview}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Key Benefits</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.benefits.map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Our Process</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.steps.map((step, i) => (
              <ScrollReveal key={step} delay={i * 0.08}>
                <div className="card-premium p-6 text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-navy text-primary-foreground flex items-center justify-center mx-auto mb-3 font-display font-bold">{i + 1}</div>
                  <p className="text-sm font-medium text-foreground">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm font-medium text-foreground">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
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
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Contact us today for a free consultation on our {service.name.toLowerCase()} services.
            </p>
            <Link to="/contact" className="btn-gold px-10 py-4">
              Contact Us <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
