import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, WEBSITE_SLUG } from "@/lib/api";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/site-admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, websiteSlug: WEBSITE_SLUG }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }
      localStorage.setItem("site_admin_token", data.data.token);
      navigate("/admin/dashboard", { replace: true });
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#0D0D0D" }}>
      <div className="w-full max-w-sm p-8 rounded-2xl" style={{ background: "#111111", border: "1px solid rgba(224,140,46,0.15)" }}>
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(224,140,46,0.1)", border: "1px solid rgba(224,140,46,0.25)" }}>
            <svg className="w-7 h-7" style={{ color: "#E08C2E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold" style={{ fontFamily: "Playfair Display, serif", color: "#F5F0E8" }}>Admin Login</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(245,240,232,0.45)" }}>Sign in to manage your website</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-mono tracking-wider mb-1.5" style={{ color: "rgba(245,240,232,0.4)" }}>EMAIL</label>
            <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full text-sm rounded-lg px-3 py-2.5 focus:outline-none transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(224,140,46,0.2)", color: "#F5F0E8" }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-xs font-mono tracking-wider mb-1.5" style={{ color: "rgba(245,240,232,0.4)" }}>PASSWORD</label>
            <div className="relative">
              <input type={showPw ? "text" : "password"} required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm rounded-lg px-3 py-2.5 pr-10 focus:outline-none transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(224,140,46,0.2)", color: "#F5F0E8" }}
                placeholder="••••••••"
              />
              <button type="button" onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                style={{ color: "rgba(245,240,232,0.35)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showPw ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                </svg>
              </button>
            </div>
          </div>

          {error && (
            <div className="text-xs px-3 py-2 rounded-lg border" style={{ background: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.2)", color: "rgba(252,165,165,0.9)" }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={loading}
            className="w-full text-sm font-semibold py-2.5 rounded-lg transition-all mt-2 disabled:opacity-60"
            style={{ background: "#E08C2E", color: "#1A1A1A" }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                Signing in…
              </span>
            ) : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
