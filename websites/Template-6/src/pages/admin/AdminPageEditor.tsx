import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken, apiFetch, uploadImage } from "@/lib/adminApi";

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

export default function AdminPageEditor() {
  const { id } = useParams<{ id: string }>();
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
    if (!getToken()) { navigate("/admin/login", { replace: true }); return; }
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

  const handleImageUpload = async (sectionId: string, file: File, itemIndex?: number, itemField = "image") => {
    try {
      const imageUrl = await uploadImage(file);
      if (itemIndex !== undefined) {
        setSections((prev) =>
          prev.map((s) => {
            if (s.id !== sectionId) return s;
            const items = [...(s.textContent?.items || [])];
            items[itemIndex] = { ...items[itemIndex], [itemField]: imageUrl };
            return { ...s, textContent: { ...s.textContent, items } };
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
            <button type="button" onClick={() => navigate("/admin/dashboard")}
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

              {/* Section Image Upload */}
              {(section.type === "hero" || section.type === "text-image" || section.imageUrl) && (
                <div>
                  <label className={lbl} style={lblStyle}>Section Image</label>
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border-2 border-dashed group"
                    style={{ borderColor: "rgba(224,140,46,0.25)" }}>
                    {section.imageUrl ? (
                      <>
                        <img src={section.imageUrl} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <label className="cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                            style={{ background: "#E08C2E", color: "#0D0D0D" }}>
                            📷 Change Image
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f); }} />
                          </label>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <label className="cursor-pointer flex flex-col items-center gap-1 text-sm" style={{ color: "rgba(245,240,232,0.3)" }}>
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Click to upload image
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f); }} />
                        </label>
                      </div>
                    )}
                  </div>
                  {section.imageUrl && <input type="text" value={section.imageUrl} onChange={(e) => updateSection(section.id, "imageUrl", e.target.value)} placeholder="Or paste image URL..." className={`${inp} mt-2`} style={inpStyle} />}
                </div>
              )}

              {/* Text fields */}
              {section.textContent?.heading !== undefined && <div><label className={lbl} style={lblStyle}>Heading</label><input value={section.textContent.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} placeholder="Heading..." style={inpStyle} /></div>}
              {section.textContent?.subheading !== undefined && <div><label className={lbl} style={lblStyle}>Subheading</label><input value={section.textContent.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} placeholder="Subheading..." style={inpStyle} /></div>}
              {section.textContent?.description !== undefined && <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={3} value={section.textContent.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} placeholder="Description..." style={inpStyle} /></div>}
              {section.textContent?.cta !== undefined && <div><label className={lbl} style={lblStyle}>Button Text</label><input value={section.textContent.cta || ""} onChange={(e) => updateSection(section.id, "textContent", { cta: e.target.value })} className={inp} placeholder="e.g. Get Started" style={inpStyle} /></div>}

              {/* Stats */}
              {Array.isArray(section.textContent?.stats) && (
                <div>
                  <label className={lbl} style={lblStyle}>Statistics</label>
                  <div className="space-y-2 mt-1">
                    {section.textContent.stats.map((stat: any, si: number) => (
                      <div key={si} className="flex gap-2 items-center rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(224,140,46,0.1)" }}>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Value</label><input value={stat.value ?? ""} onChange={(e) => { const s = [...section.textContent.stats]; s[si] = { ...stat, value: e.target.value }; updateSection(section.id, "textContent", { stats: s }); }} className={inp} placeholder="500+" style={inpStyle} /></div>
                        <div className="flex-1"><label className={lbl} style={lblStyle}>Label</label><input value={stat.label || ""} onChange={(e) => { const s = [...section.textContent.stats]; s[si] = { ...stat, label: e.target.value }; updateSection(section.id, "textContent", { stats: s }); }} className={inp} placeholder="Clients Served" style={inpStyle} /></div>
                        <button onClick={() => { const s = section.textContent.stats.filter((_: any, i: number) => i !== si); updateSection(section.id, "textContent", { stats: s }); }} className="text-red-400 hover:text-red-300 mt-4 text-xs">✕</button>
                      </div>
                    ))}
                    <button onClick={() => { const s = [...section.textContent.stats, { value: "", label: "" }]; updateSection(section.id, "textContent", { stats: s }); }} className="text-xs hover:underline" style={{ color: "#E08C2E" }}>+ Add Stat</button>
                  </div>
                </div>
              )}

              {/* Items */}
              {Array.isArray(section.textContent?.items) && (
                <div>
                  <label className={lbl} style={lblStyle}>{section.type === "team" ? "Team Members" : section.type === "gallery" ? "Gallery Images" : "Items"}</label>
                  <div className="space-y-3 mt-1">
                    {section.textContent.items.map((item: any, ii: number) => (
                      <div key={ii} className="rounded-xl p-4 space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(224,140,46,0.1)" }}>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.4)" }}>{section.type === "team" ? (item.name || `Member ${ii + 1}`) : (item.title || `Item ${ii + 1}`)}</span>
                          <button onClick={() => { const items = section.textContent.items.filter((_: any, i: number) => i !== ii); updateSection(section.id, "textContent", { items }); }} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
                        </div>
                        {item.name !== undefined && <div><label className={lbl} style={lblStyle}>Name</label><input value={item.name || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, name: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Name..." style={inpStyle} /></div>}
                        {item.designation !== undefined && <div><label className={lbl} style={lblStyle}>Designation</label><input value={item.designation || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, designation: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Senior Partner..." style={inpStyle} /></div>}
                        {item.bio !== undefined && <div><label className={lbl} style={lblStyle}>Bio</label><textarea rows={2} value={item.bio || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, bio: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={`${inp} resize-vertical`} placeholder="Short bio..." style={inpStyle} /></div>}
                        {item.title !== undefined && <div><label className={lbl} style={lblStyle}>Title</label><input value={item.title || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, title: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Title..." style={inpStyle} /></div>}
                        {item.description !== undefined && <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={item.description || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, description: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={`${inp} resize-vertical`} placeholder="Description..." style={inpStyle} /></div>}
                        {item.review !== undefined && <div><label className={lbl} style={lblStyle}>Review</label><textarea rows={3} value={item.review || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, review: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={`${inp} resize-vertical`} placeholder="Client review..." style={inpStyle} /></div>}
                        {item.category !== undefined && <div><label className={lbl} style={lblStyle}>Category</label><input value={item.category || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, category: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="e.g. Office, Events..." style={inpStyle} /></div>}
                        {(item.image !== undefined || item.src !== undefined) && (() => {
                          const field = item.image !== undefined ? "image" : "src";
                          const url = item[field] || "";
                          return (
                            <div>
                              <label className={lbl} style={lblStyle}>Image</label>
                              <div className="relative h-32 rounded-lg overflow-hidden border-2 border-dashed group mb-2" style={{ borderColor: "rgba(224,140,46,0.2)" }}>
                                {url ? (
                                  <>
                                    <img src={url} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                      <label className="cursor-pointer px-3 py-1 rounded text-xs" style={{ background: "#E08C2E", color: "#0D0D0D" }}>
                                        📷 Change
                                        <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, ii, field); }} />
                                      </label>
                                    </div>
                                  </>
                                ) : (
                                  <div className="flex items-center justify-center h-full">
                                    <label className="cursor-pointer text-xs flex flex-col items-center gap-1" style={{ color: "rgba(245,240,232,0.3)" }}>
                                      📷 Upload Image
                                      <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, ii, field); }} />
                                    </label>
                                  </div>
                                )}
                              </div>
                              <input type="text" value={url} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, [field]: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Or paste image URL..." style={inpStyle} />
                            </div>
                          );
                        })()}
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newItem = section.type === "team"
                          ? { name: "", designation: "", bio: "", image: "", linkedin: "#" }
                          : section.type === "gallery"
                          ? { src: "", alt: "", category: "Office", title: "" }
                          : section.type === "testimonials"
                          ? { name: "", designation: "", review: "", rating: 5, image: "" }
                          : { icon: "", title: "", description: "" };
                        updateSection(section.id, "textContent", { items: [...section.textContent.items, newItem] });
                      }}
                      className="text-xs hover:underline"
                      style={{ color: "#E08C2E" }}
                    >+ Add Item</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
