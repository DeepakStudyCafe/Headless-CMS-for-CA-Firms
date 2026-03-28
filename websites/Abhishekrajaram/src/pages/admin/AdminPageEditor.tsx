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
                            Change Image
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
              {section.textContent?.heading !== undefined && (
                <div className="space-y-3">
                  <div><label className={lbl} style={lblStyle}>Heading (full title)</label><input value={section.textContent.heading || ""} onChange={(e) => updateSection(section.id, "textContent", { heading: e.target.value })} className={inp} placeholder="Heading..." style={inpStyle} /></div>
                  {section.type === "hero" && (
                    <div className="rounded-lg p-3 space-y-3" style={{ background: "rgba(224,140,46,0.04)", border: "1px solid rgba(224,140,46,0.12)" }}>
                      <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>Optional: Split the title into two parts for a two-toned heading effect (white + gold).</p>
                      <div><label className={lbl} style={lblStyle}>Title — White Part</label><input value={section.textContent.titleMain || ""} onChange={(e) => updateSection(section.id, "textContent", { titleMain: e.target.value })} className={inp} placeholder="e.g. Our" style={inpStyle} /></div>
                      <div><label className={lbl} style={lblStyle}>Title — Gold Highlight Part</label><input value={section.textContent.highlight || ""} onChange={(e) => updateSection(section.id, "textContent", { highlight: e.target.value })} className={inp} placeholder="e.g. Gallery" style={inpStyle} /></div>
                    </div>
                  )}
                </div>
              )}
              {section.textContent?.subheading !== undefined && <div><label className={lbl} style={lblStyle}>Subheading</label><input value={section.textContent.subheading || ""} onChange={(e) => updateSection(section.id, "textContent", { subheading: e.target.value })} className={inp} placeholder="Subheading..." style={inpStyle} /></div>}
              {section.textContent?.label !== undefined && <div><label className={lbl} style={lblStyle}>Label (small text above heading)</label><input value={section.textContent.label || ""} onChange={(e) => updateSection(section.id, "textContent", { label: e.target.value })} className={inp} placeholder="e.g. Who We Are" style={inpStyle} /></div>}
              {section.textContent?.description !== undefined && <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={3} value={section.textContent.description || ""} onChange={(e) => updateSection(section.id, "textContent", { description: e.target.value })} className={`${inp} resize-vertical`} placeholder="Description..." style={inpStyle} /></div>}
              {section.textContent?.cta !== undefined && <div><label className={lbl} style={lblStyle}>Button Text</label><input value={section.textContent.cta || ""} onChange={(e) => updateSection(section.id, "textContent", { cta: e.target.value })} className={inp} placeholder="e.g. Get Started" style={inpStyle} /></div>}
              {section.textContent?.ctaLink !== undefined && <div><label className={lbl} style={lblStyle}>Button Link</label><input value={section.textContent.ctaLink || ""} onChange={(e) => updateSection(section.id, "textContent", { ctaLink: e.target.value })} className={inp} placeholder="/contact" style={inpStyle} /></div>}
              {section.textContent?.secondaryCta !== undefined && <div><label className={lbl} style={lblStyle}>Secondary Button Text</label><input value={section.textContent.secondaryCta || ""} onChange={(e) => updateSection(section.id, "textContent", { secondaryCta: e.target.value })} className={inp} placeholder="e.g. Ask a Question" style={inpStyle} /></div>}
              {section.textContent?.secondaryCtaLink !== undefined && <div><label className={lbl} style={lblStyle}>Secondary Button Link</label><input value={section.textContent.secondaryCtaLink || ""} onChange={(e) => updateSection(section.id, "textContent", { secondaryCtaLink: e.target.value })} className={inp} placeholder="/query" style={inpStyle} /></div>}

              {/* Gallery Categories */}
              {Array.isArray(section.textContent?.categories) && (
                <div>
                  <label className={lbl} style={lblStyle}>Categories</label>
                  <div className="space-y-2 mt-1">
                    {section.textContent.categories.map((cat: string, ci: number) => (
                      <div key={ci} className="flex gap-2 items-center">
                        <input value={cat} onChange={(e) => { const categories = [...section.textContent.categories]; categories[ci] = e.target.value; updateSection(section.id, "textContent", { categories }); }} className={`${inp} flex-1`} placeholder="Category name..." style={inpStyle} />
                        <button onClick={() => { const categories = section.textContent.categories.filter((_: any, i: number) => i !== ci); updateSection(section.id, "textContent", { categories }); }} className="text-red-400 hover:text-red-300 text-xs">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { categories: [...section.textContent.categories, ""] })} className="text-xs hover:underline" style={{ color: "#E08C2E" }}>+ Add Category</button>
                  </div>
                </div>
              )}

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

              {/* Hero Slides */}
              {Array.isArray(section.textContent?.slides) && section.type === "hero" && (
                <div>
                  <label className={lbl} style={lblStyle}>Hero Slides</label>
                  <div className="space-y-3 mt-1">
                    {section.textContent.slides.map((slide: any, si: number) => (
                      <div key={si} className="rounded-xl p-4 space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(224,140,46,0.1)" }}>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.4)" }}>Slide {si + 1}</span>
                          <button onClick={() => { const slides = section.textContent.slides.filter((_: any, i: number) => i !== si); updateSection(section.id, "textContent", { slides }); }} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
                        </div>
                        <div><label className={lbl} style={lblStyle}>Title</label><input value={slide.title || ""} onChange={(e) => { const slides = [...section.textContent.slides]; slides[si] = { ...slide, title: e.target.value }; updateSection(section.id, "textContent", { slides }); }} className={inp} placeholder="Slide headline..." style={inpStyle} /></div>
                        <div><label className={lbl} style={lblStyle}>Subtitle</label><textarea rows={2} value={slide.subtitle || ""} onChange={(e) => { const slides = [...section.textContent.slides]; slides[si] = { ...slide, subtitle: e.target.value }; updateSection(section.id, "textContent", { slides }); }} className={`${inp} resize-vertical`} placeholder="Slide description..." style={inpStyle} /></div>
                        <div>
                          <label className={lbl} style={lblStyle}>Slide Image</label>
                          <div className="relative h-32 rounded-lg overflow-hidden border-2 border-dashed group mb-2" style={{ borderColor: "rgba(224,140,46,0.2)" }}>
                            {slide.img ? (
                              <>
                                <img src={slide.img} alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <label className="cursor-pointer px-3 py-1 rounded text-xs" style={{ background: "#E08C2E", color: "#0D0D0D" }}>
                                    Change
                                    <input type="file" accept="image/*" className="hidden" onChange={async (e) => { const f = e.target.files?.[0]; if (!f) return; try { const url = await uploadImage(f); const slides = [...section.textContent.slides]; slides[si] = { ...slide, img: url }; updateSection(section.id, "textContent", { slides }); showToast("Image uploaded"); } catch { showToast("Upload failed", "err"); } }} />
                                  </label>
                                </div>
                              </>
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <label className="cursor-pointer text-xs flex flex-col items-center gap-1" style={{ color: "rgba(245,240,232,0.3)" }}>
                                  Upload Image
                                  <input type="file" accept="image/*" className="hidden" onChange={async (e) => { const f = e.target.files?.[0]; if (!f) return; try { const url = await uploadImage(f); const slides = [...section.textContent.slides]; slides[si] = { ...slide, img: url }; updateSection(section.id, "textContent", { slides }); showToast("Image uploaded"); } catch { showToast("Upload failed", "err"); } }} />
                                </label>
                              </div>
                            )}
                          </div>
                          <input type="text" value={slide.img || ""} onChange={(e) => { const slides = [...section.textContent.slides]; slides[si] = { ...slide, img: e.target.value }; updateSection(section.id, "textContent", { slides }); }} className={inp} placeholder="Or paste image URL..." style={inpStyle} />
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => { const slides = [...section.textContent.slides, { title: "", subtitle: "", img: "" }]; updateSection(section.id, "textContent", { slides }); }}
                      className="text-xs hover:underline" style={{ color: "#E08C2E" }}
                    >+ Add Slide</button>
                  </div>
                </div>
              )}

              {/* Features list */}
              {Array.isArray(section.textContent?.features) && (
                <div>
                  <label className={lbl} style={lblStyle}>Features</label>
                  <div className="space-y-2 mt-1">
                    {section.textContent.features.map((feat: string, fi: number) => (
                      <div key={fi} className="flex gap-2 items-center">
                        <input value={feat} onChange={(e) => { const features = [...section.textContent.features]; features[fi] = e.target.value; updateSection(section.id, "textContent", { features }); }} className={`${inp} flex-1`} placeholder="Feature..." style={inpStyle} />
                        <button onClick={() => { const features = section.textContent.features.filter((_: any, i: number) => i !== fi); updateSection(section.id, "textContent", { features }); }} className="text-red-400 hover:text-red-300 text-xs">✕</button>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { features: [...section.textContent.features, ""] })} className="text-xs hover:underline" style={{ color: "#E08C2E" }}>+ Add Feature</button>
                  </div>
                </div>
              )}

              {/* FAQ items (q/a) */}
              {Array.isArray(section.textContent?.items) && section.type === "faqs" && (
                <div>
                  <label className={lbl} style={lblStyle}>FAQs</label>
                  <div className="space-y-3 mt-1">
                    {section.textContent.items.map((faq: any, fi: number) => (
                      <div key={fi} className="rounded-xl p-4 space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(224,140,46,0.1)" }}>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.4)" }}>FAQ {fi + 1}</span>
                          <button onClick={() => { const items = section.textContent.items.filter((_: any, i: number) => i !== fi); updateSection(section.id, "textContent", { items }); }} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
                        </div>
                        <div><label className={lbl} style={lblStyle}>Question</label><input value={faq.q || ""} onChange={(e) => { const items = [...section.textContent.items]; items[fi] = { ...faq, q: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} placeholder="Question..." style={inpStyle} /></div>
                        <div><label className={lbl} style={lblStyle}>Answer</label><textarea rows={2} value={faq.a || ""} onChange={(e) => { const items = [...section.textContent.items]; items[fi] = { ...faq, a: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={`${inp} resize-vertical`} placeholder="Answer..." style={inpStyle} /></div>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { items: [...section.textContent.items, { q: "", a: "" }] })} className="text-xs hover:underline" style={{ color: "#E08C2E" }}>+ Add FAQ</button>
                  </div>
                </div>
              )}

              {/* Career Section — Why Work With Us + Positions */}
              {section.type === "career" && (
                <div className="space-y-5">
                  <div className="pb-4 border-b" style={{ borderColor: "rgba(224,140,46,0.1)" }}>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "rgba(245,240,232,0.4)" }}>Why Work With Us Section</p>
                    <div className="space-y-3">
                      <div><label className={lbl} style={lblStyle}>Section Heading</label><input value={section.textContent?.benefitsHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { benefitsHeading: e.target.value })} className={inp} placeholder="Why Work With Us?" style={inpStyle} /></div>
                      <div><label className={lbl} style={lblStyle}>Section Description</label><textarea rows={2} value={section.textContent?.benefitsDescription || ""} onChange={(e) => updateSection(section.id, "textContent", { benefitsDescription: e.target.value })} className={`${inp} resize-vertical`} placeholder="Short description..." style={inpStyle} /></div>
                    </div>
                  </div>
                  {/* Benefits (Why Work With Us items) */}
                  <div className="pb-4 border-b" style={{ borderColor: "rgba(224,140,46,0.1)" }}>
                    <label className={lbl} style={lblStyle}>Benefits / Perks</label>
                    <div className="space-y-3 mt-1">
                      {(section.textContent?.benefits || []).map((b: any, bi: number) => (
                        <div key={bi} className="rounded-xl p-4 space-y-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(224,140,46,0.1)" }}>
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.4)" }}>Benefit {bi + 1}</span>
                            <button onClick={() => { const benefits = (section.textContent?.benefits || []).filter((_: any, i: number) => i !== bi); updateSection(section.id, "textContent", { benefits }); }} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
                          </div>
                          <div><label className={lbl} style={lblStyle}>Icon (e.g. TrendingUp, Heart, BookOpen, Briefcase)</label><input value={b.icon || ""} onChange={(e) => { const benefits = [...(section.textContent?.benefits || [])]; benefits[bi] = { ...b, icon: e.target.value }; updateSection(section.id, "textContent", { benefits }); }} className={inp} placeholder="TrendingUp" style={inpStyle} /></div>
                          <div><label className={lbl} style={lblStyle}>Title</label><input value={b.title || ""} onChange={(e) => { const benefits = [...(section.textContent?.benefits || [])]; benefits[bi] = { ...b, title: e.target.value }; updateSection(section.id, "textContent", { benefits }); }} className={inp} placeholder="Growth Opportunities" style={inpStyle} /></div>
                          <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={b.description || b.desc || ""} onChange={(e) => { const benefits = [...(section.textContent?.benefits || [])]; benefits[bi] = { ...b, description: e.target.value }; updateSection(section.id, "textContent", { benefits }); }} className={`${inp} resize-vertical`} placeholder="Description..." style={inpStyle} /></div>
                        </div>
                      ))}
                      <button onClick={() => { const benefits = [...(section.textContent?.benefits || []), { icon: "", title: "", description: "" }]; updateSection(section.id, "textContent", { benefits }); }} className="text-xs hover:underline" style={{ color: "#E08C2E" }}>+ Add Benefit</button>
                    </div>
                  </div>
                  {/* Open Positions */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className={lbl} style={lblStyle}>Open Positions</label>
                    </div>
                    <div><label className={lbl} style={lblStyle}>Application Form Heading</label><input value={section.textContent?.formHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { formHeading: e.target.value })} className={`${inp} mb-3`} placeholder="Apply Now" style={inpStyle} /></div>
                    <div className="space-y-3">
                      {(section.textContent?.positions || []).map((pos: any, pi: number) => (
                        <div key={pi} className="rounded-xl p-4 space-y-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(224,140,46,0.1)" }}>
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.4)" }}>{pos.title || `Position ${pi + 1}`}</span>
                            <button onClick={() => { const positions = (section.textContent?.positions || []).filter((_: any, i: number) => i !== pi); updateSection(section.id, "textContent", { positions }); }} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
                          </div>
                          <div><label className={lbl} style={lblStyle}>Job Title</label><input value={pos.title || ""} onChange={(e) => { const positions = [...(section.textContent?.positions || [])]; positions[pi] = { ...pos, title: e.target.value }; updateSection(section.id, "textContent", { positions }); }} className={inp} placeholder="CA Intern" style={inpStyle} /></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div><label className={lbl} style={lblStyle}>Location</label><input value={pos.location || ""} onChange={(e) => { const positions = [...(section.textContent?.positions || [])]; positions[pi] = { ...pos, location: e.target.value }; updateSection(section.id, "textContent", { positions }); }} className={inp} placeholder="Mumbai" style={inpStyle} /></div>
                            <div><label className={lbl} style={lblStyle}>Type</label><input value={pos.type || ""} onChange={(e) => { const positions = [...(section.textContent?.positions || [])]; positions[pi] = { ...pos, type: e.target.value }; updateSection(section.id, "textContent", { positions }); }} className={inp} placeholder="Full-time / Internship" style={inpStyle} /></div>
                          </div>
                          <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={pos.description || ""} onChange={(e) => { const positions = [...(section.textContent?.positions || [])]; positions[pi] = { ...pos, description: e.target.value }; updateSection(section.id, "textContent", { positions }); }} className={`${inp} resize-vertical`} placeholder="Role description..." style={inpStyle} /></div>
                        </div>
                      ))}
                      <button onClick={() => { const positions = [...(section.textContent?.positions || []), { title: "", location: "", type: "", description: "" }]; updateSection(section.id, "textContent", { positions }); }} className="text-xs hover:underline" style={{ color: "#E08C2E" }}>+ Add Position</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Section Editor */}
              {section.type === "contact" && (
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(245,240,232,0.4)" }}>Contact Details</p>
                  <p className="text-xs" style={{ color: "rgba(245,240,232,0.3)" }}>These override the values set in the Admin Dashboard Contact tab.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div><label className={lbl} style={lblStyle}>Phone</label><input value={section.textContent?.phone || ""} onChange={(e) => updateSection(section.id, "textContent", { phone: e.target.value })} className={inp} placeholder="+91 XX XXXX XXXX" style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Phone 2 (optional)</label><input value={section.textContent?.phone2 || ""} onChange={(e) => updateSection(section.id, "textContent", { phone2: e.target.value })} className={inp} placeholder="+91 XX XXXX XXXX" style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Email</label><input type="email" value={section.textContent?.email || ""} onChange={(e) => updateSection(section.id, "textContent", { email: e.target.value })} className={inp} placeholder="info@firm.in" style={inpStyle} /></div>
                    <div><label className={lbl} style={lblStyle}>Email 2 (optional)</label><input type="email" value={section.textContent?.email2 || ""} onChange={(e) => updateSection(section.id, "textContent", { email2: e.target.value })} className={inp} placeholder="support@firm.in" style={inpStyle} /></div>
                    <div className="sm:col-span-2"><label className={lbl} style={lblStyle}>Address</label><input value={section.textContent?.address || ""} onChange={(e) => updateSection(section.id, "textContent", { address: e.target.value })} className={inp} placeholder="Complete office address" style={inpStyle} /></div>
                    <div className="sm:col-span-2"><label className={lbl} style={lblStyle}>Working Hours</label><input value={section.textContent?.workingHours || ""} onChange={(e) => updateSection(section.id, "textContent", { workingHours: e.target.value })} className={inp} placeholder="Mon - Sat: 9:30 AM - 6:30 PM" style={inpStyle} /></div>
                  </div>
                  <div><label className={lbl} style={lblStyle}>Contact Form Heading</label><input value={section.textContent?.formHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { formHeading: e.target.value })} className={inp} placeholder="Send Us a Message" style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>CTA Heading (bottom CTA section)</label><input value={section.textContent?.ctaHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { ctaHeading: e.target.value })} className={inp} placeholder="Prefer to Talk?" style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>CTA Subheading</label><textarea rows={2} value={section.textContent?.ctaSubheading || ""} onChange={(e) => updateSection(section.id, "textContent", { ctaSubheading: e.target.value })} className={`${inp} resize-vertical`} placeholder="Schedule a free consultation..." style={inpStyle} /></div>
                  <div><label className={lbl} style={lblStyle}>Google Maps Embed URL</label><input value={section.textContent?.mapEmbedUrl || ""} onChange={(e) => updateSection(section.id, "textContent", { mapEmbedUrl: e.target.value })} className={inp} placeholder="https://maps.google.com/maps?..." style={inpStyle} /><p className="text-xs mt-1" style={{ color: "rgba(245,240,232,0.25)" }}>Google Maps → Share → Embed a map → copy the src URL</p></div>
                </div>
              )}

              {/* Query Form Section Editor */}
              {section.type === "query-form" && (
                <div className="space-y-4">
                  <div><label className={lbl} style={lblStyle}>Form Heading</label><input value={section.textContent?.formHeading || ""} onChange={(e) => updateSection(section.id, "textContent", { formHeading: e.target.value })} className={inp} placeholder="Send Us a Query" style={inpStyle} /></div>
                  <div>
                    <label className={lbl} style={lblStyle}>Query Types</label>
                    <div className="space-y-2 mt-1">
                      {(section.textContent?.queryTypes || []).map((qt: any, qi: number) => (
                        <div key={qi} className="flex gap-2 items-center rounded-lg p-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(224,140,46,0.08)" }}>
                          <div className="flex-1"><label className={lbl} style={lblStyle}>Label</label><input value={qt.label || ""} onChange={(e) => { const queryTypes = [...(section.textContent?.queryTypes || [])]; queryTypes[qi] = { ...qt, label: e.target.value }; updateSection(section.id, "textContent", { queryTypes }); }} className={inp} placeholder="GST Query" style={inpStyle} /></div>
                          <div className="flex-1"><label className={lbl} style={lblStyle}>Value</label><input value={qt.value || ""} onChange={(e) => { const queryTypes = [...(section.textContent?.queryTypes || [])]; queryTypes[qi] = { ...qt, value: e.target.value }; updateSection(section.id, "textContent", { queryTypes }); }} className={inp} placeholder="gst" style={inpStyle} /></div>
                          <button onClick={() => { const queryTypes = (section.textContent?.queryTypes || []).filter((_: any, i: number) => i !== qi); updateSection(section.id, "textContent", { queryTypes }); }} className="text-red-400 hover:text-red-300 text-xs mt-3">✕</button>
                        </div>
                      ))}
                      <button onClick={() => { const queryTypes = [...(section.textContent?.queryTypes || []), { label: "", value: "" }]; updateSection(section.id, "textContent", { queryTypes }); }} className="text-xs hover:underline" style={{ color: "#E08C2E" }}>+ Add Query Type</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing items */}
              {Array.isArray(section.textContent?.items) && section.type === "pricing" && (
                <div>
                  <label className={lbl} style={lblStyle}>Pricing Tiers</label>
                  <div className="space-y-3 mt-1">
                    {section.textContent.items.map((tier: any, ti: number) => (
                      <div key={ti} className="rounded-xl p-4 space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(224,140,46,0.1)" }}>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.4)" }}>{tier.name || `Tier ${ti + 1}`}</span>
                          <button onClick={() => { const items = section.textContent.items.filter((_: any, i: number) => i !== ti); updateSection(section.id, "textContent", { items }); }} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div><label className={lbl} style={lblStyle}>Name</label><input value={tier.name || ""} onChange={(e) => { const items = [...section.textContent.items]; items[ti] = { ...tier, name: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} placeholder="Basic" style={inpStyle} /></div>
                          <div><label className={lbl} style={lblStyle}>Price</label><input value={tier.price || ""} onChange={(e) => { const items = [...section.textContent.items]; items[ti] = { ...tier, price: e.target.value }; updateSection(section.id, "textContent", { items }); }} className={inp} placeholder="₹9,999/yr" style={inpStyle} /></div>
                        </div>
                        <div><label className={lbl} style={lblStyle}>Features (one per line)</label><textarea rows={3} value={(tier.features || []).join("\n")} onChange={(e) => { const items = [...section.textContent.items]; items[ti] = { ...tier, features: e.target.value.split("\n") }; updateSection(section.id, "textContent", { items }); }} className={`${inp} resize-vertical`} placeholder="Feature 1&#10;Feature 2" style={inpStyle} /></div>
                      </div>
                    ))}
                    <button onClick={() => updateSection(section.id, "textContent", { items: [...section.textContent.items, { name: "", price: "", features: [] }] })} className="text-xs hover:underline" style={{ color: "#E08C2E" }}>+ Add Tier</button>
                  </div>
                </div>
              )}

              {/* Generic Items (not faqs/pricing/career/contact/query-form) */}
              {Array.isArray(section.textContent?.items) && section.type !== "faqs" && section.type !== "pricing" && section.type !== "career" && section.type !== "contact" && section.type !== "query-form" && (
                <div>
                  <label className={lbl} style={lblStyle}>{section.type === "team" ? "Team Members" : section.type === "gallery" ? "Gallery Images" : "Items"}</label>
                  <div className="space-y-3 mt-1">
                    {section.textContent.items.map((item: any, ii: number) => (
                      <div key={ii} className="rounded-xl p-4 space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(224,140,46,0.1)" }}>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold" style={{ color: "rgba(245,240,232,0.4)" }}>{section.type === "team" ? (item.name || `Member ${ii + 1}`) : (typeof item === 'string' ? `Item ${ii + 1}` : item.title || `Item ${ii + 1}`)}</span>
                          <button onClick={() => { const items = section.textContent.items.filter((_: any, i: number) => i !== ii); updateSection(section.id, "textContent", { items }); }} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
                        </div>
                        {/* Plain string item — show single text input */}
                        {typeof item === 'string' ? (
                          <div><label className={lbl} style={lblStyle}>Text</label><input value={item} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = e.target.value; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Item text..." style={inpStyle} /></div>
                        ) : (
                          <>
                            {item.name !== undefined && <div><label className={lbl} style={lblStyle}>Name</label><input value={item.name || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, name: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Name..." style={inpStyle} /></div>}
                            {item.designation !== undefined && <div><label className={lbl} style={lblStyle}>Designation</label><input value={item.designation || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, designation: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Senior Partner..." style={inpStyle} /></div>}
                            {item.bio !== undefined && <div><label className={lbl} style={lblStyle}>Bio</label><textarea rows={2} value={item.bio || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, bio: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={`${inp} resize-vertical`} placeholder="Short bio..." style={inpStyle} /></div>}
                            {item.year !== undefined && <div><label className={lbl} style={lblStyle}>Year</label><input value={item.year || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, year: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="2024" style={inpStyle} /></div>}
                            {item.icon !== undefined && <div><label className={lbl} style={lblStyle}>Icon</label><input value={item.icon || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, icon: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="e.g. Shield, Award, TrendingUp" style={inpStyle} /></div>}
                            {item.title !== undefined && <div><label className={lbl} style={lblStyle}>Title</label><input value={item.title || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, title: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Title..." style={inpStyle} /></div>}
                            {item.description !== undefined && <div><label className={lbl} style={lblStyle}>Description</label><textarea rows={2} value={item.description || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, description: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={`${inp} resize-vertical`} placeholder="Description..." style={inpStyle} /></div>}
                            {item.review !== undefined && <div><label className={lbl} style={lblStyle}>Review</label><textarea rows={3} value={item.review || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, review: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={`${inp} resize-vertical`} placeholder="Client review..." style={inpStyle} /></div>}
                            {item.category !== undefined && <div><label className={lbl} style={lblStyle}>Category</label><input value={item.category || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, category: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="e.g. Office, Events..." style={inpStyle} /></div>}
                            {item.linkedin !== undefined && <div><label className={lbl} style={lblStyle}>LinkedIn URL</label><input value={item.linkedin || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, linkedin: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="https://linkedin.com/in/..." style={inpStyle} /></div>}
                            {item.href !== undefined && <div><label className={lbl} style={lblStyle}>Link / URL</label><input value={item.href || ""} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, href: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="/services/..." style={inpStyle} /></div>}
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
                                            Change
                                            <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, ii, field); }} />
                                          </label>
                                        </div>
                                      </>
                                    ) : (
                                      <div className="flex items-center justify-center h-full">
                                        <label className="cursor-pointer text-xs flex flex-col items-center gap-1" style={{ color: "rgba(245,240,232,0.3)" }}>
                                          Upload Image
                                          <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(section.id, f, ii, field); }} />
                                        </label>
                                      </div>
                                    )}
                                  </div>
                                  <input type="text" value={url} onChange={(e) => { const its = [...section.textContent.items]; its[ii] = { ...item, [field]: e.target.value }; updateSection(section.id, "textContent", { items: its }); }} className={inp} placeholder="Or paste image URL..." style={inpStyle} />
                                </div>
                              );
                            })()}
                          </>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newItem = section.type === "team"
                          ? { name: "", designation: "", bio: "", image: "", linkedin: "" }
                          : section.type === "gallery"
                          ? { src: "", category: "Office", title: "" }
                          : section.type === "testimonials"
                          ? { name: "", designation: "", review: "", image: "" }
                          : section.type === "timeline"
                          ? { year: "", title: "", description: "" }
                          : section.type === "certifications"
                          ? { title: "" }
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
