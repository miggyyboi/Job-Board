import { useSelector } from 'react-redux';
import { useDataContext } from '../context/DataContext';
import { FaLocationPin, FaMoneyBill, FaRegClock } from 'react-icons/fa6';
import Spinner from '../ui/Spinner';

function BookmarkList({ handleSelect }) {
  const { data } = useDataContext();
  const bookmarks = useSelector((store) => store.jobBoard.bookmarks);
  const bookmarkList = data.filter((item) => bookmarks.includes(item.id));

  return (
    <>
      {bookmarkList.length ? (
        bookmarkList.map((job) => (
          <li
            key={job.id}
            className="cursor-pointer list-none p-2"
            onClick={() => handleSelect(job.id)}
          >
            <div className="flex p-1">
              <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-300 text-3xl font-bold">
                {job.badgeLetters}
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-bold">{job.title}</p>
                <p className="text-sm">{job.company}</p>
                <div className="ml-24 mt-1 flex space-x-4 text-[10px]">
                  <div className="flex items-center">
                    <span className="mr-1 rounded-full bg-slate-300 p-1">
                      <FaRegClock />
                    </span>
                    <p>{job.duration}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1 rounded-full bg-slate-300 p-1">
                      <FaMoneyBill />
                    </span>
                    <p>{job.salary}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1 rounded-full bg-slate-300 p-1">
                      <FaLocationPin />
                    </span>
                    <p>{job.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <div className="flex h-32 w-96 items-center justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default BookmarkList;
