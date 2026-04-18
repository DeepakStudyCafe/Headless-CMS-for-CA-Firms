export default function SiteOfflinePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Website Temporarily Unavailable
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          This website is currently offline for maintenance or due to a pending account issue.
          Please contact the website administrator for more information.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-left">
          <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">
            Service Notice
          </p>
          <p className="text-sm text-red-600">
            If you are the site owner, please log in to the administration portal and
            ensure your account is in good standing to restore access.
          </p>
        </div>
        <p className="mt-8 text-xs text-gray-400">
          Error code: SITE_OFFLINE &nbsp;&bull;&nbsp; Powered by Website
        </p>
      </div>
    </div>
  )
}
