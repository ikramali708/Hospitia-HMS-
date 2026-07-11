import { useState } from "react";
import getGuests from "../Services/guestService";
import { toast } from "react-toastify";

export function useGuests() {
  const [guests, setGuests] = useState(getGuests());

  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedGuest, setSelectedGuest] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [guestToDelete, setGuestToDelete] = useState(null);

  const filteredGuests = guests.filter((guest) => {
    const matchesSearch =
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = status === "All" ? true : guest.status === status;

    return matchesSearch && matchesStatus;
  });
  const handleAddGuest = (guest) => {
    const newGuest = {
      id: Date.now(),

      ...guest,
    };

    setGuests((prev) => [...prev, newGuest]);

    toast.success("Guest added successfully!");
  };
  const handleEditGuest = (guest) => {
    setSelectedGuest(guest);

    setIsModalOpen(true);
  };
  const handleUpdateGuest = (updatedGuest) => {
    setGuests((prev) =>
      prev.map((guest) =>
        guest.id === selectedGuest.id
          ? {
              ...selectedGuest,
              ...updatedGuest,
            }
          : guest,
      ),
    );

    toast.success("Guest updated successfully!");

    setSelectedGuest(null);
  };
  const handleDeleteClick = (guest) => {
    setGuestToDelete(guest);

    setIsDeleteOpen(true);
  };
  const handleConfirmDelete = () => {
    setGuests((prev) => prev.filter((guest) => guest.id !== guestToDelete.id));

    toast.success("Guest deleted successfully!");

    setGuestToDelete(null);

    setIsDeleteOpen(false);
  };

  return {
    filteredGuests,
    guests,
    setGuests,
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
    isModalOpen,
    setIsModalOpen,
    selectedGuest,
    setSelectedGuest,
    handleAddGuest,
    handleEditGuest,

    handleUpdateGuest,
    isDeleteOpen,

    setIsDeleteOpen,

    guestToDelete,

    setGuestToDelete,

    handleDeleteClick,

    handleConfirmDelete,
  };
}
