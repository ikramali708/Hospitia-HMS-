import Modal from "../../../components/ui/Modal";
import BookingForm from "./BookingForm";

function BookingModal({ isOpen, onClose, selectedBooking, onSubmit }) {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      title={selectedBooking ? "Edit Booking" : "Add Booking"}
      onClose={onClose}
    >
      <BookingForm
        selectedBooking={selectedBooking}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </Modal>
  );
}

export default BookingModal;
