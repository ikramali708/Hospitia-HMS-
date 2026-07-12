import { useState } from "react";

import { rooms } from "../../rooms/mock/rooms";
import { guests } from "../../guests/mock/guests";

function BookingForm({ selectedBooking, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    guestId: selectedBooking?.guestId || "",

    roomId: selectedBooking?.roomId || "",

    checkIn: selectedBooking?.checkIn || "",

    checkOut: selectedBooking?.checkOut || "",

    total: selectedBooking?.total || "",

    status: selectedBooking?.status || "Confirmed",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (
      !formData.guestId ||
      !formData.roomId ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      alert("Please fill all fields.");

      return;
    }
    e.preventDefault();

    onSubmit({
      ...formData,

      total: totalAmount,
    });

    onClose();
  };

  const selectedRoom = rooms.find(
    (room) => room.id === Number(formData.roomId),
  );
  const checkInDate = new Date(formData.checkIn);

  const checkOutDate = new Date(formData.checkOut);
  if (checkOutDate <= checkInDate) {
    alert("Check Out must be after Check In.");

    return;
  }

  const totalNights =
    formData.checkIn && formData.checkOut
      ? Math.max(
          1,

          Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)),
        )
      : 0;
  const totalAmount = selectedRoom ? totalNights * selectedRoom.price : 0;
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Guest */}
      <div>
        <label className="mb-2 block font-medium">Guest</label>

        <select
          name="guestId"
          value={formData.guestId}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 p-3"
        >
          <option value="">Select Guest</option>

          {guests.map((guest) => (
            <option key={guest.id} value={guest.id}>
              {guest.name}
            </option>
          ))}
        </select>
      </div>
      {/* Room */}
      <div>
        <label className="mb-2 block font-medium">Room</label>

        <select
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 p-3"
        >
          <option value="">Select Room</option>

          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              Room {room.roomNumber}
            </option>
          ))}
        </select>
      </div>
      {/* Check In */}
      <div>
        <label className="mb-2 block font-medium">Check In</label>

        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 p-3"
        />
      </div>
      {/* Check Out */}
      <div>
        <label className="mb-2 block font-medium">Check Out</label>

        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 p-3"
        />
      </div>
      {/* Total */}\
      <div>
        <label className="mb-2 block font-medium">Total Amount</label>

        <div className="rounded-xl border bg-slate-50 p-3 font-semibold">
          ${totalAmount}
        </div>
      </div>
      {/* Status */}
      <div>
        <label className="mb-2 block font-medium">Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 p-3"
        >
          <option value="Confirmed">Confirmed</option>

          <option value="Checked In">Checked In</option>

          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-slate-300 px-5 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Save Booking
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
