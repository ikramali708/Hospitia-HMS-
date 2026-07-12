import { Search } from "lucide-react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

function BookingsToolbar({
  searchTerm,
  setSearchTerm,
  status,
  setStatus,
  onAddBooking,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search booking..."
          icon={Search}
        />

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={["All", "Confirmed", "Checked In", "Cancelled"]}
        />
      </div>

      <Button
        onClick={() => {
          onAddBooking();
        }}
      >
        + Add Booking
      </Button>
    </div>
  );
}

export default BookingsToolbar;
