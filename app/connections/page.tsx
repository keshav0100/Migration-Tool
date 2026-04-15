export default function Connections() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">🔗 Connections</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">GitHub</h2>
          <p className="text-gray-400 mb-4">Connect your repositories</p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Connect GitHub
          </button>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Azure DevOps</h2>
          <p className="text-gray-400 mb-4">Integrate pipelines</p>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-lg">
            Connect Azure
          </button>
        </div>
      </div>
    </div>
  );
}
