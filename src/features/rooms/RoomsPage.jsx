import PageHeader from "../../components/ui/PageHeader";
import RoomsToolbar from "./components/RoomsToolbar";
import RoomsTable from "./components/RoomsTable";
import RoomModal from "./components/RoomModal";
import { getRooms } from "./Service/roomService";
import DeleteRoomModal from "./components/DeleteRoomModal";
import { toast } from "react-toastify";
import { useRooms } from "./hooks/useRooms.js";
import Pagination from "../../components/ui/Pagination";
import { exportToCSV } from "../../utils/exportToCSV";
import RoomsSummary from "./components/RoomsSummary";
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
    sortedRooms,
    handleSort,
    sortField,
    sortOrder,
    paginatedRooms,
    currentPage,
    rowsPerPage,
    setRowsPerPage,
    totalPages,
    previousPage,
    nextPage,
    goToPage,
    firstPage,
    lastPage,
    rooms,
  } = useRooms();
  const handleExport = () => {
    exportToCSV(sortedRooms, "rooms");
  };

  return (
    <div className="space-y-8">
      <PageHeader title="Rooms" subtitle="Manage hotel rooms efficiently." />
      <RoomsSummary rooms={rooms} />

      <RoomsToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        status={status}
        setStatus={setStatus}
        onExport={handleExport}
        onAddRoom={() => setIsModalOpen(true)}
      />

      <RoomsTable
        rooms={paginatedRooms}
        onEdit={handleEditRoom}
        onDelete={handleDeleteClick}
        onSort={handleSort}
        sortField={sortField}
        sortOrder={sortOrder}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
        firstPage={firstPage}
        lastPage={lastPage}
        goToPage={goToPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalItems={sortedRooms.length}
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
