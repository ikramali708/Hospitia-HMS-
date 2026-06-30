import WelcomeSection from "./components/WelcomeSection";
import DashboardStats from "./components/DashboardStats";
import RecentBookings from "./components/RecentBookings";
import RecentGuests from "./components/RecentGuests";

function DashboardPage() {
    return (
        <>
            <WelcomeSection />

            <DashboardStats />

            <RecentBookings />

            <RecentGuests />
        </>
    );
}

export default DashboardPage;