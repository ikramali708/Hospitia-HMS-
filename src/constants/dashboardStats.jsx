import {
    BedDouble,
    DoorOpen,
    Hotel,
    Users,
} from "lucide-react";

export const dashboardStats = [
    {
        id: 1,
        title: "Total Rooms",
        value: 120,
        icon: Hotel,
    },
    {
        id: 2,
        title: "Available Rooms",
        value: 85,
        icon: DoorOpen,
    },
    {
        id: 3,
        title: "Occupied Rooms",
        value: 35,
        icon: BedDouble,
    },
    {
        id: 4,
        title: "Total Guests",
        value: 68,
        icon: Users,
    },
];