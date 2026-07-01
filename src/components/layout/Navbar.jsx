import { Bell, Menu, Search } from "lucide-react";

function Navbar({ toggleSidebar }) {
    return (
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-lg md:px-8">

            <div className="flex items-center gap-3">

                <button
                    onClick={toggleSidebar}
                    className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
                >
                    <Menu size={22} />
                </button>

                <div>

                    <h1 className="text-xl font-bold text-slate-800 md:text-2xl">
                        Dashboard
                    </h1>

                    <p className="hidden text-sm text-slate-500 md:block">
                        Hotel Management System
                    </p>

                </div>

            </div>

            <div className="flex items-center gap-3 md:gap-6">

                <div className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 md:flex">

                    <Search
                        size={18}
                        className="text-slate-400"
                    />

                    <input
                        placeholder="Search..."
                        className="ml-3 w-64 bg-transparent text-sm outline-none"
                    />

                </div>

                <button className="relative rounded-xl p-3 transition hover:bg-slate-100">

                    <Bell size={20} />

                    <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500"></span>

                </button>

                <div className="hidden items-center gap-3 md:flex">

                    <img
                        src="../src/assets/UpdatedImage.png"
                        alt="Admin"
                        className="h-11 w-11 rounded-full object-cover"
                    />

                    <div>

                        <p className="font-semibold text-slate-800">
                            Ikram Ali
                        </p>

                        <p className="text-sm text-slate-500">
                            Administrator
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Navbar;