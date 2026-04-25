import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      {
        name: "description",
        content:
          "Founded in 2004, ABC & Associates is a partner-led boutique chartered accountancy practice serving founders, family enterprises and mid-market businesses.",
      },
      { property: "og:title", content: "About ABC & Associates" },
      {
        property: "og:description",
        content: "A partner-led practice built on precision, patience and long client relationships.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={<>Twenty years of <em className="italic text-ocean">considered counsel.</em></>}
        intro="ABC & Associates is a deliberately small practice. Our partners take on a limited number of engagements each year so that every client receives senior attention, in person."
      />
      <AboutSection />
      <WhyUsSection />
    </>
  );
}
