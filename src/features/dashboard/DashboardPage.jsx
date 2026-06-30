import Button from "../../components/ui/Button";
import StatCard from "../../components/ui/StatCard";
import RecentBookings from "./components/RecentBookings";
import RecentGuests from "./components/RecentGuests";
import { dashboardStats } from "../../constants/dashboardStats";

function DashboardPage() {
    return (
        <div className="space-y-8">

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                    <h1 className="text-4xl font-bold">

                        Welcome Back 👋

                    </h1>

                    <p className="mt-2 text-slate-500">

                        Here's what's happening today.

                    </p>

                </div>

                <Button>

                    + New Booking

                </Button>

            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

                {dashboardStats.map((item) => (

                    <StatCard
                        key={item.id}
                        {...item}
                    />

                ))}

            </div>

            <div className="grid gap-6 xl:grid-cols-2">

                <RecentBookings />

                <RecentGuests />

            </div>

        </div>
    );
}

export default DashboardPage;