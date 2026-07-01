import { SearchX } from "lucide-react";

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-16">

            <SearchX
                size={60}
                className="text-slate-300"
            />

            <h2 className="mt-4 text-xl font-semibold">

                No Rooms Found

            </h2>

            <p className="mt-2 text-slate-500">

                Try another search keyword.

            </p>

        </div>
    );
}

export default EmptyState;