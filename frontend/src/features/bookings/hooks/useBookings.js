import { useState } from "react";
import { getBookings } from "../services/bookingService";
import { toast } from "react-toastify";

import { guests } from "../../guests/mock/guests";

import { rooms } from "../../rooms/mock/rooms";

export function useBookings() {
  const [bookings, setBookings] = useState(getBookings());

  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [bookingToDelete, setBookingToDelete] = useState(null);
  const handleDeleteClick = (booking) => {
    setBookingToDelete(booking);

    setIsDeleteOpen(true);
  };
  const handleConfirmDelete = () => {
    setBookings((prev) =>
      prev.filter((booking) => booking.id !== bookingToDelete.id),
    );

    toast.success("Booking deleted successfully!");

    setBookingToDelete(null);

    setIsDeleteOpen(false);
  };

  const handleAddBooking = (booking) => {
    const guest = guests.find((g) => g.id === Number(booking.guestId));

    const room = rooms.find((r) => r.id === Number(booking.roomId));

    const newBooking = {
      id: Date.now(),

      guestName: guest.name,

      roomNumber: room.roomNumber,

      checkIn: booking.checkIn,

      checkOut: booking.checkOut,

      total: booking.total,

      status: booking.status,
    };

    setBookings((prev) => [newBooking, ...prev]);

    toast.success("Booking added successfully!");
  };
  const handleEditBooking = (booking) => {
    setSelectedBooking(booking);

    setIsModalOpen(true);
  };
  const handleUpdateBooking = (updatedBooking) => {
    const guest = guests.find((g) => g.id === Number(updatedBooking.guestId));

    const room = rooms.find((r) => r.id === Number(updatedBooking.roomId));

    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === selectedBooking.id
          ? {
              ...booking,

              guestId: Number(updatedBooking.guestId),

              roomId: Number(updatedBooking.roomId),

              guestName: guest.name,

              roomNumber: room.roomNumber,

              checkIn: updatedBooking.checkIn,

              checkOut: updatedBooking.checkOut,

              total: updatedBooking.total,

              status: updatedBooking.status,
            }
          : booking,
      ),
    );

    toast.success("Booking updated successfully!");

    setSelectedBooking(null);
  };
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.roomNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = status === "All" ? true : booking.status === status;

    return matchesSearch && matchesStatus;
  });

  return {
    bookings,

    setBookings,

    filteredBookings,

    searchTerm,

    setSearchTerm,

    status,

    setStatus,
    isModalOpen,
    setIsModalOpen,

    selectedBooking,
    setSelectedBooking,
    handleAddBooking,
    handleEditBooking,

    handleUpdateBooking,
    isDeleteOpen,

    setIsDeleteOpen,

    bookingToDelete,

    setBookingToDelete,

    handleDeleteClick,

    handleConfirmDelete,
  };
}
