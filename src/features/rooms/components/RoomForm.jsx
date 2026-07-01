import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import { useEffect } from "react";


function RoomForm({ onSubmit, onClose, selectedRoom }) {
    const [formData, setFormData] = useState({

        roomNumber: "",
        roomType: "Standard",
        price: "",
        capacity: "",
        status: "Available",

    });
    useEffect(() => {

        if (selectedRoom) {

            setFormData(selectedRoom);

        } else {

            setFormData(initialState);

        }

    }, [selectedRoom]);


    // const [formData, setFormData] = useState(initialState);
    //Error handling and validation

    const [errors, setErrors] = useState({});
    const validate = () => {

        const newErrors = {};

        if (!formData.roomNumber.trim()) {

            newErrors.roomNumber = "Room Number is required";

        }

        if (!formData.price) {

            newErrors.price = "Price is required";

        }

        else if (Number(formData.price) <= 0) {

            newErrors.price = "Price must be greater than 0";

        }

        if (!formData.capacity) {

            newErrors.capacity = "Capacity is required";

        }

        else if (Number(formData.capacity) <= 0) {

            newErrors.capacity = "Capacity must be greater than 0";

        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };






    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value,

        }));

        setErrors(prev => ({

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
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                error={errors.roomNumber}
                placeholder="Room Number"

            />

            <Input
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                error={errors.price}

            />

            <Input
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}

                placeholder="Capacity"
                error={errors.capacity}

            />

            <Select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}

                options={[

                    "Standard",

                    "Deluxe",

                    "Suite",

                ]}

            />

            <Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                options={[

                    "Available",

                    "Occupied",

                    "Maintenance",

                ]}

            />

            <Button type="submit">

                Save Room

            </Button>

        </form>

    );

}

export default RoomForm;