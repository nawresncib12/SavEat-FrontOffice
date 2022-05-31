import axios from 'axios';
import { api } from "./config"

export const getAllOffers = async(data) => {
    const accessToken = localStorage.getItem('authToken');
    return await axios.get(`${api}/offers/getAllOffers`,  { headers: {
        authorization: 'Bearer ' + accessToken
    }
})
.then(res => {
            console.log("zzzz")
            if (res.data.status === 'success') {
                return res.data

            } else {
                return false
            }
        })
        .catch(err => {
            console.log("err")
            return false;
        });
}