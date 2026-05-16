export function TaxIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6h24v36H12V6z" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M18 16h12M18 22h12M18 28h8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 32l4 4m0-4l-4 4" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AuditIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="12" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M31 31l8 8" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 22h8M22 18v8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GstIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="32" height="28" rx="2" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M8 18h32" stroke="#D4AF37" strokeWidth="1.5" />
      <path d="M16 26h6M16 30h10M28 26h4" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AdvisoryIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6v36" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 28l10-10 6 6 8-10" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="16" r="3" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function RegistrationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="28" height="32" rx="2" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M18 18h12M18 24h12M18 30h8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 14l-4-4" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FinanceIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M24 14v20" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 18c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4 1-4 3 2 3 4 3 4-1 4-3" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

const icons: Record<string, () => JSX.Element> = {
  tax: TaxIcon,
  audit: AuditIcon,
  gst: GstIcon,
  advisory: AdvisoryIcon,
  registration: RegistrationIcon,
  finance: FinanceIcon,
};

export default function ServiceIcon({ name }: { name: string }) {
  const Icon = icons[name] || TaxIcon;
  return <Icon />;
}
