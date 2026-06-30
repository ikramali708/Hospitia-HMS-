function StatCard({ title, value }) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm border">
            <h3 className="text-sm text-gray-500">{title}</h3>

            <p className="mt-3 text-3xl font-bold">{value}</p>
        </div>
    );
}

export default StatCard;