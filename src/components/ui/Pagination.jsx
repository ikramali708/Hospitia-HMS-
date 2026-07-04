function Pagination({
  currentPage,

  totalPages,

  previousPage,

  nextPage,
  firstPage,

  lastPage,

  goToPage,

  rowsPerPage,

  setRowsPerPage,

  totalItems,
}) {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between    ">
      {/* <p className="text-sm text-slate-500">
        Showing page {currentPage} of {totalPages || 1}({totalItems} rooms)
      </p> */}
      <p className="text-sm text-slate-500">
        Showing
        <span className="font-semibold">
          {" "}
          {(currentPage - 1) * rowsPerPage + 1}
        </span>
        -
        <span className="font-semibold">
          {" "}
          {Math.min(currentPage * rowsPerPage, totalItems)}
        </span>{" "}
        of
        <span className="font-semibold"> {totalItems}</span> rooms
      </p>
      <div className="flex items-center gap-4">
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          className="rounded-lg border px-3 py-2"
        >
          <option value={5}>5</option>

          <option value={10}>10</option>

          <option value={20}>20</option>
        </select>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={firstPage}
            disabled={currentPage === 1}
            className="rounded-lg border px-3 py-2 disabled:opacity-40"
          >
            ⏮
          </button>

          <button
            onClick={previousPage}
            disabled={currentPage === 1}
            className="rounded-lg border px-3 py-2 disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`h-10 w-10 rounded-lg transition

                    ${
                      page === currentPage
                        ? "bg-blue-600 text-white"
                        : "border hover:bg-slate-100"
                    }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="rounded-lg border px-3 py-2 disabled:opacity-40"
          >
            Next
          </button>

          <button
            onClick={lastPage}
            disabled={currentPage === totalPages}
            className="rounded-lg border px-3 py-2 disabled:opacity-40"
          >
            ⏭
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
