import axios from 'axios';
import { api } from "./config"

export const login = (data) => {
    return axios.post(`${api}/users/login`, data)
        .then(res => {
            if (res.status === 200) {
                localStorage.setItem('authToken', res.data.token);
                return true
            } else {
                return false
            }
        })
        .catch(err => {
            return false;
        });
}

export const signUp = (data) => {
    return axios.post(`${api}/users/signup`, data)
        .then(res => {
            if (res.data.status === 'success') {
                localStorage.setItem('accessToken', res.data.accessToken);
                return "true";
            } else if (res.data.status === 'error') {
                return res.data.error;
            }
        })
        .catch(err => {

            return false;
        });
}

export const verifySignup = (data) => {
    //check accesToken in local storage and send it in header

    //post with code
    //if invalid send error else save auth token in local storage and remove access
    const accessToken = localStorage.getItem('accessToken');
    return axios.post(`${api}/users/verifyAccount`, data, {
            headers: {
                access: 'Bearer ' + accessToken
            }
        })
        .then(res => {
            if (res.data.status === 'success') {
                localStorage.setItem('authToken', res.data.token);
                return "true";
            } else if (res.data.status === 'error') {
                return res.data.error;
            }
        })
        .catch(err => {
            return false;
        });
}