/**
 * AdminGuard — wraps all /admin routes in Template 5.
 * On mount it checks /public/website-status/:slug:
 *   - isActive=false  → shows SiteOffline
 *   - isAdminEnabled=false → shows AdminLocked
 * Otherwise renders children.
 */
import { useEffect, useState } from "react";
import { API_URL, WEBSITE_SLUG } from "@/lib/api";
import SiteOffline from "@/pages/admin/SiteOffline";
import AdminLocked from "@/pages/admin/AdminLocked";

type Status = "loading" | "ok" | "offline" | "locked";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    fetch(`${API_URL}/public/website-status/${WEBSITE_SLUG}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((body) => {
        const { isActive, isAdminEnabled } = body?.data || {};
        if (isActive === false) { setStatus("offline"); return; }
        if (isAdminEnabled === false) { setStatus("locked"); return; }
        setStatus("ok");
      })
      .catch(() => setStatus("ok")); // if backend unreachable, allow through
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2A3B36]" />
      </div>
    );
  }
  if (status === "offline") return <SiteOffline />;
  if (status === "locked") return <AdminLocked />;
  return <>{children}</>;
}
