import Modal from "../../../components/ui/Modal";
import GuestForm from "./GuestForm";

function GuestModal({ isOpen, onClose, selectedGuest, onSubmit }) {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen} // <-- ADD THIS
      title={selectedGuest ? "Edit Guest" : "Add Guest"}
      onClose={onClose}
    >
      <GuestForm
        selectedGuest={selectedGuest}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </Modal>
  );
}

export default GuestModal;
