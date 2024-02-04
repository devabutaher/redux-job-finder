import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob, editJob } from "../features/jobs/jobsSlice";

const JobForm = () => {
  const [data, setData] = useState({
    title: "",
    salary: "",
    type: "",
    deadline: "",
  });

  const dispatch = useDispatch();
  const { editing } = useSelector((state) => state.jobs) || {};
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  const reset = () => {
    setData({ title: "", salary: "", type: "", deadline: "" });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createJob(data));
    reset();
  };

  useEffect(() => {
    const data = editing || {};

    if (data.id) {
      setIsEditMode(true);
      setData(data);
    } else {
      setIsEditMode(false);
      navigate("/");
      reset();
    }
  }, [editing, navigate]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editJob({ id: editing?.id, data }));
    navigate("/");
    reset();
  };

  return (
    <form
      onSubmit={isEditMode ? handleEdit : handleCreate}
      className="space-y-6"
    >
      <div className="fieldContainer">
        <label
          htmlFor="lws-JobTitle"
          className="text-sm font-medium text-slate-300"
        >
          Job Title
        </label>
        <select
          id="lws-JobTitle"
          name="lwsJobTitle"
          required
          onChange={(e) => setData({ ...data, title: e.target.value })}
          value={data.title}
        >
          <option value="" hidden>
            Select Job Title
          </option>
          <option>Software Engineer</option>
          <option>Software Developer</option>
          <option>Full Stack Developer</option>
          <option>MERN Stack Developer</option>
          <option>DevOps Engineer</option>
          <option>QA Engineer</option>
          <option>Product Manager</option>
          <option>Social Media Manager</option>
          <option>Senior Executive</option>
          <option>Junior Executive</option>
          <option>Android App Developer</option>
          <option>IOS App Developer</option>
          <option>Frontend Developer</option>
          <option>Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobType">Job Type</label>
        <select
          id="lws-JobType"
          name="lwsJobType"
          required
          onChange={(e) => setData({ ...data, type: e.target.value })}
          value={data.type}
        >
          <option value="" hidden>
            Select Job Type
          </option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            onChange={(e) => setData({ ...data, salary: e.target.value })}
            value={data.salary}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          required
          onChange={(e) => setData({ ...data, deadline: e.target.value })}
          value={data.deadline}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          {isEditMode ? "Edit Job" : "Add New Job"}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
