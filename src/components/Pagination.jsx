const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-4 bg-white border border-[#2337C6]/30 px-6 py-3 rounded-full shadow-sm">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className={`
          px-5 py-2 text-sm font-medium rounded-full transition-all
          ${
            currentPage === 1
              ? "bg-[#2337C6]/10 text-[#4169E1]/60 cursor-not-allowed"
              : "bg-[#4169E1]/10 text-[#031273] hover:bg-[#4CC9F0]/30"
          }
        `}
      >
        Prev
      </button>

      {/* Page Info */}
      <span className="text-sm text-[#0504AA]">
        Page{" "}
        <span className="font-semibold text-[#031273]">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-[#2337C6]">
          {totalPages}
        </span>
      </span>

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={`
          px-5 py-2 text-sm font-medium rounded-full transition-all
          ${
            currentPage === totalPages
              ? "bg-[#2337C6]/10 text-[#4169E1]/60 cursor-not-allowed"
              : "bg-[#031273] text-white hover:bg-[#0504AA]"
          }
        `}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
