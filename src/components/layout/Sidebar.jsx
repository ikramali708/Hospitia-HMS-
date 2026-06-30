import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../constants/sidebarMenu";

function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white p-5">
            <h1 className="mb-8 text-2xl font-bold">HMS</h1>

            <nav className="space-y-2">
                {sidebarMenu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${isActive
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-800"
                                }`
                            }
                        >
                            <Icon size={20} />

                            <span>{item.title}</span>
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}

export default Sidebar;