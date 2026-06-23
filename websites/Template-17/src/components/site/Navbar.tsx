import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ShieldCheck, Calculator, FileText, Briefcase, TrendingUp, BookOpen, Search, Users, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPageData, getImageUrl } from "@/lib/api";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services", isDropdown: true },
  { to: "/query", label: "Query" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  Users,
  Calculator,
  Building: Briefcase,
  ShieldCheck,
  Search,
  TrendingUp,
};

export function Navbar({ websiteData }: { websiteData?: any }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState<any[]>([]);

  useEffect(() => {
    getPageData('services').then((page) => {
      const servicesSection = page?.sections?.find(s => s.type === 'services');
      if (servicesSection && servicesSection.textContent?.items) {
        setServicesDropdown(servicesSection.textContent.items);
      }
    });
  }, []);

  const logoUrl = getImageUrl(websiteData?.logo || "https://api.digitechai.in/uploads/logo.png");
  const websiteName = websiteData?.name || "ABC & Associates";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoUrl} alt={websiteName} className="h-10 w-auto" />
          <span className="hidden font-display text-lg font-semibold text-foreground sm:block">
            {websiteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <div key={l.to} className="relative group">
              {l.isDropdown ? (
                <div className="group/dropdown">
                  <Link
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary py-4"
                    activeProps={{ className: "text-primary" }}
                  >
                    {l.label} <ChevronDown className="h-4 w-4 transition-transform group-hover/dropdown:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full hidden w-[500px] grid-cols-2 gap-2 rounded-xl border border-border bg-surface p-4 shadow-lg group-hover/dropdown:grid">
                    {servicesDropdown.map((sd) => {
                      const Icon = iconMap[sd.icon] || ShieldCheck;
                      return (
                        <Link
                          key={sd.href}
                          to={sd.href || `/services/${sd.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                        >
                          <div className="rounded-md bg-primary/10 p-2 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{sd.title}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="relative py-4 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                  <span className="absolute bottom-3 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden xl:inline-flex">
            <Button className="bg-primary text-primary-foreground hover:bg-secondary">Get a Quote</Button>
          </Link>
          <button
            className="rounded-md border border-border p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-surface lg:hidden">
          <div className="mx-auto flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <div key={l.to}>
                <div className="flex items-center justify-between">
                  <Link
                    to={l.to}
                    onClick={!l.isDropdown ? () => setOpen(false) : undefined}
                    className="flex-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                    activeProps={{ className: "text-primary bg-muted" }}
                  >
                    {l.label}
                  </Link>
                  {l.isDropdown && (
                    <button
                      className="p-2 text-foreground/80"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {l.isDropdown && servicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-1 border-l-2 border-border pl-2">
                    {servicesDropdown.map((sd) => {
                      const Icon = iconMap[sd.icon] || ShieldCheck;
                      return (
                        <Link
                          key={sd.href}
                          to={sd.href || `/services/${sd.title.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                        >
                          <Icon className="h-4 w-4" />
                          {sd.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-secondary">Get a Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
