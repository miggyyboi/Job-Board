import { useDataContext } from '../context/DataContext';

function Pagination() {
  const { data, currentPage, prevPage, nextPage, totalPages } =
    useDataContext();

  return (
    <div className="mt-4 flex justify-end space-x-2">
      {currentPage !== 1 && (
        <button
          onClick={() => prevPage()}
          className="rounded-lg bg-slate-200 px-2 py-1 text-xs text-slate-700"
        >
          &lArr; Prev
        </button>
      )}
      {currentPage !== totalPages && data.length !== 0 && (
        <button
          onClick={() => nextPage()}
          className="rounded-lg bg-slate-200 px-2 py-1 text-xs text-slate-700"
        >
          Next &rArr;
        </button>
      )}
    </div>
  );
}

export default Pagination;
