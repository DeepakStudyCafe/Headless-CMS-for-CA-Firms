export default function SiteOffline() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0D0D0D" }}>
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "rgba(224,140,46,0.1)", border: "1px solid rgba(224,140,46,0.2)" }}>
            <svg className="w-10 h-10" style={{ color: "#E08C2E" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif", color: "#F5F0E8" }}>
          Website Temporarily Unavailable
        </h1>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.5)" }}>
          This website is currently offline for maintenance or due to a pending account issue.
          Please contact the website administrator for more information.
        </p>
        <div className="border rounded-xl p-4 text-left" style={{ borderColor: "rgba(224,140,46,0.25)", background: "rgba(224,140,46,0.05)" }}>
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-1">Service Notice</p>
          <p className="text-sm" style={{ color: "rgba(224,140,46,0.7)" }}>
            If you are the site owner, please log in to the administration portal and
            ensure your account is in good standing to restore access.
          </p>
        </div>
        <p className="mt-8 text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>
          Error code: SITE_OFFLINE &nbsp;&bull;&nbsp; Sterling &amp; Co.
        </p>
      </div>
    </div>
  );
}
