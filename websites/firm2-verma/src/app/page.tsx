import { getPageData, getPosts } from '@/lib/api'
import { PageContent } from '@/components/PageContent'

export const revalidate = 300

export default async function HomePage() {
  const page = await getPageData('home')
  if (!page) return <div>Page not found</div>
  const tickerPosts = await getPosts(20)
  return <PageContent page={page} tickerPosts={tickerPosts} />
}
