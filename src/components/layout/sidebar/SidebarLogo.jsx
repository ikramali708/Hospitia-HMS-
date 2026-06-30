function SidebarLogo() {
    return (
        <div className="border-b border-slate-800 p-6">

            <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl">

                    🏨

                </div>

                <div>

                    <h2 className="text-lg font-bold text-white">
                        HMS
                    </h2>

                    <p className="text-xs text-slate-400">
                        Hotel Management
                    </p>

                </div>

            </div>

        </div>
    );
}

export default SidebarLogo;