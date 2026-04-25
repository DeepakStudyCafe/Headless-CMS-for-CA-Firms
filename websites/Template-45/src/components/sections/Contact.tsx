import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[color:var(--mint)]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)] font-medium">
              Visit us
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
              Walk in for a <span className="italic text-[color:var(--wine)]">conversation</span>.
            </h2>
            <p className="mt-6 text-[color:var(--ink)]/70 max-w-md leading-relaxed">
              Our doors are open Monday to Saturday. Coffee on us — bring your toughest
              tax question.
            </p>

            <div className="mt-10 space-y-6">
              <Item icon={MapPin} title="Head Office">
                Level 8, One BKC Tower<br />
                Bandra Kurla Complex, Mumbai 400051
              </Item>
              <Item icon={Phone} title="Phone">
                +91 98200 12345<br />+91 22 4055 8800
              </Item>
              <Item icon={Mail} title="Email">
                hello@abcca.in<br />careers@abcca.in
              </Item>
              <Item icon={Clock} title="Hours">
                Mon — Fri · 9:30 AM to 7:00 PM<br />
                Sat · 10:00 AM to 3:00 PM
              </Item>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[480px] shadow-[var(--shadow-soft)]">
              <iframe
                title="ABC & Associates Office Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.864%2C19.061%2C72.876%2C19.071&layer=mapnik&marker=19.066%2C72.870"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 glass rounded-2xl p-5 max-w-xs shadow-[var(--shadow-soft)]">
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--wine)]">
                  Pinned location
                </div>
                <div className="mt-1 font-display text-lg">ABC & Associates</div>
                <div className="text-xs text-[color:var(--ink)]/60 mt-1">
                  One BKC, Mumbai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--ink)] text-[color:var(--cream)]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink)]/60">{title}</div>
        <div className="mt-1 text-sm text-[color:var(--ink)]/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
