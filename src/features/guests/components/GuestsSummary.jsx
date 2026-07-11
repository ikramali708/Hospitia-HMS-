function GuestsSummary({ guests }) {
  const total = guests.length;

  const active = guests.filter((guest) => guest.status === "Active").length;

  const inactive = guests.filter((guest) => guest.status === "Inactive").length;

  const cards = [
    {
      title: "Total Guests",
      value: total,
      color: "bg-blue-100 text-blue-700",
    },

    {
      title: "Active Guests",
      value: active,
      color: "bg-green-100 text-green-700",
    },

    {
      title: "Inactive Guests",
      value: inactive,
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
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

export default GuestsSummary;
