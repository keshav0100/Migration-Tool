"use client";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Heading */}
      <h1 className="text-xl font-semibold text-gray-900">Welcome back 👋</h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <input
          placeholder="Search here..."
          className="bg-white border border-gray-300 px-4 py-2 rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-black font-extrabold">
          K
        </div>
      </div>
    </div>
  );
}
