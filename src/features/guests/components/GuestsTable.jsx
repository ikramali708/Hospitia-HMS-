import Table from "../../../components/ui/Table";
import EmptyState from "../../../components/ui/EmptyState";
import { SearchX } from "lucide-react";
import GuestRow from "./GuestRow";
function GuestsTable({ guests, onEdit }) {
  return (
    <Table title="Guests List">
      <thead>
        <tr>
          <th className="px-6 py-4 text-left">Name</th>

          <th className="px-6 py-4 text-left">Email</th>

          <th className="px-6 py-4 text-left">Phone</th>

          <th className="px-6 py-4 text-left">Address</th>

          <th className="px-6 py-4 text-left">Actions</th>
        </tr>
      </thead>

      <tbody>
        {guests.length === 0 ? (
          <tr>
            <td colSpan={6}>
              <
              // Icon={SearchX}
              // name="No Guests Found"
              // desc="Please search another keywords"
              />
            </td>
          </tr>
        ) : (
          guests.map((guest) => (
            <GuestRow key={guest.id} guest={guest} onEdit={onEdit} />
          ))
        )}
      </tbody>
    </Table>
  );
}

export default GuestsTable;
