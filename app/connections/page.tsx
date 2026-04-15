export default function Connections() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Connections</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">GitHub</h2>

          <p className="text-gray-600 mb-4">Connect your repositories</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-sm transition active:scale-95">
            Connect GitHub
          </button>
        </div>

        {/* Azure Card */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Azure DevOps
          </h2>

          <p className="text-gray-600 mb-4">Integrate pipelines</p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow-sm transition active:scale-95">
            Connect Azure
          </button>
        </div>
      </div>
    </div>
  );
}
