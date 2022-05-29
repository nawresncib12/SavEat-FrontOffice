import  {UPDATE_PROFILE_CARD} from "../actions/actionTypes"
import  {UPDATE_EMAIL} from "../actions/actionTypes"
import { ADD_TO_CART } from "./actionTypes"
import { REMOVE_FROM_CART } from "./actionTypes"
import { INCREMENT_QUANTITY  } from "./actionTypes"

export function update_Profile_Card(data){ 
    return {
        type : UPDATE_PROFILE_CARD,         
        data
    }
}
export function update_email(data){ 
    return {
        type : UPDATE_EMAIL,         
        data
    }
}
export function addToCart(productInfo){ 
    return {
        type :ADD_TO_CART,
        productInfo,
        
    }
}

export function removeFromCart(id){ 
    return {
        type : REMOVE_FROM_CART,
        id 
        
    }
}
export function increment_quantity(id,step){ 
    return {
        type : INCREMENT_QUANTITY,
        id ,
        step
        
    }
}