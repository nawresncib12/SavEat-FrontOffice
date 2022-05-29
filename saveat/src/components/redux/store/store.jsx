import {createStore,combineReducers} from "redux"
import {profileCardReducer} from "../reducers/profileCardReducer"
import {cartReducer} from "../reducers/cartReducer"
 
const rootReducer = combineReducers({
    profileCardReducer,
    cartReducer,
}) 

// function saveState(state){
//     console.log(state);
//     localStorage.setItem('cart',JSON.stringify(state))
// }


const store = createStore(rootReducer)

// store.subscribe(()=>{
//     console.log(store.getState().cartReducer);
//     saveState(store.getState().profileCardReducer)
// })


export default store 