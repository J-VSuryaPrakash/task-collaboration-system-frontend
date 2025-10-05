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