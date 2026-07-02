import { Search } from "lucide-react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

function RoomsToolbar({
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
    onAddRoom,
}) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-col gap-4 md:flex-row">

                <Input
                    value={searchTerm}
                    onChange={(e) => {
                        console.log("Typing...", e.target.value);
                        setSearchTerm(e.target.value);
                    }}
                    placeholder="Search room..."
                    icon={Search}
                />

            
                <Select
                    value={status}
                    onChange={(e) => {
                        console.log("Selected:", e.target.value);
                        setStatus(e.target.value);
                    }}
                    options={[
                        "All",
                        "Available",
                        "Occupied",
                        "Maintenance",
                    ]}
                />
            </div>
            <Button

                onClick={onAddRoom}

            >

                + Add Room

            </Button>
        </div>
    );
}

export default RoomsToolbar;