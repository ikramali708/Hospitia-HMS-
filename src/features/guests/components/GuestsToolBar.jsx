import { Search } from "lucide-react";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

function GuestToolBar({
  searchTerm,
  setSearchTerm,
  guest,
  setGuests,
  onAddGuest,
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
          placeholder="Search guests..."
          icon={Search}
        />
      </div>
      <Button onClick={onAddGuest}>+ Add Guest</Button>
    </div>
  );
}

export default GuestToolBar;
