'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import normalizeImageUrl from '@/lib/normalizeImageUrl';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { 
  Plus, Edit, Trash2, LogOut, CheckCircle2, ChevronRight, 
  X, Image as ImageIcon, Bold, Italic, Underline, Link as LinkIcon, 
  List, ListOrdered, Quote, Heading1, Heading2, Heading3, Loader2, Info, AlertCircle,
  AlignLeft, AlignCenter, AlignRight, AlignJustify, CornerUpLeft, CornerUpRight, Globe
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// @ts-ignore: allow importing Quill CSS in this client component
import 'react-quill/dist/quill.snow.css';

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  imageAltText: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  isDraft: boolean;
  author: string;
  createdAt: string;
}

// Load react-quill dynamically (no SSR) safely outside the component to prevent unmounting
const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false, 
  loading: () => <div className="p-10 text-center text-slate-400 animate-pulse">Loading Editor...</div> 
});

export default function AdminDashboardPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState<string | null>(null);
  
  // Toast
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'loading' } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'General',
    readTime: '5 min read',
    excerpt: '',
    content: '',
    coverImageUrl: '',
    imageAltText: '',
    tags: '',
    seoTitle: '',
    seoDescription: '',
    isDraft: false,
    author: 'Kirtika Prajapati'
  });
  // Editor-specific content to avoid re-renders when other form fields change
  const [editorContent, setEditorContent] = useState<string>(formData.content);
  const [editorKey, setEditorKey] = useState<string>('editor-' + Date.now());
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const inlineImageInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    const t = localStorage.getItem('adminToken');
    if (!t) {
      router.push('/admin');
    } else {
      setToken(t);
      fetchBlogs(t);
    }
  }, [router]);

  // Initialize fallback contentEditable's innerHTML when modal opens or editorKey changes
  useEffect(() => {
    if (isModalOpen && contentRef.current) {
      contentRef.current.innerHTML = editorContent || '';
    }
  }, [isModalOpen, editorKey]);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'loading') => {
    setToast({ message, type });
    if (type !== 'loading') {
      setTimeout(() => setToast(null), 4000);
    }
  }, []);

  const fetchBlogs = async (authToken: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?isDraft=true`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      setBlogs(data.data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  // helper to set file from drag/drop or programmatic file object
  const setFileFromObject = (file: File | null) => {
    setImageFile(file);
  };

  useEffect(() => {
    if (!imageFile) {
      setImagePreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setImagePreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  // Custom image handler for Quill: uploads image and inserts into editor
  const quillImageHandler = useCallback(function (this: any) {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const fd = new FormData();
      fd.append('image', file);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/site-admin/content/upload`, {
          method: 'POST',
          headers: { Authorization: token ? `Bearer ${token}` : '' },
          body: fd,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Upload failed');
        const url = (process.env.NEXT_PUBLIC_API_URL || '').replace('/api', '') + data.data.imageUrl;
        const range = this.quill.getSelection(true);
        this.quill.insertEmbed(range.index, 'image', url);
        this.quill.setSelection(range.index + 1);
      } catch (err: any) {
        showToast(err.message || 'Image upload failed', 'error');
      }
    };
  }, [token, showToast]);

  // Quill ref and modules/formats
  const quillRef = useRef<any>(null);

  

  // Quill CSS is imported at module top to ensure toolbar and editor styles load

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['blockquote', 'code-block'],
        ['link', 'image'],
        [{ color: [] }, { background: [] }],
        ['clean']
      ],
      handlers: {
        image: quillImageHandler
      }
    },
    clipboard: { matchVisual: false }
  }), [quillImageHandler]);

  const formats = useMemo(() => [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent', 'align', 'blockquote', 'code-block',
    'link', 'image', 'color', 'background'
  ], []);

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null;
    setUploadingImage(true);
    showToast('Uploading image...', 'loading');
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/site-admin/content/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      return (process.env.NEXT_PUBLIC_API_URL || '').replace('/api', '') + data.data.imageUrl;
    } catch (err: any) {
      showToast(err.message || 'Image upload failed', 'error');
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const openEditModal = (blog: Blog) => {
    setIsEditing(true);
    setCurrentBlogId(blog.id);
    setFormData({
      title: blog.title || '',
      slug: blog.slug || '',
      category: blog.category || 'General',
      readTime: blog.readTime || '5 min read',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      coverImageUrl: blog.coverImageUrl || '',
      imageAltText: blog.imageAltText || '',
      tags: blog.tags.join(', ') || '',
      seoTitle: blog.seoTitle || '',
      seoDescription: blog.seoDescription || '',
      isDraft: blog.isDraft || false,
      author: blog.author || 'Kirtika Prajapati'
    });
    setImageFile(null);
    setEditorContent(blog.content || '');
    setEditorKey('editor-' + (blog.id || Date.now()));
    // If the blog already has a cover image URL, show it in the preview
    if (blog.coverImageUrl) {
      const raw = blog.coverImageUrl;
      setImagePreviewUrl(normalizeImageUrl(raw) || raw);
    } else {
      setImagePreviewUrl(null);
    }
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setIsEditing(false);
    setCurrentBlogId(null);
    setFormData({
      title: '',
      slug: '',
      category: 'General',
      readTime: '5 min read',
      excerpt: '',
      content: '',
      coverImageUrl: '',
      imageAltText: '',
      tags: '',
      seoTitle: '',
      seoDescription: '',
      isDraft: false,
      author: 'Kirtika Prajapati'
    });
    setEditorContent('');
    setEditorKey('editor-new-' + Date.now());
    setImageFile(null);
    setImagePreviewUrl(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    showToast('Deleting blog...', 'loading');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!res.ok) throw new Error('Failed to delete blog');
      
      showToast('Blog deleted successfully!', 'success');
      setBlogs(blogs.filter(b => b.id !== id));
    } catch (err: any) {
      showToast(err.message || 'Error occurred', 'error');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !editorContent) {
      showToast('Title and Content are required', 'error');
      return;
    }

    showToast('Saving blog...', 'loading');
    
    // First upload image if exists
    let finalImageUrl = formData.coverImageUrl;
    if (imageFile) {
      const uploadedUrl = await uploadImage();
      if (uploadedUrl) {
        finalImageUrl = uploadedUrl;
      } else {
        return; // Stopped on error
      }
    }

    const payload = {
      ...formData,
      content: editorContent,
      coverImageUrl: finalImageUrl,
    };

    try {
      const url = isEditing 
        ? `${process.env.NEXT_PUBLIC_API_URL}/blogs/${currentBlogId}`
        : `${process.env.NEXT_PUBLIC_API_URL}/blogs`;
        
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      
      const resData = await res.json();
      if (!res.ok) {
        console.error('Blog save failed:', resData);
        throw new Error(resData.error || 'Error saving blog');
      }

      console.log(isEditing ? 'Blog updated successfully:' : 'Blog created successfully:', resData);
      showToast(isEditing ? 'Blog updated successfully!' : 'Blog created successfully!', 'success');
      
      const saved = { ...resData.data, coverImageUrl: normalizeImageUrl(resData.data?.coverImageUrl) || resData.data?.coverImageUrl };
      if (isEditing) {
        setBlogs(blogs.map(b => b.id === currentBlogId ? saved : b));
      } else {
        setBlogs([saved, ...blogs]);
      }
      
      setIsModalOpen(false);
    } catch (err: any) {
      console.error('Error saving blog:', err);
      showToast(err.message || 'Error saving blog', 'error');
    }
  };

  if (!token) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar forceSolid={true} />

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-24 right-4 z-50 p-4 rounded-xl shadow-2xl flex items-center space-x-3 transition-all duration-300 transform translate-y-0 opacity-100 ${
          toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' :
          toast.type === 'error' ? 'bg-red-50 border-red-200 text-red-700' :
          'bg-blue-50 border-blue-200 text-blue-700'
        } border`}>
          {toast.type === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 
           toast.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : 
           <AlertCircle className="w-5 h-5" />}
          <p className="font-medium text-sm">{toast.message}</p>
        </div>
      )}

      {/* Main Dashboard Space */}
      <main className="flex-grow pt-24 pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-4 border-b border-slate-200 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Blog Management</h1>
            <p className="text-slate-500 mt-1">Create, edit, and organize your website's insights.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            
            <button 
              onClick={openCreateModal}
              className="inline-flex items-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl shadow-sm transition active:scale-95"
            >
              <Plus className="w-4 h-4 mr-2 -ml-1" /> Add Blog
            </button>
            <Link 
              href="/admin/seo"
              className="inline-flex items-center px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold rounded-xl shadow-sm transition active:scale-95"
            >
              <Globe className="w-4 h-4 mr-2 -ml-1" /> SEO Settings
            </Link>
            <button 
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl shadow-sm transition active:scale-95"
            >
              Log Out <LogOut className="w-4 h-4 ml-2 -mr-1" />
            </button>
          </div>
        </div>

        {/* Blog List Area */}
        {loading ? (
          <div className="flex justify-center p-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 shadow-sm">
            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">No blogs yet</h3>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">Get started by creating your first blog post to share insights with your visitors.</p>
            <button 
              onClick={openCreateModal}
              className="mt-8 inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-sm transition active:scale-95"
            >
              <Plus className="w-5 h-5 mr-2 -ml-1" /> Create the first blog
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center">
                          {blog.coverImageUrl ? (
                            <img src={normalizeImageUrl(blog.coverImageUrl) || blog.coverImageUrl} className="w-12 h-12 rounded-lg object-cover mr-4 shadow-sm border border-slate-100" alt="cover" />
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 text-slate-300 shrink-0">
                              <ImageIcon className="w-5 h-5" />
                            </div>
                          )}
                          <div>
                            <p className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-1">{blog.title}</p>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2 md:line-clamp-1">{blog.excerpt}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${blog.isDraft ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
                          {blog.isDraft ? 'Draft' : 'Published'}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-slate-500">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end space-x-2">
                           <a 
                             href={`/blog/${blog.slug}`} 
                             target="_blank"
                             className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
                             title="View live"
                           >
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                           </a>
                          <button 
                            onClick={() => openEditModal(blog)}
                            className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
                            title="Edit blog"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(blog.id)}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                            title="Delete blog"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Blog form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center p-4 sm:p-6 p-10 bg-slate-900/60 backdrop-blur-[2px] transition-opacity">
          <div className="bg-white max-w-4xl w-full h-[100vh] md:h-auto md:max-h-[100vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-slate-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 relative shrink-0">
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                {isEditing ? 'Edit Blog' : 'Create Blog'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-grow form-scrollbar relative">
              <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Title <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      placeholder="Write a compelling title"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  {/* Slug */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Slug (optional)</label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      placeholder="auto-generated-if-empty"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Category <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  {/* Read Time */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Read Time</label>
                    <input
                      type="text"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleChange}
                      placeholder="5 min read"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Short summary shown on landing blog cards"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm bg-white text-slate-900 placeholder:text-slate-400 resize-y"
                  ></textarea>
                </div>

                {/* Rich Content Mockup */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Content <span className="text-red-500">*</span></label>
                  <div className="border border-slate-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500 transition-shadow">
                    {/* Dummy Toolbar */}
                    {/* Rich editor: React-Quill when available, otherwise fallback contentEditable */}
                    <div className="bg-white">
                      {ReactQuill ? (
                        <>
                          <div className="rounded-xl border border-slate-300 bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500 transition-all">
                            <ReactQuill
                              value={editorContent}
                              onChange={(value: string) => setEditorContent(value)}
                              modules={modules}
                              formats={formats}
                              theme="snow"
                              placeholder="Write your brilliant article here..."
                              className="ql-editor-wrapper text-slate-800"
                              style={{ minHeight: 300 }}
                            />
                          </div>
                          <style jsx global>{`
                            /* Clean custom styles for Quill */
                            .ql-toolbar.ql-snow { 
                              border: 0 !important; 
                              border-bottom: 1px solid #e2e8f0 !important; 
                              background: #f8fafc;
                              padding: 12px !important;
                            }
                            .ql-container.ql-snow { 
                              border: 0 !important; 
                              box-shadow: none !important; 
                            }
                            .ql-editor { 
                              padding: 24px !important; 
                              min-height: 300px; 
                              font-size: 1.05rem;
                              line-height: 1.7;
                            }
                            .ql-editor p {
                              margin-bottom: 1em;
                            }
                            /* Custom hover states for toolbar buttons */
                            .ql-toolbar.ql-snow button:hover, .ql-toolbar.ql-snow button:focus, .ql-toolbar.ql-snow button.ql-active,
                            .ql-toolbar.ql-snow .ql-picker-label:hover, .ql-toolbar.ql-snow .ql-picker-label.ql-active, .ql-toolbar.ql-snow .ql-picker-item:hover, .ql-toolbar.ql-snow .ql-picker-item.ql-selected {
                              color: #4f46e5 !important;
                            }
                            .ql-toolbar.ql-snow .ql-stroke {
                              stroke: #64748b;
                            }
                            .ql-toolbar.ql-snow button:hover .ql-stroke, .ql-toolbar.ql-snow button:focus .ql-stroke, .ql-toolbar.ql-snow button.ql-active .ql-stroke,
                            .ql-toolbar.ql-snow .ql-picker-label:hover .ql-stroke, .ql-toolbar.ql-snow .ql-picker-label.ql-active .ql-stroke, .ql-toolbar.ql-snow .ql-picker-item:hover .ql-stroke, .ql-toolbar.ql-snow .ql-picker-item.ql-selected .ql-stroke {
                              stroke: #4f46e5 !important;
                            }
                            .ql-toolbar.ql-snow .ql-fill {
                              fill: #64748b;
                            }
                            .ql-toolbar.ql-snow button:hover .ql-fill, .ql-toolbar.ql-snow button:focus .ql-fill, .ql-toolbar.ql-snow button.ql-active .ql-fill,
                            .ql-toolbar.ql-snow .ql-picker-label:hover .ql-fill, .ql-toolbar.ql-snow .ql-picker-label.ql-active .ql-fill, .ql-toolbar.ql-snow .ql-picker-item:hover .ql-fill, .ql-toolbar.ql-snow .ql-picker-item.ql-selected .ql-fill {
                              fill: #4f46e5 !important;
                            }
                          `}</style>
                        </>
                      ) : (
                        <div
                          ref={contentRef}
                          contentEditable
                          suppressContentEditableWarning
                          onInput={(e) => setEditorContent((e.target as HTMLDivElement).innerHTML)}
                          className="w-full px-4 py-4 min-h-[250px] focus:outline-none resize-y text-slate-900 bg-white placeholder:text-slate-400 text-sm md:text-base border-none"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Media */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl relative">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Image URL (optional)</label>
                    <input
                      type="url"
                      name="coverImageUrl"
                      value={formData.coverImageUrl}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm bg-white text-slate-900 placeholder:text-slate-400 mb-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Image Alt-Text (optional)</label>
                    <input
                      type="text"
                      name="imageAltText"
                      value={formData.imageAltText}
                      onChange={handleChange}
                      placeholder="Describe the image"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Upload box spanning full width */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Or upload image</label>
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        const f = e.dataTransfer?.files?.[0] ?? null;
                        if (f) setFileFromObject(f as File);
                      }}
                      className={
                        `relative border-2 border-dashed border-slate-300 rounded-lg bg-white text-slate-500 w-full ${imagePreviewUrl ? 'h-56 p-0' : 'p-6'}`
                      }
                    >
                      <input
                        ref={inlineImageInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />

                      {imagePreviewUrl ? (
                        <div className="w-full h-full overflow-hidden rounded-md relative">
                          <img src={imagePreviewUrl} alt="Preview" className="object-cover w-full h-full" />
                          <div className="absolute top-2 right-2 flex space-x-2">
                            <button type="button" onClick={() => inlineImageInputRef.current?.click()} className="bg-white/90 text-slate-800 px-2 py-1 rounded-md text-xs border border-slate-200 hover:bg-white">
                              Change
                            </button>
                            <button type="button" onClick={() => { setImageFile(null); setImagePreviewUrl(null); setFormData(prev => ({ ...prev, coverImageUrl: '' })); }} className="bg-white/90 text-red-600 px-2 py-1 rounded-md text-xs border border-red-100 hover:bg-red-50">
                              Remove
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary-600 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 1 1 0-8 5 5 0 0 1 9.9 1A3.5 3.5 0 0 1 20.5 12H19" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6m0-6l-2 2m2-2 2 2" />
                          </svg>
                          <p className="text-sm text-slate-500">Drag and drop here or <span onClick={() => inlineImageInputRef.current?.click()} className="text-primary-600 underline cursor-pointer">browse</span></p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tags (comma separated)</label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      placeholder="productivity, team, automation"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm bg-white text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">SEO Title (optional)</label>
                    <input
                      type="text"
                      name="seoTitle"
                      value={formData.seoTitle}
                      onChange={handleChange}
                      placeholder="Custom SEO title"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm bg-white text-slate-900"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">SEO Description (optional)</label>
                    <input
                      type="text"
                      name="seoDescription"
                      value={formData.seoDescription}
                      onChange={handleChange}
                      placeholder="Custom SEO description"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm bg-white text-slate-900"
                    />
                  </div>
                </div>

                {/* Draft check */}
                <div className="flex items-center space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="isDraft"
                    name="isDraft"
                    checked={formData.isDraft}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 bg-slate-100 border-slate-300 rounded focus:ring-primary-500 focus:ring-2"
                  />
                  <label htmlFor="isDraft" className="text-sm font-semibold text-slate-700 flex items-center cursor-pointer">
                    <span className="mr-2">Save as draft</span>
                  </label>
                </div>
              </form>
            </div>
            
            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end items-center gap-3 shrink-0">
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 text-slate-600 font-semibold bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors active:scale-95 shadow-sm text-sm"
              >
                Cancel
              </button>
              <button 
                form="blog-form" 
                type="submit" 
                disabled={uploadingImage}
                className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-70 flex items-center space-x-2 text-sm"
              >
                {uploadingImage && <Loader2 className="w-4 h-4 animate-spin -ml-1 mr-1" />}
                <span>{isEditing ? 'Save Changes' : 'Create Blog'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
