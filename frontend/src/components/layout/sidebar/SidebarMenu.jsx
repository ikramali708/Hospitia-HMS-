import { sidebarMenu } from "../../../constants/sidebarMenu";
import SidebarItem from "./SidebarItem";

function SidebarMenu({ closeSidebar }) {
    return (
        <nav className="mt-6 space-y-2 px-3">

            {sidebarMenu.map((item) => (

                <SidebarItem
                    key={item.path}
                    {...item}
                    closeSidebar={closeSidebar}
                />

            ))}

        </nav>
    );
}

export default SidebarMenu;