import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken, apiFetch, uploadImage } from "@/lib/adminApi";
import { getImageUrl } from "@/lib/api";

interface Section {
  id: string;
  type: string;
  imageUrl: string | null;
  textContent: any;
  order: number;
}

const inp = "w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A3B36]";
const lbl = "block text-xs font-medium text-gray-600 mb-1";

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

  const handleImageUpload = async (
    sectionId: string,
    file: File,
    itemIndex?: number,
    itemField = "image",
    arrayKey = "items"
  ) => {
    try {
      const imageUrl = await uploadImage(file);

      if (itemIndex !== undefined) {
        setSections((prev) =>
          prev.map((s) => {
            if (s.id !== sectionId) return s;
            const arr = [...(s.textContent?.[arrayKey] || [])];
            arr[itemIndex] = { ...arr[itemIndex], [itemField]: imageUrl };
            return { ...s, textContent: { ...s.textContent, [arrayKey]: arr } };
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#2A3B36]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg text-sm text-white ${toast.type === "ok" ? "bg-green-600" : "bg-red-600"}`}>
          {toast.msg}
        </div>
      )}

      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="text-xs text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              ← Back
            </button>
            <span className="font-semibold text-gray-800 text-sm">{pageTitle}</span>
          </div>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-[#2A3B36] text-white text-xs px-4 py-2 rounded-lg hover:bg-[#1F2C28] disabled:opacity-50 transition-colors"
          >
            {saving ? <span className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-white" /> : null}
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {sections.map((section, idx) => (
          <div key={section.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Section {idx + 1}</span>
              <span className="text-xs bg-[#2A3B36]/10 text-[#2A3B36] px-2 py-0.5 rounded font-medium">{section.type}</span>
            </div>
            <div className="p-5 space-y-4">

              {/* Section Image Upload (hidden for hero sections that use slides) */}
              {(
                section.type === "text-image" ||
                (section.type === "hero" && !Array.isArray(section.textContent?.slides)) ||
                (section.type !== "hero" && section.imageUrl)
              ) && (
                <div>
                  <label className={lbl}>Section Image</label>
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 group hover:border-[#2A3B36]/50 transition-colors">
                    {section.imageUrl ? (
                      <>
                        <img src={getImageUrl(section.imageUrl)} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <label className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                            📷 Change Image
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f); }} />
                          </label>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <label className="cursor-pointer text-gray-400 hover:text-gray-600 flex flex-col items-center gap-1 text-sm">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Click to upload image
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f); }} />
                        </label>
                      </div>
                    )}
                  </div>
                  {section.imageUrl && (
                    <input type="text" value={section.imageUrl} onChange={(e) => updateSection(section.id, "imageUrl", e.target.value)} placeholder="Or paste image URL..." className={`${inp} mt-2`} />
                  )}
                </div>
              )}

              {/* Text fields */}
              {section.textContent?.heading !== undefined && (
                <div><label className={lbl}>Heading</label><input value={section.textContent.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} placeholder="Heading..." /></div>
              )}
              {section.textContent?.subheading !== undefined && (
                <div><label className={lbl}>Subheading</label><input value={section.textContent.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} placeholder="Subheading..." /></div>
              )}
              {section.textContent?.description !== undefined && (
                <div><label className={lbl}>Description</label><textarea rows={3} value={section.textContent.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} placeholder="Description..." /></div>
              )}
              {/* Slides (hero) editing */}
              {Array.isArray(section.textContent?.slides) && (
                <div>
                  <label className={lbl}>Slides</label>
                  <div className="space-y-3 mt-1">
                    {section.textContent.slides.map((slide: any, si: number) => (
                      <div key={si} className="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-gray-500">Slide {si + 1}</span>
                          <button onClick={() => { const slides = section.textContent.slides.filter((_: any, i: number) => i !== si); updateSection(section.id, "textContent", { slides }); }} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
                        </div>

                        <div>
                          <label className={lbl}>Image</label>
                          <div className="relative h-40 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 group hover:border-[#2A3B36]/50 transition-colors mb-2">
                            {slide.img || slide.image || slide.src ? (
                              <>
                                <img src={getImageUrl(slide.img || slide.image || slide.src)} alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <label className="cursor-pointer bg-white text-black px-3 py-1 rounded text-xs">
                                    📷 Change
                                    <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, si, 'img', 'slides'); }} />
                                  </label>
                                </div>
                              </>
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <label className="cursor-pointer text-gray-400 text-xs flex flex-col items-center gap-1">
                                  📷 Upload Image
                                  <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, si, 'img', 'slides'); }} />
                                </label>
                              </div>
                            )}
                          </div>
                          <input type="text" value={slide.img || slide.image || slide.src || ''} onChange={(e) => { const s = [...section.textContent.slides]; s[si] = { ...slide, img: e.target.value, image: e.target.value }; updateSection(section.id, 'textContent', { slides: s }); }} className={inp} placeholder="Or paste image URL..." />
                        </div>

                        <div>
                          <label className={lbl}>Title</label>
                          <input value={slide.title || ''} onChange={(e) => { const s = [...section.textContent.slides]; s[si] = { ...slide, title: e.target.value }; updateSection(section.id, 'textContent', { slides: s }); }} className={inp} placeholder="Slide title..." />
                        </div>
                        <div>
                          <label className={lbl}>Subtitle</label>
                          <input value={slide.subtitle || ''} onChange={(e) => { const s = [...section.textContent.slides]; s[si] = { ...slide, subtitle: e.target.value }; updateSection(section.id, 'textContent', { slides: s }); }} className={inp} placeholder="Slide subtitle..." />
                        </div>
                        <div>
                          <label className={lbl}>Label</label>
                          <input value={slide.label || ''} onChange={(e) => { const s = [...section.textContent.slides]; s[si] = { ...slide, label: e.target.value }; updateSection(section.id, 'textContent', { slides: s }); }} className={inp} placeholder="Short label (e.g., 'AI + Accounting')" />
                        </div>
                      </div>
                    ))}
                    <button onClick={() => { const newSlide = { img: '', title: '', subtitle: '', label: '' }; updateSection(section.id, 'textContent', { slides: [...section.textContent.slides, newSlide] }); }} className="text-xs text-[#2A3B36] hover:underline">+ Add Slide</button>
                  </div>
                </div>
              )}
              {section.textContent?.cta !== undefined && (
                <div><label className={lbl}>Button Text</label><input value={section.textContent.cta || ""} onChange={(e) => updateSection(section.id, "textContent", { cta: e.target.value })} className={inp} placeholder="e.g. Get Started" /></div>
              )}

              {/* Stats */}
              {Array.isArray(section.textContent?.stats) && (
                <div>
                  <label className={lbl}>Statistics</label>
                  <div className="space-y-2 mt-1">
                    {section.textContent.stats.map((stat: any, si: number) => (
                      <div key={si} className="flex gap-2 items-center bg-gray-50 rounded-lg p-3">
                        <div className="flex-1"><label className={lbl}>Value</label><input value={stat.value ?? ""} onChange={(e) => { const s = [...section.textContent.stats]; s[si] = { ...stat, value: e.target.value }; updateSection(section.id, "textContent", { stats: s }); }} className={inp} placeholder="500+" /></div>
                        <div className="flex-1"><label className={lbl}>Label</label><input value={stat.label || ""} onChange={(e) => { const s = [...section.textContent.stats]; s[si] = { ...stat, label: e.target.value }; updateSection(section.id, "textContent", { stats: s }); }} className={inp} placeholder="Clients Served" /></div>
                        <button onClick={() => { const s = section.textContent.stats.filter((_: any, i: number) => i !== si); updateSection(section.id, "textContent", { stats: s }); }} className="text-red-400 hover:text-red-600 mt-4 text-xs">✕</button>
                      </div>
                    ))}
                    <button onClick={() => { const s = [...section.textContent.stats, { value: "", label: "" }]; updateSection(section.id, "textContent", { stats: s }); }} className="text-xs text-[#2A3B36] hover:underline">+ Add Stat</button>
                  </div>
                </div>
              )}

              {/* Items (team, gallery, services, etc.) */}
              {Array.isArray(section.textContent?.items) && (
                <div>
                  <label className={lbl}>{section.type === "team" ? "Team Members" : section.type === "gallery" ? "Gallery Images" : "Items"}</label>
                  <div className="space-y-3 mt-1">
                    {section.textContent.items.map((item: any, ii: number) => (
                      <div key={ii} className="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-gray-500">{section.type === "team" ? (item.name || `Member ${ii + 1}`) : (item.title || `Item ${ii + 1}`)}</span>
                          <button onClick={() => { const items = section.textContent.items.filter((_: any, i: number) => i !== ii); updateSection(section.id, "textContent", { items }); }} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
                        </div>

                        {/* Common text fields */}
                        {item.name !== undefined && <div><label className={lbl}>Name</label><input value={item.name || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, name: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Name..." /></div>}
                        {item.designation !== undefined && <div><label className={lbl}>Designation</label><input value={item.designation || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, designation: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Senior Partner..." /></div>}
                        {item.qualifications !== undefined && <div><label className={lbl}>Qualifications</label><input value={item.qualifications || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, qualifications: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="CA, CPA..." /></div>}
                        {item.bio !== undefined && <div><label className={lbl}>Bio</label><textarea rows={2} value={item.bio || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, bio: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={`${inp} resize-vertical`} placeholder="Short bio..." /></div>}
                        {item.linkedin !== undefined && <div><label className={lbl}>LinkedIn URL</label><input value={item.linkedin || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, linkedin: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="https://linkedin.com/in/..." /></div>}
                        {item.title !== undefined && <div><label className={lbl}>Title</label><input value={item.title || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, title: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Title..." /></div>}
                        {item.description !== undefined && <div><label className={lbl}>Description</label><textarea rows={2} value={item.description || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, description: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={`${inp} resize-vertical`} placeholder="Description..." /></div>}
                        {item.category !== undefined && <div><label className={lbl}>Category</label><input value={item.category || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, category: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="e.g. Office, Events..." /></div>}
                        {item.alt !== undefined && <div><label className={lbl}>Alt Text</label><input value={item.alt || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, alt: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Image description..." /></div>}

                        {/* Image upload for items */}
                        {(item.image !== undefined || item.src !== undefined) && (() => {
                          const field = item.image !== undefined ? "image" : "src";
                          const url = item[field] || "";
                          return (
                            <div>
                              <label className={lbl}>Image</label>
                              <div className="relative h-32 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 group hover:border-[#2A3B36]/50 transition-colors mb-2">
                                {url ? (
                                  <>
                                    <img src={getImageUrl(url)} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                      <label className="cursor-pointer bg-white text-black px-3 py-1 rounded text-xs">
                                        📷 Change
                                        <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, ii, field); }} />
                                      </label>
                                    </div>
                                  </>
                                ) : (
                                  <div className="flex items-center justify-center h-full">
                                    <label className="cursor-pointer text-gray-400 text-xs flex flex-col items-center gap-1">
                                      📷 Upload Image
                                      <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, ii, field); }} />
                                    </label>
                                  </div>
                                )}
                              </div>
                              <input type="text" value={url} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, [field]: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Or paste image URL..." />
                            </div>
                          );
                        })()}
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newItem = section.type === "team"
                          ? { name: "", designation: "", qualifications: "", bio: "", image: "", linkedin: "#", isLeadership: false }
                          : section.type === "gallery"
                          ? { src: "", alt: "", category: "Office", title: "" }
                          : { icon: "", title: "", description: "" };
                        updateSection(section.id, "textContent", { items: [...section.textContent.items, newItem] });
                      }}
                      className="text-xs text-[#2A3B36] hover:underline"
                    >
                      + Add Item
                    </button>
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
