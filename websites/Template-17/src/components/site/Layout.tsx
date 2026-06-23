import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children, websiteData }: { children: ReactNode, websiteData?: any }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar websiteData={websiteData} />
      <Navbar websiteData={websiteData} />
      <main className="flex-1">{children}</main>
      <Footer websiteData={websiteData} />
    </div>
  );
}
