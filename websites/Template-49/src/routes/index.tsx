import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { ContactBlock } from "@/components/sections/ContactBlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Boutique Chartered Accountants" },
      { name: "description", content: "Reliable financial guidance, audit, taxation and advisory for growing businesses across India and the Gulf." },
      { property: "og:title", content: "ABC & Associates — Boutique Chartered Accountants" },
      { property: "og:description", content: "Partner-led audit, tax and advisory practice. Established 1998." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <Services />
      <WhyUs />
      <Team />
      <Gallery />
      <ContactBlock />
    </>
  );
}
