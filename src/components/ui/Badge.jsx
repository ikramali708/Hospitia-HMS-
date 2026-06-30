function Badge({ status }) {

    const styles = {

        Reserved:
            "bg-yellow-100 text-yellow-700",

        "Checked In":
            "bg-green-100 text-green-700",

        "Checked Out":
            "bg-blue-100 text-blue-700",

        Cancelled:
            "bg-red-100 text-red-700"

    };

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
        >
            {status}
        </span>

    );

}

export default Badge;