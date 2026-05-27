import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useState, useEffect } from 'react';
import { getWebsiteData } from '@/lib/api';
import { useLocation } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWebsiteData().then((data) => {
      setWebsiteData(data);
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

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      {!isAdmin && <TopBar websiteData={websiteData} />}
      {!isAdmin && <Navbar websiteData={websiteData} />}
      <main className="flex-grow">
        <Outlet context={{ websiteData }} />
      </main>
      {!isAdmin && <Footer websiteData={websiteData} />}
    </div>
  );
}
