import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";


const [formData, setFormData] = useState({

    roomNumber: "",
    roomType: "Standard",
    price: "",
    capacity: "",
    status: "Available",

});

function RoomForm() {

    return (

        <form className="space-y-5">

            <Input

                placeholder="Room Number"

            />

            <Input

                placeholder="Price"

            />

            <Input

                placeholder="Capacity"

            />

            <Select

                options={[

                    "Standard",

                    "Deluxe",

                    "Suite",

                ]}

            />

            <Select

                options={[

                    "Available",

                    "Occupied",

                    "Maintenance",

                ]}

            />

            <Button>

                Save Room

            </Button>

        </form>

    );

}

export default RoomForm;