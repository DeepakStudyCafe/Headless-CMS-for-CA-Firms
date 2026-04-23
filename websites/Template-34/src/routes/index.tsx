import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { IntroStrip } from "@/components/site/IntroStrip";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyABC } from "@/components/site/WhyABC";
import { Process } from "@/components/site/Process";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABC & Associates · Chartered Accountants" },
      {
        name: "description",
        content:
          "ABC & Associates is a chartered accountancy firm offering audit, taxation, advisory and compliance services to growing businesses across India.",
      },
      { property: "og:title", content: "ABC & Associates · Chartered Accountants" },
      {
        property: "og:description",
        content:
          "Considered counsel for the businesses building India. Audit, taxation and corporate advisory since 2004.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <IntroStrip />
      <Testimonials />
      <WhyABC />
      <Process />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
