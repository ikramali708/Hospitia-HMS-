import PageHeader from "../../components/ui/PageHeader";
import RoomsToolbar from "./components/RoomsToolbar";
import RoomsTable from "./components/RoomsTable";
import RoomModal from "./components/RoomModal";
import { getRooms } from "./Service/roomService";
import { useState } from "react";
import DeleteRoomModal from "./components/DeleteRoomModal";
import { toast } from "react-toastify";

function RoomsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const rooms = getRooms();
  const [rooms, setRooms] = useState(getRooms());
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [roomToDelete, setRoomToDelete] = useState(null);

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

    setRooms((prev) => [...prev, room]);
    setFormData(initialState);
    toast.success("Room added successfully!");
  };

  const handleEditRoom = (room) => {
    setSelectedRoom(room);

    setIsModalOpen(true);
  };

  const handleUpdateRoom = (updatedRoom) => {
    setRooms((prev) =>
      prev.map((room) => (room.id === updatedRoom.id ? updatedRoom : room)),
    );

    setSelectedRoom(null);
    toast.info("Room updated successfully!");
  };

  const handleDeleteClick = (room) => {
    setRoomToDelete(room);

    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    setRooms((prev) => prev.filter((room) => room.id !== roomToDelete.id));
    toast.error("Room deleted successfully!");

    setRoomToDelete(null);

    setIsDeleteOpen(false);
  };

  // const handleDeleteRoom = (id) => {
  //   setRooms((prev) => prev.filter((room) => room.id !== id));
  // };

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.roomType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.status.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      status === "All" || room.status.toLowerCase() === status.toLowerCase();

    return matchesSearch && matchesStatus;
    console.log(isModalOpen);
  });

  return (
    <div className="space-y-8">
      <PageHeader title="Rooms" subtitle="Manage hotel rooms efficiently." />

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
        onDelete={handleDeleteClick}
      />
      <RoomModal
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedRoom(null);
          setIsModalOpen(false);
        }}
        selectedRoom={selectedRoom}
        onSubmit={selectedRoom ? handleUpdateRoom : handleAddRoom}
      />
      <DeleteRoomModal
        isOpen={isDeleteOpen}
        onClose={() => {
          setRoomToDelete(null);
          setIsDeleteOpen(false);
        }}
        onConfirm={handleConfirmDelete}
        room={roomToDelete}
      />
    </div>
  );
}

export default RoomsPage;
