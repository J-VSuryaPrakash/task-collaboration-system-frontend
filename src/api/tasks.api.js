import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchTasks = async (projectId,projectName) => {
  try {
    const res = await axios.get(`${BASE_URL}/tasks/fetch-all-tasks`, {
      params: { projectId, projectName },
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};