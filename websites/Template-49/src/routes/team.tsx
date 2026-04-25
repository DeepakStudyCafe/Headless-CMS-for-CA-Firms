import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Team } from "@/components/sections/Team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Partners — ABC & Associates" },
      { name: "description", content: "Meet the partners and senior advisors at ABC & Associates — chartered accountants, lawyers and analysts." },
      { property: "og:title", content: "The Partners — ABC & Associates" },
      { property: "og:description", content: "Senior people on every file. Meet the team." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Senior people,"
        italic="every file."
        intro="Four partners, sixteen managers, and a quiet bench of analysts."
      />
      <Team compact />
    </>
  );
}
