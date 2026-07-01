import Modal from "../../../components/ui/Modal";
import RoomForm from "./RoomForm";

function RoomModal({

    isOpen,
    onClose,
    onSubmit,
    selectedRoom,

}) {

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title={
                selectedRoom
                    ? "Edit Room"
                    : "Add Room"
            }
        >

            <RoomForm
                onSubmit={onSubmit}
                onClose={onClose}
                selectedRoom={selectedRoom}

            />

        </Modal>

    );

}

export default RoomModal;