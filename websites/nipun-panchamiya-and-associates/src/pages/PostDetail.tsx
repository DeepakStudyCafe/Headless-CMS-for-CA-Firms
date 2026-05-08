import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostBySlug, getWebsiteData, getImageUrl } from '@/lib/api';
import { FullPageLoader } from '@/components/Loader';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

function rewriteImages(html: string) {
  return html.replace(
    /<img ([^>]*)src=["']([^"']*)["']([^>]*)>/gi,
    (match, before, src, after) => {
      return `<img ${before}src="${getImageUrl(src)}"${after}>`;
    }
  );
}

function cleanInlineColors(html: string) {
  return html.replace(/style="([^"]*)"/gi, (match, styleAttr) => {
    // Remove color declarations to prevent white text on white backgrounds
    const newStyle = styleAttr.replace(/(?:^|\s|;)color\s*:\s*[^;]+;?/gi, '');
    return `style="${newStyle}"`;
  });
}

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getWebsiteData().then(setWebsiteData).catch(console.error);
  }, []);

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
      <div className="min-h-screen bg-ink flex flex-col">
        <Navbar websiteData={websiteData} disableSticky={true} />
        <div className="flex-1 flex flex-col items-center justify-center py-20 px-6">
          <h1 className="text-3xl font-display font-semibold mb-4 text-ink">Post not found</h1>
          <Link to="/" className="text-gold hover:text-gold-muted underline transition-colors">Return to Home</Link>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  let safeContent = rewriteLinks(post.content || '');
  safeContent = rewriteImages(safeContent);
  safeContent = cleanInlineColors(safeContent);
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
    <div className="min-h-screen bg-ink flex flex-col">
      <Navbar websiteData={websiteData} disableSticky={true} />
      <div className="flex-1 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 font-body">
            <Link to="/" className="inline-flex items-center gap-1.5 font-medium text-gold hover:text-gold-bright transition-colors">
              &larr; Back to Home
            </Link>
            <span className="text-mist/50">/</span>
            <span className="text-mist">Updates</span>
          </div>

          <div className="bg-white rounded-sm shadow-[0_10px_40px_rgba(10,14,23,0.05)] border border-gold/15 overflow-hidden">
            {/* Heading */}
            <div className="px-6 md:px-12 pt-10 pb-6">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-ink leading-[1.2]"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </div>

            {/* Date + Author */}
            <div className="px-6 md:px-12 pb-6 flex flex-wrap items-center gap-6 text-sm text-mist border-b border-gold/10 font-body">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </span>
              {post.authorName && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.authorName}
                </span>
              )}
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <img
                src={getImageUrl(post.featuredImage)}
                alt={plainTitle}
                referrerPolicy="no-referrer"
                style={{ display: 'block', width: '100%', objectFit: 'cover', maxHeight: '550px' }}
              />
            )}

            {/* Content */}
            <div className="px-6 md:px-12 py-10 text-left font-body" onClick={handleContentClick}>
              <div
                className="prose prose-base md:prose-lg max-w-none text-slate
                  prose-headings:text-ink prose-headings:font-display prose-headings:font-semibold prose-headings:leading-snug
                  prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                  prose-p:text-slate prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-ink prose-strong:font-semibold
                  prose-a:!text-blue-600 prose-a:underline hover:prose-a:!text-blue-800 prose-a:underline-offset-4 prose-a:transition-colors
                  prose-img:rounded-sm prose-img:max-w-full prose-img:my-8 prose-img:shadow-sm
                  prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate prose-blockquote:bg-fog prose-blockquote:py-4 prose-blockquote:rounded-r-sm
                  prose-code:bg-fog prose-code:text-gold prose-code:px-2 prose-code:py-1 prose-code:rounded-sm prose-code:text-sm
                  prose-pre:bg-ink prose-pre:text-cream prose-pre:rounded-sm prose-pre:overflow-x-auto
                  prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-slate prose-li:my-2 prose-li:leading-relaxed
                  [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_table]:my-8
                  [&_td]:border [&_td]:border-gold/15 [&_td]:p-4 [&_td]:text-slate
                  [&_th]:border [&_th]:border-gold/15 [&_th]:p-4 [&_th]:bg-fog [&_th]:font-semibold [&_th]:text-ink
                  [&_tr:hover]:bg-fog/50
                  [&_*]:!text-[inherit] [&_h1]:!text-ink [&_h2]:!text-ink [&_h3]:!text-ink [&_h4]:!text-ink [&_h5]:!text-ink [&_h6]:!text-ink [&_strong]:!text-ink [&_a]:!text-blue-600 hover:[&_a]:!text-blue-800"
                dangerouslySetInnerHTML={{ __html: safeContent }}
              />
            </div>

            {/* Footer */}
            <div className="px-6 md:px-12 py-6 border-t border-gold/10 bg-fog/30">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-muted transition-colors font-body">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer websiteData={websiteData} />
    </div>
  )
}
