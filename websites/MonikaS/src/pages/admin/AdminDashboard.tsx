import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, apiFetch } from "@/lib/adminApi";

const inp = "w-full text-sm rounded-lg px-3 py-2.5 focus:outline-none transition-colors";
const inpStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(224,140,46,0.2)", color: "#F5F0E8" };
const lbl = "block text-xs font-mono tracking-wider mb-1.5";
const lblStyle = { color: "rgba(245,240,232,0.4)" };

interface Page { id: string; title: string; slug: string; status: string; _count?: { sections: number }; }
interface FooterForm { phone: string; email: string; address: string; workingHours: string; description: string; facebook: string; twitter: string; linkedin: string; instagram: string; youtube: string; copyright: string; }
interface ContactForm { phone: string; email: string; address: string; workingHours: string; phone2: string; email2: string; heroTitle: string; heroSubtitle: string; mapUrl: string; ctaHeading: string; ctaSubheading: string; }
interface SiteSettings { isActive: boolean; isAdminEnabled: boolean; }

const emptyContact: ContactForm = { phone: "", email: "", address: "", workingHours: "", phone2: "", email2: "", heroTitle: "", heroSubtitle: "", mapUrl: "", ctaHeading: "", ctaSubheading: "" };
const emptyFooter: FooterForm = { phone: "", email: "", address: "", workingHours: "", description: "", facebook: "", twitter: "", linkedin: "", instagram: "", youtube: "", copyright: "" };

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState<Page[]>([]);
  const [activeTab, setActiveTab] = useState<"pages" | "footer" | "contact">("pages");
  const [footerForm, setFooterForm] = useState<FooterForm>(emptyFooter);
  const [footerSaving, setFooterSaving] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>(emptyContact);
  const [contactSaving, setContactSaving] = useState(false);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({ isActive: true, isAdminEnabled: true });
  const [settingsSaving, setSettingsSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const [showPwModal, setShowPwModal] = useState(false);
  const [pwForm, setPwForm] = useState({ current: "", next: "", confirm: "" });
  const [pwSaving, setPwSaving] = useState(false);

  const showToast = useCallback((msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  useEffect(() => {
    const token = getToken();
    if (!token) { navigate("/admin/login", { replace: true }); return; }
    Promise.all([
      apiFetch("/content/pages").then((d) => { setPages(d.data.pages || []); }),
      apiFetch("/website").then((d) => {
        const w = d.data.website;
        const fc = w.themeConfig?.footerContent || {};
        setFooterForm({ phone: w.phone || "", email: w.email || "", address: w.address || "", workingHours: w.workingHours || "", description: fc.description || "", facebook: fc.facebook || "", twitter: fc.twitter || "", linkedin: fc.linkedin || "", instagram: fc.instagram || "", youtube: fc.youtube || "", copyright: fc.copyright || "" });
        const cc = w.themeConfig?.contactContent || {};
        setContactForm({ phone: w.phone || "", email: w.email || "", address: w.address || "", workingHours: w.workingHours || "", phone2: cc.phone2 || "", email2: cc.email2 || "", heroTitle: cc.heroTitle || "", heroSubtitle: cc.heroSubtitle || "", mapUrl: cc.mapUrl || "", ctaHeading: cc.ctaHeading || "", ctaSubheading: cc.ctaSubheading || "" });
        setSiteSettings({ isActive: w.isActive ?? true, isAdminEnabled: w.isAdminEnabled ?? true });
      }),
    ]).catch(() => { localStorage.removeItem("site_admin_token"); navigate("/admin/login", { replace: true }); })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleFooterSave = async () => {
    setFooterSaving(true);
    try {
      const { phone, email, address, workingHours, ...fc } = footerForm;
      await apiFetch("/website", { method: "PUT", body: JSON.stringify({ phone, email, address, workingHours, footerContent: { description: fc.description, facebook: fc.facebook, twitter: fc.twitter, linkedin: fc.linkedin, instagram: fc.instagram, youtube: fc.youtube, copyright: fc.copyright } }) });
      showToast("Footer saved successfully");
    } catch (e: any) { showToast(e.message, "err"); } finally { setFooterSaving(false); }
  };

  const handleContactSave = async () => {
    setContactSaving(true);
    try {
      const { phone, email, address, workingHours, phone2, email2, heroTitle, heroSubtitle, mapUrl, ctaHeading, ctaSubheading } = contactForm;
      await apiFetch("/website", { method: "PUT", body: JSON.stringify({ phone, email, address, workingHours, contactContent: { phone2, email2, heroTitle, heroSubtitle, mapUrl, ctaHeading, ctaSubheading } }) });
      showToast("Contact info saved successfully");
    } catch (e: any) { showToast(e.message, "err"); } finally { setContactSaving(false); }
  };

  const handleSettingsSave = async () => {
    setSettingsSaving(true);
    try {
      await apiFetch("/website", { method: "PUT", body: JSON.stringify({ isActive: siteSettings.isActive, isAdminEnabled: siteSettings.isAdminEnabled }) });
      showToast("Site settings saved successfully");
    } catch (e: any) { showToast(e.message, "err"); } finally { setSettingsSaving(false); }
  };

  const handleLogout = async () => {
    try { await apiFetch("/logout", { method: "POST" }); } catch {}
    localStorage.removeItem("site_admin_token");
    navigate("/admin/login", { replace: true });
  };

  const handleChangePassword = async () => {
    if (pwForm.next.length < 8) { showToast("New password must be at least 8 characters", "err"); return; }
    if (pwForm.next !== pwForm.confirm) { showToast("Passwords do not match", "err"); return; }
    setPwSaving(true);
    try {
      await apiFetch("/change-password", { method: "POST", body: JSON.stringify({ currentPassword: pwForm.current, newPassword: pwForm.next }) });
      showToast("Password changed. Please log in again.");
      setTimeout(() => { localStorage.removeItem("site_admin_token"); navigate("/admin/login", { replace: true }); }, 1500);
    } catch (e: any) { showToast(e.message, "err"); } finally { setPwSaving(false); }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
      <div className="w-14 h-14 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(224,140,46,0.2)", borderTopColor: "#E08C2E" }} />
    </div>
  );

  const TABS = ["pages", "footer", "contact"] as const;

  return (
    <div className="min-h-screen font-sans" style={{ background: "#0D0D0D" }}>
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm text-white"
          style={{ background: toast.type === "ok" ? "#16a34a" : "#dc2626", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
          {toast.msg}
        </div>
      )}

      <header className="sticky top-0 z-40" style={{ background: "#111111", borderBottom: "1px solid rgba(224,140,46,0.15)" }}>
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${siteSettings.isActive ? "bg-green-400" : "bg-red-400"}`} />
            <span className="font-semibold text-sm" style={{ color: "#F5F0E8" }}>Sterling &amp; Co. — Admin Panel</span>
            {!siteSettings.isActive && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-red-500/20 text-red-400">Site Offline</span>}
            {!siteSettings.isAdminEnabled && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-500/20 text-amber-400">Admin Locked</span>}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setShowPwModal(true)} className="text-xs px-3 py-1.5 rounded-lg transition-colors" style={{ color: "rgba(245,240,232,0.5)" }}>Change Password</button>
            <button type="button" onClick={handleLogout} className="text-xs px-3 py-1.5 rounded-lg transition-all" style={{ background: "#E08C2E", color: "#0D0D0D", fontWeight: 600 }}>Logout</button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif", color: "#F5F0E8" }}>Content Management</h1>

        <div className="flex gap-1 rounded-xl p-1 mb-6 w-fit" style={{ background: "rgba(255,255,255,0.04)" }}>
          {TABS.map((tab) => (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)}
              className="text-sm px-5 py-2 rounded-lg font-medium transition-all capitalize"
              style={activeTab === tab ? { background: "#E08C2E", color: "#0D0D0D" } : { color: "rgba(245,240,232,0.45)" }}
            >{tab}</button>
          ))}
        </div>

        {activeTab === "pages" && (
          <div className="space-y-3">
            <p className="text-sm mb-4" style={{ color: "rgba(245,240,232,0.4)" }}>Select a page to edit its sections.</p>
            {pages.map((page) => (
              <button key={page.id} type="button" onClick={() => navigate(`/admin/pages/${page.id}`)}
                className="w-full rounded-xl px-5 py-4 flex items-center justify-between text-left group transition-all"
                style={{ background: "#111111", border: "1px solid rgba(224,140,46,0.1)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(224,140,46,0.08)" }}>
                    <svg className="w-4 h-4" style={{ color: "#E08C2E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: "#F5F0E8" }}>{page.title}</p>
                    <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>/{page.slug} · {page._count?.sections ?? 0} sections</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${page.status === "PUBLISHED" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>{page.status}</span>
                  <svg className="w-4 h-4" style={{ color: "rgba(224,140,46,0.4)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === "footer" && (
          <div className="rounded-xl border p-6 space-y-5" style={{ background: "#111111", borderColor: "rgba(224,140,46,0.15)" }}>
            <div>
              <h2 className="text-base font-semibold mb-1" style={{ color: "#F5F0E8" }}>Footer Content</h2>
              <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>Edit the footer description, contact details and social media links.</p>
            </div>
            <div className="space-y-4">
              <div><label className={lbl} style={lblStyle}>Footer Description</label><textarea rows={3} value={footerForm.description} onChange={(e) => setFooterForm((f) => ({ ...f, description: e.target.value }))} placeholder="Brief description shown in the footer..." className={`${inp} resize-vertical`} style={inpStyle} /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className={lbl} style={lblStyle}>Phone</label><input type="text" value={footerForm.phone} onChange={(e) => setFooterForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+91 XX XXXX XXXX" className={inp} style={inpStyle} /></div>
                <div><label className={lbl} style={lblStyle}>Email</label><input type="email" value={footerForm.email} onChange={(e) => setFooterForm((f) => ({ ...f, email: e.target.value }))} placeholder="info@sterlingco.in" className={inp} style={inpStyle} /></div>
                <div className="sm:col-span-2"><label className={lbl} style={lblStyle}>Address</label><input type="text" value={footerForm.address} onChange={(e) => setFooterForm((f) => ({ ...f, address: e.target.value }))} placeholder="Complete business address" className={inp} style={inpStyle} /></div>
                <div className="sm:col-span-2"><label className={lbl} style={lblStyle}>Working Hours</label><input type="text" value={footerForm.workingHours} onChange={(e) => setFooterForm((f) => ({ ...f, workingHours: e.target.value }))} placeholder="Mon - Sat: 9:30 AM - 6:30 PM" className={inp} style={inpStyle} /></div>
              </div>
              <div>
                <p className={lbl} style={lblStyle}>Social Media Links</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {([
                    { key: "facebook", label: "Facebook URL", ph: "https://facebook.com/..." },
                    { key: "twitter", label: "X / Twitter URL", ph: "https://x.com/..." },
                    { key: "linkedin", label: "LinkedIn URL", ph: "https://linkedin.com/..." },
                    { key: "instagram", label: "Instagram URL", ph: "https://instagram.com/..." },
                    { key: "youtube", label: "YouTube URL", ph: "https://youtube.com/..." },
                  ] as const).map(({ key, label, ph }) => (
                    <div key={key}><label className={lbl} style={lblStyle}>{label}</label><input type="url" value={(footerForm as any)[key]} onChange={(e) => setFooterForm((f) => ({ ...f, [key]: e.target.value }))} placeholder={ph} className={inp} style={inpStyle} /></div>
                  ))}
                </div>
              </div>
              <div><label className={lbl} style={lblStyle}>Copyright Text</label><input type="text" value={footerForm.copyright} onChange={(e) => setFooterForm((f) => ({ ...f, copyright: e.target.value }))} placeholder="© 2026 Sterling & Co." className={inp} style={inpStyle} /></div>
            </div>
            <button type="button" onClick={handleFooterSave} disabled={footerSaving} className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg disabled:opacity-50 transition-all" style={{ background: "#E08C2E", color: "#0D0D0D", fontWeight: 600 }}>
              {footerSaving ? <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" /> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              Save Footer
            </button>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="rounded-xl border p-6 space-y-6" style={{ background: "#111111", borderColor: "rgba(224,140,46,0.15)" }}>
            <div>
              <h2 className="text-base font-semibold mb-1" style={{ color: "#F5F0E8" }}>Contact Page</h2>
              <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>All fields here appear on the Contact Us page of the website.</p>
            </div>
            <div className="space-y-3 pb-5 border-b" style={{ borderColor: "rgba(224,140,46,0.1)" }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(245,240,232,0.4)" }}>Hero Text</p>
              <div><label className={lbl} style={lblStyle}>Page Heading (H1)</label><input type="text" value={contactForm.heroTitle} onChange={(e) => setContactForm((f) => ({ ...f, heroTitle: e.target.value }))} placeholder="e.g. Let's Connect" className={inp} style={inpStyle} /></div>
              <div><label className={lbl} style={lblStyle}>Subtitle</label><textarea rows={2} value={contactForm.heroSubtitle} onChange={(e) => setContactForm((f) => ({ ...f, heroSubtitle: e.target.value }))} placeholder="Short description below the heading..." className={`${inp} resize-vertical`} style={inpStyle} /></div>
            </div>
            <div className="space-y-3 pb-5 border-b" style={{ borderColor: "rgba(224,140,46,0.1)" }}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(245,240,232,0.4)" }}>Contact Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div><label className={lbl} style={lblStyle}>Phone</label><input type="text" value={contactForm.phone} onChange={(e) => setContactForm((f) => ({ ...f, phone: e.target.value }))} className={inp} style={inpStyle} /></div>
                <div><label className={lbl} style={lblStyle}>Phone 2 <span style={{ color: "rgba(245,240,232,0.25)" }}>(optional)</span></label><input type="text" value={contactForm.phone2} onChange={(e) => setContactForm((f) => ({ ...f, phone2: e.target.value }))} className={inp} style={inpStyle} /></div>
                <div><label className={lbl} style={lblStyle}>Email</label><input type="email" value={contactForm.email} onChange={(e) => setContactForm((f) => ({ ...f, email: e.target.value }))} className={inp} style={inpStyle} /></div>
                <div><label className={lbl} style={lblStyle}>Email 2 <span style={{ color: "rgba(245,240,232,0.25)" }}>(optional)</span></label><input type="email" value={contactForm.email2} onChange={(e) => setContactForm((f) => ({ ...f, email2: e.target.value }))} className={inp} style={inpStyle} /></div>
                <div className="sm:col-span-2"><label className={lbl} style={lblStyle}>Address</label><input type="text" value={contactForm.address} onChange={(e) => setContactForm((f) => ({ ...f, address: e.target.value }))} className={inp} style={inpStyle} /></div>
                <div className="sm:col-span-2"><label className={lbl} style={lblStyle}>Working Hours</label><input type="text" value={contactForm.workingHours} onChange={(e) => setContactForm((f) => ({ ...f, workingHours: e.target.value }))} className={inp} style={inpStyle} /></div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(245,240,232,0.4)" }}>Map & CTA</p>
              <div><label className={lbl} style={lblStyle}>Google Maps Embed URL</label><input type="url" value={contactForm.mapUrl} onChange={(e) => setContactForm((f) => ({ ...f, mapUrl: e.target.value }))} placeholder="https://maps.google.com/maps?..." className={inp} style={inpStyle} /><p className="text-xs mt-1" style={{ color: "rgba(245,240,232,0.25)" }}>Google Maps → Share → Embed a map → copy the src URL</p></div>
              <div><label className={lbl} style={lblStyle}>CTA Heading</label><input type="text" value={contactForm.ctaHeading} onChange={(e) => setContactForm((f) => ({ ...f, ctaHeading: e.target.value }))} placeholder="Prefer to Talk?" className={inp} style={inpStyle} /></div>
              <div><label className={lbl} style={lblStyle}>CTA Subheading</label><textarea rows={2} value={contactForm.ctaSubheading} onChange={(e) => setContactForm((f) => ({ ...f, ctaSubheading: e.target.value }))} placeholder="Schedule a free consultation..." className={`${inp} resize-vertical`} style={inpStyle} /></div>
            </div>
            <button type="button" onClick={handleContactSave} disabled={contactSaving} className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg disabled:opacity-50 transition-all" style={{ background: "#E08C2E", color: "#0D0D0D", fontWeight: 600 }}>
              {contactSaving ? <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" /> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              Save Contact Page
            </button>
          </div>
        )}
      </main>

      {showPwModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-sm p-6 rounded-2xl" style={{ background: "#111111", border: "1px solid rgba(224,140,46,0.2)" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#F5F0E8", fontFamily: "Playfair Display, serif" }}>Change Password</h2>
            <div className="space-y-3">
              {(["current", "next", "confirm"] as const).map((k) => (
                <div key={k}>
                  <label className={lbl} style={lblStyle}>{k === "current" ? "Current Password" : k === "next" ? "New Password (min. 8 chars)" : "Confirm New Password"}</label>
                  <input type="password" autoComplete="new-password" value={pwForm[k]} onChange={(e) => setPwForm((p) => ({ ...p, [k]: e.target.value }))} className={inp} style={inpStyle} />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-5">
              <button type="button" onClick={handleChangePassword} disabled={pwSaving} className="flex-1 text-sm py-2 rounded-lg disabled:opacity-50 transition-all" style={{ background: "#E08C2E", color: "#0D0D0D", fontWeight: 600 }}>{pwSaving ? "Saving..." : "Update Password"}</button>
              <button type="button" onClick={() => { setShowPwModal(false); setPwForm({ current: "", next: "", confirm: "" }); }} className="flex-1 text-sm py-2 rounded-lg transition-all" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(245,240,232,0.6)" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
