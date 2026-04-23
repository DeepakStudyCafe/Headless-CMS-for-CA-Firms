import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Team } from "@/sections/Team";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Premier CA Firm" },
      { name: "description", content: "Meet the chartered accountants and advisors driving your business forward." },
      { property: "og:title", content: "Team — Premier CA Firm" },
      { property: "og:description", content: "Meet the people behind your numbers." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Our Team" title="Leadership you can trust" subtitle="Multidisciplinary partners with decades of combined expertise." />
      <Team />
    </Layout>
  );
}
