import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";

function DeleteRoomModal({ isOpen, onClose, onConfirm, room }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Room">
      <div className="space-y-6">
        <p className="text-slate-600">
          Are you sure you want to delete
          <span className="font-semibold"> Room {room?.roomNumber}</span>?
        </p>

        <div className="flex justify-end gap-3">
          <Button onClick={onClose}>Cancel</Button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteRoomModal;
