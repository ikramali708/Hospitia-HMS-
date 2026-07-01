function Select({
    value,
    onChange,
    options,
}) {
    return (
        <select
            value={value}
            onChange={onChange}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
        >
            {options.map(option => (

                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>

            ))}
        </select>
    );
}

export default Select;