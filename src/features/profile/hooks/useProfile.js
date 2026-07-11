import { useState } from "react";

import { getProfile } from "../services/profileService";

export function useProfile() {
  const [profile, setProfile] = useState(getProfile());

  return {
    profile,

    setProfile,
  };
}
