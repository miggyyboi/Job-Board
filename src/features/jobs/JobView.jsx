import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, removeJob } from './jobSlice.js';
import { BASE_API_URL } from '../../constants/constants.js';
import axios from 'axios';
import { FaArrowUpRightFromSquare, FaBookmark } from 'react-icons/fa6';
import QualificationCards from './QualificationCards.jsx';
import ReviewCards from './ReviewCards.jsx';
import JobDetails from './JobDetails.jsx';
import Button from '../../ui/Button.jsx';

function JobView({ selectedId }) {
  const reduxStore = useSelector((store) => store.jobBoard.bookmarks);
  const [isBookmarked, setIsBookMarked] = useState(reduxStore);
  const [jobView, setJobView] = useState({});
  const dispatch = useDispatch();

  function addToBookMark() {
    if (isBookmarked.includes(selectedId)) {
      dispatch(removeJob());
      setIsBookMarked((prev) => prev.filter((item) => item !== selectedId));
    } else {
      dispatch(addJob(selectedId));
      setIsBookMarked((prev) => [...prev, selectedId]);
    }
  }

  useEffect(() => {
    async function fetchSelectedJob() {
      try {
        const res = await axios.get(`${BASE_API_URL}/jobs/${selectedId}`);
        setJobView(res.data.jobItem);
      } catch (e) {
        console.error(`Error fetching job with ${selectedId}: `, e);
      }
    }

    fetchSelectedJob();
  }, [selectedId]);

  const {
    badgeLetters,
    company,
    companyURL,
    coverImgURL,
    daysAgo,
    description,
    duration,
    location,
    qualifications = [],
    reviews = [],
    salary,
    title,
  } = jobView;

  return (
    <div className="relative h-full rounded-xl bg-[#eff2f5]">
      <section className="relative" id="jHeader">
        <img
          src={coverImgURL}
          alt="Your Image"
          className="h-auto w-[700px] rounded-t-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
          <div>
            <p className="text-2xl font-bold">{title}</p>
            <p className="font-little text-slate-200">{company}</p>
          </div>
        </div>
      </section>
      <section id="jBody">
        <div className="relative">
          <div className="absolute top-[-50px] m-4 flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-300 p-2 text-3xl font-bold">
            {badgeLetters}
          </div>
          <div className="ml-24 pt-2">
            <p className="mb-2 text-sm">{description}</p>
            <div className="flex w-full items-center justify-between">
              <div className="text-xs text-slate-500">
                <p>
                  Job posted{' '}
                  {daysAgo <= 1 ? daysAgo + ' day ago' : daysAgo + ' days ago'}
                </p>
              </div>
              <div className="mr-4 flex space-x-4">
                <JobDetails
                  duration={duration}
                  salary={salary}
                  location={location}
                  key={title}
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col space-y-6 px-4">
          <div className="grid grid-cols-[0.6fr_1fr]">
            <div>
              <h2 className="font-bold">Qualifications</h2>
              <p className="text-sm">Other qualifications may apply</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {qualifications.map((qualifications, i) => (
                <QualificationCards qualifications={qualifications} key={i} />
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-[0.6fr_1fr]">
            <div>
              <h2 className="font-bold">Company Reviews</h2>
              <p className="text-sm">
                Recent reviews from current and former employees
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-2">
              {reviews.map((reviews, i) => (
                <ReviewCards reviews={reviews} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="absolute right-0 top-[-20px] mr-4 mt-8 flex items-center justify-end space-x-2">
        <Button>
          <a href={companyURL}>Apply &nbsp;</a> <FaArrowUpRightFromSquare />
        </Button>
        <Button onClick={() => addToBookMark(selectedId)}>
          <p>Bookmark &nbsp;</p>
          <FaBookmark
            className={`${
              isBookmarked.includes(selectedId) ? 'text-blue-600' : 'text-black'
            }`}
          />
        </Button>
      </section>
    </div>
  );
}

export default JobView;
