"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import normalizeImageUrl from '@/lib/normalizeImageUrl';
import Link from "next/link";
import { Calendar, Clock, Facebook, Twitter, Linkedin, ArrowLeft, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Blog {
  id: string;
  title: string;
  slug?: string;
  category?: string;
  readTime?: string;
  excerpt?: string;
  content?: string;
  coverImageUrl?: string;
  imageAltText?: string;
  tags?: string[];
  author?: string;
  createdAt?: string;
}

export default function BlogDetailsPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`);
        if (!res.ok) throw new Error("Blog not found");
        const json = await res.json();
        setBlog(json.data || null);
      } catch (e: any) {
        setError(e?.message || "Failed to load blog");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar forceSolid={true} />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar forceSolid={true} />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-800">Blog not found</h2>
            <p className="text-slate-500 mt-2">{error || "The blog post you are looking for doesn't exist."}</p>
            <div className="mt-6">
              <Link href="/blog" className="text-blue-600 font-medium hover:underline inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to all posts
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <Navbar forceSolid={true} />

      <main className="pt-16 md:pt-20 pb-24">
        <article className="max-w-[960px] mx-auto px-5 sm:px-8 border border-border rounded-2xl shadow-sm p-5 md:p-8">
          
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Link>
          </div>

          <header className="mb-10">
            {blog.category && (
              <div className="mb-5 inline-flex flex-wrap items-center">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest">
                  {blog.category}
                </span>
              </div>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-bold text-slate-900 leading-tight mb-3 tracking-tight break-words pb-2">
              <span className="block">{blog.title}</span>
            </h1>

            {blog.excerpt && (
              <p className="text-xl md:text-2xl text-slate-500 font-light mb-8 leading-normal border-l-4 border-slate-200 pl-6 italic">
                {blog.excerpt}
              </p>
            )}

            <div className="text-sm text-slate-500 mb-8 pb-6 border-b border-slate-100 flex items-center gap-3">
              <span className="text-sm text-slate-700">By <span className="font-medium text-slate-900">{blog.author || 'Author'}</span></span>
              <span className="opacity-40">•</span>
              <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric'}) : ''}</span>
              <span className="opacity-40">•</span>
              <span>{blog.readTime || '5 min read'}</span>
            </div>
          </header>

          <figure className="mb-14 relative w-full">
            {blog.coverImageUrl ? (
                <img
                  src={normalizeImageUrl(blog.coverImageUrl) || blog.coverImageUrl} 
                  alt={blog.imageAltText || blog.title}
                  className="w-full h-auto aspect-[16/9] md:aspect-[2/1] object-cover rounded-[1rem] shadow-lg border border-slate-100"
                />
            ) : null}
          </figure>

          <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl">
            {/* Adding Quill's editor classes to properly map the rich-text design */}
            <div className="ql-editor !p-0" dangerouslySetInnerHTML={{ __html: blog.content || '' }} />
          </div>

          {/* Adding required Quill CSS specifically for blog details styling without the toolbar */}
          <style jsx global>{`
            .ql-editor { 
              font-size: 1.05rem;
              line-height: 1.7;
              color: #1e293b;
              font-family: inherit;
            }
            .ql-editor h1 { font-size: 2.25rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: #0f172a; }
            .ql-editor h2 { font-size: 1.875rem; font-weight: 700; margin-top: 1.75rem; margin-bottom: 0.875rem; color: #0f172a; }
            .ql-editor h3 { font-size: 1.5rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #0f172a; }
            .ql-editor p { margin-bottom: 1.25rem; }
            .ql-editor a { color: #2563eb !important; text-decoration: underline; text-decoration-color: #93c5fd; text-underline-offset: 4px; transition: all 0.2s; }
            .ql-editor a:hover { color: #1d4ed8 !important; text-decoration-color: #2563eb; }
            .ql-editor blockquote { 
              border-left: 4px solid #cbd5e1; 
              padding-left: 1.5rem; 
              margin-left: 0; 
              font-style: italic; 
              color: #475569; 
              background: #f8fafc;
              padding: 1.5rem;
              border-radius: 0 0.5rem 0.5rem 0;
            }
            .ql-editor ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
            .ql-editor ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
            .ql-editor li { margin-bottom: 0.5rem; }
            .ql-editor img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); margin: 2rem auto; }
            .ql-editor code { background: #f1f5f9; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-size: 0.875em; color: #db2777; }
            .ql-editor pre.ql-syntax { background: #0f172a; color: #f8fafc; padding: 1.5rem; border-radius: 0.75rem; overflow-x: auto; margin-bottom: 1.5rem; }
            .ql-editor .ql-align-center { text-align: center; }
            .ql-editor .ql-align-right { text-align: right; }
            .ql-editor .ql-align-justify { text-align: justify; }
          `}</style>

          <hr className="my-12 border-slate-100" />

          <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {blog.tags && blog.tags.length > 0 ? (
                blog.tags.map((tag, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-100 inline-block hover:bg-slate-100 transition-colors cursor-pointer shadow-sm">
                    #{tag}
                  </span>
                ))
              ) : (
                 <span className="text-sm text-slate-400 italic">No tags associated</span>
              )}
            </div>

            {/* <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-900 mr-2">Share</span>
              <button aria-label="Share on Facebook" className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors"><Facebook className="w-4 h-4" /></button>
              <button aria-label="Share on Twitter" className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-sky-50 hover:text-sky-500 hover:border-sky-100 transition-colors"><Twitter className="w-4 h-4" /></button>
              <button aria-label="Share on LinkedIn" className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-blue-50 hover:text-blue-800 hover:border-blue-100 transition-colors"><Linkedin className="w-4 h-4" /></button>
            </div> */}
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
