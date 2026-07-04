import Table from "../../../components/ui/Table";
import RoomRow from "./RoomRow";
import EmptyState from "../../../components/ui/EmptyState";
import { SearchX } from "lucide-react";
import { ArrowUp, ArrowDown } from "lucide-react";

function RoomsTable({ rooms, onEdit, onDelete, onSort, sortField, sortOrder }) {
  return (
    <Table title="Rooms List">
      <thead>
        <tr>
          <th
            onClick={() => onSort("roomNumber")}
            className="cursor-pointer px-6 py-4"
          >
            <div className="flex items-center gap-2">
              Room Number
              {sortField === "roomNumber" &&
                (sortOrder === "asc" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                ))}
            </div>
          </th>

          <th
            onClick={() => onSort("type")}
            className="cursor-pointer px-6 py-4"
          >
            <div className="flex items-center gap-2">
              Type
              {sortField === "type" &&
                (sortOrder === "asc" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                ))}
            </div>
          </th>

          <th
            onClick={() => onSort("price")}
            className="cursor-pointer px-6 py-4"
          >
            <div className="flex items-center gap-2">
              Price
              {sortField === "price" &&
                (sortOrder === "asc" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                ))}
            </div>
          </th>

          <th
            onClick={() => onSort("capacity")}
            className="cursor-pointer px-6 py-4"
          >
            <div className="flex items-center gap-2">
              Capacity
              {sortField === "capacity" &&
                (sortOrder === "asc" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                ))}
            </div>
          </th>

          <th
            onClick={() => onSort("status")}
            className="cursor-pointer px-6 py-4"
          >
            <div className="flex items-center gap-2">
              Status
              {sortField === "status" &&
                (sortOrder === "asc" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                ))}
            </div>
          </th>

          <th className="px-6 py-4 text-left">Actions</th>
        </tr>
      </thead>

      <tbody>
        {rooms.length === 0 ? (
          <tr>
            <td colSpan={6}>
              <EmptyState
                Icon={SearchX}
                name="No Rooms Found"
                desc="Please search another keywords"
              />
            </td>
          </tr>
        ) : (
          rooms.map((room) => (
            <RoomRow
              key={room.id}
              room={room}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </tbody>
    </Table>
  );
}

export default RoomsTable;
