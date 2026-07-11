import Table from "../../../components/ui/Table";
import { recentGuests } from "../../../constants/recentGuests";
import EmptyState from "../../../components/ui/DataTable/EmptyState";
import { CalendarX } from "lucide-react";
function RecentGuests() {
  return (
    <Table title="Recent Guests">
      <thead className="bg-slate-50">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
            Name
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
            Country
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
            Room
          </th>
        </tr>
      </thead>

      <tbody>
        {recentGuests.length === 0 ? (
          <tr>
            <td colSpan={6}>
              <EmptyState Icon={CalendarX} name="No Recent Guests" desc="" />
            </td>
          </tr>
        ) : (
          recentGuests.map((guest) => (
            <tr
              key={guest.id}
              className="border-b border-slate-100 transition-colors duration-200 hover:bg-slate-50"
            >
              <td className="px-6 py-5 font-medium text-slate-800">
                {guest.name}
              </td>

              <td className="px-6 py-5 text-slate-600">{guest.country}</td>

              <td className="px-6 py-5 text-slate-600">{guest.room}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default RecentGuests;
