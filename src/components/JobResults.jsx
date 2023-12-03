import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { useDataContext } from '../context/DataContext';
import Button from '../ui/Button';

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
        {data?.length !== 0 && (
          <>
            <Button onClick={setFilterRelevance}>
              Relevant {relevancy ? <FaArrowDown /> : <FaArrowUp />}
            </Button>
            <Button onClick={setFilterRecent}>
              Recent {recency ? <FaArrowDown /> : <FaArrowUp />}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default JobResults;
