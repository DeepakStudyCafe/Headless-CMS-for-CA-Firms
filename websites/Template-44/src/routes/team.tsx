import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { TeamSection } from "@/sections/TeamSection";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ABC & Associates" },
      { name: "description", content: "Meet the partners and senior managers behind ABC & Associates." },
      { property: "og:title", content: "Our Team — ABC & Associates" },
      { property: "og:description", content: "A small bench of partners, chosen for craft, kept for character." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Team" title="The people who sign your reports." subtitle="A bench of twelve partners and senior managers, each with at least fifteen years in practice." />
      <TeamSection />
    </SiteLayout>
  ),
});
