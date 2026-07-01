import Modal from "../../../components/ui/Modal";
import RoomForm from "./RoomForm";

function RoomModal({

    isOpen,
    onClose,

}) {

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title="Add Room"

        >

            <RoomForm />

        </Modal>

    );

}

export default RoomModal;