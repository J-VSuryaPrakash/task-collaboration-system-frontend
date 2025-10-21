import axios from 'axios';
import { data } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL

export const signup = async(userData) => {
    try {

        const res = await axios.post(`${BASE_URL}/users/register`,userData,{withCredentials:true})
        console.log("Signup route")
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
        const message = error.response.data.message || "Something went wrong";
        throw new Error(message);
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

export const logout = async() => {
    try {
        const res = await axios.post(`${BASE_URL}/users/logout`, {}, { withCredentials: true }) 
        return res.message;
    }
    catch (error) {
        console.log(error);
    }
}