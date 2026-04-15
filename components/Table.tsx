"use client";
import { useState } from "react";

export default function Table({ data }: any) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item: any) =>
    item.source.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* Search */}
      <input
        placeholder="Search repos..."
        className="mb-4 bg-white border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          {/* Header */}
          <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
            <tr>
              <th className="p-4 text-left">Source</th>
              <th className="p-4 text-left">Target</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filtered.map((item: any, index: number) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="p-4 text-gray-800">{item.source}</td>
                <td className="p-4 text-gray-800">{item.target}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Done"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
