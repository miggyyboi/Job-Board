import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './assets/components/jobSlice';

const store = configureStore({
  reducer: {
    jobBoard: jobSlice,
  },
});

export default store;
