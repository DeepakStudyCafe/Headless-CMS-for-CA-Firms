import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import heroServices from '@/assets/hero-services.jpg';

const serviceData: Record<string, { icon: any; title: string; desc: string; benefits: string[]; process: string[]; faqs: { q: string; a: string }[] }> = {
  bookkeeping: { icon: BookOpen, title: 'Bookkeeping', desc: 'Our expert bookkeeping services ensure your financial records are accurate, up-to-date, and compliant. We handle everything from daily transaction recording to monthly reconciliations.', benefits: ['Accurate financial records', 'Timely bank reconciliations', 'Monthly financial statements', 'Real-time reporting access'], process: ['Initial assessment', 'System setup', 'Data migration', 'Ongoing management'], faqs: [{ q: 'What software do you use?', a: 'We work with Tally, QuickBooks, Zoho Books, and other leading platforms.' }, { q: 'How often will I get reports?', a: 'Monthly financial statements with real-time dashboard access.' }] },
  'gst-filing': { icon: FileText, title: 'GST Filing', desc: 'Ensure timely and accurate GST compliance with our expert filing services. We handle all GST return types and keep you updated on regulatory changes.', benefits: ['Timely return filing', 'Input tax credit optimization', 'Compliance monitoring', 'Advisory on GST regulations'], process: ['Data collection', 'Return preparation', 'Review & filing', 'Confirmation & reporting'], faqs: [{ q: 'Which GST returns do you handle?', a: 'GSTR-1, GSTR-3B, GSTR-9, and all applicable returns.' }, { q: 'Do you handle GST registration?', a: 'Yes, we provide end-to-end GST registration services.' }] },
  payroll: { icon: Users, title: 'Payroll', desc: 'Comprehensive payroll management ensuring accurate salary processing, statutory compliance, and timely disbursements.', benefits: ['Accurate salary processing', 'TDS computation & filing', 'PF/ESI compliance', 'Pay slip generation'], process: ['Payroll setup', 'Monthly processing', 'Compliance filing', 'Reporting'], faqs: [{ q: 'How many employees can you manage?', a: 'We handle payroll for organizations of all sizes.' }, { q: 'Do you handle contractor payments?', a: 'Yes, including TDS deductions on contractor payments.' }] },
  'tax-planning': { icon: Calculator, title: 'Tax Planning', desc: 'Strategic tax planning services to optimize your tax position while ensuring full compliance with tax laws.', benefits: ['Tax liability optimization', 'Investment planning', 'Advance tax computation', 'Tax-efficient structuring'], process: ['Financial review', 'Strategy development', 'Implementation', 'Ongoing monitoring'], faqs: [{ q: 'When should I start tax planning?', a: 'Ideally at the beginning of the financial year for maximum benefit.' }, { q: 'Do you handle international taxation?', a: 'Yes, we have expertise in cross-border tax planning.' }] },
  'company-formation': { icon: Building2, title: 'Company Formation', desc: 'End-to-end company incorporation services including registration, documentation, and post-incorporation compliance.', benefits: ['Quick registration', 'Complete documentation', 'PAN & TAN registration', 'Bank account assistance'], process: ['Consultation', 'Name approval', 'Documentation', 'Registration'], faqs: [{ q: 'How long does incorporation take?', a: 'Typically 10-15 working days for Private Limited companies.' }, { q: 'Can you help with LLP registration?', a: 'Yes, we handle Pvt Ltd, LLP, OPC, and other entity types.' }] },
  compliance: { icon: Shield, title: 'Compliance', desc: 'Comprehensive regulatory compliance services ensuring your business meets all statutory requirements.', benefits: ['ROC filings', 'Annual return filing', 'Board meeting compliance', 'Statutory audit support'], process: ['Compliance audit', 'Gap analysis', 'Filing & reporting', 'Ongoing monitoring'], faqs: [{ q: 'What penalties can non-compliance cause?', a: 'Penalties range from fines to director disqualification.' }, { q: 'Do you provide compliance calendars?', a: 'Yes, we maintain detailed compliance calendars for all clients.' }] },
  'audit-services': { icon: Search, title: 'Audit Services', desc: 'Independent audit and assurance services that enhance the credibility and reliability of your financial information.', benefits: ['Statutory audits', 'Internal audits', 'Tax audits', 'Special purpose audits'], process: ['Planning', 'Fieldwork', 'Reporting', 'Follow-up'], faqs: [{ q: 'What types of audits do you conduct?', a: 'Statutory, internal, tax, stock, and forensic audits.' }, { q: 'How long does an audit take?', a: 'Duration depends on the size and complexity of the organization.' }] },
  'financial-advisory': { icon: TrendingUp, title: 'Financial Advisory', desc: 'Expert financial advisory services covering valuations, due diligence, fundraising, and strategic financial planning.', benefits: ['Business valuations', 'Due diligence', 'M&A advisory', 'Financial restructuring'], process: ['Assessment', 'Analysis', 'Strategy formulation', 'Execution support'], faqs: [{ q: 'Do you assist with fundraising?', a: 'Yes, we help with investor presentations and financial modeling.' }, { q: 'Can you handle cross-border transactions?', a: 'Yes, we have experience with international M&A transactions.' }] },
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ''];

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center"><p>Service not found.</p></div>;
  }

  const Icon = service.icon;

  return (
    <div>
      <PageHero title={service.title} breadcrumb={service.title} image={heroServices} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="section-title">{service.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>

            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Key Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Our Process</h3>
            <div className="grid sm:grid-cols-4 gap-4 mb-8">
              {service.process.map((step, i) => (
                <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium p-4 text-center">
                  <div className="w-8 h-8 rounded-full gradient-primary mx-auto mb-2 flex items-center justify-center text-sm font-bold" style={{ color: 'hsl(var(--primary-foreground))' }}>{i + 1}</div>
                  <p className="text-sm font-medium text-foreground">{step}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">FAQs</h3>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.q} className="card-premium p-5">
                  <h4 className="font-semibold text-foreground mb-1">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="card-premium p-6 sticky top-28">
              <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Icon size={28} style={{ color: 'hsl(var(--primary-foreground))' }} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">Need This Service?</h3>
              <p className="text-sm text-muted-foreground mb-6">Get in touch with our experts for a free consultation.</p>
              <Link to="/contact" className="btn-primary-gradient w-full text-center block">
                Contact Us <ArrowRight size={16} className="inline ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ServiceDetailPage;
