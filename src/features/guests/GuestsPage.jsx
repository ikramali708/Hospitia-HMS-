import PageHeader from "../../components/ui/PageHeader";
import { useGuests } from "./hooks/useGuests.js";
import GuestsToolbar from "./components/GuestsToolbar";
import GuestsSummary from "./components/GuestsSummary";
import { guestColumns } from "../../constants/guestColumns";
import DataTable from "../../components/ui/DataTable/DataTable";
import GuestsModal from "./components/GuestsModal";
import GuestRow from "./components/GuestRow";
import DeleteGuestModal from "./components/DeleteGuestModal";

function GuestsPage() {
  const {
    guests,
    filteredGuests,
    searchTerm,

    setSearchTerm,

    status,

    setStatus,
    isModalOpen,
    setIsModalOpen,

    selectedGuest,
    setSelectedGuest,
    handleAddGuest,
    handleEditGuest,

    handleUpdateGuest,
    isDeleteOpen,
    setIsDeleteOpen,

    guestToDelete,
    setGuestToDelete,

    handleDeleteClick,
    handleConfirmDelete,
  } = useGuests();

  const onAddGuest = () => {
    console.log("Opening Modal...");
    setSelectedGuest(null);
    setIsModalOpen(true);
  };
  console.log(isModalOpen);
  return (
    <div className="space-y-8">
      <PageHeader title="Guests" subtitle="Manage hotel guests." />
      <GuestsSummary guests={filteredGuests} />
      <GuestsToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        status={status}
        setStatus={setStatus}
        onAddGuest={onAddGuest}
      />
      <DataTable
        title="Guests List"
        columns={guestColumns}
        data={filteredGuests}
        renderRow={(guest) => (
          <GuestRow
            key={guest.id}
            guest={guest}
            onEdit={handleEditGuest}
            onDelete={handleDeleteClick}
          />
        )}
      />
      <GuestsModal
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedGuest(null);

          setIsModalOpen(false);
        }}
        selectedGuest={selectedGuest}
        onSubmit={selectedGuest ? handleUpdateGuest : handleAddGuest}
      />
      <DeleteGuestModal
        isOpen={isDeleteOpen}
        guest={guestToDelete}
        onClose={() => {
          setGuestToDelete(null);

          setIsDeleteOpen(false);
        }}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default GuestsPage;
