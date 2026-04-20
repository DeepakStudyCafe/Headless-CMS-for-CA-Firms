import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants | Tax, Audit & Advisory" },
      {
        name: "description",
        content:
          "ABC & Associates is a trusted Chartered Accountancy firm offering tax planning, GST, audit, company registration, and business consulting across India.",
      },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      {
        property: "og:description",
        content: "Premium tax, audit and advisory services for businesses and individuals.",
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
