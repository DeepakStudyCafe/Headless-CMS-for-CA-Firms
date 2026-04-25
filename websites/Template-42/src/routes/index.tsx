import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/sections/Hero";
import { Marquee } from "@/sections/Marquee";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";
import { Team } from "@/sections/Team";
import { Gallery } from "@/sections/Gallery";
import { Query } from "@/sections/Query";
import { Career } from "@/sections/Career";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Boutique Chartered Accountants" },
      {
        name: "description",
        content:
          "ABC & Associates is a boutique chartered accountancy practice offering tax, audit, virtual CFO and corporate advisory services across Mumbai, Bengaluru and Pune.",
      },
      { property: "og:title", content: "ABC & Associates — Boutique Chartered Accountants" },
      {
        property: "og:description",
        content:
          "Reliable financial guidance for growing businesses. Tax, audit, virtual CFO and advisory — partner-led, transparently priced.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Gallery />
      <Query />
      <Career />
      <Contact />
      <Footer />
    </main>
  );
}
