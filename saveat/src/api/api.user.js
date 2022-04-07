import axios from 'axios';
import { api } from "./config"
export const login = (data) => {
    return axios.post(`${api}/users/login`, data)
        .then(res => {
            if (res.data.status === 'success') {
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

export const logout = () => {
    const authToken = localStorage.getItem('authToken');
    return axios.post(`${api}/users/logout`, {}, {
            headers: {
                authorization: 'Bearer ' + authToken
            }
        })
        .then(res => {
            if (res.data.status === 'success') {
                localStorage.removeItem('authToken');
                return true;
            }
        })
        .catch(err => {
            return false;
        });
}
export const forgotPassword = (data) => {
    return axios.post(`${api}/users/forgotPassword`, data)
        .then(res => {
            if (res.data.status === 'success') {
                return true

            } else {
                return false
            }
        })
        .catch(err => {
            return false;
        });
}
export const loggedIn = () => {
    const authToken = localStorage.getItem('authToken');
    if (authToken && authToken !== undefined) {
        return true;
    } else {
        return false
    }
}


// export const resetPassword = (email) => {
//     return axios.post(`${api}/users/forgotPassword`, {email:email})
//         .then(res => {
//             if (res.status === 'success') {
//                 return "true";
//             } else if (res.status === 'error') {
//                 return res.error;
//             }
//         })
//         .catch(err => {
//             return false;
//         });
// }

export const resetPassword = (password,params) => {
    console.log(password)
    return axios.patch(`${api}/users/resetPassword/${params.token}`,password)
        .then(res => {
            if (res.data.status === 'success') {
                return true
                //changed
            } else {
                return false
                //invalid token or has expired
            }
        })
        .catch(err => {
            return false;
        });
}