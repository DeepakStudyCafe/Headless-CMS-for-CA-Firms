import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/sections/ContactHero';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactFormSection from '@/components/sections/ContactFormSection';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { getPageData, getWebsiteData } from '@/lib/api';
import { findSection } from '@/lib/sectionHelpers';

const Contact = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pageDataRes, websiteDataRes] = await Promise.all([
          getPageData('contact'),
          getWebsiteData()
        ]);
        setPageData(pageDataRes);
        setWebsiteData(websiteDataRes);
      } catch (error) {
        console.error("Error fetching contact page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const heroSection = findSection(pageData, 'hero');
  const infoSection = findSection(pageData, 'contact-info', 'contact');
  const formSection = findSection(pageData, 'contact-form', 'query-form');

  if (loading) return <LoadingScreen />;

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

  return (
    <div className="bg-surface min-h-screen font-manrope text-on-surface">
      <Navbar data={websiteData} />
      <main className="pb-24">
        <ContactHero data={heroSection} websiteData={websiteData} />
        <ContactInfo data={infoSection} websiteData={websiteData} />
        <ContactFormSection data={formSection} websiteData={websiteData} />
      </main>
      <Footer data={websiteData} />
    </div>
  );
};

export default Contact;
