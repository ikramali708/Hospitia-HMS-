import { NavLink } from "react-router-dom";

function SidebarItem({
    title,
    path,
    icon: Icon,
    closeSidebar,
}) {
    return (
        <NavLink
            to={path}
            onClick={closeSidebar}
            className={({ isActive }) =>
                `
                group
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                font-medium
                transition-all
                duration-300

                ${isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
                `
            }
        >
            <Icon
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>{title}</span>
        </NavLink>
    );
}

export default SidebarItem;