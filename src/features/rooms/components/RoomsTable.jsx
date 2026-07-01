import Table from "../../../components/ui/Table";
import RoomRow from "./RoomRow";
import EmptyState from "../../../components/ui/EmptyState";

function RoomsTable({ rooms, onEdit }) {
    return (
        <Table title="Rooms List">

            <thead>

                <tr>

                    <th className="px-6 py-4 text-left">Room</th>

                    <th className="px-6 py-4 text-left">Type</th>

                    <th className="px-6 py-4 text-left">Price</th>

                    <th className="px-6 py-4 text-left">Capacity</th>

                    <th className="px-6 py-4 text-left">Status</th>

                    <th className="px-6 py-4 text-left">Actions</th>

                </tr>

            </thead>

            <tbody>

                {rooms.length === 0 ? (

                    <tr>

                        <td
                            colSpan={6}
                        >
                            <EmptyState />
                        </td>

                    </tr>

                ) : (

                    rooms.map(room => (

                        <RoomRow
                            key={room.id}
                            room={room}
                            onEdit={onEdit}
                        />

                    ))

                )}

            </tbody>

        </Table>
    );
}

export default RoomsTable;