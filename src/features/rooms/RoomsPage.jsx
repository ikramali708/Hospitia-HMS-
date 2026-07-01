import PageHeader from "../../components/ui/PageHeader";
import RoomsToolbar from "./components/RoomsToolbar";
import RoomsTable from "./components/RoomsTable";
import RoomModal from "./components/RoomModal";
import { getRooms } from "./Service/roomService";
import { useState } from "react";


function RoomsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const [status, setStatus] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);


    // const rooms = getRooms();
    const [rooms, setRooms] = useState(getRooms());
    const [selectedRoom, setSelectedRoom] = useState(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleAddRoom = (room) => {

        setRooms(prev => [

            ...prev,

            {
                id: Date.now(),
                ...room,
            }

        ]);

    };


    const handleUpdateRoom = (updatedRoom) => {

        setRooms(prev =>

            prev.map(room =>

                room.id === updatedRoom.id

                    ? updatedRoom

                    : room

            )

        );

    };


    const handleDeleteRoom = (id) => {

        setRooms(prev =>

            prev.filter(room => room.id !== id)

        );

    };




    const filteredRooms = rooms.filter((room) => {

        const matchesSearch =
            room.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            room.roomType.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            status === "All" ||
            room.status.toLowerCase() === status.toLowerCase();

        return matchesSearch && matchesStatus;
        console.log(isModalOpen);
    });

    return (
        <div className="space-y-8">

            <PageHeader
                title="Rooms"
                subtitle="Manage hotel rooms efficiently."
            />

            <RoomsToolbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                status={status}
                setStatus={setStatus}
                onAddRoom={() => setIsModalOpen(true)}
            />

            <RoomsTable
                rooms={filteredRooms}
            />
            <RoomModal

                isOpen={isModalOpen}

                onClose={() => setIsModalOpen(false)}

            />

        </div>
    );
}

export default RoomsPage;