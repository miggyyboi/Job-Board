import { useSelector } from 'react-redux';
import { useDataContext } from '../context/DataContext';
import JobCards from './JobCards';

function BookmarkList({ handleSelect }) {
  const { data } = useDataContext();
  const bookmarks = useSelector((store) => store.jobBoard.bookmarks);
  const bookmarkList = data.filter((item) => bookmarks.includes(item.id));

  return (
    <div
      className="absolute right-[10px] top-44 z-50 rounded-md bg-white"
      id="bookmarks"
    >
      {bookmarkList.length ? (
        bookmarkList.map((job) => (
          <JobCards key={job.id} job={job} handleSelect={handleSelect} />
        ))
      ) : (
        <div className="flex h-32 w-96 items-center justify-center font-primary">
          No bookmarks... add something!
        </div>
      )}
    </div>
  );
}

export default BookmarkList;
