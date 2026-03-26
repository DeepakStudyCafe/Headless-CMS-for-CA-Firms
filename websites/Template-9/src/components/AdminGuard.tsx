/**
 * AdminGuard — wraps all /admin routes in Template 6.
 * Checks website status. If backend is unreachable → redirect to login.
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, WEBSITE_SLUG } from "@/lib/api";
import SiteOffline from "@/pages/admin/SiteOffline";
import AdminLocked from "@/pages/admin/AdminLocked";

type Status = "loading" | "ok" | "offline" | "locked";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("loading");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/public/website-status/${WEBSITE_SLUG}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((body) => {
        const { isActive, isAdminEnabled } = body?.data || {};
        if (isActive === false) { setStatus("offline"); return; }
        if (isAdminEnabled === false) { setStatus("locked"); return; }
        setStatus("ok");
      })
      .catch(() => {
        // Backend unreachable → send to login (which will show its own error)
        navigate("/admin/login", { replace: true });
      });
  }, [navigate]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
        <div className="w-14 h-14 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(224,140,46,0.2)", borderTopColor: "#E08C2E" }} />
      </div>
    );
  }
  if (status === "offline") return <SiteOffline />;
  if (status === "locked") return <AdminLocked />;
  return <>{children}</>;
}
