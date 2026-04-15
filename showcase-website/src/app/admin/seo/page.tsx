'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, Edit2, Check, X, Loader2, Save } from 'lucide-react';
import Link from 'next/link';

interface SeoData {
    pageName: string;
    titleTag: string;
    metaDescription: string;
}

interface SeoCollection {
    [key: string]: SeoData;
}

export default function AdminSeoPage() {
    const [seoData, setSeoData] = useState<SeoCollection>({});
    const [loading, setLoading] = useState(true);
    const [savingKey, setSavingKey] = useState<string | null>(null);

    // States for inline editing
    const [editingKey, setEditingKey] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<{ titleTag: string; metaDescription: string }>({ titleTag: '', metaDescription: '' });

    const router = useRouter();

    useEffect(() => {
        const t = localStorage.getItem('adminToken');
        if (!t) {
            router.push('/admin');
        } else {
            fetchSeoData();
        }
    }, [router]);

    const fetchSeoData = async () => {
        try {
            const res = await fetch('/api/seo');
            const data = await res.json();
            setSeoData(data);
        } catch (err) {
            console.error('Failed to fetch SEO data', err);
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = (key: string, data: SeoData) => {
        setEditingKey(key);
        setEditForm({ titleTag: data.titleTag || '', metaDescription: data.metaDescription || '' });
    };

    const handleCancelClick = () => {
        setEditingKey(null);
    };

    const handleSaveClick = async (key: string) => {
        setSavingKey(key);
        try {
            const currentItem = seoData[key];
            const payload = {
                [key]: {
                    ...currentItem,
                    titleTag: editForm.titleTag,
                    metaDescription: editForm.metaDescription,
                }
            };

            const res = await fetch('/api/seo', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Update failed');

            const result = await res.json();
            if (result.success) {
                setSeoData(prev => ({
                    ...prev,
                    [key]: result.data[key]
                }));
                setEditingKey(null);
            }
        } catch (err) {
            
            alert('Failed to save SEO data.');
        } finally {
            setSavingKey(null);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
    );

    return (
        <div className="min-h-screen bg-white flex flex-col text-slate-800">
            <Navbar forceSolid={true} />

            <main className="flex-grow pt-24 pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation Breadcrumb */}
                <div className="mb-6 flex items-center text-sm text-slate-500 hover:text-slate-800 transition">
                    <Link href="/admin/dashboard" className="flex items-center">
                        &larr; Back to Dashboard
                    </Link>
                </div>

                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm">
                            <Globe className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Page Meta Data</h1>
                            <p className="text-slate-500 text-sm mt-1">These tags are used by search engines for indexing and preview snippets.</p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mb-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                            <div className="flex items-center justify-between">

                                <div className="hidden sm:flex items-center text-sm text-slate-600 w-full">
                                    <div className="w-1/5 px-6 font-semibold">Page Name</div>
                                    <div className="w-1/4 px-6 font-semibold">Title Tag</div>
                                    <div className="w-2/5 px-6 font-semibold">Meta Description</div>
                                    <div className="w-[15%] px-6 font-semibold text-right">Actions</div>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left table-fixed">
                                <colgroup>
                                    <col style={{ width: '21.6%' }} />
                                    <col style={{ width: '25%' }} />
                                    <col style={{ width: '40%' }} />
                                    <col style={{ width: '16%' }} />
                                </colgroup>
                                <thead className="bg-white sm:hidden">
                                    <tr>
                                        <th className="px-6 py-16  font-semibold text-slate-600 w-1/5 whitespace-nowrap">Page Name</th>
                                        <th className="px-6 py-4 font-semibold text-slate-600 w-1/4">Title Tag</th>
                                        <th className="px-6 py-4 font-semibold text-slate-600 w-2/5">Meta Description</th>
                                        <th className="px-6 py-4 font-semibold text-slate-600 text-right w-[15%]">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {Object.entries(seoData).map(([key, data]) => {
                                        const isEditing = editingKey === key;
                                        const isSaving = savingKey === key;

                                        return (
                                            <tr key={key} className={isEditing ? "bg-slate-50/50" : "hover:bg-slate-50/30 transition"}>
                                                {/* Page Name */}
                                                <td className="px-12 py-5 align-top">
                                                    <span className="inline-flex items-center px-3 py-1 rounded bg-slate-100 text-slate-700 font-semibold text-sm uppercase tracking-wide">
                                                        {data.pageName}
                                                    </span>
                                                </td>

                                                {/* Title Tag */}
                                                <td className="px-6 py-5 align-top text-slate-700 max-w-[420px]">
                                                    {isEditing ? (
                                                        <input
                                                            type="text"
                                                            value={editForm.titleTag}
                                                            onChange={(e) => setEditForm(prev => ({ ...prev, titleTag: e.target.value }))}
                                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                                                        />
                                                    ) : (
                                                        <span className="block text-sm font-medium truncate">{data.titleTag}</span>
                                                    )}
                                                </td>

                                                {/* Meta Description */}
                                                <td className="px-6 py-5 align-top text-slate-500 max-w-[720px]">
                                                    {isEditing ? (
                                                        <textarea
                                                            rows={3}
                                                            value={editForm.metaDescription}
                                                            onChange={(e) => setEditForm(prev => ({ ...prev, metaDescription: e.target.value }))}
                                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none text-slate-700 text-sm"
                                                        />
                                                    ) : (
                                                        <span className="block text-sm text-slate-600 line-clamp-2">{data.metaDescription}</span>
                                                    )}
                                                </td>

                                                {/* Actions */}
                                                <td className="px-6 py-5 align-top text-right">
                                                    {isEditing ? (
                                                        <div className="flex items-center justify-end space-x-2">
                                                            <button
                                                                onClick={handleCancelClick}
                                                                disabled={isSaving}
                                                                className="p-2 text-slate-500 hover:bg-slate-100 rounded-md transition"
                                                                title="Cancel"
                                                            >
                                                                <X className="w-5 h-5" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleSaveClick(key)}
                                                                disabled={isSaving}
                                                                className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition text-sm disabled:opacity-75 relative shadow"
                                                            >
                                                                {isSaving ? (
                                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                                ) : (
                                                                    <Save className="w-4 h-4 mr-2" />
                                                                )}
                                                                Save
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleEditClick(key, data)}
                                                            className="inline-flex items-center px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition text-sm whitespace-nowrap shadow-sm"
                                                        >
                                                            <Edit2 className="w-4 h-4 mr-2 text-slate-500" />
                                                            Edit
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}