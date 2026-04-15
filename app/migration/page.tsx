import Table from "@/components/Table";
import { migrationData } from "@/data/migration";

export default function Migration() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">⚙️ Migration</h1>

      <div className="flex gap-4 mb-6">
        <select className="bg-gray-900 text-white border border-gray-700 p-2 rounded">
          <option>Select Org</option>
        </select>

        <select className="bg-gray-900 text-white border border-gray-700 p-2 rounded">
          <option>Select Project</option>
        </select>

        <button className="bg-green-600 text-white px-5 py-2 rounded">
          Generate Plan
        </button>
      </div>

      <Table data={migrationData} />
    </div>
  );
}
