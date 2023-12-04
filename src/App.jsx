import { useState } from 'react';
import JobResultsHeader from './features/jobs/JobResultsHeader';
import JobResults from './features/jobs/JobResults';
import JobView from './features/jobs/JobView';
import Header from './features/header/Header';
import SearchBar from './ui/SearchBar';
import Pagination from './ui/Pagination';

export default function App() {
  const [selectedId, setSelectedId] = useState('');

  function handleSelect(id) {
    setSelectedId(id);
  }

  return (
    <div className="bg-[#dee3e9]">
      <Header handleSelect={handleSelect}>
        <SearchBar />
      </Header>

      <div className="h-[calc(100vh-12rem)]">
        <div className="mx-auto flex max-w-6xl items-center justify-center rounded-lg bg-white p-4 font-primary ">
          <div className="grid grid-cols-[0.6fr_1fr]">
            <div className="min-h-[616px] min-w-[420px]">
              <JobResultsHeader />
              <JobResults handleSelect={handleSelect} />
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
