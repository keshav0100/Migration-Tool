"use client";

import StatsCard from "@/components/StatsCard";
import { useRouter } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Repos", value: 2 },
  { name: "Branches", value: 5 },
  { name: "PRs", value: 10 },
];

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-gray-900">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard
          title="Connections"
          value="2"
          color="from-blue-500 to-blue-700"
        />
        <StatsCard
          title="Migrations"
          value="1 Pending"
          color="from-yellow-500 to-orange-600"
        />
        <StatsCard
          title="Runs"
          value="Success"
          color="from-green-500 to-green-700"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Recent Activity
          </h2>
          <p className="text-gray-600 text-sm">
            Last migration completed successfully.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Quick Actions
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/migration")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              New Migration
            </button>

            <button
              onClick={() => router.push("/runs")}
              className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 hover:scale-105 transition"
            >
              View Runs
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="mb-4 text-gray-800 font-semibold">Migration Stats</h2>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
