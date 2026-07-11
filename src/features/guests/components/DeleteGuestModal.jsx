import Modal from "../../../components/ui/Modal";

function DeleteGuestModal({ isOpen, onClose, onConfirm, guest }) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} title="Delete Guest" onClose={onClose}>
      <div className="space-y-6">
        <p className="text-slate-600">
          Are you sure you want to delete
          <span className="font-semibold"> {guest?.name}</span>?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-2 text-white cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteGuestModal;
