import axios from 'axios';
import { api } from "./config"
export const login = async(data) => {
    return await axios.post(`${api}/users/login`, data)
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

export const signUp = async(data) => {
    return await axios.post(`${api}/users/signup`, data)
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

export const verifySignup = async(data) => {
    const accessToken = localStorage.getItem('accessToken');
    return await axios.post(`${api}/users/verifyAccount`, data, {
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

export const logout = async() => {
    const authToken = localStorage.getItem('authToken');
    return await axios.post(`${api}/users/logout`, {}, {
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
export const forgotPassword = async(data) => {
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

export const loggedIn = async() => {

    const authToken = localStorage.getItem('authToken');
    if (authToken && authToken !== undefined) {
        console.log("presque")
        return await axios.get(`${api}/users/test`, {
                headers: {
                    authorization: 'Bearer ' + authToken
                }
            })
            .then(res => {
                if (res.data.status === 'success') {

                    console.log("yey")
                    return true

                } else {

                    console.log("noo")
                    return false
                }
            })
            .catch(err => {

                console.log("oops")
                return false;
            });
    } else {
        console.log("oops")
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