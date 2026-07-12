import { Search } from "lucide-react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import { Download } from "lucide-react";

function RoomsToolbar({
  searchTerm,
  setSearchTerm,
  status,
  setStatus,
  onAddRoom,
  onExport,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search room..."
          icon={Search}
        />

        <Select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          options={["All", "Available", "Occupied", "Maintenance"]}
        />
      </div>
      <div className="flex gap-4">
        <Button onClick={onExport}>
          <Download size={18} />
          Export to CSV
        </Button>

        <Button onClick={onAddRoom}>+ Add Room</Button>
      </div>
    </div>
  );
}

export default RoomsToolbar;
