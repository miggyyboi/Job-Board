import { useState } from 'react';
import JobResults from './components/JobResults';
import JobView from './components/JobView';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import JobResultsHeader from './components/JobResultsHeader';
import Pagination from './components/Pagination';

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
