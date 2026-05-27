import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { useState, useEffect } from "react";
import { getPageData } from "@/lib/api";

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
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPageData('home').then((data) => {
      setPageData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const servicesSection = pageData?.sections?.find((s: any) => s.type === 'services');
  const textImageSection = pageData?.sections?.find((s: any) => s.type === 'text-image');
  const whyUsSection = pageData?.sections?.find((s: any) => s.type === 'why-us');
  const teamSection = pageData?.sections?.find((s: any) => s.type === 'team');
  const contactSection = pageData?.sections?.find((s: any) => s.type === 'contact');

  return (
    <>
      <Hero data={heroSection} />
      <About data={textImageSection} />
      <Services data={servicesSection} />
      <WhyUs data={whyUsSection} />
      <Team data={teamSection} />
      <Contact data={contactSection} />
    </>
  );
}
