import axios from 'axios';
import { api } from "./config"
export const addDeal = async(data) => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.post(`${api}/deals/addDeal`, data ,  { headers: {
        authorization: 'Bearer ' + accessToken
    }
})
        .then(res => {
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
export const getMydeals = async() => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.get(`${api}/deals/getMydeals` ,  { headers: {
        authorization: 'Bearer ' + accessToken
    }
})
        .then(res => {
            
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
