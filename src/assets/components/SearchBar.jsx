import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useDataContext } from '../context/DataContext';

function SearchBar() {
  const { searchValue, setSearchValue } = useDataContext();

  return (
    <div className="relative" id="searchBar">
      <FaMagnifyingGlass className="absolute left-[12px] top-[17px] text-xl text-slate-600" />
      <input
        className="w-[800px] rounded-md py-4 pl-10 pr-6 font-primary"
        placeholder="Search for jobs..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
