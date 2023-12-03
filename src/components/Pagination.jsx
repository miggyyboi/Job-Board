import { useDataContext } from '../context/DataContext';
import Button from '../ui/Button';

function Pagination() {
  const { data, currentPage, prevPage, nextPage, totalPages } =
    useDataContext();

  return (
    <div className="mt-4 flex justify-end space-x-2">
      {currentPage !== 1 && (
        <Button onClick={() => prevPage()}>&lArr; Prev</Button>
      )}
      {currentPage !== totalPages && data.length !== 0 && (
        <Button onClick={() => nextPage()}>Next &rArr;</Button>
      )}
    </div>
  );
}

export default Pagination;
