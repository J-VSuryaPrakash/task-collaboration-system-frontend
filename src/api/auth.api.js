import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL

export const signup = async(userData) => {
    try {

        const res = await axios.post(`${BASE_URL}/users/register`,userData)
        return res;
        
    } catch (error) {
        console.log(error);
    }
}

export const login = async(loginData) => {
    try {

        const res = await axios.post(`${BASE_URL}/users/login`,loginData)
        return res; 
    } catch (error) {
        console.log(error);
    }
}