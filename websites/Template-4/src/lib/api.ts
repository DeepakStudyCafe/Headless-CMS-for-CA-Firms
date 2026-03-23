import axios from 'axios';

// Get API URL from env (no default fallback in code)
const API_URL = import.meta.env.VITE_API_URL;
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