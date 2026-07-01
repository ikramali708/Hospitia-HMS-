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


    const initialState = {

        roomNumber: "",

        roomType: "Standard",

        price: "",

        capacity: "",

        status: "Available",

    };
    const [formData, setFormData] = useState(initialState);
    const handleAddRoom = (newRoom) => {

        const room = {

            id: Date.now(),

            ...newRoom,

        };

        setRooms(prev => [

            ...prev,

            room,

        ]);
        setFormData(initialState);

    };

    const handleEditRoom = (room) => {

        setSelectedRoom(room);

        setIsModalOpen(true);

    };


    const handleUpdateRoom = (updatedRoom) => {

        setRooms(prev =>
            prev.map(room =>
                room.id === updatedRoom.id
                    ? updatedRoom
                    : room
            )
        );

        setSelectedRoom(null);

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
                onEdit={handleEditRoom}
            />
            <RoomModal
                isOpen={isModalOpen}
                onClose={() => {
                    setSelectedRoom(null);
                    setIsModalOpen(false);
                }}
                selectedRoom={selectedRoom}
                onSubmit={
                    selectedRoom
                        ? handleUpdateRoom
                        : handleAddRoom
                }
            />

        </div>
    );
}

export default RoomsPage;