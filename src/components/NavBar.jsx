import React from 'react'
import { logout } from '../api/auth.api'

export default function NavBar() {

    const logoutUser = async() => {
        const res = await logout();
        console.log(res);
        window.location.reload();
    }

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
            <div className="w-12 h-8 bg-orange-500 flex items-center justify-center rounded-lg"
                onClick={() => {logoutUser()}}>
                <button 
                    className="text-white text-xs font-bold hover:cursor-pointer"
                >Logout</button>
            </div>
            </div>
        </header>
    </>
  )
}
