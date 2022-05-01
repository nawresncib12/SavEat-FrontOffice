import {createStore,combineReducers} from "redux"
// import {counterReducer} from "../reducers/counterReducer"
import {profileCardReducer} from "../reducers/profileCardReducer"
 
const rootReducer = combineReducers({
    profileCardReducer,
    // counterReducer
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