import { getPageData, getPosts } from '@/lib/api'
import { PageContent } from '@/components/PageContent'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('home')
  return {
    title: page?.title || 'Home - Kapoor Financial Services',
    description: 'Expert Chartered Accountants',
  }
}

export default async function HomePage() {
  const page = await getPageData('home')

  if (!page) {
    return <div>Page not found</div>
  }

  const tickerPosts = await getPosts(20)
  return <PageContent page={page} tickerPosts={tickerPosts} />
}
