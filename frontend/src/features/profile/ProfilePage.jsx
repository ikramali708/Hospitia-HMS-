import ProfileHeader from "./components/ProfileHeader";
import ProfileCard from "./components/ProfileCard";
import ProfileInfo from "./components/ProfileInfo";
import ProfileModal from "./components/ProfileModal";

import { useProfile } from "./hooks/useProfile";

function ProfilePage() {
  const {
    profile,

    isModalOpen,

    setIsModalOpen,

    handleUpdateProfile,
  } = useProfile();

  return (
    <div className="space-y-8">
      <ProfileHeader />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <ProfileCard profile={profile} />
        </div>

        <div className="lg:col-span-2">
          <ProfileInfo profile={profile} onEdit={() => setIsModalOpen(true)} />
        </div>
        <ProfileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          profile={profile}
          onSubmit={handleUpdateProfile}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
