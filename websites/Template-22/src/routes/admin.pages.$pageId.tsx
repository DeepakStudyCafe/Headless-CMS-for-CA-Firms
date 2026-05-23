import { useState, useEffect } from "react";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import { getToken, apiFetch, uploadImage } from "@/lib/adminApi";
import AdminGuard from "@/components/AdminGuard";

export const Route = createFileRoute('/admin/pages/$pageId')({
  component: () => <AdminGuard><AdminPageEditor /></AdminGuard>,
});

interface Section {
  id: string;
  type: string;
  imageUrl: string | null;
  textContent: any;
  order: number;
}

const inp = "w-full text-sm rounded-lg px-3 py-2.5 focus:outline-none transition-colors";
const inpStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(224,140,46,0.2)", color: "#F5F0E8" };
const lbl = "block text-xs font-mono tracking-wider mb-1.5";
const lblStyle = { color: "rgba(245,240,232,0.4)" };

function AdminPageEditor() {
  const { pageId: id } = Route.useParams();
  const navigate = useNavigate();
  const [sections, setSections] = useState<Section[]>([]);
  const [pageTitle, setPageTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);

  const showToast = (msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    if (!getToken()) { navigate({ to: "/admin/login", replace: true }); return; }
    apiFetch(`/content/pages/${id}`)
      .then((d) => {
        const page = d.data.page;
        setPageTitle(page.title);
        setSections(page.sections || []);
      })
      .catch(() => showToast("Failed to load page", "err"))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const updateSection = (sectionId: string, field: string, value: any) => {
    setSections((prev) =>
      prev.map((s) => {
        if (s.id !== sectionId) return s;
        if (field === "textContent") return { ...s, textContent: { ...s.textContent, ...value } };
        return { ...s, [field]: value };
      })
    );
  };

  const handleImageUpload = async (sectionId: string, file: File, itemIndex?: number, itemField = "image", listField = "items") => {
    try {
      const imageUrl = await uploadImage(file);
      if (itemIndex !== undefined) {
        setSections((prev) =>
          prev.map((s) => {
            if (s.id !== sectionId) return s;
            const items = [...(s.textContent?.[listField] || [])];
            items[itemIndex] = { ...items[itemIndex], [itemField]: imageUrl };
            return { ...s, textContent: { ...s.textContent, [listField]: items } };
          })
        );
      } else {
        updateSection(sectionId, "imageUrl", imageUrl);
      }
      showToast("Image uploaded");
    } catch {
      showToast("Upload failed", "err");
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await Promise.all(
        sections.map((s) =>
          apiFetch(`/content/sections/${s.id}`, {
            method: "PUT",
            body: JSON.stringify({ imageUrl: s.imageUrl, textContent: s.textContent }),
          })
        )
      );
      showToast("All sections saved successfully");
    } catch (e: any) {
      showToast(e.message || "Save failed", "err");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
        <div className="w-14 h-14 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(224,140,46,0.2)", borderTopColor: "#E08C2E" }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans" style={{ background: "#0D0D0D" }}>
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm text-white"
          style={{ background: toast.type === "ok" ? "#16a34a" : "#dc2626", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
          {toast.msg}
        </div>
      )}

      <header className="sticky top-0 z-40" style={{ background: "#111111", borderBottom: "1px solid rgba(224,140,46,0.15)" }}>
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => navigate({ to: "/admin/dashboard" })}
              className="text-xs px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >← Back</button>
            <span className="font-semibold text-sm" style={{ color: "#F5F0E8" }}>{pageTitle}</span>
          </div>
          <button type="button" onClick={handleSave} disabled={saving}
            className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg disabled:opacity-50 transition-all"
            style={{ background: "#E08C2E", color: "#0D0D0D", fontWeight: 600 }}
          >
            {saving && <span className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-current" />}
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {sections.map((section, idx) => (
          <div key={section.id} className="rounded-xl border overflow-hidden" style={{ background: "#111111", borderColor: "rgba(224,140,46,0.12)" }}>
            <div className="px-5 py-3 flex items-center gap-2" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(224,140,46,0.08)" }}>
              <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "rgba(245,240,232,0.35)" }}>Section {idx + 1}</span>
              <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ background: "rgba(224,140,46,0.1)", color: "#E08C2E" }}>{section.type}</span>
            </div>
            <div className="p-5 space-y-4">

              {/* Main Image Upload for specific sections */}
              {(section.type === "hero" || section.type === "about" || section.type === "text-image") && (
                <div>
                  <label className={lbl} style={lblStyle}>Section Image</label>
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border-2 border-dashed group" style={{ borderColor: "rgba(224,140,46,0.25)" }}>
                    {section.imageUrl ? (
                      <>
                        <img src={section.imageUrl} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <label className="cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm" style={{ background: "#E08C2E", color: "#0D0D0D" }}>
                            Change Image
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f); }} />
                          </label>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <label className="cursor-pointer flex flex-col items-center gap-1 text-sm" style={{ color: "rgba(245,240,232,0.3)" }}>
                          Click to upload image
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f); }} />
                        </label>
                      </div>
                    )}
                  </div>
                  {section.imageUrl && <input type="text" value={section.imageUrl} onChange={(e) => updateSection(section.id, "imageUrl", e.target.value)} placeholder="Or paste image URL..." className={`${inp} mt-2`} style={inpStyle} />}
                </div>
              )}

              {/* Field Renderer Switch based on section.type */}
              
              {section.type === "hero" && (
                <>
                  <div><label className={lbl} style={lblStyle}>Est. Text</label><input value={section.textContent?.est || ""} onChange={(e) => updateSection(section.id, "textContent", { est: e.target.value })} className={inp} placeholder="Est. 2008" style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} placeholder="Heading..." style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Subheading (optional)</label><input value={section.textContent?.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} placeholder="Subheading..." style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={3} value={section.textContent?.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} placeholder="Description..." style={inpStyle} /></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className={lbl} style={lblStyle}>Primary CTA</label><input value={section.textContent?.ctaPrimary || ""} onChange={(e) => updateSection(section.id, "textContent", { ctaPrimary: e.target.value })} className={inp} placeholder="Button text..." style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Secondary CTA</label><input value={section.textContent?.ctaSecondary || ""} onChange={(e) => updateSection(section.id, "textContent", { ctaSecondary: e.target.value })} className={inp} placeholder="Button text..." style={inpStyle} /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className={lbl} style={lblStyle}>Stats Text (e.g. 15+ yrs)</label><input value={section.textContent?.statsText || ""} onChange={(e) => updateSection(section.id, "textContent", { statsText: e.target.value })} className={inp} placeholder="15+ yrs" style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Stats Sub (e.g. of trusted practice)</label><input value={section.textContent?.statsSub || ""} onChange={(e) => updateSection(section.id, "textContent", { statsSub: e.target.value })} className={inp} placeholder="of practice" style={inpStyle} /></div>
                  </div>
                </>
              )}

              {section.type === "highlights" && (
                <>
                  <label className={lbl} style={lblStyle}>Highlight Items</label>
                  <div className="space-y-3">
                    {(section.textContent?.items || []).map((item: any, i: number) => (
                      <div key={i} className="flex gap-2 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Icon</label><input value={item.icon || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, icon: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} placeholder="Award" style={inpStyle} /></div>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Value</label><input value={item.value || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, value: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} placeholder="15+" style={inpStyle} /></div>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Label</label><input value={item.label || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, label: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} placeholder="Years" style={inpStyle} /></div>
                        <button onClick={() => { const items = (section.textContent?.items || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { items }); }} className="text-red-400 text-xs mt-4">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { items: [...(section.textContent?.items || []), { icon: "", value: "", label: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Highlight</button>
                  </div>
                </>
              )}

              {section.type === "about" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className={lbl} style={lblStyle}>Est Value</label><input value={section.textContent?.estVal || ""} onChange={(e) => updateSection(section.id, "textContent", { estVal: e.target.value })} className={inp} placeholder="2008" style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Est Label</label><input value={section.textContent?.estLabel || ""} onChange={(e) => updateSection(section.id, "textContent", { estLabel: e.target.value })} className={inp} placeholder="ESTABLISHED" style={inpStyle} /></div>
                  </div>
                  <div><label className={lbl} style={lblStyle}>Subheading</label><input value={section.textContent?.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} placeholder="Who We Are" style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} placeholder="Heading" style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={3} value={section.textContent?.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} placeholder="Description..." style={inpStyle} /></div>
                  <div>
                    <label className={lbl} style={lblStyle}>Bullet Points</label>
                    <div className="space-y-2">
                      {(section.textContent?.points || []).map((pt: string, i: number) => (
                        <div key={i} className="flex gap-2">
                          <input value={pt} onChange={(e) => { const points = [...(section.textContent?.points || [])]; points[i] = e.target.value; updateSection(section.id, "textContent", { points }); }} className={`${inp} flex-1`} style={inpStyle} />
                          <button onClick={() => { const points = (section.textContent?.points || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { points }); }} className="text-red-400 text-xs">✕</button>
                        </div>
                      ))}
                      <button onClick={() => updateSection(section.id, "textContent", { points: [...(section.textContent?.points || []), ""] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Point</button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div><label className={lbl} style={lblStyle}>Values Heading</label><input value={section.textContent?.valuesHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { valuesHeading: e.target.value })} className={inp} placeholder="Core Values" style={inpStyle} /></div>
                    <label className={lbl} style={{ ...lblStyle, marginTop: "1rem" }}>Values</label>
                    <div className="space-y-3">
                      {(section.textContent?.values || []).map((val: any, i: number) => (
                        <div key={i} className="flex gap-2 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                          <div className="w-1/4"><label className={lbl} style={lblStyle}>Icon</label><input value={val.icon || ""} onChange={(e) => { const values = [...(section.textContent?.values || [])]; values[i] = { ...val, icon: e.target.value }; updateSection(section.id, "textContent", { values }); }} className={inp} style={inpStyle} /></div>
                          <div className="w-1/4"><label className={lbl} style={lblStyle}>Title</label><input value={val.title || ""} onChange={(e) => { const values = [...(section.textContent?.values || [])]; values[i] = { ...val, title: e.target.value }; updateSection(section.id, "textContent", { values }); }} className={inp} style={inpStyle} /></div>
                          <div className="w-1/2"><label className={lbl} style={lblStyle}>Desc</label><input value={val.desc || ""} onChange={(e) => { const values = [...(section.textContent?.values || [])]; values[i] = { ...val, desc: e.target.value }; updateSection(section.id, "textContent", { values }); }} className={inp} style={inpStyle} /></div>
                          <button onClick={() => { const values = (section.textContent?.values || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { values }); }} className="text-red-400 text-xs mt-4">✕</button>
                        </div>
                      ))}
                      <button onClick={() => updateSection(section.id, "textContent", { values: [...(section.textContent?.values || []), { icon: "", title: "", desc: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Value</button>
                    </div>
                  </div>
                </>
              )}

              {section.type === "services" && (
                <>
                  <div><label className={lbl} style={lblStyle}>Subheading</label><input value={section.textContent?.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} placeholder="Our Expertise" style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} placeholder="Heading" style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={section.textContent?.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} placeholder="Description..." style={inpStyle} /></div>
                  <label className={lbl} style={lblStyle}>Service Items</label>
                  <div className="space-y-3">
                    {(section.textContent?.items || []).map((item: any, i: number) => (
                      <div key={i} className="p-3 rounded-lg border space-y-2" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(224,140,46,0.1)" }}>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-white/40">Service {i + 1}</span>
                          <button onClick={() => { const items = (section.textContent?.items || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { items }); }} className="text-red-400 text-xs">Remove</button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div><label className={lbl} style={lblStyle}>Title/Name</label><input value={item.title || item.name || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, title: e.target.value, name: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                          <div><label className={lbl} style={lblStyle}>Icon</label><input value={item.icon || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, icon: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                        </div>
                        <div><label className={lbl} style={lblStyle}>Path / Link (optional)</label><input value={item.path || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, path: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                        <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={item.desc || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, desc: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={`${inp} resize-vertical`} style={inpStyle} /></div>
                        <div className="flex items-center gap-2 mt-2">
                          <input type="checkbox" checked={item.featured || false} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, featured: e.target.checked }; updateSection(section.id, "textContent", { items }); }} />
                          <label className="text-xs text-white/60">Featured?</label>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { items: [...(section.textContent?.items || []), { title: "", icon: "", desc: "", path: "", featured: false }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Service</button>
                  </div>
                </>
              )}

              {section.type === "whyus" && (
                <>
                  <div><label className={lbl} style={lblStyle}>Subheading</label><input value={section.textContent?.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <label className={lbl} style={lblStyle}>Why Us Items</label>
                  <div className="space-y-3">
                    {(section.textContent?.items || []).map((item: any, i: number) => (
                      <div key={i} className="flex gap-2 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <div className="w-1/4"><label className={lbl} style={lblStyle}>Icon</label><input value={item.icon || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, icon: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                        <div className="w-1/4"><label className={lbl} style={lblStyle}>Title</label><input value={item.title || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, title: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                        <div className="w-1/2"><label className={lbl} style={lblStyle}>Desc</label><input value={item.desc || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, desc: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                        <button onClick={() => { const items = (section.textContent?.items || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { items }); }} className="text-red-400 text-xs mt-4">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { items: [...(section.textContent?.items || []), { icon: "", title: "", desc: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Why Us Item</button>
                  </div>
                </>
              )}

              {section.type === "process" && (
                <>
                  <div><label className={lbl} style={lblStyle}>Subheading</label><input value={section.textContent?.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <label className={lbl} style={lblStyle}>Process Steps</label>
                  <div className="space-y-3">
                    {/* Support both 'steps' and 'items' array structures based on the seed data */}
                    {((section.textContent?.steps || section.textContent?.items) || []).map((step: any, i: number) => (
                      <div key={i} className="flex gap-2 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <div className="w-1/4"><label className={lbl} style={lblStyle}>Number/Index</label><input value={step.n || ""} onChange={(e) => { const arr = [...((section.textContent?.steps || section.textContent?.items) || [])]; arr[i] = { ...step, n: e.target.value }; updateSection(section.id, "textContent", { [section.textContent?.steps ? 'steps' : 'items']: arr }); }} className={inp} placeholder="01" style={inpStyle} /></div>
                        <div className="w-1/4"><label className={lbl} style={lblStyle}>Title</label><input value={step.title || ""} onChange={(e) => { const arr = [...((section.textContent?.steps || section.textContent?.items) || [])]; arr[i] = { ...step, title: e.target.value }; updateSection(section.id, "textContent", { [section.textContent?.steps ? 'steps' : 'items']: arr }); }} className={inp} style={inpStyle} /></div>
                        <div className="w-1/2"><label className={lbl} style={lblStyle}>Description</label><input value={step.desc || step.description || ""} onChange={(e) => { const arr = [...((section.textContent?.steps || section.textContent?.items) || [])]; arr[i] = { ...step, desc: e.target.value, description: e.target.value }; updateSection(section.id, "textContent", { [section.textContent?.steps ? 'steps' : 'items']: arr }); }} className={inp} style={inpStyle} /></div>
                        <button onClick={() => { const arr = ((section.textContent?.steps || section.textContent?.items) || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { [section.textContent?.steps ? 'steps' : 'items']: arr }); }} className="text-red-400 text-xs mt-4">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { [section.textContent?.steps ? 'steps' : 'items']: [...((section.textContent?.steps || section.textContent?.items) || []), { n: "", title: "", desc: "", description: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Step</button>
                  </div>
                </>
              )}

              {section.type === "text-image" && (
                <>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={4} value={section.textContent?.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} style={inpStyle} /></div>
                  <div>
                    <label className={lbl} style={lblStyle}>Features List</label>
                    <div className="space-y-3">
                      {(section.textContent?.features || []).map((feat: any, i: number) => (
                        <div key={i} className="flex gap-2 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                          <div className="w-1/3"><label className={lbl} style={lblStyle}>Title</label><input value={typeof feat === 'string' ? feat : (feat?.title || "")} onChange={(e) => { const features = [...(section.textContent?.features || [])]; features[i] = { ...(typeof feat === 'string' ? {title: feat} : feat), title: e.target.value }; updateSection(section.id, "textContent", { features }); }} className={inp} style={inpStyle} /></div>
                          <div className="w-2/3"><label className={lbl} style={lblStyle}>Description</label><input value={feat?.description || feat?.desc || ""} onChange={(e) => { const features = [...(section.textContent?.features || [])]; features[i] = { ...(typeof feat === 'string' ? {title: feat} : feat), description: e.target.value }; updateSection(section.id, "textContent", { features }); }} className={inp} style={inpStyle} /></div>
                          <button onClick={() => { const features = (section.textContent?.features || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { features }); }} className="text-red-400 text-xs mt-4">✕</button>
                        </div>
                      ))}
                      <button onClick={() => updateSection(section.id, "textContent", { features: [...(section.textContent?.features || []), {title: "", description: ""}] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Feature</button>
                    </div>
                  </div>
                </>
              )}

              {section.type === "cta" && (
                <>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={section.textContent?.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} style={inpStyle} /></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className={lbl} style={lblStyle}>Button Text</label><input value={section.textContent?.ctaText || ""} onChange={(e) => updateSection(section.id, "textContent", { ctaText: e.target.value })} className={inp} style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Button Link</label><input value={section.textContent?.ctaLink || ""} onChange={(e) => updateSection(section.id, "textContent", { ctaLink: e.target.value })} className={inp} style={inpStyle} /></div>
                  </div>
                </>
              )}

              {section.type === "team" && (
                <>
                  <div><label className={lbl} style={lblStyle}>Subheading</label><input value={section.textContent?.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={section.textContent?.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} style={inpStyle} /></div>
                  <label className={lbl} style={lblStyle}>Team Members</label>
                  <div className="space-y-3">
                    {(section.textContent?.items || []).map((item: any, i: number) => (
                      <div key={i} className="p-3 rounded-lg border space-y-2" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(224,140,46,0.1)" }}>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-white/40">Member {i + 1}</span>
                          <button onClick={() => { const items = (section.textContent?.items || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { items }); }} className="text-red-400 text-xs">Remove</button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div><label className={lbl} style={lblStyle}>Name</label><input value={item.name || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, name: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                          <div><label className={lbl} style={lblStyle}>Role</label><input value={item.role || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, role: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                        </div>
                        <div>
                          <label className={lbl} style={lblStyle}>Image URL</label>
                          <div className="flex gap-2">
                            <input value={item.img || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, img: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={`${inp} flex-1`} style={inpStyle} />
                            <label className="cursor-pointer px-3 py-2 rounded text-xs flex items-center justify-center whitespace-nowrap" style={{ background: "rgba(224,140,46,0.1)", color: "#E08C2E", border: "1px solid rgba(224,140,46,0.2)" }}>
                              Upload
                              <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, i, "img", "items"); }} />
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { items: [...(section.textContent?.items || []), { name: "", role: "", img: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Team Member</button>
                  </div>
                </>
              )}

              {section.type === "contact" && (
                <>
                  <div><label className={lbl} style={lblStyle}>Subheading</label><input value={section.textContent?.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent?.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={section.textContent?.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} style={inpStyle} /></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className={lbl} style={lblStyle}>Panel Heading</label><input value={section.textContent?.panelHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { panelHeading: e.target.value })} className={inp} style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Panel Description</label><input value={section.textContent?.panelDesc || ""} onChange={(e) => updateSection(section.id, "textContent", { panelDesc: e.target.value })} className={inp} style={inpStyle} /></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div><label className={lbl} style={lblStyle}>Direct Address</label><input value={section.textContent?.address || ""} onChange={(e) => updateSection(section.id, "textContent", { address: e.target.value })} className={inp} style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Direct Email</label><input value={section.textContent?.email || ""} onChange={(e) => updateSection(section.id, "textContent", { email: e.target.value })} className={inp} style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Direct Phone</label><input value={section.textContent?.phone || ""} onChange={(e) => updateSection(section.id, "textContent", { phone: e.target.value })} className={inp} style={inpStyle} /></div>
                  </div>
                  <label className={lbl} style={lblStyle}>Contact Methods (contacts array)</label>
                  <div className="space-y-3">
                    {(section.textContent?.contacts || []).map((item: any, i: number) => (
                      <div key={i} className="flex gap-2 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <div className="w-1/4"><label className={lbl} style={lblStyle}>Icon</label><input value={item.icon || ""} onChange={(e) => { const contacts = [...(section.textContent?.contacts || [])]; contacts[i] = { ...item, icon: e.target.value }; updateSection(section.id, "textContent", { contacts }); }} className={inp} style={inpStyle} /></div>
                        <div className="w-1/4"><label className={lbl} style={lblStyle}>Label</label><input value={item.label || ""} onChange={(e) => { const contacts = [...(section.textContent?.contacts || [])]; contacts[i] = { ...item, label: e.target.value }; updateSection(section.id, "textContent", { contacts }); }} className={inp} style={inpStyle} /></div>
                        <div className="w-1/2"><label className={lbl} style={lblStyle}>Value</label><input value={item.value || ""} onChange={(e) => { const contacts = [...(section.textContent?.contacts || [])]; contacts[i] = { ...item, value: e.target.value }; updateSection(section.id, "textContent", { contacts }); }} className={inp} style={inpStyle} /></div>
                        <button onClick={() => { const contacts = (section.textContent?.contacts || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { contacts }); }} className="text-red-400 text-xs mt-4">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { contacts: [...(section.textContent?.contacts || []), { icon: "", label: "", value: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Contact Method</button>
                  </div>
                </>
              )}

              {section.type === "gallery" && (
                <>
                  <div>
                    <label className={lbl} style={lblStyle}>Categories (comma separated)</label>
                    <input value={(section.textContent?.categories || []).join(", ")} onChange={(e) => updateSection(section.id, "textContent", { categories: e.target.value.split(",").map(c => c.trim()).filter(Boolean) })} className={inp} placeholder="All, Office, Events" style={inpStyle} />
                  </div>
                  <label className={lbl} style={lblStyle}>Gallery Images</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(section.textContent?.items || []).map((item: any, i: number) => (
                      <div key={i} className="p-3 rounded-lg border space-y-2 relative" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(224,140,46,0.1)" }}>
                        <button onClick={() => { const items = (section.textContent?.items || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { items }); }} className="absolute top-2 right-2 text-red-400 text-xs bg-red-400/10 px-2 py-1 rounded">Remove</button>
                        {item.src && <img src={item.src} className="w-full h-32 object-cover rounded-md mb-2" alt="gallery" />}
                        <div><label className={lbl} style={lblStyle}>Category</label><input value={item.category || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, category: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                        <div><label className={lbl} style={lblStyle}>Alt Text</label><input value={item.alt || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, alt: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} style={inpStyle} /></div>
                        <div className="flex gap-2">
                          <input value={item.src || ""} onChange={(e) => { const items = [...(section.textContent?.items || [])]; items[i] = { ...item, src: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={`${inp} flex-1`} style={inpStyle} />
                          <label className="cursor-pointer px-3 py-2 rounded text-xs flex items-center justify-center whitespace-nowrap" style={{ background: "rgba(224,140,46,0.1)", color: "#E08C2E", border: "1px solid rgba(224,140,46,0.2)" }}>
                            Upload
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, i, "src", "items"); }} />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => updateSection(section.id, "textContent", { items: [...(section.textContent?.items || []), { category: "", src: "", alt: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Image</button>
                </>
              )}

              {section.type === "career" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className={lbl} style={lblStyle}>Positions Heading</label><input value={section.textContent?.positionsHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { positionsHeading: e.target.value })} className={inp} style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Form Heading</label><input value={section.textContent?.formHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { formHeading: e.target.value })} className={inp} style={inpStyle} /></div>
                  </div>
                  <label className={lbl} style={lblStyle}>Open Positions</label>
                  <div className="space-y-3">
                    {(section.textContent?.positions || []).map((pos: any, i: number) => (
                      <div key={i} className="flex gap-2 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Title</label><input value={pos.title || ""} onChange={(e) => { const positions = [...(section.textContent?.positions || [])]; positions[i] = { ...pos, title: e.target.value }; updateSection(section.id, "textContent", { positions }); }} className={inp} style={inpStyle} /></div>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Type (e.g. Full-time)</label><input value={pos.type || ""} onChange={(e) => { const positions = [...(section.textContent?.positions || [])]; positions[i] = { ...pos, type: e.target.value }; updateSection(section.id, "textContent", { positions }); }} className={inp} style={inpStyle} /></div>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Experience (e.g. 2-4 Yrs)</label><input value={pos.experience || ""} onChange={(e) => { const positions = [...(section.textContent?.positions || [])]; positions[i] = { ...pos, experience: e.target.value }; updateSection(section.id, "textContent", { positions }); }} className={inp} style={inpStyle} /></div>
                        <button onClick={() => { const positions = (section.textContent?.positions || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { positions }); }} className="text-red-400 text-xs mt-4">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { positions: [...(section.textContent?.positions || []), { title: "", type: "", experience: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Position</button>
                  </div>
                </>
              )}

              {section.type === "query-form" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className={lbl} style={lblStyle}>Form Heading</label><input value={section.textContent?.formHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { formHeading: e.target.value })} className={inp} style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Form Subheading</label><input value={section.textContent?.formSubheading || ""} onChange={(e) => updateSection(section.id, "textContent", { formSubheading: e.target.value })} className={inp} style={inpStyle} /></div>
                  </div>
                  <label className={lbl} style={lblStyle}>Query Types</label>
                  <div className="space-y-3">
                    {(section.textContent?.queryTypes || []).map((qt: any, i: number) => (
                      <div key={i} className="flex gap-2 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Label</label><input value={qt.label || ""} onChange={(e) => { const queryTypes = [...(section.textContent?.queryTypes || [])]; queryTypes[i] = { ...qt, label: e.target.value }; updateSection(section.id, "textContent", { queryTypes }); }} className={inp} style={inpStyle} /></div>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Value</label><input value={qt.value || ""} onChange={(e) => { const queryTypes = [...(section.textContent?.queryTypes || [])]; queryTypes[i] = { ...qt, value: e.target.value }; updateSection(section.id, "textContent", { queryTypes }); }} className={inp} style={inpStyle} /></div>
                        <button onClick={() => { const queryTypes = (section.textContent?.queryTypes || []).filter((_: any, idx: number) => idx !== i); updateSection(section.id, "textContent", { queryTypes }); }} className="text-red-400 text-xs mt-4">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { queryTypes: [...(section.textContent?.queryTypes || []), { label: "", value: "" }] })} className="text-xs text-[#E08C2E] hover:underline">+ Add Query Type</button>
                  </div>
                </>
              )}

            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
