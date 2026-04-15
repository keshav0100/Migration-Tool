export default function Table({ data }: any) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-gray-400 uppercase text-xs">
          <tr>
            <th className="p-4">Source</th>
            <th className="p-4">Target</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any, index: number) => (
            <tr
              key={index}
              className="border-t border-gray-800 hover:bg-gray-900"
            >
              <td className="p-4">{item.source}</td>
              <td className="p-4">{item.target}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    item.status === "Done"
                      ? "bg-green-900 text-green-400"
                      : "bg-yellow-900 text-yellow-400"
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
  );
}