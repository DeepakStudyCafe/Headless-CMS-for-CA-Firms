import { Phone, Mail } from "lucide-react";

const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.3-1.5 1.6-1.5H16V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.4H7.2V14H9.9v8H13z"/></svg>
);
const Twitter = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.74-6.2L4.8 22H2l7-8L2 2h6.91l4.29 5.67L18.244 2zm-1.19 18h1.86L7.06 4H5.07l11.984 16z"/></svg>
);
const Linkedin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9z"/></svg>
);
const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
);

export function TopBar() {
  return (
    <div className="hidden border-b border-border bg-surface/80 text-xs text-subtle md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary">
            <Phone className="h-3.5 w-3.5" /> +91 12345 67890
          </a>
          <span className="h-3 w-px bg-border" />
          <a href="mailto:contact@abcassociates.com" className="flex items-center gap-2 hover:text-primary">
            <Mail className="h-3.5 w-3.5" /> contact@abcassociates.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  );
}
