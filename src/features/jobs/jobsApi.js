import api from "../../utils/axios";

export const getAllJobs = async () => {
  const response = await api.get("/jobs");

  return response.data;
};

export const createJobs = async () => {
  const response = await api.create("/jobs");

  return response.data;
};

export const editJobs = async (id, data) => {
  const response = await api.put(`/jobs${id}`, data);

  return response.data;
};

export const deleteJobs = async (id) => {
  const response = await api.put(`/jobs${id}`);

  return response.data;
};
