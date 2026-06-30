import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar/Sidebar";

function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-100">

            {/* Mobile Overlay */}

            {isSidebarOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                />
            )}

            <Sidebar
                isOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
            />

            <div className="transition-all duration-300 lg:ml-64">

                <Navbar toggleSidebar={toggleSidebar} />

                <main className="p-4 md:p-6 lg:p-8">

                    <Outlet />

                </main>

            </div>

        </div>
    );
}

export default MainLayout;