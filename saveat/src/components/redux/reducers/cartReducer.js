
import { ADD_TO_CART } from "../actions/actionTypes"

const myState = {
    box_name : "",
    id : "",
    price:0,
    quantity:0

}



export  function cartReducer( state=myState ,action){
let tmp=[]
switch (action.type){
    case ADD_TO_CART:{
        console.log(state);
    //    var pos =  state.findIndex((el)=> { console.log(el.product.name); return el.product.name=== action.productInfo.name})
    //     if(pos!=-1) {
    //         console.log("includes");
    //          tmp= [...state] 
    //          tmp[pos].quantity = (tmp[pos].quantity)*1+ action.quantity*1
    //     console.log(tmp);

           
    //         return tmp
    //     }           
       
    //     else
    //     return[
    //             ...state,
    //             {
    //                 product:action.productInfo,
    //                 quantity:action.quantity
    //             }
    //         ]
        
        }
    // case REMOVE_FROM_CART : {
    //     tmp= [...state] 
    //     console.log(tmp,"tmp");
    //     console.log(action.name,"name");
    //       if(tmp.findIndex((el)=> { console.log(el.product.name,"el name"); return el.product.name === action.name})!= -1)
    //       tmp.splice(tmp.findIndex((el)=> {  return el.product.name=== action.name}),1)
    //     return tmp
    // } 


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