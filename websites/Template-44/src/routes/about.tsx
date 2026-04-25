import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/sections/AboutSection";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      { name: "description", content: "A boutique chartered accountancy practice founded in 1998. Meet the philosophy and history behind ABC & Associates." },
      { property: "og:title", content: "About ABC & Associates" },
      { property: "og:description", content: "Twenty-seven years of careful work for India's founders, family businesses, and listed companies." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="A quiet practice, built one ledger at a time."
        subtitle="Founded in 1998 in New Delhi. Partner-led, deliberately small, and unhurried."
      />
      <AboutSection />
      <WhyChooseUs />
    </SiteLayout>
  ),
});
