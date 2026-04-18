import { getPostById } from '@/lib/api'
import { redirect, notFound } from 'next/navigation'

export const revalidate = 300

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
