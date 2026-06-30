import Card from "./Card";

function Table({ title, children }) {
    return (
        <Card
            title={title}
            action={
                <button className="rounded-lg px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50">
                    View All
                </button>
            }
        >
            <div className="overflow-x-auto">

                <table className="min-w-[700px] w-full">

                    {children}

                </table>

            </div>
        </Card>
    );
}

export default Table;