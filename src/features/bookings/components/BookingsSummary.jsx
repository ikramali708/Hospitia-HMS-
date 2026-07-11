import StatCard from "../../../components/ui/StatCard";
import { CalendarCheck, CheckCircle2, LogIn, XCircle } from "lucide-react";

function BookingsSummary({ bookings }) {
  const totalBookings = bookings.length;

  const confirmed = bookings.filter(
    (booking) => booking.status === "Confirmed",
  ).length;

  const checkedIn = bookings.filter(
    (booking) => booking.status === "Checked In",
  ).length;

  const cancelled = bookings.filter(
    (booking) => booking.status === "Cancelled",
  ).length;

  const stats = [
    {
      id: 1,
      title: "Total Bookings",
      value: totalBookings,
      icon: CalendarCheck,
    },
    {
      id: 2,
      title: "Confirmed",
      value: confirmed,
      icon: CheckCircle2,
    },
    {
      id: 3,
      title: "Checked In",
      value: checkedIn,
      icon: LogIn,
    },
    {
      id: 4,
      title: "Cancelled",
      value: cancelled,
      icon: XCircle,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default BookingsSummary;
