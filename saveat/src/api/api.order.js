import axios from 'axios';
import { api } from "./config"
export const addOrder = async(data) => {
    console.log(data)
    const accessToken = localStorage.getItem('authToken');

    return await axios.post(`${api}/orders/addOrder`, data ,  { headers: {
        authorization: 'Bearer ' + accessToken
    }
})
        .then(res => {
            console.log(res)
            if (res.data.status === 'success') {
                return res.data

            } else {
                return false
            }
        })
        .catch(err => {
            console.log(err)
            return false;
        });
}
export const getMyOrders = async() => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.get(`${api}/orders/getMyOrders` ,  { headers: {
        authorization: 'Bearer ' + accessToken
    }
})
        .then(res => {
            console.log(res)
            if (res.data.status === 'success') {
                return res.data

            } else {
                return false
            }
        })
        .catch(err => {
            console.log(err)
            return false;
        });
}
