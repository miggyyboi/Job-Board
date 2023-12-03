/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaArrowUpRightFromSquare,
  FaBookmark,
  FaLocationPin,
  FaMoneyBill,
  FaRegClock,
} from 'react-icons/fa6';
import { BASE_API_URL } from '../constants/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { addJob } from './jobSlice.js';
import { useDataContext } from '../context/DataContext.jsx';
import Button from '../ui/Button.jsx';

function JobView({ selectedId }) {
  const [jobView, setJobView] = useState({});

  const dispatch = useDispatch();

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

  const { data } = useDataContext();
  const bookmarks = useSelector((store) => store.jobBoard.bookmarks);
  const bookmarked = data.map((item) => bookmarks.includes(item.id));
  console.log(bookmarked.map((item) => item));

  // console.log(selectedId);

  function addToBookMark() {
    dispatch(addJob(selectedId));
  }

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
                  {daysAgo === 1 ? daysAgo + ' day ago' : daysAgo + ' days ago'}
                </p>
              </div>
              <div className="mr-4 flex space-x-4">
                <p className="flex items-center">
                  <span className="mr-2 rounded-full bg-slate-300 p-1">
                    <FaRegClock />
                  </span>
                  <p className="text-sm">{duration}</p>
                </p>
                <p className="flex items-center">
                  <span className="mr-2 rounded-full bg-slate-300 p-1">
                    <FaMoneyBill />
                  </span>
                  <p className="text-sm">{salary}</p>
                </p>
                <p className="flex items-center">
                  <span className="mr-2 rounded-full bg-slate-300 p-1">
                    <FaLocationPin />
                  </span>
                  <p className="text-sm">{location}</p>
                </p>
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
              {qualifications.map((skill, i) => (
                <li
                  className="gap-2 rounded-lg bg-slate-200 p-2 text-sm"
                  key={i}
                >
                  {skill}
                </li>
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
              {reviews.map((skill, i) => (
                <li
                  className="rounded-xl bg-slate-200 p-2 text-sm italic"
                  key={i}
                >
                  &quot;{skill}&quot;
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="absolute right-0 top-[-20px] mr-4 mt-8 flex items-center justify-end space-x-2">
        <Button>
          <a href={companyURL}>Apply &nbsp;</a> <FaArrowUpRightFromSquare />
        </Button>
        <Button
          onClick={() => addToBookMark()}
        >
          <p>Bookmark &nbsp;</p>
          <FaBookmark
            className={`${
              bookmarked.includes(true) ? 'text-blue-600' : 'text-black'
            }`}
          />
        </Button>
      </section>
    </div>
  );
}

export default JobView;
