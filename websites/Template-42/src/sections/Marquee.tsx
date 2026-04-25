const items = [
  "Direct Tax",
  "Indirect Tax — GST",
  "Statutory Audit",
  "Internal Audit",
  "Corporate Advisory",
  "Transaction Structuring",
  "Virtual CFO",
  "FEMA & Cross-Border",
  "Wealth & Estate",
  "Forensic Review",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-cream/40 py-5">
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-foreground/70">
            <span className="font-display text-xl md:text-2xl">{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
