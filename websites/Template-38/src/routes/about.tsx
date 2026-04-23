import { createFileRoute, Link } from "@tanstack/react-router";
import About from "@/sections/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      { name: "description", content: "Learn about ABC & Associates: our mission, vision and 25+ years of trusted chartered accountancy expertise." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <PageHeader title="About Our Firm" subtitle="Trusted financial expertise since 1998" />
      <About />
      <div className="container-x pb-20 text-center">
        <Link to="/contact" className="btn-primary inline-flex px-7 py-3.5 rounded-full text-sm font-medium">
          Schedule a Consultation
        </Link>
      </div>
    </div>
  ),
});

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-[color:var(--cream-deep)]/50 py-20">
      <div className="container-x text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">{subtitle}</span>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl text-foreground">{title}</h1>
      </div>
    </section>
  );
}
