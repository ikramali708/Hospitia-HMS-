import Badge from "../../../components/ui/Badge";
import { Pencil, Trash2 } from "lucide-react";

function RoomRow({ room, onEdit, }) {
    return (
        <tr className="border-b hover:bg-slate-50">

            <td className="px-6 py-4">{room.roomNumber}</td>

            <td className="px-6 py-4">{room.roomType}</td>

            <td className="px-6 py-4">${room.price}</td>

            <td className="px-6 py-4">{room.capacity}</td>

            <td className="px-6 py-4">
                <Badge status={room.status} />
            </td>

            <td className="px-6 py-4">

                <div className="flex gap-3">

                    <button className="text-blue-600 hover:text-blue-800" onClick={() => onEdit(room)}>

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

export default RoomRow;