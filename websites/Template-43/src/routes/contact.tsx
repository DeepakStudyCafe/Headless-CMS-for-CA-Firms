import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { useGsapReveal } from "@/hooks/useGsap";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Visit, call or write to ABC & Associates — Bengaluru, Mumbai and Delhi." },
      { property: "og:title", content: "Contact ABC & Associates" },
      { property: "og:description", content: "Offices in Bengaluru, Mumbai and Delhi. We respond within one business day." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Bengaluru", addr: "301, Heritage Tower, MG Road, Bengaluru 560001", main: true },
  { city: "Mumbai", addr: "1204, Nariman Bhavan, 227 Backbay Reclamation, Mumbai 400021" },
  { city: "Delhi NCR", addr: "B-42, Connaught Place Inner Circle, New Delhi 110001" },
];

function ContactPage() {
  useGsapReveal();
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Three offices. One direct line to the partners." />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            {[
              { i: Phone, l: "Telephone", v: "+91 80 4123 5678" },
              { i: Mail, l: "Email", v: "contact@abcassociates.in" },
              { i: Clock, l: "Hours", v: "Mon – Fri · 09:30 – 18:30 IST" },
            ].map((b) => (
              <div key={b.l} data-reveal className="flex gap-5 items-start border-b border-ink/15 pb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-wine flex items-center justify-center text-white shrink-0">
                  <b.i size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-1">{b.l}</div>
                  <div className="font-display text-2xl text-ink">{b.v}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid gap-6">
            {offices.map((o) => (
              <div
                key={o.city}
                data-reveal
                className={`p-10 ${o.main ? "bg-gradient-wine text-white shadow-luxe" : "bg-white shadow-soft"}`}
              >
                <div className="flex items-start gap-4">
                  <MapPin size={20} className={o.main ? "text-white" : "text-wine"} />
                  <div>
                    <div className={`text-xs uppercase tracking-[0.25em] mb-2 ${o.main ? "text-white/70" : "text-wine"}`}>
                      {o.main ? "Headquarters" : "Branch"}
                    </div>
                    <h3 className="font-display text-3xl mb-2">{o.city}</h3>
                    <p className={o.main ? "text-white/85" : "text-ink/70"}>{o.addr}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
