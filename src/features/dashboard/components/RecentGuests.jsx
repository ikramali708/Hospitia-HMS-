import Table from "../../../components/ui/Table";
import { recentGuests } from "../../../constants/recentGuests";

function RecentGuests() {
    return (
        <Table title="Recent Guests">
            <thead className="bg-slate-50">

                <tr>

                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Name
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Country
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Room
                    </th>



                </tr>

            </thead>

            {/* <tbody>
                {recentGuests.map((guest) => (
                    <tr key={guest.id}>
                        <td>{guest.name}</td>
                        <td>{guest.country}</td>
                        <td>{guest.room}</td>
                    </tr>
                ))}
            </tbody> */}

            <tbody>

                {recentGuests.map((guest) => (

                    <tr
                        key={guest.id}
                        className="border-b border-slate-100 transition-colors duration-200 hover:bg-slate-50"
                    >

                        <td className="px-6 py-5 font-medium text-slate-800">
                            {guest.name}
                        </td>

                        <td className="px-6 py-5 text-slate-600">
                            {guest.country}
                        </td>

                        <td className="px-6 py-5 text-slate-600">
                            {guest.room}
                        </td>



                    </tr>

                ))}

            </tbody>

        </Table>
    );
}

export default RecentGuests;