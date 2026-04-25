import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { WhyUs } from "@/components/sections/WhyUs";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      { name: "description", content: "A boutique chartered accountancy practice founded in 1998, serving 480+ clients across India and the Gulf." },
      { property: "og:title", content: "About ABC & Associates" },
      { property: "og:description", content: "Read the firm's history, philosophy and the partners behind every engagement." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A practice built on"
        italic="quiet diligence."
        intro="Twenty-seven years on, the desk above the tea-shop is gone — the principles haven't moved an inch."
      />
      <AboutBlock />
      <WhyUs />
    </>
  );
}
