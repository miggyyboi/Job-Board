import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './components/jobSlice';

const store = configureStore({
  reducer: {
    jobBoard: jobSlice,
  },
});

export default store;
