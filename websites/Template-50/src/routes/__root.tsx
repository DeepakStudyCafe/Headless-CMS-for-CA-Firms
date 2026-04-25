import { Outlet, Link, createRootRoute} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-navy via-navy-deep to-blue px-4 text-cream-soft">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-cream-soft">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-cream/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary !bg-cream-soft !text-navy" style={{ background: "linear-gradient(135deg, var(--cream-soft), var(--blue-light))" }}>
            Go home →
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
      { title: "ABC & Associates — Boutique Chartered Accountants" },
      { name: "description", content: "A boutique chartered accountancy practice offering audit, tax, advisory and compliance services with quiet, considered craft." },
      { name: "author", content: "ABC & Associates" },
      { property: "og:title", content: "ABC & Associates — Boutique Chartered Accountants" },
      { property: "og:description", content: "Reliable financial guidance for growing businesses, families and founders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss},
    ]}),
  
  component: RootComponent,
  notFoundComponent: NotFoundComponent});



function RootComponent() {
  return <Outlet />;
}
