function Input({
    value,
    onChange,
    placeholder,
    icon: Icon,
}) {

    return (

        <div className="relative">

            {Icon && (
                <Icon
                    size={18}
                    className="absolute left-3 top-3.5 text-slate-400"
                />
            )}

            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

        </div>
    );
}

export default Input;