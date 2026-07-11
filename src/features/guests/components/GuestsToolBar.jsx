import { Search } from "lucide-react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

function GuestsToolbar({
  searchTerm,
  setSearchTerm,

  status,
  setStatus,

  onAddGuest,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search guest..."
          icon={Search}
        />

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={["All", "Active", "Inactive"]}
        />
      </div>

      <Button
        // onClick={() => {
        //   console.log("Button Clicked");
        //   onAddGuest();
        // }}
        onClick={() => alert("Button Clicked")}
      >
        + Add Guest
      </Button>
    </div>
  );
}

export default GuestsToolbar;
