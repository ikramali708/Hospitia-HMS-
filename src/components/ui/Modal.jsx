function Modal({

    isOpen,
    onClose,
    title,
    children,

}) {

    if (!isOpen) return null;

    return (

        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        >

            <div
                className="w-full max-w-xl rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-200"
            >

                <div className="flex items-center justify-between border-b px-6 py-5">

                    <h2 className="text-xl font-semibold">

                        {title}

                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl text-slate-400 hover:text-red-500"
                    >

                        ×

                    </button>

                </div>

                <div className="p-6">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default Modal;