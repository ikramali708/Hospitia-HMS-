import { useState } from "react";
import getGuests from "../Services/guestService";

export function useGuests() {
  const [guests, setGuests] = useState(getGuests());

  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState("All");
  const filteredGuests = guests.filter((guest) => {
    const matchesSearch =
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = status === "All" ? true : guest.status === status;

    return matchesSearch && matchesStatus;
  });

  return {
    filteredGuests,
    guests,
    setGuests,
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
  };
}
