import Badge from "../../../components/ui/Badge";
import { Pencil, Trash2 } from "lucide-react";

function GuestRow({ guest, onEdit }) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="px-6 py-4">{guest.name}</td>

      <td className="px-6 py-4">{guest.email}</td>

      <td className="px-6 py-4">{guest.phone}</td>
      <td className="px-6 py-4">{guest.Address}</td>

      <td className="px-6 py-4">
        <div className="flex gap-3">
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => onEdit(guest)}
          >
            <Pencil size={18} />
          </button>

          <button className="text-red-600 hover:text-red-800">
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default GuestRow;
