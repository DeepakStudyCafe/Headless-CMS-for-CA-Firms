import axios from 'axios';

// Get API URL from env (no default fallback in code)
const API_URL = import.meta.env.VITE_API_URL;
// Use the slug associated with the template based on env or default to template-4
const WEBSITE_SLUG = import.meta.env.VITE_WEBSITE_SLUG || 'arvind-gupta';

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
      website: import.meta.env.VITE_WEBSITE_SLUG || 'arvind-gupta'
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
      website: import.meta.env.VITE_WEBSITE_SLUG || 'arvind-gupta'
    };
    const res = await api.post(`/forms/query`, payload);
    return res.data;
  } catch (err: any) {
    console.error('submitQueryForm error', err?.message || err);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
}
