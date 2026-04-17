import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostBySlug, getWebsiteData } from '@/lib/api';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

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
        // parse with a fixed base so relative URLs resolve
        const url = new URL(href, 'https://studycafe.in');
        const host = url.hostname || '';

        // Treat known legacy/internal hosts as internal and convert to relative routes
        const isInternalHost = host.includes('carmugunthan.in') || host.includes('studycafe.in') || host.includes('r-mugunthan') || host === 'localhost';
        if (isInternalHost) {
          // construct a path-only href
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
          // leave external absolute URLs alone
          if (/^https?:\/\//i.test(href)) newHref = href;
        }
      } catch (err) {
        // if parsing fails, keep original href
      }

      // Only mark truly external absolute URLs with target/rel
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

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getWebsiteData().then(setWebsiteData);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-paper flex flex-col">
        <CustomCursor />
        <Navbar websiteData={websiteData} />
        <main className="flex-grow flex flex-col items-center justify-center py-20 px-4">
          <h1 className="text-3xl font-display mb-4 text-charcoal">Post not found</h1>
          <Link to="/" className="text-gold hover:underline font-sans">Return to Home</Link>
        </main>
        <Footer websiteData={websiteData} />
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
    <div className="min-h-screen bg-paper flex flex-col font-sans text-charcoal">
      <CustomCursor />
      <Navbar websiteData={websiteData} />

      {/* spacer for fixed navbar */}
      <div className="h-24 md:h-20 bg-charcoal/5"></div>

      <main className="flex-grow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:text-blue-700 transition-colors">
              &larr; Back to Home
            </Link>
            <span className="text-gold/50">/</span>
            <span className="text-gold">Updates</span>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gold/10 overflow-hidden">
            {/* Heading */}
            <div className="px-6 md:px-12 pt-10 pb-6 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <h1
                className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-snug"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </div>

            {/* Date + Author */}
            <div className="px-6 md:px-12 pb-6 flex flex-wrap items-center gap-5 text-sm text-warm-gray border-b border-gray-100">
              <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </span>
              {post.authorName && (
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full">
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
                    prose-headings:text-charcoal prose-headings:font-display prose-headings:leading-snug
                    prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl
                    prose-p:text-warm-gray prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-charcoal prose-strong:font-semibold
                    prose-a:text-blue-600 prose-a:underline prose-a:underline-offset-4
                    prose-img:rounded-xl prose-img:max-w-full prose-img:my-8 prose-img:shadow-lg
                    prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-warm-gray prose-blockquote:bg-gold/5 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl
                    prose-code:bg-gray-100 prose-code:text-charcoal prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-charcoal prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:overflow-x-auto
                    prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-warm-gray prose-li:my-2 prose-li:leading-relaxed
                    [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_table]:my-8
                    [&_td]:border [&_td]:border-gray-200 [&_td]:p-4 [&_td]:text-warm-gray
                    [&_th]:border [&_th]:border-gray-200 [&_th]:p-4 [&_th]:bg-gray-50 [&_th]:font-semibold [&_th]:text-charcoal [&_th]:text-left
                    [&_tr:hover]:bg-gray-50/50
                    [&_a]:text-blue-600 [&_a]:underline [&_a:hover]:text-blue-700"
                dangerouslySetInnerHTML={{ __html: safeContent }}
              />
            </div>

            {/* Footer */}
            <div className="px-6 md:px-12 py-6 border-t border-gray-100 bg-gray-50/50 flex justify-between">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer websiteData={websiteData} />
    </div>
  )
}