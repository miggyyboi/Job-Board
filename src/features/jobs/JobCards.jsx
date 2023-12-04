import JobDetails from './JobDetails';

function JobCards({ job, handleSelect }) {
  return (
    <ul>
      <li
        className="cursor-pointer px-1 py-2"
        onClick={() => {
          handleSelect(job.id);
        }}
      >
        <div className="flex p-1">
          <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-300 text-3xl font-bold">
            {job.badgeLetters}
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">{job.title}</p>
            <p className="text-sm">{job.company}</p>
            <JobDetails
              duration={job.duration}
              salary={job.salary}
              location={job.location}
              key={job.title}
              size="[10px]"
            />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default JobCards;
