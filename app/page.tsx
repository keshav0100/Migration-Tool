export default function Dashboard() {
  const cards = [
    {
      title: "Connections",
      value: "2",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Migrations",
      value: "1 Pending",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Runs",
      value: "Success",
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">📊 Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${card.color} p-6 rounded-xl shadow-lg hover:scale-105 transition`}
          >
            <h2 className="text-lg">{card.title}</h2>
            <p className="text-2xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
