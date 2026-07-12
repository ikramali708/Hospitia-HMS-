import Button from "./Button";

function PageHeader({
    title,
    subtitle,
    buttonText,
}) {
    return (
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

                <h1 className="text-3xl font-bold text-slate-800">
                    {title}
                </h1>

                <p className="mt-2 text-slate-500">
                    {subtitle}
                </p>

            </div>
{/* 
            {buttonText && (

                <Button>

                    {buttonText}

                </Button>

            )} */}

        </div>
    );
}

export default PageHeader;