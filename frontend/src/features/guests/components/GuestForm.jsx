import { useState } from "react";

function GuestForm({ selectedGuest, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: selectedGuest?.name || "",

    email: selectedGuest?.email || "",

    phone: selectedGuest?.phone || "",

    city: selectedGuest?.city || "",

    status: selectedGuest?.status || "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    setTimeout(() => {
      onClose();
    }, 150);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Guest Name"
        className="w-full rounded-xl border p-3"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-xl border p-3"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full rounded-xl border p-3"
      />

      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="w-full rounded-xl border p-3"
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border px-5 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-5 py-2 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default GuestForm;
