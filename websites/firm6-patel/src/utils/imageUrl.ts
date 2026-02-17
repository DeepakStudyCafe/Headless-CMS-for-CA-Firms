// utils/imageUrl.ts
// Returns correct backend image URL for local and production
export function getBackendImageUrl(path: string) {
  if (!path) return '';
  if (path.startsWith('http')) return path;

  let baseUrl = '';
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) {
    baseUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/api$/, '');
  } else if (process.env.NEXT_PUBLIC_API_URL) {
    baseUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/api$/, '');
  }

  if (!baseUrl) return '';
  return `${baseUrl}${path.startsWith('/') ? path : '/' + path}`;
}
