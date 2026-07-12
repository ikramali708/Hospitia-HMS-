import { useState } from "react";

import { toast } from "react-toastify";

import { getRooms } from "../Service/roomService";
import { useEffect } from "react";

export function useRooms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rooms, setRooms] = useState(getRooms());
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, status]);

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
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (!sortField) return 0;

    if (a[sortField] < b[sortField]) {
      return sortOrder === "asc" ? -1 : 1;
    }

    if (a[sortField] > b[sortField]) {
      return sortOrder === "asc" ? 1 : -1;
    }

    return 0;
  });
  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);

      setSortOrder("asc");
    }
  };

  const totalPages = Math.ceil(sortedRooms.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;

  const endIndex = startIndex + rowsPerPage;

  const paginatedRooms = sortedRooms.slice(startIndex, endIndex);
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(totalPages);
  };

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
    sortedRooms,

    handleSort,

    sortField,

    sortOrder,
    paginatedRooms,

    currentPage,

    rowsPerPage,

    setRowsPerPage,

    totalPages,

    previousPage,

    nextPage,
    goToPage,

    firstPage,

    lastPage,
    rooms,
  };
}
