import Modal from "../../../components/ui/Modal";

function DeleteBookingModal({ isOpen, onClose, onConfirm, booking }) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} title="Delete Booking" onClose={onClose}>
      <div className="space-y-6">
        <p className="text-slate-600">
          Are you sure you want to delete booking of
          <span className="font-semibold"> {booking?.guestName}</span>?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2 hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBookingModal;
