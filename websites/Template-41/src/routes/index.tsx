import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Query } from "@/components/sections/Query";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants | Tax, Audit & Advisory" },
      { name: "description", content: "ABC & Associates is a premier Chartered Accountancy firm offering tax planning, GST, audit, company formation, advisory and compliance services across India since 2008." },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Trusted Chartered Accountant services for modern businesses — tax, audit, GST, advisory and compliance." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Gallery />
        <Query />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
