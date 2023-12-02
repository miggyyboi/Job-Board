import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { useDataContext } from '../context/DataContext';

function JobResults() {
  const [relevancy, setRelevancy] = useState(false);
  const [recency, setRecency] = useState(false);

  const { data, setData } = useDataContext();

  function setFilterRelevance() {
    setRelevancy((prev) => !prev);

    const sortedData = data
      .slice()
      .sort(
        (a, b) =>
          (relevancy ? a : b).relevanceScore -
          (relevancy ? b : a).relevanceScore,
      );
    setData(sortedData);
  }

  function setFilterRecent() {
    setRecency((prev) => !prev);

    const sortedData = data
      .slice()
      .sort((a, b) => (recency ? a : b).daysAgo - (recency ? b : a).daysAgo);
    setData(sortedData);
  }

  return (
    <div className="flex justify-between border-b pb-2">
      <p>
        <span className="font-bold">{data.length}</span> results
      </p>
      <div className="flex space-x-2">
        <button
          disabled={data.length === 0}
          onClick={setFilterRelevance}
          className="flex items-center gap-1 rounded-md bg-slate-200 px-2 py-1 text-xs"
        >
          Relevant {relevancy ? <FaArrowDown /> : <FaArrowUp />}
        </button>
        <button
          disabled={data.length === 0}
          onClick={setFilterRecent}
          className="flex items-center gap-1 rounded-md bg-slate-200 px-2 py-1 text-xs"
        >
          Recent {recency ? <FaArrowDown /> : <FaArrowUp />}
        </button>
      </div>
    </div>
  );
}

export default JobResults;
