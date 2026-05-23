import { getPostById, getPosts } from '@/lib/api'
import { redirect, notFound } from 'next/navigation'

export const revalidate = 300

// For static export (output: 'export'), Next.js needs to know
// which dynamic routes to pre-render. Return available post IDs.
export async function generateStaticParams() {
  const posts = await getPosts(100)
  return posts.map((p) => ({ id: String(p.id) }))
}

interface Props {
  params: { id: string }
}

export default async function PostByIdPage({ params }: Props) {
  const id = parseInt(params.id, 10)
  if (isNaN(id)) notFound()

  const post = await getPostById(id)
  if (!post) notFound()

  redirect(`/post/${post.slug}`)
}
