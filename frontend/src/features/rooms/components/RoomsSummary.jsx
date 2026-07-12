function RoomsSummary({ rooms }) {
  const total = rooms.length;

  const available = rooms.filter((room) => room.status === "Available").length;

  const occupied = rooms.filter((room) => room.status === "Occupied").length;

  const maintenance = rooms.filter(
    (room) => room.status === "Maintenance",
  ).length;

  const cards = [
    {
      title: "Total Rooms",
      value: total,
      color: "bg-blue-100 text-blue-700",
    },

    {
      title: "Available",
      value: available,
      color: "bg-green-100 text-green-700",
    },

    {
      title: "Occupied",
      value: occupied,
      color: "bg-red-100 text-red-700",
    },

    {
      title: "Maintenance",
      value: maintenance,
      color: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-sm text-slate-500">{card.title}</p>

          <div
            className={`mt-5 inline-flex rounded-xl px-4 py-2 text-3xl font-bold ${card.color}`}
          >
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomsSummary;
