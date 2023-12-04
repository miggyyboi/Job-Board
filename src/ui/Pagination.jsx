import { useDataContext } from '../context/DataContext';
import Button from './Button';

function Pagination() {
  const { currentPage, prevPage, nextPage, totalPages } = useDataContext();

  return (
    <div className="mt-4 flex justify-end space-x-2">
      {currentPage !== 1 && (
        <Button onClick={() => prevPage()}>&lArr; Prev</Button>
      )}
      {currentPage < totalPages && (
        <Button onClick={() => nextPage()}>Next &rArr;</Button>
      )}
    </div>
  );
}

export default Pagination;
