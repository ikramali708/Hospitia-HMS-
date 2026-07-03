import { useState } from "react";

import { toast } from "react-toastify";

import { getRooms } from "../Service/roomService";

export function useRooms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rooms, setRooms] = useState(getRooms());
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.roomType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.status.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      status === "All" || room.status.toLowerCase() === status.toLowerCase();

    return matchesSearch && matchesStatus;
    console.log(isModalOpen);
  });
  const initialState = {
    roomNumber: "",

    roomType: "Standard",

    price: "",

    capacity: "",

    status: "Available",
  };
  const [formData, setFormData] = useState(initialState);

  const handleAddRoom = (newRoom) => {
    const room = {
      id: Date.now(),

      ...newRoom,
    };

    setRooms((prev) => [...prev, room]);
    setFormData(initialState);
    setIsModalOpen(false);
    toast.success("Room added successfully!");
  };

  const handleEditRoom = (room) => {
    setSelectedRoom(room);

    setIsModalOpen(true);
  };

  const handleUpdateRoom = (updatedRoom) => {
    setRooms((prev) =>
      prev.map((room) => (room.id === updatedRoom.id ? updatedRoom : room)),
    );

    setSelectedRoom(null);
    toast.info("Room updated successfully!");
  };

  const handleDeleteClick = (room) => {
    setRoomToDelete(room);

    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    setRooms((prev) => prev.filter((room) => room.id !== roomToDelete.id));
    toast.error("Room deleted successfully!");

    setRoomToDelete(null);

    setIsDeleteOpen(false);
  };

  return {
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
    isModalOpen,
    setIsModalOpen,
    rooms,
    setRooms,
    selectedRoom,
    setSelectedRoom,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    isDeleteOpen,
    setIsDeleteOpen,
    roomToDelete,
    setRoomToDelete,
    filteredRooms,
    handleAddRoom,
    handleEditRoom,
    handleUpdateRoom,
    handleDeleteClick,
    handleConfirmDelete,
  };
}
