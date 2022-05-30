
import { ADD_TO_CART } from "../actions/actionTypes"
import { REMOVE_FROM_CART } from "../actions/actionTypes"
import { INCREMENT_QUANTITY } from "../actions/actionTypes"

const myState = []



export  function cartReducer( state=myState ,action){
switch (action.type){
    case ADD_TO_CART:{
        let tmp = [...state] 
      tmp.push(action.productInfo)
        return tmp
        }
    case REMOVE_FROM_CART : {
        let tmp= [...state] 
        tmp= tmp.filter(e=>   e.id!==action.id)

         return tmp
    } 
    case INCREMENT_QUANTITY: {
        let tmp= [...state] 
        let i= tmp.findIndex(e=>   e.id===action.id)
        tmp[i].quantity+= action.step*1
        return tmp
    } 


    default : {
        if(!state) return []
        return state;
    }
}
}






