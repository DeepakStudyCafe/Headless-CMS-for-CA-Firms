import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('home')
  return {
    title: page?.title || 'Home - Singh & Co. Advisors',
    description: 'Trusted Chartered Accountants',
  }
}

export default async function HomePage() {
  const page = await getPageData('home')

  if (!page) {
    return <div>Page not found</div>
  }

  return <PageContent page={page} />
}
