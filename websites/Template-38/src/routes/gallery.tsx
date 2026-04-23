import { createFileRoute } from "@tanstack/react-router";
import Gallery from "@/sections/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC & Associates" },
      { name: "description", content: "A glimpse inside ABC & Associates — our office, team and milestones." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <section className="bg-[color:var(--cream-deep)]/50 py-20">
        <div className="container-x text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Moments</span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl text-foreground">Gallery</h1>
        </div>
      </section>
      <Gallery />
    </div>
  ),
});
