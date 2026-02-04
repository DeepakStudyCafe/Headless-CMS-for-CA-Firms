import { getPageData } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60 // ISR: Revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('home')
  return {
    title: page?.title || 'Home - Sharma & Associates',
    description: 'Professional Chartered Accountants',
  }
}

export default async function HomePage() {
  const page = await getPageData('home')

  if (!page) {
    return <div>Page not found</div>
  }

  return <PageContent page={page} />
}
