import {
    LayoutDashboard,
    BedDouble,
    Users,
    CalendarDays,
    UserCircle,
} from "lucide-react";

export const sidebarMenu = [
    {
        title: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Rooms",
        path: "/rooms",
        icon: BedDouble,
    },
    {
        title: "Guests",
        path: "/guests",
        icon: Users,
    },
    {
        title: "Bookings",
        path: "/bookings",
        icon: CalendarDays,
    },
    {
        title: "Profile",
        path: "/profile",
        icon: UserCircle,
    },
];