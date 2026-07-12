import { useState } from "react";

import { getProfile } from "../services/profileService";
import { toast } from "react-toastify";

export function useProfile() {
  const [profile, setProfile] = useState(getProfile());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleUpdateProfile = (updatedProfile) => {
    setProfile(updatedProfile);

    toast.success("Profile updated successfully!");
  };

  return {
    profile,

    setProfile,
    isModalOpen,

    setIsModalOpen,

    handleUpdateProfile,
  };
}
