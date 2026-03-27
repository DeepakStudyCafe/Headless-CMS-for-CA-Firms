export default function AdminLocked() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0D0D0D" }}>
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "rgba(224,140,46,0.08)", border: "1px solid rgba(224,140,46,0.2)" }}>
            <svg className="w-10 h-10" style={{ color: "#E08C2E" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif", color: "#F5F0E8" }}>
          Admin Panel Disabled
        </h1>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.5)" }}>
          The built-in admin panel has been temporarily disabled by the system administrator.
          You are not able to log in or manage content at this time.
        </p>
        <div className="border rounded-xl p-4 text-left" style={{ borderColor: "rgba(224,140,46,0.25)", background: "rgba(224,140,46,0.05)" }}>
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-1">Access Restricted</p>
          <p className="text-sm" style={{ color: "rgba(224,140,46,0.7)" }}>
            If you believe this is a mistake, please contact your Website account manager
            to have admin access re-enabled.
          </p>
        </div>
        <p className="mt-8 text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>
          Error code: ADMIN_LOCKED &nbsp;&bull;&nbsp; Sterling &amp; Co.
        </p>
      </div>
    </div>
  );
}
