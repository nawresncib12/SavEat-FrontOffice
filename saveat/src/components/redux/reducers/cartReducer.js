
import { ADD_TO_CART } from "../actions/actionTypes"
import { REMOVE_FROM_CART } from "../actions/actionTypes"

const myState = []



export  function cartReducer( state=myState ,action){
switch (action.type){
    case ADD_TO_CART:{
        let tmp = [...state] 
        console.log(action.productInfo);
      tmp.push(action.productInfo)
        console.log(state)
        return tmp
        }
    case REMOVE_FROM_CART : {
        console.log(state)
        let tmp= [...state] 
        tmp.filter(e=> {  console.log(e.id+"===" +action.id) ; return e.id===action.id})
        console.log("tmp",tmp)

         return tmp
    } 


    default : {
        if(!state) return []
        return state;
    }
}
}






// export  function profileCardReducer(state = myState,action){
// console.log("ddd",action.data)
// switch (action.type){
//     case UPDATE_PROFILE_CARD:{
//         return {
//             firstName : action.data.firstName,
//             lastName : action.data.lastName,
//             birthday:action.data.birthday,
//             address:action.data.address,
//             email:action.data.email,
//             phone:action.data.phone
//         }
//     }      
//     case UPDATE_EMAIL:{
//         console.log(action)
//         return {
//         ...state,
//         email : action.data
//         }
//     }      
//     default : {
//      return myState;
//      }     
//     }
// }