function Input({
    name,
    value,
    onChange,
    placeholder,
    icon: Icon,
    error
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
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`

                    w-full
                    rounded-xl
                    border
                    py-3
                    pl-10
                    pr-4
                    outline-none
                    transition

                    ${error

                        ? "border-red-500 focus:ring-red-200"

                        : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"

                    }

`}
            />
            {error && (

                <p className="mt-2 text-sm text-red-500">

                    {error}

                </p>

            )}

        </div>
    );
}

export default Input;