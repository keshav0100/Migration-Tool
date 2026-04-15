import { ArrowUpRight } from "lucide-react";

export default function StatsCard({ title, value, color }: any) {
  return (
    <div
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${color} shadow-md hover:shadow-lg transition overflow-hidden group`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-20 bg-white blur-2xl group-hover:opacity-30 transition" />

      {/* Content */}
      <h2 className="text-sm text-white/80">{title}</h2>

      <div className="flex items-center justify-between mt-3">
        <p className="text-3xl font-bold text-white">{value}</p>
        <ArrowUpRight className="text-white/80" />
      </div>
    </div>
  );
}
