"use client";
import { useState } from "react";

export default function Runs() {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const start = async () => {
    await fetch("/api/run", { method: "POST" });

    let val = 0;

    const interval = setInterval(() => {
      val += 10;
      setProgress(val);

      setLogs((prev) => [...prev, `Step ${val / 10}: Processing...`]);

      if (val >= 100) clearInterval(interval);
    }, 400);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Migration Runs
      </h1>

      <button
        onClick={start}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Start Migration
      </button>

      <div className="mt-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between mb-2 text-gray-700 font-medium">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full bg-gray-200 h-3 rounded">
          <div
            className="bg-green-500 h-3 rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="mb-2 font-semibold text-gray-800">Logs</h3>

        <ul className="text-sm text-gray-600 space-y-1 max-h-40 overflow-y-auto">
          {logs.map((log, i) => (
            <li key={i}>• {log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
