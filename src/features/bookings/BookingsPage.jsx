import PageHeader from "../../components/ui/PageHeader";
import DataTable from "../../components/ui/DataTable/DataTable";

import { bookingsColumns } from "../../constants/bookingsColumns";

import { useBookings } from "./hooks/useBookings";

import BookingsSummary from "./components/BookingsSummary";
import BookingsToolbar from "./components/BookingsToolbar";
import BookingRow from "./components/BookingRow";
import BookingModal from "./components/BookingModal";
import DeleteBookingModal from "./components/DeleteBookingModal";

function BookingsPage() {
  const {
    filteredBookings,
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
    isModalOpen,
    setIsModalOpen,

    selectedBooking,
    setSelectedBooking,
    handleAddBooking,
    handleEditBooking,

    handleUpdateBooking,
    isDeleteOpen,
    setIsDeleteOpen,

    bookingToDelete,
    setBookingToDelete,

    handleDeleteClick,
    handleConfirmDelete,
  } = useBookings();

  const onAddBooking = () => {
    console.log("Opening Modal...");
    setSelectedBooking(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <PageHeader title="Bookings" subtitle="Manage hotel bookings." />

      <BookingsSummary bookings={filteredBookings} />

      <BookingsToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        status={status}
        setStatus={setStatus}
        onAddBooking={onAddBooking}
      />

      <DataTable
        title="Bookings List"
        columns={bookingsColumns}
        data={filteredBookings}
        renderRow={(booking) => (
          <BookingRow
            key={booking.id}
            booking={booking}
            onEdit={handleEditBooking}
            onDelete={handleDeleteClick}
          />
        )}
      />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedBooking(null);

          setIsModalOpen(false);
        }}
        selectedBooking={selectedBooking}
        onSubmit={selectedBooking ? handleUpdateBooking : handleAddBooking}
      />
      <DeleteBookingModal
        isOpen={isDeleteOpen}
        booking={bookingToDelete}
        onClose={() => {
          setBookingToDelete(null);

          setIsDeleteOpen(false);
        }}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default BookingsPage;
