import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { getPostBySlug } from '@/lib/api';
import { SiteLayout } from '@/components/site/Layout';

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
      } catch (err) {}
      let extra = '';
      if (!newHref.startsWith('/') && !newHref.startsWith('#')) {
        if (!/target=/i.test(before) && !/target=/i.test(after)) extra += ' target="_blank"';
        if (!/rel=/i.test(before) && !/rel=/i.test(after)) extra += ' rel="noopener noreferrer"';
      }
      return `<a ${before}href="${newHref}"${after}${extra}>`;
    }
  );
}

export const Route = createFileRoute('/post/$slug')({
  component: PostDetail,
});

function PostDetail() {
  const { slug } = Route.useParams();
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

  if (loading) return <SiteLayout><div className="flex min-h-[60vh] items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div></SiteLayout>;

  if (error || !post) {
    return (
      <SiteLayout>
        <div className="min-h-screen py-6 px-4 flex flex-col items-center justify-center bg-surface">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Post not found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </SiteLayout>
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
        navigate({ to: href });
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <SiteLayout>
      <div className="min-h-screen py-6 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="inline-flex items-center gap-1.5 font-medium text-primary hover:text-secondary transition-colors">
              &larr; Back to Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Updates</span>
          </div>

          <div className="bg-surface rounded-2xl shadow-sm border border-border overflow-hidden">
            {/* Heading */}
            <div className="px-6 md:px-10 pt-8 pb-4">
              <h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </div>

            {/* Date + Author */}
            <div className="px-6 md:px-10 pb-5 flex flex-wrap items-center gap-5 text-sm text-subtle border-b border-border">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </span>
              {post.authorName && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  prose-headings:text-foreground prose-headings:font-bold prose-headings:leading-snug
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-5
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-a:underline-offset-2
                  prose-img:rounded-xl prose-img:max-w-full prose-img:my-6 prose-img:shadow-md
                  prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-foreground prose-pre:text-background prose-pre:rounded-xl prose-pre:overflow-x-auto
                  prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-foreground/80 prose-li:my-2 prose-li:leading-relaxed
                  [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_table]:my-6
                  [&_td]:border [&_td]:border-border [&_td]:p-3 [&_td]:text-foreground/80
                  [&_th]:border [&_th]:border-border [&_th]:p-3 [&_th]:bg-surface [&_th]:font-semibold [&_th]:text-foreground
                  [&_tr:hover]:bg-muted/30"
                dangerouslySetInnerHTML={{ __html: safeContent }}
              />
            </div>

            {/* Footer */}
            <div className="px-6 md:px-10 py-5 border-t border-border bg-surface">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-subtle hover:text-foreground transition-colors">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
