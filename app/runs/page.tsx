export default function Runs() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Migration Runs</h1>

      <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg shadow-lg">
        Start Migration
      </button>

      <div className="bg-black border border-gray-800 rounded-xl p-4 h-72 overflow-y-auto font-mono text-sm mt-4">
        <p className="text-green-400">✔ Starting migration...</p>
        <p className="text-yellow-400">⚠ Processing data...</p>
      </div>
    </div>
  );
}
