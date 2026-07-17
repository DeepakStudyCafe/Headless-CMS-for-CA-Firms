import { Metadata } from 'next'
import { PageContent } from '@/components/PageContent'
import { getPageData } from '@/lib/api'

export async function generateStaticParams() {
  // Return service slugs that exist in the database
  return [
    { slug: 'Mutual Fund Investments' },
    { slug: 'Financial Planning' },
    { slug: 'Portfolio Review' },
    { slug: 'Insurance Planning' },
    { slug: 'Retirement Planning' },
    { slug: 'Tax-Efficient Investment Planning' },
    { slug: 'Goal-Based Investing' },
    { slug: 'Financial Health Check' },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPageData(params.slug)
  return {
    title: page?.title || `${params.slug} - DeltaCore Wealth`,
    description: page?.sections?.[0]?.textContent?.subheading || 'Professional Wealth Management Services'
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const page = await getPageData(params.slug)

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service page does not exist.</p>
        </div>
      </div>
    )
  }

  return <PageContent page={page} />
}
