import Modal from "../../../components/ui/Modal";
import GuestForm from "./GuestForm";

function GuestModal({ isOpen, onClose, onSubmit, selectedGuest }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={selectedGuest ? "Edit Guest" : "Add Guest"}
    >
      <GuestForm
        onSubmit={onSubmit}
        onClose={onClose}
        selectedGuest={selectedGuest}
      />
    </Modal>
  );
}

export default GuestModal;
