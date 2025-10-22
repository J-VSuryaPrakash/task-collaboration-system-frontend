import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchProjects = async() => {
    try {

        const res = await axios.get(`${BASE_URL}/projects/all-projects`, { withCredentials: true });
        return res.data;

    }catch (error) {
        console.log(error);
    }
}

export const createProject = async(projectName) => {
    try {

        const res = await axios.post(`${BASE_URL}/projects/add-project`,
            {projectName},
            {withCredentials: true}
        )

        return res;
    }
    catch(error){
        console.log(error);
    }
}

export const deleteProject = async (projectId) => {

    try {
        const res = await axios.delete(`${BASE_URL}/projects/delete-project`,
            {
                data: {projectId},
                withCredentials: true
            }
        )
        return res;
    } catch (error) {
        console.log(error)
    }
}