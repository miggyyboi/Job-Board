import { useDataContext } from '../../context/DataContext';
import JobCards from './JobCards';

function JobResults({ handleSelect }) {
  const { paginatedResults } = useDataContext();

  return (
    <>
      {paginatedResults.map((job) => (
        <JobCards key={job.id} job={job} handleSelect={handleSelect} />
      ))}
    </>
  );
}

export default JobResults;
