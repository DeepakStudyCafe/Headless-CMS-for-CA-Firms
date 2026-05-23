import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/Hero";
import { Highlights } from "@/sections/Highlights";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
import { WhyUs } from "@/sections/WhyUs";
import { Process } from "@/sections/Process";
import { Team } from "@/sections/Team";
import { Contact } from "@/sections/Contact";
import { getPageData, getPosts, WPPost } from "@/lib/api";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [pageData, setPageData] = useState<any>(null);
  const [tickerPosts, setTickerPosts] = useState<WPPost[]>([]);

  useEffect(() => {
    Promise.all([getPageData("home"), getPosts(20)]).then(([p, posts]) => {
      setPageData(p);
      setTickerPosts(posts || []);
    });
  }, []);

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;
  }

  const heroSection = pageData?.sections?.find((s: any) => s.type === "hero");
  const highlightsSection = pageData?.sections?.find((s: any) => s.type === "highlights");
  const servicesSection = pageData?.sections?.find((s: any) => s.type === "services");
  const aboutSection = pageData?.sections?.find((s: any) => s.type === "about");
  const whyUsSection = pageData?.sections?.find((s: any) => s.type === "whyus");
  const processSection = pageData?.sections?.find((s: any) => s.type === "process");
  const teamSection = pageData?.sections?.find((s: any) => s.type === "team");
  const contactSection = pageData?.sections?.find((s: any) => s.type === "contact");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {heroSection && <Hero data={heroSection} />}
        {highlightsSection && <Highlights data={highlightsSection} />}
        {servicesSection && <Services data={servicesSection} tickerPosts={tickerPosts} />}
        {aboutSection && <About data={aboutSection} />}
        {whyUsSection && <WhyUs data={whyUsSection} />}
        {processSection && <Process data={processSection} />}
        {teamSection && <Team data={teamSection} />}
        {contactSection && <Contact data={contactSection} />}
      </main>
    </div>
  );
}
