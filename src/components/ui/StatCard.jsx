function StatCard({ title, value, icon: Icon }) {
    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <h2 className="mt-4 text-3xl font-bold text-slate-800 md:text-4xl">
                        {value}
                    </h2>

                    <div className="mt-5 flex items-center gap-2">

                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                            +12%
                        </span>

                        <span className="text-sm text-slate-500">
                            vs last month
                        </span>

                    </div>

                </div>

                <div className="rounded-2xl bg-blue-50 p-4 transition duration-300 group-hover:bg-blue-600">

                    <Icon
                        size={32}
                        className="text-blue-600 transition duration-300 group-hover:text-white"
                    />

                </div>

            </div>

        </div>
    );
}

export default StatCard;