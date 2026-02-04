import { Metadata } from 'next'
import { PageContent } from '@/components/PageContent'

const serviceData: Record<string, { title: string; description: string; features: string[] }> = {
  'bookkeeping': {
    title: 'Bookkeeping Services',
    description: 'Professional bookkeeping services to keep your financial records accurate and up-to-date. We handle day-to-day accounting tasks so you can focus on growing your business.',
    features: ['Daily transaction recording', 'Bank reconciliation', 'Accounts payable & receivable', 'Financial statement preparation', 'Cash flow management']
  },
  'gst-filing': {
    title: 'GST Filing Services',
    description: 'Expert GST compliance and filing services. We ensure timely and accurate GST returns to keep your business compliant with all tax regulations.',
    features: ['Monthly GSTR-1 & GSTR-3B filing', 'Quarterly GSTR-4 for composition dealers', 'Annual GST return filing', 'GST reconciliation', 'Input tax credit optimization']
  },
  'payroll': {
    title: 'Payroll Management',
    description: 'Complete payroll processing solutions including salary computation, statutory compliance, and employee tax management.',
    features: ['Salary calculation & disbursement', 'PF & ESI compliance', 'TDS on salary', 'Leave & attendance management', 'Payslip generation']
  },
  'tax-planning': {
    title: 'Tax Planning & Advisory',
    description: 'Strategic tax planning services to minimize your tax liability legally while ensuring full compliance with tax laws.',
    features: ['Income tax planning', 'Investment advisory', 'Tax saving strategies', 'Advance tax computation', 'Tax return filing']
  },
  'company-formation': {
    title: 'Company Formation',
    description: 'End-to-end company registration and formation services. From choosing the right business structure to getting your company registered.',
    features: ['Private Limited Company registration', 'LLP formation', 'Partnership deed drafting', 'MSME registration', 'Startup India registration']
  },
  'compliance': {
    title: 'Regulatory Compliance',
    description: 'Comprehensive compliance services to keep your business aligned with all statutory and regulatory requirements.',
    features: ['ROC filings', 'Annual compliance', 'Statutory audits', 'Legal compliance review', 'Director KYC']
  },
  'audit-services': {
    title: 'Audit Services',
    description: 'Professional audit services including statutory audit, internal audit, and tax audit to ensure financial transparency.',
    features: ['Statutory audit', 'Internal audit', 'Tax audit', 'GST audit', 'Stock audit']
  },
  'financial-advisory': {
    title: 'Financial Advisory',
    description: 'Expert financial advisory services to help you make informed business decisions and achieve your financial goals.',
    features: ['Business valuation', 'Financial planning', 'Investment advisory', 'Merger & acquisition support', 'Funding assistance']
  }
}

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceData[params.slug]
  return {
    title: `${service?.title || 'Service'} - Verma Accounting`,
    description: service?.description || 'Professional accounting services'
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 font-light">The requested service page does not exist.</p>
        </div>
      </div>
    )
  }

  const page = {
    title: service.title,
    sections: [
      {
        id: 'hero',
        type: 'hero',
        imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600',
        textContent: {
          heading: service.title,
          subheading: service.description
        }
      },
      {
        id: 'features',
        type: 'text-image',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        textContent: {
          heading: 'What We Offer',
          description: service.description,
          features: service.features
        }
      },
      {
        id: 'cta',
        type: 'cta',
        textContent: {
          heading: 'Ready to Get Started?',
          description: 'Contact us today to learn more about our ' + service.title.toLowerCase() + '.',
          cta: 'Contact Us'
        }
      }
    ]
  }

  return <PageContent page={page} />
}
