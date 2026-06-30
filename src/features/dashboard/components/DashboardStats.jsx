import StatCard from "../../../components/ui/StatCard";

function DashboardStats() {
    const stats = [
        {
            title: "Total Rooms",
            value: 120,
        },
        {
            title: "Available Rooms",
            value: 85,
        },
        {
            title: "Occupied Rooms",
            value: 35,
        },
        {
            title: "Total Guests",
            value: 58,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
                <StatCard
                    key={item.title}
                    title={item.title}
                    value={item.value}
                />
            ))}
        </div>
    );
}

export default DashboardStats;