import Table from "../../../components/ui/Table";
import Badge from "../../../components/ui/Badge";
import { recentBookings } from "../../../constants/recentBookings";

function RecentBookings() {
    return (
        <Table title="Recent Bookings">

            <thead className="bg-slate-50">

                <tr>

                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Guest
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Room
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Check In
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Status
                    </th>

                </tr>

            </thead>
            <tbody>

                {recentBookings.map((booking) => (

                    <tr
                        key={booking.id}
                        className="border-b border-slate-100 transition-colors duration-200 hover:bg-slate-50"
                    >

                        <td className="px-6 py-5 font-medium text-slate-800">
                            {booking.guest}
                        </td>

                        <td className="px-6 py-5 text-slate-600">
                            {booking.room}
                        </td>

                        <td className="px-6 py-5 text-slate-600">
                            {booking.checkIn}
                        </td>

                        <td className="px-6 py-5">

                            <span
                                className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                            >

                                <Badge status={booking.status} />

                            </span>

                        </td>

                    </tr>

                ))}

            </tbody>

        </Table>
    );
}

export default RecentBookings;