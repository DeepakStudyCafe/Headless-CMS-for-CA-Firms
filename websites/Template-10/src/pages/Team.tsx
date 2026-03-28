import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { getPageData, getWebsiteData } from "@/lib/api";

import TeamPageHero from "@/components/sections/TeamPageHero";
import TeamPageBento from "@/components/sections/TeamPageBento";
import TeamPageStaff from "@/components/sections/TeamPageStaff";
import TeamPageCTA from "@/components/sections/TeamPageCTA";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

const Team = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("team"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [loadData]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col items-center pt-32">
        <Navbar data={websiteData} />
        <section className="py-24 text-center">
          <h1 className="font-display text-4xl text-on-surface">Page Content Not Found</h1>
          <p className="mt-3 text-on-surface-variant">
            This route is not published yet in CMS. Open /admin and publish or create sections for this page.
          </p>
        </section>
        <Footer data={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, "hero"));
  const leadersSection = sectionContent(findSection(pageData, "leaders", "team-bento", "team"));
  const staffSection = sectionContent(findSection(pageData, "staff", "team-staff"));
  const cta = sectionContent(findSection(pageData, "cta"));

  const rawLeaders = Array.isArray(leadersSection.items) ? leadersSection.items : [];
  const rawStaff = Array.isArray(staffSection.items) ? staffSection.items : [];

  const leadersData = {
    ...leadersSection,
    leaders: leadersSection.leaders || rawLeaders.filter((item: any) => item?.isLeadership !== false),
  };

  const staffData = {
    ...staffSection,
    staff: staffSection.staff || rawStaff,
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar data={websiteData} />

      <main className="pt-32 pb-24">
        <TeamPageHero data={hero} />
        <TeamPageBento data={leadersData} />
        <TeamPageStaff data={staffData} />
        <TeamPageCTA data={cta} />
      </main>

      <Footer data={websiteData} />
    </div>
  );
};

export default Team;