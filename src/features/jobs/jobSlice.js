import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarks: [],
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    addJob(state, action) {
      state.bookmarks.push(action.payload);
    },
    removeJob(state, action) {
      state.bookmarks = state.bookmarks.filter(
        (job) => job.id !== action.payload,
      );
    },
  },
});

export const { addJob, removeJob } = jobSlice.actions;
export default jobSlice.reducer;
