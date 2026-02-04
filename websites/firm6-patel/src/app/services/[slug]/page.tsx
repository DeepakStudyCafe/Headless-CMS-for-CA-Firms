import { Metadata } from 'next'
import { PageContent } from '@/components/PageContent'
import { getPageData } from '@/lib/api'

export async function generateStaticParams() {
  return [
    { slug: 'bookkeeping' },
    { slug: 'gst-filing' },
    { slug: 'payroll' },
    { slug: 'tax-planning' },
    { slug: 'company-formation' },
    { slug: 'compliance' },
    { slug: 'audit-services' },
    { slug: 'financial-advisory' },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPageData(params.slug)
  return {
    title: page?.title || `${params.slug} - Patel Consulting`,
    description: page?.sections?.[0]?.textContent?.subheading || 'Trusted advisory services'
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const page = await getPageData(params.slug)

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service page does not exist.</p>
        </div>
      </div>
    )
  }

  return <PageContent page={page} />
}
