import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../features/dashboard/DashboardPage";
import RoomsPage from "../features/rooms/RoomsPage";
import GuestsPage from "../features/guests/GuestsPage";
import BookingsPage from "../features/bookings/BookingsPage";
import ProfilePage from "../features/profile/ProfilePage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<DashboardPage />} />

                    <Route path="/rooms" element={<RoomsPage />} />

                    <Route path="/guests" element={<GuestsPage />} />

                    <Route path="/bookings" element={<BookingsPage />} />

                    <Route path="/profile" element={<ProfilePage />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;