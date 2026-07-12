import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

function Sidebar({ isOpen, closeSidebar }) {
    return (
        <aside
            className={`
                fixed top-0 left-0 z-50
                flex h-screen w-64 flex-col
                bg-slate-950
                border-r border-slate-800
                shadow-2xl
                transition-transform duration-300

                ${isOpen ? "translate-x-0" : "-translate-x-full"}

                lg:translate-x-0
            `}
        >
            <SidebarLogo />

            <div className="flex-1 overflow-y-auto">

                <SidebarMenu closeSidebar={closeSidebar} />

            </div>

        </aside>
    );
}

export default Sidebar;