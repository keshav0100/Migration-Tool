"use client";

import { useState, useEffect, useRef } from "react";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center mb-6 relative z-[9999]">
      <h1 className="text-xl font-semibold text-gray-900">Welcome back 👋</h1>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search here..."
          className="bg-white border border-gray-300 px-4 py-2 rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <div ref={ref} className="relative z-50">
          <div
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-gradient-to-r text-black flex items-center justify-center font-bold cursor-pointer shadow-lg shadow-black/30"
          >
            K
          </div>

          {open && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-40 font-bold font-large cursor-pointer bg-white rounded-xl shadow-xl border border-gray-200 p-2 z-[999999] pointer-events-auto">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-sm text-red-500 rounded-xl hover:bg-red-50 transition cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
