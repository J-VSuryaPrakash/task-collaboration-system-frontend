import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const addTask = async (projectId, title, status) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/tasks/assign-task`,
      { projectId, title, status },
      {
        withCredentials: true,
      }
    );

    return res.data.data;
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const fetchTasks = async (projectId, projectName) => {
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

export const getTaskById = async (taskId) => {
  try {
    const res = await axios.get(`${BASE_URL}/tasks/get-task`, {
      params: { taskId },
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    throw error;
  }
};

export const updateTask = async ({taskId, taskDescription, status}) => {
  try {

    const taskUpdatedData = {}

    if(taskDescription !== undefined){
        taskUpdatedData.taskDescription = taskDescription
    }
    if(status !== undefined){
        taskUpdatedData.status = status
    }

    const res = await axios.post(
      `${BASE_URL}/tasks/update-task`,

      taskUpdatedData,
      {
        params: { taskId },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const res = await axios.delete(
      `${BASE_URL}/tasks/delete-task`,
      {
        data:{taskId},
        withCredentials: true,
      }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};
