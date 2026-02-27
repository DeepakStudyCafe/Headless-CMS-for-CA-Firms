import { getPostBySlug } from '@/lib/api'
import { sanitizeContent } from '@/lib/sanitize'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const revalidate = 60

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post not found' }
  const plainTitle = post.title.replace(/<[^>]+>/g, '')
  const plainDesc = post.excerpt?.replace(/<[^>]+>/g, '').trim().slice(0, 160)
  return {
    title: plainTitle,
    description: plainDesc,
    openGraph: {
      title: plainTitle,
      description: plainDesc,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const safeContent = sanitizeContent(post.content || '')
  const plainTitle = post.title.replace(/<[^>]+>/g, '')

  return (
    <div className="min-h-screen py-6 px-4" style={{ background: '#f4f6fb' }}>
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <Link href="/" className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:text-blue-800 transition-colors">
            &larr; Back to Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400">Updates</span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Heading */}
          <div className="px-6 md:px-10 pt-8 pb-4">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </div>

          {/* Date + Author */}
          <div className="px-6 md:px-10 pb-5 flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(post.date)}
            </span>
            {post.authorName && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.authorName}
              </span>
            )}
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.featuredImage}
              alt={plainTitle}
              referrerPolicy="no-referrer"
              style={{ display: 'block', width: '100%', objectFit: 'cover', maxHeight: '500px' }}
            />
          )}

          {/* Content */}
          <div className="px-6 md:px-10 py-8">
            <div
              className="prose prose-base max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:leading-snug
                prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-3
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-a:underline prose-a:font-medium
                prose-img:rounded-xl prose-img:max-w-full prose-img:my-5 prose-img:shadow-md
                prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:rounded-r-lg
                prose-code:bg-gray-100 prose-code:text-red-600 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:overflow-x-auto
                prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5
                prose-li:text-gray-700 prose-li:mb-1
                [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_table]:my-4
                [&_td]:border [&_td]:border-gray-200 [&_td]:p-2.5 [&_td]:text-gray-700
                [&_th]:border [&_th]:border-gray-200 [&_th]:p-2.5 [&_th]:bg-gray-50 [&_th]:font-semibold [&_th]:text-gray-800
                [&_tr:hover]:bg-gray-50"
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
          </div>

          {/* Footer */}
          <div className="px-6 md:px-10 py-5 border-t border-gray-100 bg-gray-50">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
