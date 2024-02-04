import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsSlice";
import JobCard from "./JobCard";

const Jobs = () => {
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // decide what to render
  let content = null;

  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError) content = <p className="error">{error}</p>;

  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs.map((job) => <JobCard key={job.id} job={job} />);
  }

  if (!isLoading && !isError && jobs?.length === 0) {
    content = <p>No jobs found!</p>;
  }

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="justify-between mb-10 space-y-2 md:flex md:space-y-0 ">
          <h1 className="lws-section-title">All Available Jobs</h1>
          <div className="flex gap-4">
            <div className="flex-1 search-field group">
              <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
              <input
                type="text"
                placeholder="Search Job"
                className="search-input"
                id="lws-searchJob"
              />
            </div>
            <select
              id="lws-sort"
              name="sort"
              autoComplete="sort"
              className="flex-1"
            >
              <option>Default</option>
              <option>Salary (Low to High)</option>
              <option>Salary (High to Low)</option>
            </select>
          </div>
        </div>

        <div className="jobs-list">{content}</div>
      </main>
    </div>
  );
};

export default Jobs;
