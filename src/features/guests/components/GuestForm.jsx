import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import { useEffect } from "react";

const initialState = {
  roomNumber: "",
  roomType: "Standard",
  price: "",
  capacity: "",
  status: "Available",
};
function GuestForm({ onSubmit, onClose, selectedGuest }) {
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    if (selectedGuest) {
      setFormData(selectedGuest);
    } else {
      setFormData(initialState);
    }
  }, [selectedGuest]);

  //Error handling and validation

  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.Address.trim()) {
      newErrors.Address = "Address is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,

      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;
    onSubmit(formData);
    onClose();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Name"
      />

      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Email"
      />

      <Input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="Phone"
      />

      <Input
        name="Address"
        value={formData.Address}
        onChange={handleChange}
        error={errors.Address}
        placeholder="Address"
      />
      {/* 
      <Select
        name="roomType"
        value={formData.roomType}
        onChange={handleChange}
        options={["Standard", "Deluxe", "Suite"]}
      />

      <Select
        name="status"
        value={formData.status}
        onChange={handleChange}
        options={["Available", "Occupied", "Maintenance"]}
      /> */}

      <Button type="submit">Save Guest</Button>
    </form>
  );
}

export default GuestForm;
