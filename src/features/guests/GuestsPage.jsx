import PageHeader from "../../components/ui/PageHeader";
import { useGuests } from "./hooks/useGuests.js";
import GuestsToolbar from "./components/GuestsToolbar";
import GuestsSummary from "./components/GuestsSummary";
import { guestColumns } from "../../constants/guestColumns";
import DataTable from "../../components/ui/DataTable/DataTable";

import GuestRow from "./components/GuestRow";

function GuestsPage() {
  const {
    guests,
    filteredGuests,
    searchTerm,

    setSearchTerm,

    status,

    setStatus,
  } = useGuests();

  const handleAddGuest = () => {
    alert("Guest Modal Coming Soon");
  };
  return (
    <div className="space-y-8">
      <PageHeader title="Guests" subtitle="Manage hotel guests." />
      <GuestsSummary guests={filteredGuests} />
      <GuestsToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        status={status}
        setStatus={setStatus}
        onAddGuest={handleAddGuest}
      />
      <DataTable
        title="Guests List"
        columns={guestColumns}
        data={filteredGuests}
        renderRow={(guest) => (
          <GuestRow
            key={guest.id}
            guest={guest}
            onEdit={(guest) => console.log("Edit", guest)}
            onDelete={(guest) => console.log("Delete", guest)}
          />
        )}
      />
    </div>
  );
}

export default GuestsPage;
