import React from 'react'

export default function NavBar() {
  return (
    <>
        <header className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border-b border-gray-800">
            <div className="px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">TMS</span>
                    </div>
                    <span className="text-white font-semibold">Task Management System</span>
                </div>
            </div>
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">VP</span>
            </div>
            </div>
        </header>
    </>
  )
}
