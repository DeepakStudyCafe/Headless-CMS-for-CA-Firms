import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { TeamSection } from "@/components/sections/TeamSection";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ABC & Associates" },
      {
        name: "description",
        content:
          "Meet the partners of ABC & Associates — senior chartered accountants leading audit, tax, advisory and virtual CFO engagements.",
      },
      { property: "og:title", content: "Our Partners — ABC & Associates" },
      {
        property: "og:description",
        content: "Four partners. Twelve specialists. One steady practice.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Partners"
        title={<>People who <em className="italic text-ocean">sign their work.</em></>}
        intro="Every engagement at ABC & Associates is led by a partner. Below are the four partners who guide the practice — each with a distinct specialism, all with a shared standard."
      />
      <TeamSection />
    </>
  );
}
