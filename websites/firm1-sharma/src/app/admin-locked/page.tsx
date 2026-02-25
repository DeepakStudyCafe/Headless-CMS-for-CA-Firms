export default function AdminLockedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Admin Panel Disabled
        </h1>

        {/* Sub text */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          The built-in admin panel has been temporarily disabled by the system administrator.
          You are not able to log in or manage content at this time.
        </p>

        {/* Notice card */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-left">
          <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-1">
            Access Restricted
          </p>
          <p className="text-sm text-orange-700">
            If you believe this is a mistake, please contact your Website account manager
            to have admin access re-enabled.
          </p>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-gray-400">
          Error code: ADMIN_LOCKED &nbsp;&bull;&nbsp; Powered by Website
        </p>
      </div>
    </div>
  )
}
