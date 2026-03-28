/**
 * Shared site-admin API layer for Template 6's /admin route.
 * Uses the same VITE_API_URL as the rest of the site.
 * All calls are scoped to /api/site-admin/* and require the
 * `site_admin_token` stored in localStorage.
 */
import { API_URL } from './api';

export function getToken(): string | null {
  return localStorage.getItem('site_admin_token');
}

export async function apiFetch(path: string, options: RequestInit = {}): Promise<any> {
  const token = getToken();
  const res = await fetch(`${API_URL}/site-admin${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

/** Upload an image via the site-admin scoped upload endpoint */
export async function uploadImage(file: File): Promise<string> {
  const token = getToken();
  const formData = new FormData();
  formData.append('image', file);
  const res = await fetch(`${API_URL}/site-admin/content/upload`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Upload failed');
  return data?.data?.imageUrl as string;
}

