function Button({

    children,

    onClick,

    type = "button",

}) {

    return (

        <button

            type={type}

            onClick={onClick}

            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400 disabled:text-slate-200"

        >

            {children}

        </button>

    );

}

export default Button;