/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_API_URL } from '../../constants/constants';
import axios from 'axios';
import JobCards from '../jobs/JobCards';
import Spinner from '../../ui/Spinner';

function BookmarkList({ handleSelect }) {
  const [bookmarkList, setBookmarkList] = useState([]);
  const bookmarksIdArray = useSelector((store) => store.jobBoard.bookmarks);

  useEffect(() => {
    async function fetchBookmarkedJobs() {
      try {
        const bookmarkedJobsPromises = bookmarksIdArray.map(async (id) => {
          const res = await axios.get(`${BASE_API_URL}/jobs/${id}`);
          return res.data.jobItem;
        });

        const bookmarkedJobs = await Promise.all(bookmarkedJobsPromises);

        setBookmarkList(bookmarkedJobs);
      } catch (error) {
        console.error('Error fetching bookmarked jobs: ', error);
      }
    }

    fetchBookmarkedJobs();
  }, [bookmarksIdArray]);

  return (
    <div
      className="absolute right-[10px] top-44 z-50 rounded-md bg-white"
      id="bookmarks"
    >
      {bookmarkList.length > 0 ? (
        bookmarkList.map((job) => (
          <JobCards key={job.id} job={job} handleSelect={handleSelect} />
        ))
      ) : (
        <div className="flex h-32 w-96 items-center justify-center font-primary">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default BookmarkList;
