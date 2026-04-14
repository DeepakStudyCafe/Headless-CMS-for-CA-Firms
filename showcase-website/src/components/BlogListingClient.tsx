'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime?: string;
  excerpt?: string;
  coverImageUrl?: string;
  createdAt?: string;
  author?: string;
}

export default function BlogListingClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        if (!res.ok) throw new Error('Failed to fetch blogs');
        const json = await res.json();
        setBlogs(json.data || []);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  // Reset to first page when blog list changes
  useEffect(() => {
    setPage(1);
  }, [blogs.length]);

  const totalPages = Math.max(1, Math.ceil(blogs.length / ITEMS_PER_PAGE));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <section className="bg-primary-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Latest Insights</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stay updated with the newest trends, strategies, and resources for your firm.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 w-full">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center justify-center space-x-3 mb-10 max-w-lg mx-auto">
            <AlertCircle className="w-6 h-6" />
            <p className="font-medium text-lg">{error}</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
            <BookOpen className="w-16 h-16 mx-auto text-slate-300 mb-4" />
            <h3 className="text-2xl font-bold text-slate-700">No blogs found</h3>
            <p className="text-slate-500 mt-2">Come back later for new updates!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.slice((page - 1) * ITEMS_PER_PAGE, (page - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE).map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full no-underline"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    {blog.coverImageUrl ? (
                      <img src={blog.coverImageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 bg-slate-50">
                        <BookOpen size={48} className="mb-2 opacity-50" />
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">{blog.category}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">{blog.title}</h3>

                    <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-1">{blog.excerpt || 'Read more about this topic inside.'}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-200 mt-auto">
                      <div className="text-sm text-slate-500 flex items-center gap-3">
                        <span className="flex items-center"><User className="w-4 h-4 mr-2 text-slate-400" />{blog.author}</span>
                      </div>

                      <div className="text-sm text-slate-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ''}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center space-x-3">
                <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50">Prev</button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 rounded-md border text-sm ${page === i + 1 ? 'bg-primary-600 text-white' : 'bg-white'}`}>{i + 1}</button>
                ))}

                <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50">Next</button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
