import React from 'react'

export const FullPageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-200 rounded-full border-t-slate-800 animate-spin" />
        <span className="mt-3 text-sm text-gray-600">Loading...</span>
      </div>
    </div>
  )
}

export default FullPageLoader
