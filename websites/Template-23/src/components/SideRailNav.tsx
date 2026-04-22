import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, Building2, Briefcase, Users, GraduationCap, Mail } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Building2 },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/team", label: "Team", icon: Users },
  { to: "/career", label: "Career", icon: GraduationCap },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function SideRailNav() {
  const { pathname } = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[88px] flex-col items-center justify-between border-r border-border bg-surface/60 backdrop-blur-xl lg:flex">
      <Link to="/" className="mt-6 flex h-14 w-14 items-center justify-center rounded-md border border-border bg-background/60 hover:border-brand transition">
        <img src="https://api.digitechai.in/uploads/logo.png" alt="ABC & Associates" className="h-9 w-auto object-contain" />
      </Link>

      <nav className="flex flex-col items-center gap-1.5">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link key={to} to={to} className="group relative flex h-12 w-12 items-center justify-center rounded-md">
              {active && (
                <motion.span
                  layoutId="rail-active"
                  className="absolute inset-0 rounded-md bg-brand/10 ring-1 ring-brand/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className={`relative h-[18px] w-[18px] transition ${active ? "text-brand-bright" : "text-muted-foreground group-hover:text-foreground"}`} />
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded bg-surface-2 px-2 py-1 text-xs text-foreground opacity-0 ring-1 ring-border transition group-hover:opacity-100">
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mb-6 flex flex-col items-center gap-3">
        <div className="vstroke h-10" />
        <span className="rotate-180 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl]">
          Est. 1998
        </span>
      </div>
    </aside>
  );
}
