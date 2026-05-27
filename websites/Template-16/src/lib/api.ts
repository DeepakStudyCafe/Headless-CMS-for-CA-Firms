export const API_URL = import.meta.env.VITE_API_URL as string || 'http://localhost:8000/api';
export const WEBSITE_SLUG = 'template-16';

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
  title?: string;
  cta?: string;
  features?: string[] | any[];
  stats?: any[];
  items?: any[];
  slides?: any[];
  categories?: any[];
  info?: any;
  faqs?: any[];
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
