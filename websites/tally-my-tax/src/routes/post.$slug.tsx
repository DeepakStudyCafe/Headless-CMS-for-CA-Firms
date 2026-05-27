import { useState, useEffect } from 'react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { getPostBySlug, getWebsiteData, WPPost } from '@/lib/api';

export const Route = createFileRoute('/post/$slug')({
  component: PostDetail,
});

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
        const host = url.hostname || '';
        const isInternalHost = host.includes('abhinavjandco.in') || host.includes('studycafe.in') || host.includes('abhinav-j-and-company') || host === 'localhost';
        if (isInternalHost) {
          const path = (url.pathname || '/') + (url.search || '') + (url.hash || '');
          const cleanPath = path.replace(/\.html$/, '').replace(/\/$/, '');
          const parts = cleanPath.split('/').filter(Boolean);
          if (parts.length > 0) {
            const slug = parts[parts.length - 1].replace(/-\d+$/, '');
            if (slug) {
              newHref = `/post/${slug}`;
            } else {
              newHref = cleanPath || '/';
            }
          } else {
            newHref = '/';
          }
        } else {
          if (/^https?:\/\//i.test(href)) newHref = href;
        }
      } catch (err) {}

      let extra = '';
      const isAbsolute = /^https?:\/\//i.test(newHref);
      if (isAbsolute && !newHref.startsWith('/')) {
        if (!/target=/i.test(before) && !/target=/i.test(after)) extra += ' target="_blank"';
        if (!/rel=/i.test(before) && !/rel=/i.test(after)) extra += ' rel="noopener noreferrer"';
      }
      return `<a ${before}href="${newHref}"${after}${extra}>`;
    }
  );
}

function PostDetail() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<WPPost | null>(null);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
        <main className="flex-grow flex flex-col items-center justify-center py-20 px-4">
          <h1 className="text-3xl font-bold mb-4 text-foreground">Post not found</h1>
          <Link to="/" className="text-primary hover:underline font-sans">Return to Home</Link>
        </main>
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
        navigate({ to: href });
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground pt">
      <main className="flex-grow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="inline-flex items-center gap-1.5 font-medium text-primary hover:text-primary/80 transition-colors">
              &larr; Back to Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Updates</span>
          </div>

          <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
            {/* Heading */}
            <div className="px-6 md:px-12 pt-10 pb-6 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </div>

            {/* Date + Author */}
            <div className="px-6 md:px-12 pb-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-b border-border/50">
              <span className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </span>
              {post.authorName && (
                <span className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="px-6 md:px-12 py-10 text-left" onClick={handleContentClick}>
              <div
                  className="prose prose-base lg:prose-lg max-w-none
                    prose-headings:text-foreground prose-headings:leading-snug
                    prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-a:text-primary prose-a:underline prose-a:underline-offset-4
                    prose-img:rounded-xl prose-img:max-w-full prose-img:my-8 prose-img:shadow-lg
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl
                    prose-code:bg-secondary/30 prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-foreground prose-pre:text-background prose-pre:rounded-xl prose-pre:overflow-x-auto
                    prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-muted-foreground prose-li:my-2 prose-li:leading-relaxed
                    [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_table]:my-8
                    [&_td]:border [&_td]:border-border/50 [&_td]:p-4 [&_td]:text-muted-foreground
                    [&_th]:border [&_th]:border-border/50 [&_th]:p-4 [&_th]:bg-secondary/30 [&_th]:font-semibold [&_th]:text-foreground [&_th]:text-left
                    [&_tr:hover]:bg-secondary/10
                    [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80"
                dangerouslySetInnerHTML={{ __html: safeContent }}
              />
            </div>

            {/* Footer */}
            <div className="px-6 md:px-12 py-6 border-t border-border/50 bg-secondary/10 flex justify-between">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
