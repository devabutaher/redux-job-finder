import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createJobs, deleteJobs, editJobs, getAllJobs } from "./jobsApi";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

// async thunks

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getAllJobs();
  return jobs;
});

export const createJob = createAsyncThunk("jobs/createJobs", async () => {
  const jobs = await createJobs();
  return jobs;
});

export const editJob = createAsyncThunk(
  "jobs/editJobs",
  async ({ id, data }) => {
    const jobs = await editJobs(id, data);
    return jobs;
  }
);

export const deleteJob = createAsyncThunk("jobs/deleteJobs", async (id) => {
  const jobs = await deleteJobs(id);
  return jobs;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  editActive: (state, action) => {
    state.editing = action.payload;
  },
  editInActive: (state) => {
    state.editing = {};
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
