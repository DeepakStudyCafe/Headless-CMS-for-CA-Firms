// `VITE_API_URL` must be provided via environment (.env) and not fallback to localhost.
// This enforces using env config in production and prevents accidental local API literals.
export const API_URL = import.meta.env.VITE_API_URL as string;
export const WEBSITE_SLUG = 'r-mugunthan';

export function getImageUrl(path?: string) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;   
  let imagePath = path;
  if (!imagePath.startsWith('/uploads/') && !imagePath.startsWith('/assets/')) {
    imagePath = imagePath.replace(/^\/+/, '').replace(/^uploads\//, '');        
    imagePath = '/uploads/' + imagePath;
  }
  const baseUrl = API_URL.replace('/api', '');
  return baseUrl + imagePath;
}

export interface SectionContent {
  heading?: string;
  subheading?: string;
  description?: string;
  cta?: string;
  features?: string[];
  stats?: any[];
  items?: any[];
  [key: string]: any;
}

export interface Section {
  type: string;
  order: number;
  imageUrl?: string | null;
  textContent: SectionContent;
}

export interface PageData {
  title: string;
  slug: string;
  sections: Section[];
}

export async function getWebsiteData() {
  try {
    const url = `${API_URL}/public/website/${WEBSITE_SLUG}?t=${Date.now()}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data?.website || null;
  } catch (error) {
    console.error('Error fetching website data:', error);
    return null;
  }
}

export async function getPageData(slug: string): Promise<PageData | null> {
  try {
    let fetchSlug = slug;
    if (slug === '/' || slug === 'index' || slug === '') fetchSlug = 'home';
    
    // Remove leading slash if any
    fetchSlug = fetchSlug.replace(/^\//, '');

    const url = `${API_URL}/public/pages/${WEBSITE_SLUG}/${fetchSlug}?t=${Date.now()}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data?.page || null;
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
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
    const url = `${API_URL}/public/whats-new/posts?per_page=${perPage}&t=${Date.now()}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.data?.posts) ? json.data.posts : [];
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {     
  try {
    const url = `${API_URL}/public/whats-new/post/${encodeURIComponent(slug)}?t=${Date.now()}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.success && json?.data?.post ? json.data.post : null;
  } catch {
    return null;
  }
}

