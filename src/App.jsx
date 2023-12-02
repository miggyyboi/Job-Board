import { useState } from 'react';
import JobCard from './assets/components/JobCard';
import JobView from './assets/components/JobView';
import SearchBar from './assets/components/SearchBar';
import Header from './assets/components/Header';
import ResultsBar from './assets/components/JobResults';
import Pagination from './assets/components/Pagination';

export default function App() {
  const [selectedId, setSelectedId] = useState('');

  function handleSelect(id) {
    setSelectedId(id);
  }

  return (
    <div className="max-h-screen bg-[#dee3e9]">
      <Header handleSelect={handleSelect}>
        <SearchBar />
      </Header>

      <div className="h-[calc(100vh-12rem)]">
        <div className="mx-auto flex max-w-6xl items-center justify-center rounded-lg bg-white p-4 font-primary ">
          <div className="grid grid-cols-[0.6fr_1fr]">
            <div className="min-h-[616px] min-w-[420px]">
              <ResultsBar />
              <ul>
                <JobCard handleSelect={handleSelect} />
              </ul>
              <Pagination />
            </div>
            <div className="min-h-[616px] min-w-[700px] px-2">
              {selectedId && <JobView selectedId={selectedId} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
