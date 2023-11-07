    import React, { useState } from "react";

    const Pagination = ({ page, lastPage, setPage }) => {
    const handleNextPage = () => {
        setPage((prevPage) => (prevPage < lastPage ? prevPage + 1 : prevPage));
    };

    const handlePrevPage = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
        <div className="flex items-center justify-center gap-12 py-4 text-xl">
        <button
            className="transition-all cursor-pointer hover:scale-110"
            onClick={handlePrevPage}
            disabled={page === 1}
        >
            Previous
        </button>
        <p className="font-semibold">
            {page} of {lastPage}
        </p>
        <button
            className="transition-all hover:scale-110"
            onClick={handleNextPage}
            disabled={page === lastPage}
        >
            Next
        </button>
        </div>
    );
    };

    export default Pagination;
