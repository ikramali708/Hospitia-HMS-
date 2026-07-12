import Badge from "../../../components/ui/Badge";
import { Pencil, Trash2 } from "lucide-react";

function BookingRow({
  booking,

  onEdit,

  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="px-6 py-4">{booking.guestName}</td>

      <td className="px-6 py-4">{booking.roomNumber}</td>

      <td className="px-6 py-4">{booking.checkIn}</td>

      <td className="px-6 py-4">{booking.checkOut}</td>

      <td className="px-6 py-4">${booking.total}</td>

      <td className="px-6 py-4">
        <Badge status={booking.status} />
      </td>

      <td className="px-6 py-4">
        <div className="flex gap-3">
          <button
            onClick={() => onEdit(booking)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(booking)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default BookingRow;
