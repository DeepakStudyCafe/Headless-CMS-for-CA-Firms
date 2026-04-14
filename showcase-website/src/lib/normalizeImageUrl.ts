export default function normalizeImageUrl(raw?: string | null): string | null {
  if (!raw) return null;
  let s = raw.trim();
  const base = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/api\/?$/i, '');
  // Fix malformed protocol like 'https:/.domain.com' -> 'https://domain.com'
  s = s.replace(/^(https?:)\/.?/i, (m, p1) => p1 + '//');

  // If already absolute URL now
  if (/^https?:\/\//i.test(s)) {
    // remove accidental dots immediately after protocol: 'https:////.example' -> 'https://example'
    s = s.replace(/^(https?:\/\/)+\.+/, '$1').replace(/^(https?:\/\/)\/+/, '$1');
    try {
      const parsed = new URL(s);
      if (base) {
        const baseHost = new URL(base).hostname; // e.g. api.digitechai.in
        const baseRoot = baseHost.split('.').slice(-2).join('.'); // digitechai.in
        if (parsed.hostname !== baseHost && parsed.hostname.endsWith(baseRoot)) {
          // keep path/query/hash but use the base origin (ensures api. prefix)
          return new URL(parsed.pathname + parsed.search + parsed.hash, base).toString();
        }
      }
      return parsed.toString();
    } catch (e) {
      return s;
    }
  }

  if (/^\/\//.test(s)) return 'https:' + s;
  // strip leading dots/slashes
  s = s.replace(/^[\.\/]+/, '');

  // If base is available and the raw contains the same hostname (even malformed), use base + remaining path
  if (base) {
    try {
      const hostname = new URL(base).hostname; // e.g. api.digitechai.in
      if (s.includes(hostname)) {
        const idx = s.indexOf(hostname);
        const path = s.slice(idx + hostname.length);
        return base + (path.startsWith('/') ? path : '/' + path);
      }
    } catch (e) {
      // ignore and fallthrough
    }
  }

  // If looks like host/path, prefix https://
  if (/^[a-z0-9.-]+\//i.test(s)) return 'https://' + s;

  if (!base) return s.startsWith('/') ? s : '/' + s;
  const sep = s.startsWith('/') ? '' : '/';
  return base + sep + s;
}
