import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL

export const signup = async(userData) => {
    try {

        const res = await axios.post(`${BASE_URL}/users/register`,userData,{withCredentials:true})
        return res;
        
    } catch (error) {
        console.log(error);
    }
}

export const login = async(loginData) => {
    try {

        const res = await axios.post(`${BASE_URL}/users/login`,loginData,{withCredentials:true})
        return res; 
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async() => {
    try {
        const res = axios.get(`${BASE_URL}/users/get-user`, { withCredentials: true })
        return res;
    } catch (error) {
        console.log(error);
    }

}