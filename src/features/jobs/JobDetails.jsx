import { FaLocationPin, FaMoneyBill, FaRegClock } from 'react-icons/fa6';

function JobDetails({ duration, salary, location, size }) {
  return (
    <div className={`ml-24 mt-1 flex space-x-4 text-${size}`}>
      <div className="flex items-center">
        <span className="mr-1 rounded-full bg-slate-300 p-1">
          <FaRegClock />
        </span>
        <p>{duration}</p>
      </div>
      <div className="flex items-center">
        <span className="mr-1 rounded-full bg-slate-300 p-1">
          <FaMoneyBill />
        </span>
        <p>{salary}</p>
      </div>
      <div className="flex items-center">
        <span className="mr-1 rounded-full bg-slate-300 p-1">
          <FaLocationPin />
        </span>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default JobDetails;
