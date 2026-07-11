import { useState } from "react";
import Button from "../../../components/ui/Button";

import React from "react";

const ProfileForm = ({ profile, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    ...profile,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,

      image: imageUrl,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Name is required.");

      return;
    }

    if (!formData.email.trim()) {
      alert("Email is required.");

      return;
    }

    onSubmit(formData);

    onClose();
  };
  return (
    <div>
      <div className="flex justify-center">
        <img
          src={formData.image}
          alt="Profile"
          className="h-32 w-32 rounded-full border-4 border-blue-100 object-cover"
        />
      </div>
      <div>
        <label className="mb-2 block font-medium">Profile Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full rounded-xl border p-3"
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label>Name</label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label>Email</label>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label>Phone</label>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label>Address</label>

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border px-5 py-2"
          >
            Cancel
          </button>

          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
