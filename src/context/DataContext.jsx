import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_API_URL, RESULTS_PER_SEARCH } from '../constants/constants';
import axios from 'axios';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchJobBoard = async () => {
      try {
        if (searchValue.trim() !== '') {
          const res = await axios.get(
            `${BASE_API_URL}/jobs?search=${searchValue}`,
          );
          setData(res.data.jobItems);
        } else {
          setData([]);
        }
      } catch (err) {
        console.error('Error fetching data: ', err);
      }
    };

    fetchJobBoard();
  }, [searchValue]);

  function getPages() {
    const from = (currentPage - 1) * RESULTS_PER_SEARCH;
    const to = from + RESULTS_PER_SEARCH;
    return { from, to };
  }

  const { from, to } = getPages();
  const totalPages = Math.ceil(data.length / RESULTS_PER_SEARCH);

  function setPage(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);
  const paginatedResults = data.slice(from, to);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        searchValue,
        setSearchValue,
        nextPage,
        prevPage,
        paginatedResults,
        currentPage,
        totalPages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useDataContext() {
  const context = useContext(DataContext);
  if (context === undefined) throw new Error('Context used outside provider');
  return context;
}

export { DataContextProvider, useDataContext };
