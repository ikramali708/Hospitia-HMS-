import PageHeader from "../../components/ui/PageHeader";
import { useState } from "react";
import GuestToolBar from "../guests/components/GuestsToolBar";
import GuestsTable from "../guests/components/GuestsTable";
import getGuests from "../guests/Services/GuestService";

function GuestsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guests, setGuests] = useState(getGuests());
  const [selectedGuest, setSelectedGuest] = useState(null);

  const filteredGuests = guests.filter((guest) => {
    const matchesSearch =
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
    console.log(isModalOpen);
  });

  const handleEditGuest = (guest) => {
    setSelectedGuest(guest);

    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <PageHeader title="Guests" subtitle="Manage the Guests in Easy Way." />

      <GuestToolBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        guest={guests}
        setGuests={setGuests}
        onAddGuest={() => setIsModalOpen(true)}
      />

      <GuestsTable guests={filteredGuests} onEdit={handleEditGuest} />
    </div>
  );
}

export default GuestsPage;
