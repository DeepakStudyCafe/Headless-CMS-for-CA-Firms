import { Outlet, createRootRoute,   Link } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="label-eyebrow mb-6">Error 404</div>
        <h1 className="text-7xl font-display text-primary">Lost in the ledger</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has been filed elsewhere — or perhaps never existed.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-ocean transition-colors"
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
      {
        name: "description",
        content:
          "A boutique chartered accountancy practice offering audit, tax, advisory and virtual CFO services to growing businesses."},
      { name: "author", content: "ABC & Associates" },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      {
        property: "og:description",
        content: "Reliable financial guidance for growing businesses."},
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }]}),
  
  component: RootComponent,
  notFoundComponent: NotFoundComponent});



function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
