import { FaLocationPin, FaMoneyBill, FaRegClock } from 'react-icons/fa6';
import { useDataContext } from '../context/DataContext';

function JobCard({ handleSelect }) {
  const { paginatedResults } = useDataContext();

  return (
    <>
      {paginatedResults.map((job) => (
        <li
          key={job.id}
          className="cursor-pointer border-b py-2"
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
      ))}
    </>
  );
}

export default JobCard;
