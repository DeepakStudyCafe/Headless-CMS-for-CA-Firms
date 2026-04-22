import { Outlet, Link, createRootRoute} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SideRailNav } from "@/components/SideRailNav";
import { TopBar } from "@/components/TopBar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The trail ends here. Let's get you back.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-brand-deep transition"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ABC & Associates — Chartered Accountants" },
      { name: "description", content: "ABC & Associates: a premium chartered accountancy firm delivering audit, tax, advisory and corporate finance with precision." },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Audit. Tax. Advisory. Built on precision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ]}),
  
  component: RootComponent,
  notFoundComponent: NotFoundComponent});



function RootComponent() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 grain opacity-60" aria-hidden />
      <SideRailNav />
      <TopBar />
      <main className="lg:pl-[88px]">
        <Outlet />
      </main>
    </div>
  );
}
