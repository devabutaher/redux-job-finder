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

export const createJob = createAsyncThunk("jobs/createJob", async (data) => {
  const jobs = await createJobs(data);
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
  const response = await deleteJobs(id);
  return response;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    filterSalary: (state, action) => {
      if (action.payload === "lowToHigh") {
        state.jobs = state.jobs.sort((a, b) => a.salary - b.salary);
      } else if (action.payload === "highToLow") {
        state.jobs = state.jobs.sort((a, b) => b.salary - a.salary);
      } else {
        state.jobs = state.jobs.sort((a, b) => a.id - b.id);
      }
    },
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
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
export const { editActive, filterSalary } = jobsSlice.actions;
