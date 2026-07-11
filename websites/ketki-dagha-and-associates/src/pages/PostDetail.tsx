import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostBySlug } from '@/lib/api';
import { FullPageLoader } from '@/components/Loader';

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
}

function rewriteLinks(html: string) {
  return html.replace(
    /<a ([^>]*)href=["']([^"']*)["']([^>]*)>/gi,
    (match, before, href, after) => {
      let newHref = href;
      try {
        const url = new URL(href, 'https://studycafe.in');
        if (url.hostname.includes('studycafe.in')) {
          if (!url.searchParams.get('p')) {
            const path = url.pathname.replace(/\.html$/, '').replace(/\/$/, '');
            const parts = path.split('/').filter(Boolean);
            if (parts.length > 0) {
              const slug = parts[parts.length - 1].replace(/-\d+$/, '');
              if (slug) newHref = `/post/${slug}`;
            }
          }
        }
      } catch (err) {
        // ignore
      }

      let extra = '';
      if (!newHref.startsWith('/') && !newHref.startsWith('#')) {
        if (!/target=/i.test(before) && !/target=/i.test(after)) extra += ' target="_blank"';
        if (!/rel=/i.test(before) && !/rel=/i.test(after)) extra += ' rel="noopener noreferrer"';
      }

      return `<a ${before}href="${newHref}"${after}${extra}>`;
    }
  );
}

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);
    getPostBySlug(slug)
      .then((data) => {
        if (!data) setError(true);
        else setPost(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <FullPageLoader />;

  if (error || !post) {
    return (
      <div className="min-h-screen py-6 px-4 flex flex-col items-center justify-center" style={{ background: '#f4f6fb' }}>
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Post not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
      </div>
    );
  }

  const safeContent = rewriteLinks(post.content || '');
  const plainTitle = post.title.replace(/<[^>]+>/g, '');

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let el = e.target as HTMLElement | null;
    while (el && el.tagName !== 'A') el = el.parentElement;
    const anchor = el as HTMLAnchorElement | null;
    if (anchor) {
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('/post/')) {
        e.preventDefault();
        navigate(href);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <div className="min-h-screen py-6 px-4" style={{ background: '#f4f6fb' }}>
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <Link to="/" className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:text-blue-800 transition-colors">
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
            <img
              src={post.featuredImage}
              alt={plainTitle}
              referrerPolicy="no-referrer"
              style={{ display: 'block', width: '100%', objectFit: 'cover', maxHeight: '500px' }}
            />
          )}

          {/* Content */}
          <div className="px-6 md:px-10 py-8 text-left" onClick={handleContentClick}>
            <div
              className="prose prose-base md:prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:leading-snug
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-a:underline-offset-2
                prose-img:rounded-xl prose-img:max-w-full prose-img:my-6 prose-img:shadow-md
                prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-indigo-50/50 prose-blockquote:py-3 prose-blockquote:rounded-r-xl
                prose-code:bg-gray-100 prose-code:text-red-500 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:overflow-x-auto
                prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:my-2 prose-li:leading-relaxed
                [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_table]:my-6
                [&_td]:border [&_td]:border-gray-200 [&_td]:p-3 [&_td]:text-gray-700
                [&_th]:border [&_th]:border-gray-200 [&_th]:p-3 [&_th]:bg-gray-100 [&_th]:font-semibold [&_th]:text-gray-800
                [&_tr:hover]:bg-gray-50"
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
          </div>

          {/* Footer */}
          <div className="px-6 md:px-10 py-5 border-t border-gray-100 bg-gray-50">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
