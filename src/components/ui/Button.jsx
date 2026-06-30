function Button({ children }) {
    return (
        <button
            className="
            rounded-xl
            bg-blue-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-lg
            hover:cursor-pointer
            active:scale-95"
        >
            {children}
        </button>
    );
}

export default Button;