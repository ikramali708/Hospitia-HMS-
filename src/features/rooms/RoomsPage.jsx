import PageHeader from "../../components/ui/PageHeader";
import RoomsToolbar from "./components/RoomsToolbar";
import RoomsTable from "./components/RoomsTable";
import RoomModal from "./components/RoomModal";
import { getRooms } from "./Service/roomService";
import DeleteRoomModal from "./components/DeleteRoomModal";
import { toast } from "react-toastify";
import { useRooms } from "./hooks/useRooms.js";

function RoomsPage() {
  const {
    filteredRooms,

    searchTerm,
    setSearchTerm,

    status,
    setStatus,

    selectedRoom,

    isModalOpen,
    setIsModalOpen,

    isDeleteOpen,
    setIsDeleteOpen,

    roomToDelete,

    handleAddRoom,

    handleEditRoom,

    handleUpdateRoom,

    handleDeleteClick,

    handleConfirmDelete,

    setSelectedRoom,
  } = useRooms();

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
