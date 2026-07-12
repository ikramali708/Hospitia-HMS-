import Modal from "../../../components/ui/Modal";
import ProfileForm from "./ProfileForm";

function ProfileModal({ isOpen, onClose, profile, onSubmit }) {
  if (!isOpen) return null;

  return (
    <Modal title="Edit Profile" onClose={onClose} isOpen={isOpen}>
      <ProfileForm profile={profile} onSubmit={onSubmit} onClose={onClose} />
    </Modal>
  );
}

export default ProfileModal;
