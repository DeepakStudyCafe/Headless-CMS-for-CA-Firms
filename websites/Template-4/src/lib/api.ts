import axios from 'axios';

// Get API URL from env (no default fallback in code)
export const API_URL = import.meta.env.VITE_API_URL || '/api';
// Use the slug associated with the template based on env or default to template-4
const WEBSITE_SLUG = import.meta.env.VITE_WEBSITE_SLUG || 'template-4';



const api = axios.create({
  baseURL: API_URL,
});

export const getWebsiteData = async () => {
  const { data } = await api.get(`/public/websites/${WEBSITE_SLUG}`);
  return data.data.website;
};

export const getImageUrl = (path: string | null) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  if (path.startsWith('/uploads') || path.startsWith('/assets')) {
    // If API_URL is provided, derive asset base by stripping trailing /api
    const assetBase = API_URL ? API_URL.replace(/\/api\/?$/, '') : '';
    return assetBase ? `${assetBase}${path}` : path;
  }
  return path;
};

// Form submission helpers
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}) {
  try {
    const payload = {
      ...formData,
      website: import.meta.env.VITE_WEBSITE_SLUG || 'template-4'
    };
    const res = await api.post(`/forms/contact`, payload);
    return res.data;
  } catch (err: any) {
    console.error('submitContactForm error', err?.message || err);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
}

export async function submitQueryForm(formData: any) {
  try {
    const payload = {
      ...formData,
      website: import.meta.env.VITE_WEBSITE_SLUG || 'template-4'
    };
    const res = await api.post(`/forms/query`, payload);
    return res.data;
  } catch (err: any) {
    console.error('submitQueryForm error', err?.message || err);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
}

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  link: string;
  authorName?: string;
  featuredImage?: string;
}

export async function getPosts(perPage = 20): Promise<WPPost[]> {
  try {
    const { data } = await api.get(`/public/whats-new/posts?per_page=${perPage}`);
    return Array.isArray(data?.data?.posts) ? data.data.posts : [];
  } catch (err) {
    console.error('getPosts error', err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const { data } = await api.get(`/public/whats-new/post/${encodeURIComponent(slug)}`);
    return data?.success && data?.data?.post ? data.data.post : null;
  } catch (err) {
    console.error('getPostBySlug error', err);
    return null;
  }
}