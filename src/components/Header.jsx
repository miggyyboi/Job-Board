import { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';
import BookmarkList from './BookmarkList';

function Header({ children, handleSelect }) {
  const [openBookmark, setOpenBookmark] = useState(false);

  return (
    <div className="relative flex h-48 flex-col items-center justify-center bg-[#1a1a1a]">
      <div className="mb-2 flex items-center space-x-2 font-secondary text-2xl text-white">
        <p>jobBoard</p>
      </div>

      {openBookmark && (
        <div
          className="absolute right-[10px] top-44 z-50 rounded-md bg-white"
          id="bookmarks"
        >
          <BookmarkList handleSelect={handleSelect} />
        </div>
      )}

      {children}
      <div className="mr-[20px] mt-2 flex h-8 w-[820px] justify-end font-primary text-sm text-white">
        <div className="flex w-32 items-center justify-center space-x-1 rounded-md bg-blue-600">
          <button onClick={() => setOpenBookmark((prev) => !prev)}>
            bookmarks
          </button>
          <p className="text-sm">
            {openBookmark ? <FaCaretDown /> : <FaCaretUp />}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
