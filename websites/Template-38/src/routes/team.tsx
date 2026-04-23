import { createFileRoute } from "@tanstack/react-router";
import Team from "@/sections/Team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — ABC & Associates" },
      { name: "description", content: "Meet the chartered accountants and advisors of ABC & Associates." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <section className="bg-[color:var(--cream-deep)]/50 py-20">
        <div className="container-x text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Our People</span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl text-foreground">Meet the Team</h1>
        </div>
      </section>
      <Team />
    </div>
  ),
});
